<template>
<div>
      <form-template ref="form" :items="items" @uploadImg="uploadImg" @uploapAvatar="uploapAvatar" @submit="submit"></form-template>
</div>
</template>

<script>
import bus from "@/libs/bus";
import util from "@/libs/util";
import config from "@/config/config";
import formTemplate from "@/views/components/table/index";
import dataTemplate from "@/views/template/index";
export default {
  data() {
    return {
      items: [],
      imgItmes: [],
      uploadImgObj: null,
      type: ""
    };
  },
  computed: {
    columns() {
      return dataTemplate[this.type].columns;
    },
    isAdd() {
      return !this.$route.query.id;
    }
  },
  created() {
    this.type = this.$route.query.type;
    this.loadData();
  },
  methods: {
    async uploadImg(imgDataUrl) {
      // try {
      //   let obj = {};
      //   let imgData = util.base64ToFileSync(imgDataUrl, "logo.png");
      //   let data = await dataTemplate[this.type].uploadImg(imgData);
      //   if (data) {
      //     this.uploadImgObj = data;
      //     this.$Message.success("图片上传成功");
      //   }
      // } catch (error) {
      //   this.$Message.error(error.message);
      // }
    },
    // async uploadImg(files) {
    //   if (files) {
    //     try {
    //       for (var key in files) {
    //         let data = await dataTemplate[this.type].uploadImg(files[key]);
    //         this.imgItmes.push(data);
    //       }
    //     } catch (error) {
    //       this.$Message.error(error.message);
    //     }
    //   }
    // },
    async uploapAvatar(imgDataUrl) {
      try {
        let obj = {};
        let imgData = util.base64ToFileSync(imgDataUrl, "logo.png");
        let data = await dataTemplate[this.type].uploadImg(imgData);
        if (data) {
          this.uploadImgObj = data;
          this.$Message.success("图片上传成功");
        }
      } catch (error) {
        this.$Message.error(error.message);
      }
    },
    async loadData() {
      let id = this.$route.query.id;
      let data = id ? await dataTemplate[this.type].get(id) : {};
      let columns = dataTemplate[this.type].columns;
      let arr = this.format(data, columns);
      arr.forEach(item => {
        if (item.formatter && item.formatter.input) {
          item.value = item.formatter.input(item.value);
        }
      });
      this.items = arr;
    },
    async submit(items) {
      //对表单提交的数据进行解析
      let detailAddress = "";
      let data = items.reduce((data, item) => {
        if (item.type === "avatar" && this.imgItmes) {
          item.value = this.uploadImgObj;
        }
        let value = item.value;
        if (item.formatter && item.formatter.output) {
          value = item.formatter.output(value);
        }
        if (item.key === "detailAddress" && value) {
          detailAddress = value;
        }
        if (item.key !== "detailAddress") {
          data[item.key] = value;
        }
        return data;
      }, {});
      if (data.hasOwnProperty("address") && detailAddress) {
        data["address"] = data["address"] + detailAddress;
      }
      try {
        //  对表单提交的数据进行验证
        for (var key in data) {
          let item = items.find(item => item.key === key);
          let value = data[key];
          if (
            (!item.require && value && item.validate) ||
            (item.require && item.validate)
          ) {
            item.validate(value);
          }
        }
        //请求接口
        if (this.isAdd) {
          let result = await dataTemplate[this.type].add(data);
          console.log(result);
        } else {
          let id = this.$route.query.id;
          let res = await dataTemplate[this.type].update(id, data);
          console.log(res);
        }
        bus.$emit("closePage", null, this.$route.name);
        this.$Message.success("成功");
      } catch (error) {
        this.$Message.error(error.message);
      }
    },
    //格式化传递的数据
    format(obj, columns) {
      let rowData = util.deepCopy(obj);
      if (this.isAdd) {
        return columns.filter(item => item.enableAdd === true).map(item => {
          return {
            ...item
          };
        });
      }
      return columns.filter(item => item.enableEdit === true).map(item => {
        return {
          ...item,
          value: rowData[item.key]
        };
      });
    }
  },
  components: {
    formTemplate
  }
};
</script>

