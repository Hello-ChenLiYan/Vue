<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<template>
	<!-- <div >
		<my-add></my-add>
		<my-sub></my-sub>
	</div> -->
	<div >
		<router-view></router-view>
	</div>
</template>

<script>
	// import Add from './components/Add.vue'
	// import Sub from './components/Sub.vue'
	
	// export default {
	// 	components:{
	// 		'my-add': Add,
	// 		'my-sub': Sub
	// 	}
	// }
</script>

<style>
	
</style>