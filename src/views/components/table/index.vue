<template>
    <Form label-position="right" :label-width="150" style="width: 70%;padding:20px;">
      <template v-for="col in items">
        <template v-if="col.type === 'select'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-select :items="col.items" v-model="col.value" :placeholder="col.placeholder"></m-select>
            </FormItem>
        </template>
        <template v-if="col.type === 'text' || col.type === 'password'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-text v-model="col.value" :type="col.type" :placeholder="col.placeholder"></m-text>
              <div v-if="col.remark">
                {{col.remark}}
              </div>
            </FormItem>
        </template>
        <template v-if="col.type === 'autoComplete'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-auto-complete :value="col" :placeholder="col.placeholder"></m-auto-complete>
            </FormItem>
        </template>
        <template v-if="col.type === 'date'">
           <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-date-select  v-model="col.value" :placeholder="col.placeholder"></m-date-select>
            </FormItem>
        </template>
        <template v-if="col.type === 'address'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-address-select :items="col.items" v-model="col.value" :level="col.level"></m-address-select>
            </FormItem>
        </template>
        <template v-if="col.type === 'radio'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-radio :items="col.items" v-model="col.value"></m-radio>
            </FormItem>
        </template>
        <template v-if="col.category === 'editor'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-text-editor v-model="col.value"></m-text-editor>
            </FormItem>
        </template>
        <template v-if="col.type === 'img'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <m-img-select ref="imgSelect" @uploadImg="uploadImg"></m-img-select>
            </FormItem>
        </template>
        <template v-if="col.type === 'avatar'">
            <FormItem :label="col.require ? col.title : col.title + label" :key="col.key">
              <upload-avatar ref="imgSelect" @uploapAvatar="uploapAvatar"></upload-avatar>
            </FormItem>
        </template>
      </template>
      <FormItem>
            <Button type="primary" @click="handleSubmit()">提交</Button>
        </FormItem>
    </Form>
</template>

<script>
import MText from "./MText.vue";
import MTextEditor from "./MTextEditor.vue";
import MSelect from "./MSelect.vue";
import MDateSelect from "./MDateSelect.vue";
import MAddressSelect from "./MAddressSelect.vue";
import MRadio from "./MRadio.vue";
import MImgSelect from "./MImgSelect.vue";
import MAutoComplete from "./MAutoComplete";
import uploadAvatar from "./uploadAvatar.vue";
import state from "@/state/index";

export default {
  data() {
    return {
      allSearchList: []
    };
  },
  computed: {
    label() {
      return `(选填)`;
    }
  },
  methods: {
    // uploadImg(imgDataUrl) {
    //   this.$emit("uploadImg", imgDataUrl);
    // },
    // setImgList(items) {
    //   this.$refs.imgSelect.setImgList(items);
    // },
    setSearchList(items) {
      this.allSearchList = items;
    },
    handleSearch(keys, value) {
      this.$emit("handleSearch", keys, value);
    },
    uploadImg(files) {
      this.$emit("uploadImg", files);
    },
    uploapAvatar(imgDataUrl) {
      this.$emit("uploapAvatar", imgDataUrl);
    },
    handleSubmit() {
      this.$emit("submit", this.items);
    },
    handleSelect(value) {
      this.$emit("handleSelect", value);
    }
  },
  props: ["items"],
  components: {
    MSelect,
    MText,
    MDateSelect,
    MAddressSelect,
    MImgSelect,
    MRadio,
    MTextEditor,
    MAutoComplete,
    uploadAvatar
  }
};
</script>
