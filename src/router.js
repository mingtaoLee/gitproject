import Main from './views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => {
        require(['./views/main_components/locking-page.vue'], resolve);
    }
};

export const loginRouter = {
    path: '/login',
    name: 'login',
    component: require('./views/login/login.vue'),
    children: [
        {
            path: '', meta: { title: 'Login - 登录' }, name: 'login', component: require('./views/login/signin/signin.vue')
        },
        {
            path: 'signup', meta: { title: 'signup - 注册' }, name: 'signup', component: require('./views/login/signup/signup.vue')
        }
    ]
}

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        {
            path: 'home', title: { i18n: 'home' }, name: 'home_index', component: require('./views/home/home.vue')

        },
        {
            path: 'message', title: '消息中心', name: 'message_index', component: require('./views/message/message.vue')

        },
        {
            path: 'editor',
            title: '表单编辑',
            name: 'editor',
            component: require('./views/editor.vue')
        },
        {
            path: 'import',
            title: '导入数据',
            name: 'import',
            component: require('./views/import/importfile.vue')
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/usermanager',
        icon: 'person',
        title: '用户管理',
        name: 'usermanager',
        component: Main,
        children: [
            {
                path: '',
                title: '用户管理',
                name: 'user',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'users'
                }
            }
        ]
    },
    {
        path: '/talents',
        icon: 'person',
        title: '人才管理',
        name: 'talentsManage',
        component: Main,
        children: [
            {
                path: '',
                title: '人才管理',
                name: 'talent',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'talents'
                }
            }
        ]
    },
    {
        path: '/proxyers',
        icon: 'person',
        title: '推荐人管理',
        name: 'proxyersManage',
        component: Main,
        children: [
            {
                path: '',
                title: '推荐人管理',
                name: 'proxyer',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'proxyers'
                }
            }
        ]
    },
    {
        path: '/jobs',
        icon: 'person',
        title: '岗位管理',
        name: 'jobsManage',
        component: Main,
        children: [
            {
                path: '',
                title: '岗位管理',
                name: 'job',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'jobs'
                }
            }
        ]
    },
    {
        path: '/customers',
        icon: 'person',
        title: '企业管理',
        name: 'customersManage',
        component: Main,
        children: [
            {
                path: '',
                title: '企业管理',
                name: 'customer',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'customers'
                }
            }
        ]
    },
    {
        path: '/jobTalents',
        icon: 'person',
        title: '岗位人才',
        name: 'jobTalentsManage',
        component: Main,
        children: [
            {
                path: '',
                title: '岗位人才',
                name: 'jobTalent',
                component: require('./views/viewer.vue'),
                props: {
                    type: 'jobTalents'
                }
            }
        ]
    },

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    locking,
    loginRouter,
    ...appRouter
];
