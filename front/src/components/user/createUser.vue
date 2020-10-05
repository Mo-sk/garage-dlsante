<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create User</h2>
      <form id="create-post-form" @submit.prevent="createUser">
        <div class="form-group col-md-12">
          <label for="title"> First Name </label>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            name="title"
            class="form-control"
            placeholder="Enter a firstname"
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
            placeholder="Enter a lastname"
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
            placeholder="Enter a car's model"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create User</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>


import axios from "axios";
import { server } from "../../helper";
import router from "../../router/index";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      cars: "",
    };
  },
  methods: {
    createUser() {
      let userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        cars: this.cars,
      };
      this.__submitToServer(userData);
    },
    __submitToServer(data) {
      axios
      .post(`${server.baseURL}/user/create`, data)
      .then((data) => {
        this.data = data;
        router.push({ name: "home" });
      });
    },
  },
};
</script>