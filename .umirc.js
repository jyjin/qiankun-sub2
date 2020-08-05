import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  mountElementId: 'sub2',
  title: 'sub app2',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: 'index' },
        { path: '/list', component: 'list' },
        { path: '/admin', component: 'admin' },
      ],
    },
  ],
  qiankun: { slave: {} },
});
