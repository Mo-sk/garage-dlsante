<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create Car</h2>
      <form id="create-post-form" @submit.prevent="createCar">
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
          <button class="btn btn-success" type="submit">Create Car</button>
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
      model: "",
      modelNumber: "",
      owner: "",
    };
  },
  methods: {
    createCar() {
      let carData = {
        model: this.model,
        modelNumber: this.modelNumber,
        owner: this.owner,
      };
      this.__submitToServer(carData);
    },
    __submitToServer(data) {
      axios
      .post(`${server.baseURL}/car/create`, data)
      .then((data) => {
        this.data = data;
        router.push({ name: "carList" });
      });
    },
  },
};
</script>