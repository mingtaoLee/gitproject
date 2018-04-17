var Talents = function (state) {
    this.state = state
    this.state.talents = []
}

Talents.prototype.getByUID = function (id) {
    var root = this.getRoot()
    return root.find(talent => talent.id === id)
}

Talents.prototype.clear = function () {
    this.state.getStore().commit('talents_clear')
}

Talents.prototype.set = function (talent) {
    this.state.getStore().commit('talents_set', talent)
}
Talents.prototype.setList = function (talents) {
    this.state.getStore().commit('talents_setList', talents)
}
Talents.prototype.getRoot = function () {
    console.log(this.state.getStore().getters)
    return this.state.getStore().getters['talents_root']
}

Talents.prototype.initVuex = function (getters, mutations, actions) {
    getters['talents_root'] = function (state) {
        if (!state.talents) {
            state.talents = []
        }
        return state.talents
    }

    mutations['talents_clear'] = function (state) {
        state.talents = []
    }

    mutations['talents_set'] = function (state, talent) {
        if (!state.talents) {
            state.talents = []
        }
        let oldTalent = state.talents.find(item => item.key === talent.key)
        if (oldTalent) {
            for (var index in talent) {
                oldTalent[index] = talent[index]
            }
        } else {
            state.talents.push(talent)
        }
    }
    mutations['talents_setList'] = function (state, talents) {
        if (!state.talents) {
            state.talents = []
        }
        talents.forEach(talent => {
            let oldTalent = state.talents.find(item => item.key === talent.key)
            if (oldTalent) {
                for (var index in talent) {
                    oldTalent[index] = talent[index]
                }
            } else {
                state.talents.push(talent)
            }
        })
    }
}

export default Talents
