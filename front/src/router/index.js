import Vue from "vue";
import VueRouter from "vue-router";
import CarList from "../views/CarList.vue";
import CreateUserComponent from "../components/user/CreateUser";
import EditUserComponent from "../components/user/EditUser";
import CreateCarComponent from "../components/car/CreateCar";
import EditCarComponent from "../components/car/EditCar";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: Home },
    { path: "/carlist", name: "carList", component: CarList },
    {
      path: "/createuser",
      name: "CreateUser",
      component: CreateUserComponent,
    },
    { path: "/edituser/:id", name: "editUser", component: EditUserComponent },
    { path: "/createcar", name: "createCar", component: CreateCarComponent },
    { path: "/editcar/:id", name: "editCar", component: EditCarComponent },
  ],
});

export default router;