import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class Proxyers {
    async getProxyers(token) {
        let url = `${config.urls.base}proxyers?limit=20&column=phone&value=`
        return await y2wHTTPClient.get(url, null, token)
    }
    async createProxyer(obj, token) {
        let url = `${config.urls.base}proxyers`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async updateProxyer(id, obj, token) {
        let url = `${config.urls.base}proxyers/${id}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
    async deleteProxyers(userId, token) {
        let url = `${config.urls.base}proxyers/${userId}`
        return await y2wHTTPClient.delete(url, null, token)
    }
    async allSearchProxyers(value, token) {
        let url = `${config.urls.base}proxyers/search?v=${value}`
        return await y2wHTTPClient.get(url, null, token)
    }
}
export default new Proxyers()