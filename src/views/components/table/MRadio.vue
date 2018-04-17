<template>
  <RadioGroup v-model="data">
    <Radio v-for="item in items" :label="item.value" :key="item.value"></Radio>
  </RadioGroup>
</template>

<script>
  export default{
      props:["items","value"],
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
