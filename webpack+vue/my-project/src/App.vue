<template>
  <div>
    <router-link to="/foo" class="list">Go to Foo</router-link>
    <router-link to="/bar" class="list">Go to Bar</router-link>
    <router-view id="appview">
    </router-view>
  </div>
</template>
<style>
#appview {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list{
  background: #ccc;
  color: green;
}
</style>
