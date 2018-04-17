var Users = function (state) {
    this.state = state
    this.state.users = []
}

Users.prototype.getByUID = function (id) {
    var root = this.getRoot()
    return root.find(user => user.id === id)
}

Users.prototype.clear = function () {
    this.state.getStore().commit('users_clear')
}

Users.prototype.set = function (user) {
    this.state.getStore().commit('users_set', user)
}
Users.prototype.setList = function (users) {
    this.state.getStore().commit('users_setList', users)
}
Users.prototype.getRoot = function () {
    return this.state.getStore().getters['users_root']
}

Users.prototype.initVuex = function (getters, mutations, actions) {
    getters['users_root'] = function (state) {
        console.log(11)
        if (!state.users) {
            state.users = []
        }
        return state.users
    }

    mutations['users_clear'] = function (state) {
        state.users = []
    }

    mutations['users_set'] = function (state, user) {
        if (!state.users) {
            state.users = []
        }
        let oldUser = state.users.find(item => item.key === user.key)
        if (oldUser) {
            for (var index in user) {
                oldUser[index] = user[index]
            }
        } else {
            state.users.push(user)
        }
    }
    mutations['users_setList'] = function (state, users) {
        if (!state.users) {
            state.users = []
        }
        users.forEach(user => {
            let oldUser = state.users.find(item => item.key === user.key)
            if (oldUser) {
                for (var index in user) {
                    oldUser[index] = user[index]
                }
            } else {
                state.users.push(user)
            }
        })
    }
}

export default Users
