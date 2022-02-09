
const routes = [
  {
    path: '/',
    component: () => import('layouts/GoWhats.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/users', component: () => import('pages/Users.vue'), name: 'users' },
      { path: '/devices', component: () => import('pages/Devices.vue') },
      { path: '/message', component: () => import('pages/Message.vue') },
      { path: '/message/new-message', component: () => import('pages/FormNewMessage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
