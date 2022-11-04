export default [
    {
        path: '/',
        name: 'root',
        component: () => import('@/views/home/index.vue'),
        redirect: { name: 'home', path: "/home" },
        meta: {
            title: "首页",
        },
        children: [
            {
                path: '/home',
                name: "home",
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: "首页",
                },
            },
        ]
    },
    {
        path: '/aboutMe',
        name: "aboutMe",
        component: () => import('@/views/aboutMe/index.vue'),
        meta: {
            title: "关于我",
        },

    }, {
        path: '/aboutMeDetails:id',
        name: "aboutMeDetails",
        component: () => import('@/views/aboutMe/details/index.vue'),
        meta: {
            title: "关于我-项目内容",
        },
    }, {
        path: '/darkCopy',
        name: "darkCopy",
        component: () => import('@/views/darkCopy/index.vue'),
        meta: {
            title: "深浅拷贝",
        },
    },
    {
        path: '/vueIsReact',
        name: "vueIsReact",
        component: () => import('@/views/vueIsReact/index.vue'),
        meta: {
            title: "vue和react",
        },
    },
    {
        path: '/JavaScript',
        name: "JavaScript",
        component: () => import('@/views/JavaScript/index.vue'),
        meta: {
            title: "JavaScript",
        },
    },
]