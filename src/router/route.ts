export default [
    {
        path: '/',
        name: 'root',
        component: () => import('@/views/home/index.vue'),
        redirect: { name: 'home', path: "/home" },
        meta: {
            title:"首页",
        },
        children: [
            {
                path: '/home',
                name: "home",
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title:"首页",
                },
            },
        ]
    },
    {
        path: '/aboutMe',
        name: "aboutMe",
        component: () => import('@/views/aboutMe/index.vue'),
        meta: {
            title:"关于我",
        },
    }, {
        path: '/resume',
        name: "resume",
        component: () => import('@/views/resume/index.vue'),
        meta: {
            title:"个人简历",
        },
    }, {
        path: '/darkCopy',
        name: "darkCopy",
        component: () => import('@/views/darkCopy/index.vue'),
        meta: {
            title:"深浅拷贝",
        },
    },
]