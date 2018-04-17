<template>
  <AutoComplete
        v-model="name"
        :data="names"
        @on-search="handleSearch"
        @on-select="handleSelect"
        :placeholder="placeholder"
        >
        </AutoComplete>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      list: []
    };
  },
  props: ["value", "placeholder"],

  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    names() {
      return this.list.map(item => item.name);
    },
    data: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  },
  methods: {
    async handleSearch(name) {
      try {
        this.list = await this.value.search(name);
      } catch (error) {
        this.$Message.error(error.message);
      }
    },
    handleSelect(value) {
      let item = this.list.find(item => item.name === value);
      this.value.value = item.id;
      //   this.$emit("handleSelect", value);
    }
  }
};
</script>
</script>

