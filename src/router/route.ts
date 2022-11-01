export default [
    {
        path: '/',
        name: 'root',
        component: () => import('@/views/home/index.vue'),
        redirect: { name: 'home', path: "/home" },
        children: [
            {
                path: '/home',
                name: "home",
                component: () => import('@/views/home/index.vue'),
            },
        ]
    },
    {
        path: '/aboutMe',
        name: "aboutMe",
        component: () => import('@/views/aboutMe/index.vue'),
    }, {
        path: '/resume',
        name: "resume",
        component: () => import('@/views/resume/index.vue'),
    },{
        path: '/darkCopy',
        name: "darkCopy",
        component: () => import('@/views/darkCopy/index.vue'),
    },
]