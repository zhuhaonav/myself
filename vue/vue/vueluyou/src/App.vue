<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <a class="navbar-brand" href="#"> <i class="glyphicon glyphicon-time"></i> 计划表 </a>
                <ul class="nav navbar-nav">
                    <li><router-link to="/home">首页</router-link></li>
                    <li><router-link to="/time-entries">计划列表</router-link></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <div class="col-sm-3">
            	<Sidebar v-bind:totalTime="totalTime"  @click="tanchu(totalTime)"></Sidebar>
            </div>
            <div class="col-sm-9">
                <router-view transition="fade"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
    name: 'app',
    components: {
        'Sidebar': Sidebar
    },
    data() {
        return {
            totalTime: 2
        }
    },
    methods: {
         tanchu(idx) {
            idx++;
//          this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
//          // 删除该计划
//          this.$store.dispatch('deletePlan',idx)
          }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
