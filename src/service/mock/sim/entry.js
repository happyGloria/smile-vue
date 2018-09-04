/*global IX:true*/
import T from '../query.js'
var lineInfo = {
  data: {
    'id': 9705000001,
    'siteId': 9705,
    'name': 'admin',
    'account': 'admin',
    'type': 1,
    'password': '21232F297A57A5A743894A0E4A801FC3',
    'lineInfo': {
      'id': 1,
      'name': '某城市一号线',
      'sites': [{
        'id': 951,
        'desc': '',
        'no': 951,
        'name': '951',
        'code': '0',
        'type': 3,
        'lineId': 1
      }, {
        'id': 9705,
        'desc': '',
        'no': 9705,
        'name': '八通线/双桥站',
        'code': '0',
        'type': 3,
        'lineId': 1
      }, {
        'id': 9717,
        'desc': '',
        'no': 9717,
        'name': '八通/主用控制中心',
        'code': '1',
        'type': 1,
        'lineId': 1
      }],
      'levels': [{
        'id': 1,
        'level': 1,
        'station': {
          'id': 1,
          'prompted': true
        },
        'depot': {
          'id': 1,
          'prompted': true
        },
        'name': '第1级'
      }, {
        'id': 2,
        'level': 2,
        'station': {
          'id': 2,
          'prompted': false
        },
        'depot': {
          'id': 2,
          'prompted': false
        },
        'name': '第2级'
      }, {
        'id': 3,
        'level': 3,
        'station': {
          'id': 10,
          'prompted': false
        },
        'depot': {
          'id': 6,
          'prompted': false
        },
        'name': '第3级'
      }, {
        'id': 4,
        'level': 4,
        'station': {
          'id': 3,
          'prompted': false
        },
        'depot': {
          'id': 3,
          'prompted': false
        },
        'name': '第4级'
      }, {
        'id': 5,
        'level': 5,
        'station': {
          'id': 11,
          'prompted': false
        },
        'depot': {
          'id': 7,
          'prompted': false
        },
        'name': '第5级'
      }, {
        'id': 6,
        'level': 6,
        'station': {
          'id': 4,
          'prompted': false
        },
        'depot': {
          'id': 8,
          'prompted': false
        },
        'name': '第6级'
      }, {
        'id': 7,
        'level': 7,
        'station': {
          'id': 5,
          'prompted': false
        },
        'depot': {
          'id': 4,
          'prompted': false
        },
        'name': '第7级'
      }, {
        'id': 8,
        'level': 8,
        'station': {
          'id': 14,
          'prompted': false
        },
        'depot': {
          'id': 5,
          'prompted': false
        },
        'name': '第8级'
      }, {
        'id': 9,
        'level': 9,
        'station': {
          'id': 13,
          'prompted': false
        },
        'depot': {
          'id': 15,
          'prompted': false
        },
        'name': '第9级'
      }, {
        'id': 10,
        'level': 10,
        'station': {
          'id': 1,
          'prompted': false
        },
        'depot': {
          'id': 1,
          'prompted': false
        },
        'name': '第10级'
      }, {
        'id': 11,
        'level': 11,
        'station': {
          'id': 12,
          'prompted': false
        },
        'depot': {
          'id': 16,
          'prompted': false
        },
        'name': '第11级'
      }, {
        'id': 12,
        'level': 12,
        'station': {
          'id': 16,
          'prompted': false
        },
        'depot': {
          'id': 9,
          'prompted': false
        },
        'name': '第12级'
      }, {
        'id': 13,
        'level': 13,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第13级'
      }, {
        'id': 14,
        'level': 14,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第14级'
      }, {
        'id': 15,
        'level': 15,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第15级'
      }, {
        'id': 16,
        'level': 16,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第16级'
      }, {
        'id': 17,
        'level': 17,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第17级'
      }, {
        'id': 18,
        'level': 18,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第18级'
      }, {
        'id': 19,
        'level': 19,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第19级'
      }, {
        'id': 20,
        'level': 20,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第20级'
      }, {
        'id': 21,
        'level': 21,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第21级'
      }, {
        'id': 22,
        'level': 22,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第22级'
      }, {
        'id': 23,
        'level': 23,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第23级'
      }, {
        'id': 24,
        'level': 24,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第24级'
      }, {
        'id': 25,
        'level': 25,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第25级'
      }, {
        'id': 26,
        'level': 26,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第26级'
      }, {
        'id': 27,
        'level': 27,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第27级'
      }, {
        'id': 28,
        'level': 28,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第28级'
      }, {
        'id': 29,
        'level': 29,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第29级'
      }, {
        'id': 30,
        'level': 30,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第30级'
      }, {
        'id': 31,
        'level': 31,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第31级'
      }, {
        'id': 32,
        'level': 32,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第32级'
      }, {
        'id': 33,
        'level': 33,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第33级'
      }, {
        'id': 34,
        'level': 34,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第34级'
      }, {
        'id': 35,
        'level': 35,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第35级'
      }, {
        'id': 36,
        'level': 36,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第36级'
      }, {
        'id': 37,
        'level': 37,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第37级'
      }, {
        'id': 38,
        'level': 38,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第38级'
      }, {
        'id': 39,
        'level': 39,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第39级'
      }, {
        'id': 40,
        'level': 40,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第40级'
      }, {
        'id': 41,
        'level': 41,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第41级'
      }, {
        'id': 42,
        'level': 42,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第42级'
      }, {
        'id': 43,
        'level': 43,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第43级'
      }, {
        'id': 44,
        'level': 44,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第44级'
      }, {
        'id': 45,
        'level': 45,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第45级'
      }, {
        'id': 46,
        'level': 46,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第46级'
      }, {
        'id': 47,
        'level': 47,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第47级'
      }, {
        'id': 48,
        'level': 48,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第48级'
      }, {
        'id': 49,
        'level': 49,
        'station': {
          'prompted': false
        },
        'depot': {
          'prompted': false
        },
        'name': '第49级'
      }],
      'roles': [{
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
    }
  }
}
export default {
  login() {
    return T.fr(lineInfo)
  },
  logout() {
    return T.fr({})
  },
  isKicked() {

  },
  checkSession() {
    return T.fr(lineInfo)
  },
  listLine(param) {
    if (param.id) {
      T.fr({
        items: {
          'id': 951,
          'selected': 0,
          'desc': '',
          'createdAt': 1532081881000,
          'no': 951,
          'name': '951',
          'code': '0',
          'type': 3,
          'lineId': 1,
          'ip': '192.168.9.51'
        }
      })
    } else {
      return T.fr({
        'items': [{
          'id': 951,
          'selected': 0,
          'desc': '',
          'createdAt': 1532081881000,
          'no': 951,
          'name': '951',
          'code': '0',
          'type': 3,
          'lineId': 1,
          'ip': '192.168.9.51'
        }, {
          'id': 9705,
          'selected': 0,
          'desc': '',
          'createdAt': 1514876417000,
          'no': 9705,
          'name': '八通线/双桥站',
          'code': '0',
          'type': 3,
          'lineId': 1,
          'ip': '30.97.18.1'
        }, {
          'updatedAt': 1527496891000,
          'id': 9717,
          'selected': 0,
          'desc': '',
          'createdAt': 1516906402000,
          'no': 9717,
          'name': '八通/主用控制中心',
          'code': '1',
          'type': 1,
          'lineId': 1,
          'ip': '30.97.217.1'
        }],
        total: 3
      })
    }
  }
}
