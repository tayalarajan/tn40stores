import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/productCategory/:categoryName",
    name: "ProductCategory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductCategory.vue")
  },
  {
    path: "/productSubCategory/:subCategoryName",
    name: "ProductSubCategory",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductSubCategory.vue")
  },
  {
    path: "/individualProduct/:productId",
    name: "IndividualProduct",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IndividualProduct.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/Register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/userAccount",
    name: "UserAccount",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserAccount.vue")
  },
  {
    path: "/specialProducts/:specialProductType",
    name: "SpecialProducts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SpecialProducts.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue")
  },
  {
    path: "/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Orders.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue")
  },
  {
    path: "/adminProduct/:productId",
    name: "AdminProduct",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminProduct")
  },
  {
    path: "/bannerActive",
    name: "BannerActive",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BannerActive")
  },
  {
    path: "/adminOrders",
    name: "AdminOrders",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminOrders")
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Terms")
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Privacy")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
