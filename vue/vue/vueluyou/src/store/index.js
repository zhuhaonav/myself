// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex);


let namea
_tc_bridge_user.get_device_info({
							param: {},
							callback: function(data) {
								if(data.CBData != undefined) {
									data = JSON.parse(data.CBData);
									namea = data.memberInfo.memberId;
//									self.deviceid = data.deviceInfo.deviceId;
								}
							}
						})
// 先写个假数据
const state = {
totalTime: 0,
  list: [{
    name : 'namea',
    avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date : '2016-12-25',
    totalTime : '6',
    comment : namea
  }]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})