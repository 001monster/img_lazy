import Vue from 'vue'
import Toast from './toast.vue'

const TotalCtor = Vue.extend(Toast)    // 得到组件构造函数

export function showToast(message, time) {
    const toastComp = new TotalCtor().$mount()          // 得到组件实例对象
    
    document.body.appendChild(toastComp.$el)

    toastComp.isShow(message)      // 调用组件的方法显示组件

    setTimeout(() => {
        toastComp.isHide()
        toastComp.$el.parentNode.removeChild(toastComp.$el)
    }, time);
}
