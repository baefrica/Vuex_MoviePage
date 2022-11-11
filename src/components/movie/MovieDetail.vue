<template>
    <div>
      <view-detail></view-detail>
    </div>
</template>

<script>
import ViewDetail from "@/components/movie/include/ViewDetail.vue";

export default {
  name: "MovieDetail",

  components: {
    ViewDetail,
  },

  created() {
    console.log("MovieDetail.vue 의 created() 실행됨");
    console.log("type : " + this.type);

    console.log(this.$route.query.no);
    this.$store.dispatch("getMovie", `/${this.$route.query.id}`);

    // http.get('').then(({ data }) => {
    //    // url 에서 파라미터 정보 얻기
    //   const params = new URL(document.location).searchParams;
      
    //   for(let m of data) {
    //     if(params.get("title") === m.title) {
    //       this.movie = m;
    //       break;
    //     }
    //   }
      
      // http.get(`/${this.$route.query.no}`).then(({ data }) => {
        // console.log(this.$route.query.no);
        // console.log(data);
        // this.movie=data;
      // });
        
  }
}
</script>

<style>
.view {
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #787878;
  font-size: medium;
}

label {
  display: inline-block;
  width: 130px;
}
</style>