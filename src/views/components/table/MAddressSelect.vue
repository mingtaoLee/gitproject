<template>
  <al-cascader v-model="data" :level="level"/>
</template>

<script>
  export default{
    props:["value", "level"],
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
