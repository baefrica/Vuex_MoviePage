import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/movie',
    component: Movie,
    // 하위 컴포넌트임
    children: [
      {
        path: "create",
        name: 'movie-create',
        component: () => import("@/components/movie/MovieCreate.vue")
      },

      {
        path: "",
        name: 'movie-list',
        component: () => import("@/components/movie/MovieList.vue")
      },
      {
        path: "detail",
        name: 'movie-detail',
        component: () => import("@/components/movie/MovieDetail.vue")
      },
      {
        path: "modify",
        name: 'movie-modify',
        component: () => import("@/components/movie/MovieModify.vue")
      },
    ],

    redirect: () => {
      return "/movie";
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;