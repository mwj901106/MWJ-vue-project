/* 商家相关数据模块管理 */

import {
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types'

import {
  reqGoods,
  reqRatings,
  reqInfo
} from '@/api'

import Vue from "vue";

export default {
  state:{
    goods: [], // 商品列表
    ratings: [], // 商家评价列表
    info: {}, // 商家信息
  },
  mutations:{
    [RECEIVE_INFO](state, {info}) {
      state.info = info
    },
    
    [RECEIVE_RATINGS](state, {ratings}) {
      state.ratings = ratings
    },
    
    [RECEIVE_GOODS](state, {goods}) {
      state.goods = goods
    },
    [ADD_FOOD_COUNT](state,{food}){
      if(food.count){
        food.count++
      }else{
        Vue.set(food,'count',1)
      }
    },
    [REDUCE_FOOD_COUNT](state,{food}){
      if(food.count>0){
        food.count--
      }
    }
  },
  actions:{
    
    // 异步获取商家信息
    async getShopInfo({commit}, cb) {
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
    },
  
    updateFoodCount({commit},{isAdd,food}){
      if(isAdd){
        commit(ADD_FOOD_COUNT,{food})
      }else{
        commit(REDUCE_FOOD_COUNT,{food})
      }
    }
  },
  getters:{}
}