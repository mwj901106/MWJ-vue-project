/* 商家相关数据模块管理 */

import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SHOP
} from '../mutation-types'

import {
  // reqGoods,
  // reqRatings,
  // reqInfo
  reqShop,
} from '@/api'

import Vue from "vue";

import {getCartFoods} from '@/utils'



export default {
  state:{
    /* goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息 */
    shop: {},
    cartFoods:[]
  },
  mutations:{
    /* [RECEIVE_INFO](state, {info}) {
      state.info = info
    },
    
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
    
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    }, */

    [RECEIVE_SHOP] (state, {shop={}, cartFoods=[]}) {
      state.shop = shop
      state.cartFoods = cartFoods
    },
    [ADD_FOOD_COUNT](state,{food}){
      if(food.count){
        food.count++
      }else{
        Vue.set(food,'count',1),
        state.cartFoods.push(food)
      }
    },
    [REDUCE_FOOD_COUNT](state,{food}){
      if(food.count>0){
        food.count--
        if(food.count === 0){
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
      }
    },

    [CLEAR_CART](state){
      state.cartFoods.forEach(food => food.count = 0)
      state.cartFoods = []
    }
   
  },
  actions:{
    
    // 异步获取商家信息
    /* async getShopInfo({commit}, cb) {
      const result = await reqInfo()
      if(result.code===0) {
        const info = result.data
        commit(RECEIVE_INFO, {info})
  
        typeof cb==='function' && cb()
      }
    },
  
    // 异步获取商家评价列表
    async getShopRatings({commit}, cb) {
      const result = await reqRatings()
      if(result.code===0) {
        const ratings = result.data
        commit(RECEIVE_RATINGS, {ratings})
  
        typeof cb==='function' && cb()
      }
    },
  
    // 异步获取商家商品列表
    async getShopGoods({commit}, cb) {
      const result = await reqGoods()
      if(result.code===0) {
        const goods = result.data
        commit(RECEIVE_GOODS, {goods})
        // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
        typeof cb==='function' && cb()
      }
    }, */

    async getShop({commit, state}, id) {
     
      // 如果指定id与原有的商家id相同, 不需要发请求
      if (id==state.shop.id) {
        return
      }

      // 当前显示的是另一个商家, 清除原本的数据
      if (state.shop.id) {
        commit(RECEIVE_SHOP, {}) // 空容器中不带shop对象
      }
      // console.log('准备发请求')
      
      // 发请求获取对应商家并更新数据
      const result = await reqShop(id)
      if(result.code===0) {
        const shop = result.data
        // 读取得到当前商家的购物车food数组
        const cartFoods = getCartFoods(shop)

        commit(RECEIVE_SHOP, {shop, cartFoods})
      }
    },
  
    updateFoodCount({commit},{isAdd,food}){
      if(isAdd){
        commit(ADD_FOOD_COUNT,{food})
      }else{
        commit(REDUCE_FOOD_COUNT,{food})
      }
    }
  },
  getters:{
    totalCount (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    /* 总价格 */
    totalPrice (state) {
      return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
    },
    positiveSize (state) {
      const ratings = state.shop.ratings
      return !ratings ? 0 : ratings.reduce((total, rating) => total + (rating.rateType===0 ? 1 : 0), 0)
    }

  }
}