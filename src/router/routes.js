import MSite from "../pages/MSite/MSite.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login.vue";
import Goods from "../pages/Shops/Goods.vue";
import Shop from "../pages/Shops/Shop.vue";
import Ratings from "../pages/Shops/Ratings.vue";
import Info from "../pages/Shops/Info.vue";

export default [
  {
    path:'/msite',
    component:MSite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/order',
    component:Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/search',
    component:Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/shop',
    component:Shop,
    children:[
      {
        path:'/shop/goods',
        component:Goods
      },
      {
        path:'ratings',
        component:Ratings
      },
      {
        path:'/shop/info',
        component:Info
      },
      {
        path:'',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path:'/',
    redirect:'/msite'
  }
]