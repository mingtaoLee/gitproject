import jobs from '../api/jobs'
import user from './users'

class Jobs {
    constructor() {
        this.list = []
    }
    async getJobs() {
        let token = user.getCurrentUser().token
        return await jobs.getJobs(token)
    }
    async createJob(obj) {
        let token = user.getCurrentUser().token
        return await jobs.createJob(obj, token)
    }
    async updateJob(id, obj) {
        let token = user.getCurrentUser().token
        return await jobs.updateJob(id, obj, token)
    }
    async getList() {
        // if(!this.list.length) {
        //     let res = await this.getUsers()
        //     this.list = res.data
        // }
        let res = await this.getJobs()
        this.list = res.data
        return this.list
    }
}
export default new Jobs()
