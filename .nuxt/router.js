import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f80aa0c0 = () => interopDefault(import('..\\pages\\administrators.vue' /* webpackChunkName: "pages/administrators" */))
const _575b3b14 = () => interopDefault(import('..\\pages\\bookings.vue' /* webpackChunkName: "pages/bookings" */))
const _faf38736 = () => interopDefault(import('..\\pages\\ChangePassword.vue' /* webpackChunkName: "pages/ChangePassword" */))
const _5cb4761e = () => interopDefault(import('..\\pages\\companies.vue' /* webpackChunkName: "pages/companies" */))
const _2a98dc6d = () => interopDefault(import('..\\pages\\conferences.vue' /* webpackChunkName: "pages/conferences" */))
const _2120e46b = () => interopDefault(import('..\\pages\\currency.vue' /* webpackChunkName: "pages/currency" */))
const _44c4926b = () => interopDefault(import('..\\pages\\customers.vue' /* webpackChunkName: "pages/customers" */))
const _cc5c6dac = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _8827de34 = () => interopDefault(import('..\\pages\\exchangerates.vue' /* webpackChunkName: "pages/exchangerates" */))
const _1f91468f = () => interopDefault(import('..\\pages\\gamemanagement.vue' /* webpackChunkName: "pages/gamemanagement" */))
const _f44445a4 = () => interopDefault(import('..\\pages\\groups.vue' /* webpackChunkName: "pages/groups" */))
const _4f2ea072 = () => interopDefault(import('..\\pages\\hotelreservation.vue' /* webpackChunkName: "pages/hotelreservation" */))
const _7f9c7d20 = () => interopDefault(import('..\\pages\\leaderboards.vue' /* webpackChunkName: "pages/leaderboards" */))
const _a869eb02 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6ebbd4f2 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages/payments" */))
const _43c8e51f = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _33c43e81 = () => interopDefault(import('..\\pages\\reservations.vue' /* webpackChunkName: "pages/reservations" */))
const _0225278a = () => interopDefault(import('..\\pages\\resources.vue' /* webpackChunkName: "pages/resources" */))
const _c26c009a = () => interopDefault(import('..\\pages\\Roles.vue' /* webpackChunkName: "pages/Roles" */))
const _1ff0bb2e = () => interopDefault(import('..\\pages\\speakers.vue' /* webpackChunkName: "pages/speakers" */))
const _fb5efe1a = () => interopDefault(import('..\\pages\\sponsors.vue' /* webpackChunkName: "pages/sponsors" */))
const _5020d00e = () => interopDefault(import('..\\pages\\systemmodules.vue' /* webpackChunkName: "pages/systemmodules" */))
const _4e03c69c = () => interopDefault(import('..\\pages\\videos.vue' /* webpackChunkName: "pages/videos" */))
const _3bb93130 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/administrators",
    component: _f80aa0c0,
    name: "administrators"
  }, {
    path: "/bookings",
    component: _575b3b14,
    name: "bookings"
  }, {
    path: "/ChangePassword",
    component: _faf38736,
    name: "ChangePassword"
  }, {
    path: "/companies",
    component: _5cb4761e,
    name: "companies"
  }, {
    path: "/conferences",
    component: _2a98dc6d,
    name: "conferences"
  }, {
    path: "/currency",
    component: _2120e46b,
    name: "currency"
  }, {
    path: "/customers",
    component: _44c4926b,
    name: "customers"
  }, {
    path: "/dashboard",
    component: _cc5c6dac,
    name: "dashboard"
  }, {
    path: "/exchangerates",
    component: _8827de34,
    name: "exchangerates"
  }, {
    path: "/gamemanagement",
    component: _1f91468f,
    name: "gamemanagement"
  }, {
    path: "/groups",
    component: _f44445a4,
    name: "groups"
  }, {
    path: "/hotelreservation",
    component: _4f2ea072,
    name: "hotelreservation"
  }, {
    path: "/leaderboards",
    component: _7f9c7d20,
    name: "leaderboards"
  }, {
    path: "/login",
    component: _a869eb02,
    name: "login"
  }, {
    path: "/payments",
    component: _6ebbd4f2,
    name: "payments"
  }, {
    path: "/Profile",
    component: _43c8e51f,
    name: "Profile"
  }, {
    path: "/reservations",
    component: _33c43e81,
    name: "reservations"
  }, {
    path: "/resources",
    component: _0225278a,
    name: "resources"
  }, {
    path: "/Roles",
    component: _c26c009a,
    name: "Roles"
  }, {
    path: "/speakers",
    component: _1ff0bb2e,
    name: "speakers"
  }, {
    path: "/sponsors",
    component: _fb5efe1a,
    name: "sponsors"
  }, {
    path: "/systemmodules",
    component: _5020d00e,
    name: "systemmodules"
  }, {
    path: "/videos",
    component: _4e03c69c,
    name: "videos"
  }, {
    path: "/",
    component: _3bb93130,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
