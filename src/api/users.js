import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class Users {
    async register(obj) {
        return await y2wHTTPClient.post(config.urls.base + 'users/register', obj)
    }
    async signin(obj) {
        return await y2wHTTPClient.post(config.urls.base + 'users/login', obj)
    }
    async addUsers(obj, token) {
        let url = `${config.urls.base}users`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async updateUser(userId, obj, token) {
        let url = `${config.urls.base}users/${userId}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
    async getUsers(token) {
        let url = `${config.urls.base}users?limit=20&column=phone&value=`
        return await y2wHTTPClient.get(url, null, token)
    }
    async getOneUser(userId, token) {
        let url = `${config.urls.base}users?${userId}`
        return await y2wHTTPClient.get(url, null, token)
    }
    async deleteUser(userId, token) {
        let url = `${config.urls.base}users/${userId}`
        return await y2wHTTPClient.delete(url, null, token)
    }
}
export default new Users()