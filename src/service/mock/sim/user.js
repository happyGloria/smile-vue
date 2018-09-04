import T from '../query.js'
export default {
  listUser() {
    return T.fr({
      'total': 7,
      'items': [{
        'id': 9705000001,
        'mappingId': '',
        'desc': '',
        'siteId': 9705,
        'name': 'admin',
        'account': 'admin',
        'type': 1
      }, {
        'id': 9705000003,
        'mappingId': '',
        'desc': '',
        'siteId': 9705,
        'name': 'u2',
        'role': 11,
        'account': 'u2',
        'type': 2
      }, {
        'id': 9705000004,
        'mappingId': '',
        'desc': '',
        'siteId': 9705,
        'name': 'u3',
        'role': 13,
        'account': 'u3',
        'type': 2
      }, {
        'id': 9705000034,
        'mappingId': '',
        'desc': '',
        'siteId': 9705,
        'name': 'u4',
        'role': 11,
        'account': 'u4',
        'type': 2
      }, {
        'id': 9705000038,
        'mappingId': '9700053000001:15001',
        'desc': '',
        'siteId': 9705,
        'name': 'u1',
        'role': 10,
        'account': 'u1',
        'type': 2
      }, {
        'id': 9705000039,
        'mappingId': '9700053000001:15002',
        'desc': '',
        'siteId': 9705,
        'name': 't1',
        'role': 10,
        'account': 't1',
        'type': 2
      }, {
        'id': 9705000040,
        'mappingId': '9700053000001:15003',
        'desc': '123',
        'siteId': 9705,
        'name': 't2',
        'role': 11,
        'account': 't2',
        'type': 2
      }]
    })
  },
  delUser() {
    return T.fr({})
  },
  addUser() {
    return T.fr({})
  },
  editUser() {
    return T.fr({})
  },
  resetPwd() {},
  resetPriv() {},
  getUserPriv() {},
  kickUser() {},
  listCoder() {},
  listNotRelatedCameras() {},
  listNotRelatedSpliters() {}
}
