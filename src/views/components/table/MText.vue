<template>
  <Input v-model="data" :placeholder="placeholder" size="default" :type="type"></Input>
</template>

<script>
export default {
  props: ["value", "type", "placeholder"],

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
