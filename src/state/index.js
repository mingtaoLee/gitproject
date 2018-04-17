import Vuex from 'vuex'
import Cookies from 'js-cookie'
import Util from '../libs/util'
import Users from './users'
import Talents from './talents'
import createLogger from 'vuex/dist/logger'
import {routers, otherRouter, appRouter} from '../router';
const debug = process.env.NODE_ENV !== 'production'

var State = function () {
    this.data = {}
    this._list = []
    this.users = new Users(this)
    this.talents = new Talents(this)
    this._list.push(this.users)
    this._list.push(this.talents)
}

State.prototype.clear = function () {
    this._list.forEach(function (o) {
        o.clear()
    })
}
State.prototype.getStore = function () {
    if (this.store) {
        return this.store
    }

    var getters = {}
    var mutations = {}
    var actions = {}
    this._list.forEach(function (o) {
        o.initVuex(getters, mutations, actions)
    })

    this.store = new Vuex.Store({
        state: {
            currentUser: null,
            routers: [
                otherRouter,
                ...appRouter
            ],
            menuList: [],
            tagsList: [...otherRouter.children],
            pageOpenedList: [{
                title: '首页',
                path: '',
                name: 'home_index'
            }],
            lastPageName: '',
            currentPageName: '',
            currentPath: [
                {
                    title: '首页',
                    path: '',
                    name: 'home_index'
                }
            ],  // 面包屑数组
            openedSubmenuArr: [],  // 要展开的菜单数组
            menuTheme: '', // 主题
            theme: '',
            cachePage: [],
            lang: '',
            isFullScreen: false,
            pageArray:[],
            columnVal:'',
            dontCache: ['text-editor']  // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
        },
        getters: {
            getCurrentUser: state => {
                return state.currentUser
            },
            ...getters
        },
        mutations: {
            setTagsList (state, list) {
                state.tagsList.push(...list);
            },
            closePage (state, name) {
                state.cachePage.forEach((item, index) => {
                    if (item === name) {
                        state.cachePage.splice(index, 1);
                    }
                });
            },
            increateTag (state, tagObj) {
                if (!Util.oneOf(tagObj.name, state.dontCache)) {
                    state.cachePage.push(tagObj.name);
                    localStorage.cachePage = JSON.stringify(state.cachePage);
                }
                state.pageOpenedList.push(tagObj);
            },
            initCachepage (state) {
                if (localStorage.cachePage) {
                    state.cachePage = JSON.parse(localStorage.cachePage);
                }
            },
            removeTag (state, name) {
                state.pageOpenedList.map((item, index) => {
                    if (item.name === name) {
                        state.pageOpenedList.splice(index, 1);
                    }
                });
            },
            pageOpenedList (state, get) {
                let openedPage = state.pageOpenedList[get.index];
                if (get.argu) {
                    openedPage.argu = get.argu;
                }
                if (get.query) {
                    openedPage.query = get.query;
                }
                state.pageOpenedList.splice(get.index, 1, openedPage);
                localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
            },
            clearAllTags (state) {
                state.pageOpenedList.splice(1);
                router.push({
                    name: 'home_index'
                });
                state.cachePage.length = 0;
                localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
            },
            clearOtherTags (state, vm) {
                let currentName = vm.$route.name;
                let currentIndex = 0;
                state.pageOpenedList.forEach((item, index) => {
                    if (item.name === currentName) {
                        currentIndex = index;
                    }
                });
                if (currentIndex === 0) {
                    state.pageOpenedList.splice(1);
                } else {
                    state.pageOpenedList.splice(currentIndex + 1);
                    state.pageOpenedList.splice(1, currentIndex - 1);
                }
                let newCachepage = state.cachePage.filter(item => {
                    return item === currentName;
                });
                state.cachePage = newCachepage;
                localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
            },
            setOpenedList (state) {
                state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : [otherRouter.children[0]];
            },
            setCurrentPath (state, pathArr) {
                state.currentPath = pathArr;
            },
            setCurrentPageName (state, name) {
                if (state.currentPageName !== name) {
                    state.lastPageName = state.currentPageName
                    state.currentPageName = name;                    
                }
            },
            addOpenSubmenu (state, name) {
                let hasThisName = false;
                let isEmpty = false;
                if (name.length === 0) {
                    isEmpty = true;
                }
                if (state.openedSubmenuArr.indexOf(name) > -1) {
                    hasThisName = true;
                }
                if (!hasThisName && !isEmpty) {
                    state.openedSubmenuArr.push(name);
                }
            },
            clearOpenedSubmenu (state) {
                state.openedSubmenuArr.length = 0;
            },
            changeMenuTheme (state, theme) {
                state.menuTheme = theme;
            },
            changeMainTheme (state, mainTheme) {
                state.theme = mainTheme;
            },
            lock (state) {
                Cookies.set('locking', '1');
            },
            unlock (state) {
                Cookies.set('locking', '0');
            },
            setMenuList (state, menulist) {
                state.menuList = menulist;
            },
            updateMenulist (state) {
                let accessCode = parseInt(Cookies.get('access'));
                let menuList = [];
                appRouter.forEach((item, index) => {
                    if (item.access !== undefined) {
                        if (Util.showThisRoute(item.access, accessCode)) {
                            if (item.children.length === 1) {
                                menuList.push(item);
                            } else {
                                let len = menuList.push(item);
                                let childrenArr = [];
                                childrenArr = item.children.filter(child => {
                                    if (child.access !== undefined) {
                                        if (child.access === accessCode) {
                                            return child;
                                        }
                                    } else {
                                        return child;
                                    }
                                });
                                menuList[len - 1].children = childrenArr;
                            }
                        }
                    } else {
                        if (item.children.length === 1) {
                            menuList.push(item);
                        } else {
                            let len = menuList.push(item);
                            let childrenArr = [];
                            childrenArr = item.children.filter(child => {
                                if (child.access !== undefined) {
                                    if (Util.showThisRoute(child.access, accessCode)) {
                                        return child;
                                    }
                                } else {
                                    return child;
                                }
                            });
                            let handledItem = JSON.parse(JSON.stringify(menuList[len - 1]));
                            handledItem.children = childrenArr;
                            menuList.splice(len - 1, 1, handledItem);
                        }
                    }
                });
                state.menuList = menuList;
            },
            setAvator (state, path) {
                localStorage.avatorImgPath = path;
            },
            switchLang (state, lang) {
                state.lang = lang;
                Vue.config.lang = lang;
            },
            handleFullScreen (state) {
                let main = document.body;
                if (state.isFullScreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (main.requestFullscreen) {
                        main.requestFullscreen();
                    } else if (main.mozRequestFullScreen) {
                        main.mozRequestFullScreen();
                    } else if (main.webkitRequestFullScreen) {
                        main.webkitRequestFullScreen();
                    } else if (main.msRequestFullscreen) {
                        main.msRequestFullscreen();
                    }
                }
            },
            changeFullScreenState (state) {
                state.isFullScreen = !state.isFullScreen;
            },
            setCurrentUser (state, currentUser) {
                state.currentUser = currentUser
            },
            pageStatusArray(state, val){
                if(state.pageArray.indexOf(val) === -1){
                    state.pageArray.push(val)
                }
            },
            dataTypeVal(state,column){
                state.columnVal = column
            },
            ...mutations
        },
        actions: {
            ...actions
        },
        plugins: debug ? [createLogger()] : []
    })

    return this.store
}

export default new State()
