<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All Customers
        </button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit User</h2>
      <form id="create-post-form" @submit.prevent="editUser">
        <div class="form-group col-md-12">
          <label for="title"> First Name </label>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            name="title"
            class="form-control"
            placeholder="Enter your firstname"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Last Name </label>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            name="title"
            class="form-control"
            placeholder="Enter your lastname"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Cars </label>
          <input
            type="text"
            id="cars"
            v-model="cars"
            name="title"
            class="form-control"
            placeholder="Enter your car's model"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">
            Edit Customer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>


import { server } from "../../helper";
import axios from "axios";
import router from "../../router/index";
export default {
  data() {
    return {
      id: 0,
      user: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser();
  },
  methods: {
    editUser() {
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        cars: this.cars,
      };
      axios
        .put(`${server.baseURL}/user/update?userID=${this.id}`, userData)
        .then((data) => {
          this.data = data;
          router.push({ name: "home" });
        });
    },
    getUser() {
      axios
        .get(`${server.baseURL}/user/user/${this.id}`)
        .then((data) => (this.user = data.data));
    },
    navigate() {
      window.location.replace("/home");
    },
  },
};
</script>