<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All Cars
        </button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit Car</h2>
      <form id="create-post-form" @submit.prevent="editCar">
        <div class="form-group col-md-12">
          <label for="title"> Model </label>
          <input
            type="text"
            id="model"
            v-model="model"
            name="title"
            class="form-control"
            placeholder="Enter the car's model (ex: Toyota Yaris...)"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Model Number </label>
          <input
            type="text"
            id="modelNumber"
            v-model="modelNumber"
            name="title"
            class="form-control"
            placeholder="Enter the car's model number (ex: 001)"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="title"> Owner </label>
          <input
            type="text"
            id="owner"
            v-model="owner"
            name="title"
            class="form-control"
            placeholder="Enter the car's owner firstname and lastname"
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">
            Edit Car
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
      car: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCar();
  },
  methods: {
    editCar() {
      let carData = {
        model: this.model,
        modelNumber: this.modelNumber,
        owner: this.owner,
      };
      axios
        .put(`${server.baseURL}/car/update?carID=${this.id}`, carData)
        .then((data) => {
          this.data = data;
          router.push({ name: "carList" });
        });
    },
    getCar() {
      axios
        .get(`${server.baseURL}/car/car/${this.id}`)
        .then((data) => (this.user = data.data));
    },
    navigate() {
      window.location.replace("/car-list");
    },
  },
};
</script>