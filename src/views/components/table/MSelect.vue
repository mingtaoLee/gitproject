<template>
  <Select v-model="data" clearable :placeholder="placeholder">
    <Option v-for="item in items" :value="item.value" :key="item.value">{{ item.value }}</Option>
  </Select>
</template>

<script>
  export default{
    props:["items","value", "placeholder"],
      model:{
        prop: 'value',
        event: 'change'
      },
      computed:{
        data: {
          get () {
            return this.value
          }, 
          set (value) {
            this.$emit('change', value)
          } 
         }
       
       
      }  
  }
</script>
