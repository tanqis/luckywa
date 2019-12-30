import Vue from 'vue';
import Router from 'vue-router';

//finance
// import FinanceMap from '@/components/finance/FinanceMap'

//lineAccounts
// import Accounts from '@/components/lineAccounts/Index'

//lifeDays
// import LifeDays from '@/components/lifeDays/Index'


//myself
// import Myself from '@/components/myself/Index'

//toDos
// import ToDos from '@/components/toDos/Index'

//toolHelp
// import ToolHelp from '@/components/toolHelp/Index'
// import ActiveAnimat from '@/components/toolHelp/ActiveAnimat'
// import FontHelp from '@/components/toolHelp/FontHelp'


//financialCalculations 
// import Calculatioins from '@/components/financialCalculations/Calculatioins'

Vue.use(Router);

export default new Router({
  routes: [
    // component: () => import('@/components/HelloWorld.vue')
    {
      // default
      path: '/',
      name: 'root',
      component: () => import('@/components/frame/Index'),
      redirect: {
        name: 'index'
      },
      children: [{
          path: '/index',
          name: 'index',
          component: () => import('@/components/frame/Main')
        },
        // {
        //   path: '/fontHelp',
        //   name: 'FontHelp',
        //   component: FontHelp
        // },
        // {
        //   path: '/financeMap',
        //   name: 'FinanceMap',
        //   component: FinanceMap
        // },
        // {
        //   path: '/accounts',
        //   name: 'Accounts',
        //   component: Accounts
        // },
        // {
        //   path: '/lifeDays',
        //   name: 'LifeDays',
        //   component: LifeDays
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
        // {
        //   path: '/myself',
        //   name: 'Myself',
        //   component: Myself
        // },
        // {
        //   path: '/toolHelp',
        //   name: 'ToolHelp',
        //   component: ToolHelp
        // },
        // {
        //   path: '/activeAnimat',
        //   name: 'ActiveAnimat',
        //   component: ActiveAnimat
        // },
        // {
        //   path: '/toDos',
        //   name: 'ToDos',
        //   component: ToDos
        // }
        {
          path: '/calculatioinsList',
          name: 'CalculatioinsList',
          component: () => import('@/components/financialCalculations/CalculatioinsList')

        },
        // ,{
        //   path: '/calculatioins',
        //   name: 'Calculatioins',
        //   component: Calculatioins
        // }, 
        {
          path: '/user/logIn',
          name: 'user',
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