
<style lang="less">
@import "../styles/common.less";
</style>

<template>
    <div>
        <Row class="margin-top-10">
            <search-bar :search="search" :searchListArray="searchListArray"></search-bar>
            <Button type="primary" @click="importFile">导入数据</Button>
            <Button type="primary" @click="add">添加数据</Button>
            <Col span="24">
                <!-- <Card> -->
                    <Row :gutter="10">
                        <Col>
                            <div class="edittable-table-height-con">
                                <Table  
                                border 
                                :columns="columns" 
                                :data="tableData"
                                @on-selection-change="chcooseDelete"
                                @on-row-dblclick="edit"
                                ></Table>
                            </div>
                        </Col>
                    </Row>
                <!-- </Card> -->
            </Col>
        </Row>
        <turn-page :pageAction="pageAction" :deleteChoose="deleteChoose"></turn-page>
    </div>
</template>

<script>
import util from "@/libs/util";
import dataTemplate from "@/views/template/index";
import searchBar from "./components/searchBar/searchBar";
import turnPage from "./components/pageStatus/pageStatus";
export default {
  props: ["type"],
  data() {
    return {
      tableData: [],
      deleteChooseArray: [],
      searchListArray: [],
      lastPageColumn: [],
      initColumnVal: ""
    };
  },
  components: {
    searchBar,
    turnPage
  },
  computed: {
    columns() {
      return dataTemplate[this.type].columns.filter(
        item => item.enableRead === true
      );
    }
  },
  watch: {
    type() {
      this.tableData = [];
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      try {
        this.getSearchType();
        this.tableData = await dataTemplate[this.type].getList();
        console.log(this.tableData);
      } catch (error) {
        this.$Message.error(error.message);
      }
    },
    importFile() {
      this.$router.push({
        name: "import",
        query: { type: this.type }
      });
    },
    edit(obj) {
      this.$router.push({
        name: "editor",
        query: { type: this.type, id: obj.id }
      });
    },
    add() {
      this.$router.push({
        name: "editor",
        query: { type: this.type }
      });
    },
    getSearchType() {
      this.searchListArray = [];
      let _this = this;
      dataTemplate[this.type].columns.map(item => {
        if (item.isSearch) {
          let obj = {
            value: item.key,
            label: item.title
          };
          _this.searchListArray.push(obj);
        }
      });
    },
    async pageAction(index, obj) {
      //必须栏位column
      // obj.map((val,key)=>{
      //     obj[key].cruent = false
      // })
      // obj[index].cruent = true

      let value = "";
      if (parseInt(index) === 0) {
        value = "";
        // this.$store.state.lastPage = []
      } else if (parseInt(index) === 1) {
        this.lastPageColumn.pop();
        value = this.lastPageColumn[this.lastPageColumn.length - 1];
        if (!value) {
          value = "";
        }
      } else if (parseInt(index) === 2) {
        value = this.tableData[this.tableData.length - 1][this.initColumnVal];
      }
      this.tableData = await dataTemplate[this.type].getList(
        this.initColumnVal,
        value
      );
      obj.map((val, key) => {
        obj[key].clickStatu = false;
      });
      if (this.tableData.length < 6) {
        obj[2].clickStatu = true;
      }
      if (this.lastPageColumn.length <= 1 || value === "") {
        obj[0].clickStatu = true;
        obj[1].clickStatu = true;
      }
      if (parseInt(index) === 2) {
        this.lastPageColumn.push(this.tableData[0][this.initColumnVal]);
      }
    },
    async search(searchTypeVal = "", columnVal) {
      // let column = columnVal
      // let value = searchTypeVal
      this.tableData = await dataTemplate[this.type].getList(
        columnVal,
        searchTypeVal
      );
      // this.tableData = await dataTemplate[this.type].search(column,value)
    },
    chcooseDelete(val) {
      this.deleteChooseArray = val;
    },
    async deleteChoose() {
      if (this.deleteChooseArray.length !== 0) {
        this.deleteChooseArray.map(async item => {
          let userId = item.id;
          console.log(userId);
          let result = await dataTemplate[this.type].deletes(userId);
          this.tableData.forEach((value, index) => {
            if (value.id === userId) {
              this.tableData.splice(index, 1);
            }
          });
        });
        this.$Message.success("删除成功!");
        this.deleteChooseArray = [];
      }
    }
  },
  created() {
    this.loadData();
  }
};
</script>

