(function(window){
    const myPlugin = {}
    myPlugin.install = function(Vue,option){
        // 自定义静态方法
        Vue.myMethod = function(){
            console.log('Vue myMethod')
        }
        // 自定义全局指令
        Vue.directive('upper-text',{
            inserted(el,binding){
                console.log(binding)
                el.textContent = binding.value.toUpperCase()
            }
        })
        // 自定义实例方法
        Vue.prototype.$myMethod = function () {
            console.log('vm.$myMethod()')
        }
    }

    window.myPlugin = myPlugin
})(window)