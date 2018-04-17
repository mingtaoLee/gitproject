<template>
  <Modal class="container" v-model="isShow" width="360">
    <p slot="header" style="color:#314E8B;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>{{options.title}}</span>
    </p>

    <div style="text-align:center">
      <Input v-if="options.type == 'input'" @on-enter="onOk" v-focus v-model="options.content" :placeholder="options.placeholder"></Input>
      <uploader v-else-if="options.type == 'input-image'" :options="options" @on-select-image="onSelectImage"></uploader>
      <p v-else>{{options.content}}</p>
    </div>

    <div slot="footer">
      <Button style="background: #314E8B;border-color:#314E8B;" type="info" size="large" long :loading="isLoading" @click="onOk"
        :disabled="!canOK">{{options.okTitle}}</Button>
    </div>
  </Modal>
</template>
<script>
  import uploader from './uploader'
  export default {
      name: 'y2w-modal',
      props: ['options'],
      data () {
          return {
              isShow: false,
              isLoading: false
          }
      },
      computed: {
          canOK () {
              return !((this.options.type === 'input-image' || this.options.type === 'input') && !this.options.content)
          }
      },
      methods: {
          onSelectImage (file, url) {
              this.options.file = file
              this.options.content = url
          },
          show () {
              this.ok = null
              this.isShow = true
              this.isLoading = false
          },
          close () {
              this.isShow = false
              this.isLoading = false
          },
          onOk () {
              if (!this.canOK) {
                  return
              }
              if (this.ok) {
                  this.isLoading = true
                  this.ok(() => {
                      this.isShow = false
                  })
              } else {
                  this.isShow = false
              }
          }
      },
      directives: {
          focus (el) {
              setTimeout(function () {
                  el.querySelector('input').focus()
              })
          }
      },
      components: {
          uploader
      }
  }
</script>
<style scoped>
  .container {
    position: absolute;
    z-index: 1009;
  }

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
