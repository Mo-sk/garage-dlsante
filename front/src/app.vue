<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">User List</router-link> |
      <router-link to="/create-user">Create User</router-link> |
      <router-link to="/car-list">Car List</router-link> |
      <router-link to="/create-car">Create Car</router-link>
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
.form-wrapper {
  width: 500px;
  margin: 0 auto;
}
</style>