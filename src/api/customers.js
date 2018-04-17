import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'

class Customers {
    async getCustomers(token) {
        let url = `${config.urls.base}customers?limit=3&column=phone&value=`
        return await y2wHTTPClient.get(url, null, token)
    }
    async createCustomer(obj, token) {
        let url = `${config.urls.base}customers`
        return await y2wHTTPClient.post(url, obj, token)
    }
    async getOneCustomers(id, token) {
        let url = `${config.urls.base}customers/${id}`
        return await y2wHTTPClient.get(url, null, token)
    }
    async updateCustomer(id, obj, token) {
        let url = `${config.urls.base}customers/${id}`
        return await y2wHTTPClient.patch(url, obj, token)
    }
    async deleteCustomers(id, token) {
        let url = `${config.urls.base}customers/${id}`
        return await y2wHTTPClient.delete(url, null, token)
    }
    async allSearchCustomers(value, token) {
        let url = `${config.urls.base}customers/search?v=${value}`
        return await y2wHTTPClient.get(url, null, token)
    }
}
export default new Customers()