import T from '../query.js'
export default {
  listConfig() {
    return T.fr({
      data: {
        Sync: 'true',
        ControlReleaseTime: '3000',
        StorageBackupSetting: 'true',
        ServerBackupSetting: '{"ss":{"backup":false,"id":0,"list":[]},"tvs":{"backup":false,"id":0,"list":[]}}',
        TimingSetting: '{"useRS422":false,"useNTP":true,"schedule":"01:00:00"}',
        ControlOsdEnable: 'true',
        gb28181: '{"firmware":"","model":"","expires":31104000,"flag":true,"manuFacturer":"","userName":"9700052000001","keepAlive":60,"localPort":5060,"password":"123456","timeout":3,"localIp":"31.97.18.1"}'
      }
    })
  },
  setConfig() {
    return T.fr({})
  },
  syncData() {
    return T.fr({})
  },
  syncTiming() {
    return T.fr({})
  },
  timingSetting() {
    return T.fr({})
  },
  getGB28181() {},
  setGB28181() {}
}
