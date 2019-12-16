<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
  import { reqAddress} from './api/index.js'
  export default {
    /* async mounted(){
      const result = await reqAddress('116.36867',40.10038)
    }, */

// 通知action获取异步address
    async mounted(){
      this.$store.dispatch('getAddress')
    },
    components: {
      FooterGuide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
 
</style>
