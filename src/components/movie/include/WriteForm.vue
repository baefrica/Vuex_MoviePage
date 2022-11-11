<template>
    <div class="regist">
        <h1 v-if="type == 'create'" class="underline">영화 등록</h1>
        <div class="regist_form">
            <label for="title">제목</label>
            <input type="text" id="title" name="title" v-model="title" ref="title" />
            <label for="director">감독</label>
            <input type="text" id="director" name="director" v-model="director" ref="director" /><br />
            <label for="genre">장르</label>
            <input type="text" id="genre" name="genre" v-model="genre" ref="genre" /><br />
            <label for="runningTime">상영 시간</label>
            <input type="number" id="runningTime" name="runningTime" v-model="runningTime" ref="runningTime" /><br />
            <button class="btn btn-warning" v-if="type == 'create'" @click="registMovie">등록</button>
            <button class="btn btn-warning" v-if="type == 'modify'" @click="registMovie">수정 완료</button> |
            <button class="btn btn-info" @click="moveList">목록</button>
        </div>
    </div>
</template>

<script>
import http from "@/util/http-common";

export default {
    name: "WriteForm",

    props: {
        type: { type: String }
    },

    data() {
        return {
            id: "",
            title: "",
            director: "",
            genre: "",
            runningTime: "",
        }
    },

    created() {
        console.log("created() !!!")

        if(this.type === "modify") {
            console.log("type 이 modify 야");

            http.get(`/${ this.$route.query.id }`).then(({ data }) => {
                this.id = data.id;
                this.title = data.title;
                this.director = data.director;
                this.genre = data.genre;
                this.runningTime = data.runningTime;
                console.log("수정준비")
            }).catch(() => {
                console.log("수정준비실패")
            })
        }
        else {
            console.log("type : " + this.type)
        }
    },

    methods: {
        registMovie() {
            // 유효성 검사
            if(this.title.length === 0) {
                alert("제목을 입력해주세요.");
                this.$refs.title.focus();
                return;
            }

            if(this.director.length === 0) {
                alert("감독을 입력해주세요.");
                this.$refs.director.focus();
                return;
            }

            if(this.genre.length === 0) {
                alert("장르를 입력해주세요.");
                this.$refs.genre.focus();
                return;
            }

            if(this.runningTime.length === 0) {
                alert("상영시간을 입력해주세요.");
                this.$refs.runningTime.focus();
                return;
            }

            if(this.type === "create") {
                console.log("type 이 create 야");

                http.post('/', {
                    title: this.title,
                    director: this.director,
                    genre: this.genre,
                    runningTime: this.runningTime
                }).then(({ data }) => {
                    let msg = "등록 처리 시 문제가 발생했습니다.";

                    if( data === "success" ) {
                        msg = "등록 완료"
                    }
                    alert(msg);
                    this.moveList();
                }).catch(() => {
                    console.log("등록 실패")
                })
            }

            if(this.type === "modify") {
                console.log("type : " + this.type);

                http.put(`/${this.$route.query.id}`, {
                    id: this.$route.query.id,
                    title: this.title,
                    director: this.director,
                    genre: this.genre,
                    runningTime: this.runningTime
                }).then(() => {
                    console.log("수정 완료");
                    alert("수정 완료")
                    this.$router.push("/movie");
                }).catch(() => {
                    console.log("수정 실패")
                })
            }
        },

        moveList() {
            console.log("등록 페이지에서 목록 페이지로 이동할거야");
            this.$router.push("/movie");
        }
    }
};
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
</style>