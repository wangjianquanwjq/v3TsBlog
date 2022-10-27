export default [
    {
        path: '/',
        name: 'root',
        component: () => import( '@/views/home/index.vue'),
        redirect: { name: 'home', path: "/home" },
        children: [
            {
                path: '/home',
                name: "home",
                component: () => import('@/views/home/index.vue'),
            },
        ]
    },
]