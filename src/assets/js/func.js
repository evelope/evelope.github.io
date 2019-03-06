/****
 * 常用工具函数合集
 */

const deepClone = obj =>{
  let newObj = JSON.parse(JSON.stringify(obj));
  return newObj;
}

export default {
  install: (Vue) => {
    Vue.prototype.$deepClone = deepClone;
  }
};