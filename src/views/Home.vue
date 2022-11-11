<template>
    <div class="text-bg-secondary p-3" >
      <div class="main">
        <h1 class="jumbotron text-center">{{ $store.state.infoMsg }}</h1>
        <div class="text-center">
          <img name="movie_logo" src="../assets/MovieAndPopcorn.jpg" class="rounded">
          <!-- <img name="ssafy_logo" src="../assets/ssafy_logo.png" class="rounded"> -->
        </div>
      </div>
      <hr color="grey"/>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "MainPage",

    components: {

    }
  }
  </script>
  
  <style>
  .text-center {
    text-align: center;
    height: auto
  }
  
  .main {
      text-align: center;
  }
  </style>