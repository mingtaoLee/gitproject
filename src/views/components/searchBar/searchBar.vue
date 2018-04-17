
<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <div class="searchBarBox">
        <Row class-name="serchBox">
            <Col class-name="searchBar">
                <Select v-model="columnVal" style="width:100px">
                    <Option v-for="item in searchListArray" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
                <Input v-model="searchValue" placeholder="请输入..." style="width: 300px"></Input>
                <Button type="primary" icon="ios-search" @click="search(searchValue,columnVal)">搜索</Button>
                <Button type="primary" @click="showStatu = !showStatu" v-show="showSearchMore">高级搜索<Icon type="chevron-up"></Icon></Button>
            </Col>
        </Row>
        <Row v-show="showStatu" class-name="searchType">
            <Col :span="24" class-name="searchMoreBox">
                <Row class-name="searchList" type="flex" align="middle" v-for="(val,index) in searchDataList" :key="index">
                    <ul class="searchRow">
                        <div class="searchTitle">{{val.searchName}}</div>
                        <li class="searchCol" :class="{active:searchDataList[index].chooseTpye == '单选'}" v-for="(typeVal,indexs) in searchDataList[index].searchType" @click="chooseStatu($event)" :key="indexs">{{typeVal}}</li>
                    </ul>
                </Row>
                <Row class-name="searchButton">
                    <Button type="primary" @click="searchMoreAction">搜索</Button>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
import dataTemplate from '@/views/template/index'

export default {
    components: {
    },
    data () {
        return {
            showStatu:false,
            showSearchMore:false,
            columnVal:'',
            searchValue:'',
        };
    },
    computed:{
    
    },
    props: {
        searchListArray:Array,
        searchDataList:Array,
        
        addTitle: String,
        searchMoreAction:{
            type: Function,
            default () {
                return () => {};
            }
        },
        chooseStatu:{
            type: Function,
            default ($event) {
                return () => {};
            }
        },
        deleteChoose:{
            type: Function,
            default () {
                return () => {};
            }
        },
        search:{
            type: Function,
            default () {
                return () => {};
            }
        },
    },
    methods:{
     
    }
};
</script>

