import jobTalents from '../api/jobTalents'
import user from './users'

class JobTalents {
    constructor() {
        this.list = []
    }
    async getJobTalents(id) {
        let token = user.getCurrentUser().token
        return await jobTalents.getJobTalents(id, token)
    }
    async createJobTalent(id, obj) {
        let token = user.getCurrentUser().token
        return await jobTalents.createJobTalent(id, obj, token)
    }
    async updateJobTalent(id, obj) {
        let token = user.getCurrentUser().token
        return await jobTalents.updateJobTalent(id, obj, token)
    }
    async getList(id) {
        // if(!this.list.length) {
        //     let res = await this.getUsers()
        //     this.list = res.data
        // }
        let res = await this.getJobTalents(id)
        this.list = res.data
        return this.list
    }
}
export default new JobTalents()
