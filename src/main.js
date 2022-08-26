import { createApp } from 'vue'
import App from './App.vue'

//让浏览器控制台不显示非生产环境打包的提示
Vue.config.prodectionTip = false;

new Vue({
    el:'#app',
    render:h => h(App)
})
