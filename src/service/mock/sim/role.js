import T from '../query.js'

export default {
  listRole() {
    return T.fr({
      'total': 16,
      'items': [{
        'id': 1,
        'siteType': 0,
        'name': 'TCC调度员',
        'promptable': true
      }, {
        'id': 2,
        'siteType': 1,
        'name': '控制中心防灾值班员',
        'promptable': false
      }, {
        'id': 3,
        'siteType': 1,
        'name': '控制中心行车调度员',
        'promptable': false
      }, {
        'id': 4,
        'siteType': 1,
        'name': '控制中心电力调度员',
        'promptable': false
      }, {
        'id': 5,
        'siteType': 1,
        'name': '控制中心AFC调度员',
        'promptable': false
      }, {
        'id': 6,
        'siteType': 2,
        'name': '车辆段/停车场防灾值班员',
        'promptable': false
      }, {
        'id': 7,
        'siteType': 2,
        'name': '车辆段/停车场行车值班员',
        'promptable': false
      }, {
        'id': 8,
        'siteType': 2,
        'name': '车辆段/停车场运转值班员',
        'promptable': false
      }, {
        'id': 9,
        'siteType': 2,
        'name': '车辆段/停车场安保值班员',
        'promptable': false
      }, {
        'id': 10,
        'siteType': 3,
        'name': '车站防灾值班员',
        'promptable': false
      }, {
        'id': 11,
        'siteType': 3,
        'name': '车站行车值班员',
        'promptable': false
      }, {
        'id': 12,
        'siteType': 3,
        'name': '换乘线路车站值班员',
        'promptable': false
      }, {
        'id': 13,
        'siteType': 3,
        'name': '公安车站值班员',
        'promptable': false
      }, {
        'id': 14,
        'siteType': 5,
        'name': '公安派出所调度员',
        'promptable': false
      }, {
        'id': 15,
        'siteType': 5,
        'name': '公安派出所值班员',
        'promptable': false
      }, {
        'id': 16,
        'siteType': 6,
        'name': '公交总队调度员及其它部门人员',
        'promptable': false
      }]
    })
  },
  delRole() {
    return T.fr({})
  },
  createRole() {
    return T.fr({})
  },
  editRole() {
    return T.fr({})
  }
}
