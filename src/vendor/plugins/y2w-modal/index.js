import Vue from 'vue'
import y2wModal from './y2w-modal.vue'
const Y2WModalComponent = Vue.extend(y2wModal)

const defaults = {
    type: 'alert',
    load: true,
    title: '提示',
    content: '',
    placeholder: '请输入',
    okTitle: '确定'
}

class Modal {
    constructor () {
        this.options = Object.assign({}, defaults)
        var component = new Y2WModalComponent({
            propsData: {
                options: this.options
            }
        })
        var mount = document.createElement('div')
        document.body.appendChild(mount)
        component.$mount(mount)
        this.component = component
    }
    alert (options = {}) {
        if (typeof options === 'string') {
            options = {
                content: options
            }
        }
        options.type = 'alert'
        options.load = false
        return this.show(options)
    }
    confirm (options = {}) {
        options.type = 'confirm'
        options.load = true
        return this.show(options)
    }
    input (options = {}) {
        options.type = 'input'
        options.load = true
        return this.show(options)
    }
    inputImage (options = {}) {
        options.type = 'input-image'
        options.load = true
        return this.show(options)
    }
    show (options) {
        Object.assign(this.options, defaults, options)
        return new Promise((resolve, reject) => {
            this.component.show()
            if (this.options.load) {
                this.component.ok = () => {
                    resolve(this.options)
                }
            }
        })
    }
    close () {
        this.component.close()
    }
}

function install (Vue) {
    Vue.prototype.$y2wModal = new Modal()
}

export default install
