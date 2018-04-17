import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class Talent {
    async getTalents(column, value, token) {
        let url = `${config.urls.base}talents?limit=20&column=${column}&value=${value}`
        return await y2wHTTPClient.get(url, null, token)
    }
    async createTalent(obj, token) {
        let url = `${config.urls.base}talents`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async updateTalent(id, obj, token) {
        let url = `${config.urls.base}talents/${id}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
    async deleteTalent(userId, token) {
        let url = `${config.urls.base}talents/${userId}`
        return await y2wHTTPClient.delete(url, null, token)
    }
    async allSearchTalents(value, token) {
        let url = `${config.urls.base}talents/search?v=${value}`
        return await y2wHTTPClient.get(url, null, token)
    }
}
export default new Talent()