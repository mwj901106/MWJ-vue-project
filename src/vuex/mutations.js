/* 
包含n个用于直接更新状态数据的方法的对象
方法不可以包含异步和逻辑处理代码
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_TOKEN,
  RECEIVE_USER,
  RESET_USER,
  RESET_TOKEN,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from './mutation-types'
import Vue from "vue";

export default {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },

  [RECEIVE_TOKEN] (state, {token}) {
    state.token = token
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_TOKEN] (state) {
    state.token = ''
  },
  [RESET_USER] (state) {
    state.user = {}
  },

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
}