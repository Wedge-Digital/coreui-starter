import Vue from "vue";
import Router from "vue-router";

// Containers
const DefaultContainer = () => import("@/containers/DefaultContainer");

// Views
const Home = () => import("@/views/Home");

// Views - Pages
const Page404 = () => import("@/views/errors/Page404");
const Page500 = () => import("@/views/errors/Page500");
const Login = () => import("@/views/auth/Login");
const Register = () => import("@/views/auth/Register");

Vue.use(Router);

// noinspection JSUnusedGlobalSymbols
export default new Router({
  mode: "hash", // https://router.vuejs.org/api/#mode
  linkActiveClass: "open active",
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      redirect: "/",
      name: "Home",
      component: DefaultContainer,
      children: [
        {
          path: "",
          name: "",
          component: Home
        }
      ]
    },
    {
      path: "/",
      redirect: "/404",
      name: "Errors",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "404",
          name: "Page404",
          component: Page404
        },
        {
          path: "500",
          name: "Page500",
          component: Page500
        }
      ]
    },
    {
      path: "/",
      redirect: "/login",
      name: "Auth",
      component: {
        render(c) {
          return c("router-view");
        }
      },
      children: [
        {
          path: "login",
          name: "Login",
          component: Login
        },
        {
          path: "register",
          name: "Register",
          component: Register
        }
      ]
    }
  ]
});
