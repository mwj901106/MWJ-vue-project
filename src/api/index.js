import ajax from "./ajax";

// 1、根据经纬度获取位置详情
export const reqAddress = (longitude,latitude) => ajax(`/position/${latitude},${longitude}`)
// 2. 获取食品分类列表
export const reqCategorys = () => ajax('/index_category')
// 3. 根据经纬度获取商铺列表
export const reqShops = ({longitude,latitude}) => ajax('/shops',{params:{longitude,latitude}})
// 4. 发送短信验证码
export const reqSendCode = (phone) => ajax.get('/sendcode', {
  // url: '/sendcode',
  params: {
    phone
  }
})
// 5.用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax.post('/login_pwd', {name, pwd, captcha})

// 6. 手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax.post('/login_sms', {phone, code})

// 7. 自动登陆
export const reqAutoLogin = () => ajax.get('/auto_login')
// 获取goods
export const reqGoods = () => ajax('/goods')
// 获取ratings
export const reqRatings = () => ajax('/ratings')
// 获取info
export const reqInfo = () => ajax('/info')