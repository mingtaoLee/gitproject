<template>
  <Date-picker v-model="data" type="date" :placeholder="placeholder" format="yyyy-MM-dd"></Date-picker>
</template>

<script>
  export default{
      props:["value","placeholder"],
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
