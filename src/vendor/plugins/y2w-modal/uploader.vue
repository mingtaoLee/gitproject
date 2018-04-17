<template>
    <div class="content-image" @drop.prevent="onDrop" @click="click">
        <img v-if="options.content" :src="options.content">
        <div v-else>
            <input ref="input" @change="onInputChange" type="file" style="display: none">
            <Icon type="ios-cloud-upload" size="52" style="color: #2d8cf0"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'uploader',
        props: ['options'],
        data() {
            return {}
        },
        computed: {},
        methods: {
            click() {
                if (this.options.content) {
                    return
                }
                this.$refs.input.click()
            },
            onInputChange(event) {
                let files = Array.from(event.target.files || 1);
                if (files) {
                    let imageFile = files.find(file => file.type.includes('image'))
                    this.$refs.input.value = null;

                    if (imageFile) {
                        this.getDataUrl(imageFile).then(url => this.onSelect(imageFile, url))
                    }
                }
            },
            onDrop(e) {
                let imageFile = Array.from(e.dataTransfer.files).find(file => file.type.includes('image'))
                if (!imageFile) {
                    return
                }

                this.getDataUrl(imageFile).then(url => this.onSelect(imageFile, url))
            },
            getDataUrl(file) {
                return new Promise((resolve, reject) => {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        resolve(e.target.result)
                    }
                    reader.onerror = reject
                    reader.readAsDataURL(file)
                })
            },
            onSelect(imageFile, url) {
                this.$emit('on-select-image', imageFile, url)
            }
        }
    };
</script>
<style scoped>
    .content-image {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid #e3e8ee;
        cursor: pointer;
    }

    .content-image img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>
