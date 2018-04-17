import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class Jobs {
    async getJobs(token) {
        let url = `${config.urls.base}jobs?limit=20&column=title&value=`
        return await y2wHTTPClient.get(url, null, token)
    }
    async createJob(obj, token) {
        let url = `${config.urls.base}jobs`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async updateJob(id, obj, token) {
        let url = `${config.urls.base}jobs/${id}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
}
export default new Jobs()