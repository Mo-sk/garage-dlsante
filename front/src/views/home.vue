<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest User Garage App</h1>
      <p>Built with Nest.js, Vue.js and MongoDB</p>
      <div v-if="users.length === 0">
        <h2>No user found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Model</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.cars }}</td>
            <td>
              <div class="mx-auto">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link
                    :to="{ name: 'editUser', params: { id: user._id } }"
                    class="btn btn-md btn-outline-success mx-2"
                    >Edit User
                  </router-link>
                  <button
                    class="btn btn-md btn-outline-danger mx-2"
                    v-on:click="deleteUser(user._id)"
                  >
                    Delete User
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get(`${server.baseURL}/user/users`)
        .then((data) => (this.users = data.data));
    },
    deleteUser(id) {
      axios
        .delete(`${server.baseURL}/user/delete?userID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>