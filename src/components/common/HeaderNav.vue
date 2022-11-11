<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand">영화 관리</a>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item"><router-link to="/" class="nav-link">HOME</router-link></li>
          <li class="nav-item"><router-link :to="{ name: 'movie-create' }" class="nav-link">영화 등록</router-link></li>
          <li class="nav-item"><router-link to="/movie" class="nav-link">영화 목록</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "HeaderNav",
  }
  </script>
  
  <style></style>