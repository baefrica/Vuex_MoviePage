<template>
  <!-- v-if="movie" -->
    <div  class="regist">
        <h1 class="underline">영화 상세 정보</h1>
        <div class="regist_form">
            <fieldset class="detail-content">
                <label for="title">제목</label>
                <div class="view">{{ movie.title }}</div><br/>
                <label for="director">감독</label>
                <div class="view">{{ movie.director }}</div><br/>
                <label for="genre">장르</label>
                <div class="view">{{ movie.genre }}</div><br/>
                <label for="runningTime">상영 시간</label>
                <div class="view">{{ movie.runningTime }} 분</div>
                <label for="likeCnt">좋아요</label>
                <div class="view">{{ movie.likeCnt }}</div>
            </fieldset>
            <div style="padding-top: 15px">
                <router-link to="/movie" class="btn btn-info">목록</router-link> |
                <button type="button" @click="modifyMovie(movie)" class="btn btn-secondary">수정</button> |
                <button type="button" class="btn btn-danger" @click="deleteMovie">삭제</button>
                <div style="text-align: right">
                  <button style="color: red; border-color: red;" class="bi bi-heart" @click="countLike">Like</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

export default {
    name: "ViewDetail",

    computed: {
      ...mapState(["movie"])
    },

    methods: {
      modifyMovie(movie) {
        // console.log(this.$route.query)
        this.$router.push(`/movie/modify?id=${ movie.id }`);
      },

      countLike() {
        this.movie.likeCnt++;
        http
        .put(`/${this.movie.id}`, this.movie )
        .then(() => {
          alert("좋아요 클릭")
        });
      },

      deleteMovie() {
        http
        .delete(`/${this.movie.id}`, this.movie.id )
        .then(() => {
          alert("삭제되었습니다.")
          this.$router.push("/movie");
        })
      }
    }
}
</script>

<style scoped>
.regist {
  padding: 10px;
}
.regist_form {
  text-align: left;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}

.view {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}

.like_btn {
  background-color: rgb(236, 172, 172);
}
</style>