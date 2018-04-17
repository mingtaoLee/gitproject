import talent from '../api/talent'
import storage from '../storage/storage'
import state from '../state/index'
import user from './users'
import md5 from 'md5'

class Talents {
    constructor() {
        this.list = []
    }
    async getTalents(column, value) {
        let token = user.getCurrentUser().token
        return await talent.getTalents(column, value, token)
    }
    async createTalent(obj) {
        let token = user.getCurrentUser().token
        return await talent.createTalent(obj, token)
    }
    async updateTalent(id, obj) {
        let token = user.getCurrentUser().token
        return await talent.updateTalent(id, obj, token)
    }
    async deleteTalent(userId) {
        let token = user.getCurrentUser().token
        return await talent.deleteTalent(userId, token)
    }
    async allSearchTalents(value) {
        let token = user.getCurrentUser().token
        let result = await talent.allSearchTalents(value, token)
        return result.data.list
    }
    async getList(column, value) {
        // if(!this.list.length) {
        //     let res = await this.getUsers()
        //     this.list = res.data
        // }
        let res = await this.getTalents(column, value)
        this.list = res.data
        return this.list
    }
}
export default new Talents()
