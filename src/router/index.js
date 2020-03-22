import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      name: 'root',
      component: () => import('@/components/frame/Index'),
      redirect: {
        name: 'Index'
      },
      children: [{
          path: '/index',
          name: 'Index',
          component: () => import('@/components/frame/Main')
        },
        // {
        //   path: '/fontHelp',
        //   name: 'FontHelp',
        //   component: () => import("@/components/toolHelp/Index")
        // },
        // {
        //   path: '/financeMap',
        //   name: 'FinanceMap',
        //   component: () => import('@/components/finance/FinanceMap')
        // }, 
        {
          path: '/mindMap',
          name: 'MindMapList',
          component: () => import('@/components/mindMap/MindMapList')
        },
        {
          path: '/mindMapView',
          name: 'MindMapView',
          component: () => import('@/components/mindMap/MindMapView')
        },
        {
          path: '/mindMapManage',
          name: 'MindMapManage',
          component: () => import('@/components/mindMap/MindMapManage')
        },
        {
          path: '/about',
          name: 'About',
          component: () => import('@/components/about/About')
        },
        {
          path: '/toolHelp/ws',
          name: 'ToolHelp',
          component: () => import("@/components/toolHelp/Ws")
        },
        // {
        //   path: '/activeAnimat',
        //   name: 'ActiveAnimat',
        //   component: () => import("@/components/toolHelp/ActiveAnimat")
        // },
        {
          path: '/todosList',
          name: 'TodosList',
          component: () => import('@/components/toDos/Index')
        },
        {
          path: '/todosManage',
          name: 'TodosManage',
          component: () => import('@/components/toDos/TodosManage')
        },
        {
          path: '/calculatioinsList',
          name: 'CalculatioinsList',
          component: () => import('@/components/financialCalculations/CalculatioinsList')
        },
        // {
        //   path: '/calculatioins',
        //   name: 'Calculatioins',
        //   component: () => import('@/components/financialCalculations/Calculatioins')
        // },
        {
          path: '/user/userList',
          name: 'UserList',
          component: () => import('@/components/users/UserList')
        },
        {
          path: '/user/logIn',
          name: 'User',
          component: () => import('@/components/users/LogIn')
        }, {
          path: '/user/register',
          name: 'Register',
          component: () => import('@/components/users/Register')
        }, {
          path: '/user/userCenter',
          name: 'UserCenter',
          component: () => import('@/components/users/UserCenter.vue')
        }, {
          path: '/user/forgetPwd',
          name: 'ForgetPwd',
          component: () => import('@/components/users/ForgetPwd'),
        }, {
          path: '/user/updatePwd',
          name: 'UpdatePwd',
          component: () => import('@/components/users/UpdatePwd'),
        }
      ]
    },
    {
      path: '/game/redPacket',
      name: 'RedPacket',
      component: () => import('@/components/game/RedPacket'),
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/index" && to.path !== "/user/logIn" && to.path !== "/user/register") { // 判断该路由是否需要登录权限
    // console.log(router.app.$store.state.Authorization)
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next({
        path: '/user/logIn',
        query: {
          redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router