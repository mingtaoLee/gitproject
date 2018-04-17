
<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <div>
        <Row type="flex" justify="end" class-name="buttomBox">
            <Col span="12" class-name="deleteChoose">
                <Button @click="deleteChoose">删除所选</Button>
            </Col>
            <Col span="12" class-name="pageBox">
                <ButtonGroup>
                    <Button v-for="(pageVal,index) in witchPage" :class="{cruentPage:pageVal.cruent}" @click="pageAction(index,witchPage)" :key="index" :disabled="pageVal.clickStatu">{{pageVal.page}}</Button>
                </ButtonGroup>
            </Col>
        </Row>
    </div>
</template>

<script>

export default {
  
    data () {
        return {
            witchPage:[
                {page:'第一页',clickStatu:true},
                {page:'上一页',clickStatu:true},
                {page:'下一页',clickStatu:false}
            ],
        };
    },
    computed:{
    
    },
    props: {
        deleteChoose:{
            type: Function,
            default () {
                return () => {};
            }
        },
        pageAction:{
            type: Function,
            default (index,witchPage) {
                return () => {};
            }
        }
    },
    methods: {
       
    },
};
</script>

