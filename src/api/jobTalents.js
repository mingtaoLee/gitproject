import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class JobTalents {
    async getJobTalents(id, token) {
        let url = `${config.urls.base}jobs/${id}/jobTalents?limit=20&column=phone&value=`
        return await y2wHTTPClient.get(url, null, token)
    }
    async createJobTalent(id, obj, token) {
        let url = `${config.urls.base}jobs/${id}/jobTalents`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async updateJobTalent(id, obj, token) {
        let url = `${config.urls.base}jobTalents/${id}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
}
export default new JobTalents()