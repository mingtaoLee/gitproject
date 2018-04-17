class Storage {
    getItem (key) {
        return localStorage.getItem(key)
    }

    setItem (key, value) {
        localStorage.setItem(key, value)
    }

    removeItem (key) {
        localStorage.removeItem(key)
    }

    getObj (key) {
        let item = this.getItem(key)
        if (item && (item.indexOf('{') === 0 || item.indexOf('[') === 0)) {
            try {
                return JSON.parse(item)
            } catch (error) {}
        }
        return item
    }

    setObj (key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value)
        }
        this.setItem(key, value)
    }
}

export default new Storage()
