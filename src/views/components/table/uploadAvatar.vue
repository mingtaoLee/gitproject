<style scoped>

</style>
<template name="chooseAvatar">
    <div>
        <my-upload @crop-success="cropSuccess"
                   v-model="isShowChoose"
                   :width="60"
                   :height="60"
        ></my-upload>
    </div>
</template>
<script>
import Vue from "vue";
import myUpload from "vue-image-crop-upload";
export default {
  data() {
    return {
      isShowChoose: false
    };
  },
  methods: {
    toggleShow() {
      this.isShowChoose = !this.isShowChoose;
    },
    cropSuccess(imgDataUrl) {
      this.$emit("upLoadAvatar", imgDataUrl);
    }
  },
  components: {
    myUpload
  }
};
</script>
