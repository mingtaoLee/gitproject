<template>
  <m-select :items="items" v-model="value" :placeholder="placeholder"></m-select>
</template>
<script>
import MSelect from "../../table/MSelect.vue";
export default {
  props: ["items", "value", "placeholder"],
  components: {
    MSelect
  }
};
</script>

