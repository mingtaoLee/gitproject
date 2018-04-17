import users from '../api/users'
import storage from '../storage/storage'
import state from '../state/index'
import md5 from 'md5'

class Users {
    constructor() {
        this.list = []
    }
    async register(name, account, password, email, phone) {
        let params = {
            name: name,
            account: account,
            password: md5(password),
            email: email,
            phone: phone
        }
        return await users.register(params)
    }
    async signin(account, password) {
        let params = {
            account: account,
            password: md5(password)
        }
        let res = await users.signin(params)
        storage.setItem('currentUser', JSON.stringify(res.data))
        this.getCurrentUser()
    }
    async addUsers(obj) {
        obj.password = md5(obj.password)
        let token = this.getCurrentUser().token
        return await users.addUsers(obj, token)
    }
    async updateUser(userId, obj) {
        let token = this.getCurrentUser().token
        return await users.updateUser(userId, obj, token)
    }
    async getUsers() {
        let token = this.getCurrentUser().token
        return await users.getUsers(token)
    }
    async getOneUser() {
        let token = this.getCurrentUser().token
        let userId = this.getCurrentUser().id
        return await users.getOneUser(userId, token)
    }
    async getList() {
        // if(!this.list.length) {
        //     let res = await this.getUsers()
        //     this.list = res.data
        // }
        let res = await this.getUsers()
        this.list = res.data
        return this.list
    }
    async deleteUser(userId) {
        let token = this.getCurrentUser().token
        return await users.deleteUser(userId, token)
    }
    getCurrentUser() {
        let currentUser = state.getStore().getters.getCurrentUser
        if (currentUser) {
            return currentUser
        }
        let foo = storage.getItem('currentUser')
        if (foo) {
            try {
                currentUser = JSON.parse(foo)
                // state.currentUser.set(currentUser)
                state.getStore().commit('setCurrentUser', currentUser);
                return this.getCurrentUser()
            } catch (e) {

            }
        }
        this.logout()
    }
    logout() {
        console.log('退出登录')
    }
}
export default new Users()
