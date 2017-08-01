<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center" @click='tanchu'>{{totalTime}}小时</h1>
    </div>

  </div>
</template>

<script>
  export default {
    computed: {
        time() {
          return this.$store.state.totalTime+99
          
        }
     },
    methods : {
          tanchu(idx) {
            // 稍后再来说这里的方法
            // 减去总时间
            this.$emit('tanchu',this.totalTime++)
            alert(this.$store.state.totalTime)
//          this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
//          // 删除该计划
//          this.$store.dispatch('deletePlan',idx)
          }
        },
    props:['totalTime']
  }
</script>