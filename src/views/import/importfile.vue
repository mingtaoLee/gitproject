<style lang="less">
@import "./importfile.less";
</style>
<style>
.importfile .ivu-steps-vertical .ivu-steps-main .ivu-steps-content {
  margin: 15px 0;
}
.ivu-table td.failReason {
  color: #f00;
}
</style>

<template>
    <div class="importfile">
        <Steps :current="current" direction="vertical">
            <Step title="上传导入">
               <div class="height-100px">
                   <Row type="flex" align="middle" class="height-100">
                                <div style="display: block;width: 100%;margin:15px 0;">
                                    <Button type="ghost" icon="ios-cloud-upload-outline" @click="$refs.fileInput.click()" :disabled="!uploadBtnEnabled" style="background: #2D8CF0;color: #fff;border: 0;">上传文件</Button>
                                   <input ref="fileInput" @change="onChooseFile" type="file" 
                                   style="display: none;background: #2D8CF0;color: #fff;border: 0;">
                                   <Button type="ghost" size="large" @click="exportExcel" style="margin-left: 20px;">下载模板</Button>
                                </div>
                    </Row>
                </div>
            </Step>
            <Step title="解析Excel" content="解析文件">
            </Step>
            <Step title="正在导入数据">
                <Row v-show="faliTable2excelData.length > 0">
                    <Row class="importCom">
                        <Col span="12">
                            <Progress :percent="percent"></Progress>
                        </Col>
                        <Col span="8">
                          <span>上传总数：{{parsedData.length}}, 成功条数：{{uploadSuccessData}}, 失败条数：{{uploadFailData}}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="22">
                            <Table :columns="failTableColumn" :data="faliTable2excelData" size="small" ref="tableFailExcel"></Table>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div class="exportFailData">
                                <a id="hrefToExportTable" style="postion: absolute;left: -10px;top: -10px;width: 0px;height: 0px;"></a>
                                <Button type="ghost" size="large" @click="exportFailExcel">导出失败数据</Button>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Step>
            <Step title="完成导入" content="数据已经导入成功">
            </Step>
        </Steps>
        <Button type="ghost" size="large" @click="resetUpload" class="resetBtn">重新导入</Button>
        <Table :columns="downLoadTableColumn" size="small" ref="tableExcel" style="display: none"></Table>
    </div>
</template>

<script>
import xlsx from "@/libs/xlsx";
import dataTemplate from "@/views/template/index";
import table2excel from "@/libs/table2excel.js";
export default {
  data() {
    return {
      faliTable2excelData: [],
      current: 0,
      parsedData: [],

      uploadFailData: 0,
      uploadSuccessData: 0,
      count: 0
    };
  },
  computed: {
    percent() {
      return this.parsedData.length === 0
        ? 0
        : this.count / this.parsedData.length * 100;
    },
    uploadBtnEnabled() {
      return this.current === 0;
    },
    downLoadTableColumn() {
      return dataTemplate[this.$route.query.type].columns.filter(
        item => item.enableAdd === true && !item.noShowExcelTemplate
      );
    },
    failTableColumn() {
      return dataTemplate[this.$route.query.type].columns.filter(
        item => item.isShowImportFail === true
      );
    }
  },
  methods: {
    async onChooseFile(event) {
      this.current = 1;
      let files = event.target.files;
      files = Array.prototype.slice.call(files);
      this.$refs.fileInput.value = null;
      if (files.length > 0) {
        let result = await xlsx.parseFile(files.pop());
        let columns = dataTemplate[this.$route.query.type].columns;
        this.current = 2;
        //对文件导入之后返回的数据解析成请求服务端的数据
        if (result[0].data.length > 0) {
          let data = result[0].data;
          let items = data.map(o => this.format(o, columns));
          this.parsedData = items;
          this.current = 3;
          //开始请求接口
          for (let item of items) {
            try {
              this.validate(item, columns);
              let result = await dataTemplate[this.$route.query.type].add(item);
              console.log(result);
            } catch (error) {
              this.faliTable2excelData.push({
                ...item,
                reason: error.message
              });
            }
            this.count++;
          }
        }
      }
    },
    format(data, columns) {
      let obj = {};
      for (let key in data) {
        let item = columns.find(item => item.title === key);
        obj[item.key] = data[key];
      }
      return obj;
    },
    validate(data, columns) {
      for (let item of columns) {
        if (
          (item.require && item.validate) ||
          (!item.require && data[item.key] && item.validate)
        ) {
          item.validate(data[item.key]);
        }
      }
    },
    resetUpload() {
      this.faliTable2excelData.splice(0);
      this.parsedData.splice(0);
      this.current = 0;
      this.count = 0;
    },
    exportExcel() {
      table2excel.transform(this.$refs.tableExcel, "hrefToExportTable", "");
    },
    exportFailExcel() {
      table2excel.transform(this.$refs.tableFailExcel, "hrefToExportTable", "");
    }
  }
};
</script>

<style>

</style>
