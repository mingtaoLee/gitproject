import proxyers from '../api/proxyers'
import user from './users'

class Proxyers {
    constructor() {
        this.list = []
    }
    async getProxyers() {
        let token = user.getCurrentUser().token
        return await proxyers.getProxyers(token)
    }
    async createProxyer(obj) {
        let token = user.getCurrentUser().token
        return await proxyers.createProxyer(obj, token)
    }
    async updateProxyer(id, obj) {
        let token = user.getCurrentUser().token
        return await proxyers.updateProxyer(id, obj, token)
    }
    async deleteProxyers(userId) {
        let token = user.getCurrentUser().token
        return await proxyers.deleteProxyers(userId, token)
    }
    async getList() {
        let res = await this.getProxyers()
        this.list = res.data
        return this.list
    }
    async allSearchProxyers(value) {
        let token = user.getCurrentUser().token
        let result = await proxyers.allSearchProxyers(value, token)
        return result.data.list
    }
}
export default new Proxyers()
