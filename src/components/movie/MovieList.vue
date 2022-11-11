<template>
    <div>
    <h1 class="underline">영화 목록</h1>
    <div style="text-align: left">
      <button class="btn btn-primary" @click="movePage">영화 등록</button>
    </div>
    <br/>
    <div v-if="movies.length">
      <table class="table table-hover" id="movie-list">
        <colgroup>
          <col style="width: 5%" />
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 15%" />
        </colgroup>
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>감독</th>
            <th>장르</th>
            <th>상영 시간</th>
          </tr>
        </thead>
        <tbody>
          <list-row
            v-for="(movie, index) in movies"
            :key="index"
            :no="`${index + 1}`"
            :id="movie.id"
            :title="movie.title"
            :director="movie.director"
            :genre="movie.genre"
            :runningTime="movie.runningTime"
          />
        </tbody>
      </table>
    </div>
    <div v-else>등록된 영화가 없습니다.</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/movie/include/ListRow.vue";

export default {
    name: "MovieList",

    components: {
        ListRow,
    },

    computed: {
      ...mapGetters([
        "movies"
      ])
    },

    created() {
      console.log("MovieList.vue 의 created() 됨");

      this.$store.dispatch("getMovies");

      // http.get('').then(({ data }) => {
      //     this.movies = data;
      // })
    },

    methods: {
        movePage() {
          console.log("목록 페이지에서 등록 페이지로 갈거야");
          this.$router.push({ name: "movie-create" });
        },
    }
}
</script>

<style scoped>
#movie-list {
  border-collapse: collapse;
  width: 100%;
}

#movie-list thead {
  background-color: #ccc;
  font-weight: bold;
}

#movie-list td,
#movie-list th {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>