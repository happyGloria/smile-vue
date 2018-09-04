module.exports = function(prefix) {
  prefix = prefix || '/api'
  return [
    // 登录 登出
    ['checkSession', '/login/refresh', 'POST'],
    ['login', '/login/check', 'POST'],
    ['logout', '/user/logout', 'post'],
    ['isKicked', '/user/iskickut', 'POST'],
    ['listConst', '/enumeration/list', 'post'], // 常量

    // 线路管理
    ['listLine', '/lines/list', 'POST'],
    ['createSite', '/sites/add', 'POST'],
    ['editSite', '/sites/edit', 'POST'],
    ['delSite', '/sites/delete', 'POST'],
    ['copySite', '/lines/copyDataFromAnotherSite', 'POST'],

    ['setLineName', '/lines/edit', 'POST'],
    ['affiliateSites', '/sites/addSitesRelationship', 'POST'],
    ['setCurrentSite', '/settings/setCurrentSite', 'POST'],

    // 角色管理
    ['listRole', '/userRoles/list', 'post'],
    ['delRole', '/userRoles/delete', 'POST'],
    ['createRole', '/userRoles/add', 'POST'],
    ['editRole', '/userRoles/edit', 'POST'],

    // 用户优先级管理
    ['listUserLevel', '/userLevels/list', 'POST'],
    ['editUserLevel', '/userLevels/edit', 'POST'],
    ['resetLevel', '/userLevels/reset', 'POST'],

    // 用户管理
    ['listUser', '/userManage/user/list', 'POST'],
    ['delUser', '/userManage/user/delete', 'POST'],
    ['addUser', '/userManage/user/add', 'POST'],
    ['editUser', '/userManage/user/edit', 'POST'],

    ['resetPwd', '/userManage/user/resetPwd', 'POST'],
    ['resetPriv', '/userManage/user/resetPriv', 'POST'], // T:
    ['getUserPriv', '/userManage/user/getUserPriv', 'POST'], // T:
    ['kickUser', '/userManage/user/kickUser', 'POST'],

    // 系统管理
    ['listConfig', '/settings/list', 'POST'],
    ['setConfig', '/settings/edit', 'POST'],
    ['syncData', '/settings/dataSync', 'POST'], // T:
    ['syncTiming', '/settings/clockSync', 'POST'], // T:
    ['timingSetting', '/settings/editTimingSettings', 'POST'],

    // 国标
    ['getGB28181', '/settings/getgb28181', 'POST'],
    ['setGB28181', '/settings/setgb28181', 'POST'],

    // 设备管理
    ['listDeviceInfo', '/devices/listDevicesInfo', 'GET'], // 所有设备counts信息
    ['listDevice4Type', '/devices/selectBySiteIdAndTypes', 'POST'],

    ['listCamera', '/devices/getAllCameras', 'GET'], // T:
    ['addDevice', '/devices/addDevice', 'POST'],
    ['editDevice', '/devices/editDevice', 'POST'],
    ['delDevice', '/devices/deleteDevices', 'POST'],
    ['isRelatePickup', '/devices/isExitPickupOfCamera', 'POST'],
    ['listNotRelatedDecoder', '/devices/selectNotRelatedDecoders', 'GET'],
    ['getDriver', '/devices/getDrivers', 'GET'],
    ['hasData', '/devices/checkDataExit', 'POST'],
    ['releasePTZ', '/devices/releasePTZ', 'POST'],

    ['listCoder', '/devices/getAllCoders', 'GET'],
    ['listNotRelatedCamera', '/devices/getNotRelatedDevices', 'POST'],
    ['listNotRelatedSpliter', '/devices/getNotRelatedDevices', 'POST'],

    // 摄像机分区
    ['listZone', '/devicezones/getAllZones', 'GET'],
    ['addZone', '/devicezones/addZone', 'POST'],
    ['editZone', '/devicezones/editDevicezone', 'POST'],
    ['delZone', '/devicezones/deleteDevicezone', 'POST'],

    ['listCameraByZone', '/devicezones/selectCamearsOfZone', 'POST'],
    ['getCamerasByNoZone', '/devicezones/getAllCamerasWithoutZone', 'GET'],
    ['delCamerasFromZone', '/devicezones/deleteCamerasFromZone', 'POST'],
    ['addCamerasToZone', '/devicezones/addCamerasInZone', 'POST'],

    ['getMap', '/devicezones/getMap', 'POST'],
    ['addCamera2Map', '/devicezones/addCameraToMap', 'POST'],
    ['editCameraOfMap', '/devicezones/updateCameraInMap', 'POST'],
    ['delCamera4Map', '/devicezones/deleteCameraFromMap', 'POST'],
    ['getCamerasNotInMap', '/devicezones/getCamerasNotInMap', 'POST'],

    // 录像计划
    ['listPlan', '/recordplan/listRecordplansBySiteId', 'POST'],
    ['getPlan', '/recordplan/getPlan', 'POST'],
    ['addPlan', '/recordplan/addRecordplan', 'POST'],
    ['editPlan', '/recordplan/editRecordplan', 'POST'],
    ['delPlan', '/recordplan/deleteRecordplan', 'POST'],
    ['listDevice4Plan', '/recordplan/getCamerasWithoutPlan', 'POST'],

    // 电视墙
    ['listVideoWall', '/devicerelationship/getVideoWalls', 'POST'],
    ['getVideoWall', '/devicerelationship/getVideoWall', 'POST'],
    ['addVideoWall', '/devicerelationship/addVideoWall', 'POST'],
    ['editVideoWall', '/devicerelationship/editVideoWall', 'POST'],
    ['delVideoWall', '/devicerelationship/deleteVideoWall', 'POST'],
    ['getSite4WallAndStore', '/devicerelationship/getSite4WallAndStore', 'POST']
  ].map(function(v, idx) {
    v[1] = prefix + v[1]
    return v
  })
}
