import Toast from "./Toast"

let currentToast

export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, options) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast(Vue, message, options)
    }
  }
}

const createToast = (Vue, message, options) => {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData: options
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on("close", () => {currentToast = null})
  document.body.appendChild(toast.$el)
  return toast
}
