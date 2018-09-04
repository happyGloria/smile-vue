module.exports = function(prefix) {
  prefix = prefix || ''
  return [
    ['getIndex', '/index', 'get'], // 首页
    ['checkSession', '/login/refresh', 'POST'],
    ['login', '/login/check', 'POST'],
    ['logout', '/user/logout', 'post'],
    ['isKicked', '/user/iskickut', 'POST']

  ].map(function(v, idx) {
    v[1] = prefix + v[1]
    return v
  })
}
