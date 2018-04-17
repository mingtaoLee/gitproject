<template>
  <quill-editor v-model="data"
                :options="editorOption"
                ref="myQuillEditor"
        >
  </quill-editor>
</template>

<script>
import VueQuillEditor from "vue-quill-editor";
import Quill from "quill";
import { ImageImport } from "./textEditorModule/ImageImport.js";
import { ImageResize } from "./textEditorModule/ImageResize.js";
Quill.register("modules/imageImport", ImageImport);
Quill.register("modules/imageResize", ImageResize);

export default {
  data() {
    return {
      editorOption: {
        modules: {
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      }
    };
  },
  props: ["value"],
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    data: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  }
};
</script>