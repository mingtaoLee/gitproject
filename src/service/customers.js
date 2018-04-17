import customers from '../api/customers'
import user from './users'

class Customers {
    constructor() {
        this.list = []
    }
    async getCustomers() {
        let token = user.getCurrentUser().token
        return await customers.getCustomers(token)
    }
    async createCustomer(obj) {
        let token = user.getCurrentUser().token
        return await customers.createCustomer(obj, token)
    }
    async getOneCustomers(id) {
        let token = user.getCurrentUser().token
        return await customers.getOneCustomers(id, token)
    }
    async updateCustomer(id, obj) {
        let token = user.getCurrentUser().token
        return await customers.updateCustomer(id, obj, token)
    }
    async deleteCustomers(id) {
        let token = user.getCurrentUser().token
        return await customers.deleteCustomers(id, token)
    }
    async getList() {
        // if(!this.list.length) {
        //     let res = await this.getUsers()
        //     this.list = res.data
        // }
        let res = await this.getCustomers()
        this.list = res.data
        return this.list
    }
    async allSearchCustomers(value) {
        let token = user.getCurrentUser().token
        let result = await customers.allSearchCustomers(value, token)
        return result.data.list
    }
}
export default new Customers()