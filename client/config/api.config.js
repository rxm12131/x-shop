const isPro = Object.is(process.env.NOOE_ENV,'production')

module.exports = {
    baseUrl: isPro ? 'http://rxm.wellshang.vip/api' : 'api/'
}