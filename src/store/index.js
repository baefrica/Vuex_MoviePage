import Vue from 'vue'
import Vuex from 'vuex'
import http from "@/util/http-common"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoMsg: "Movie Information Page",
    movies: [],
    movie: {},
  },
  getters: {
    movies( state ) {
      return state.movies;
    },
    movie( state ) {
      return state.movie;
    },
  },
  mutations: {
    SET_MOVIES( state, payload ) {
      state.movies = payload;
    },
    
    SET_MOVIE( state, payload ) {
      state.movie = payload;
    }
  },
  actions: {
    getMovies( context ){
      http
      .get("")
      .then(({ data })=>{
        context.commit("SET_MOVIES", data);
      })
      .catch(()=>{
        alert("에러 발생!");
      });
    },

    getMovie( context, payload ){
      http
      .get( payload )
      .then(({ data })=>{
        context.commit("SET_MOVIE", data);
      });
    }
  },
  modules: {
  }
})
