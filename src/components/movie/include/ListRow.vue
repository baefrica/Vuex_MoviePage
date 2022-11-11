<template>
  <tr>
    <td>{{ no }}</td>
    <!-- router-link를 연결 -->
    <td><router-link :to="`movie/detail?id=${ id }`">{{ title }}</router-link></td>
    <td>{{ director }}</td>
    <td>{{ genre }}</td>
    <td>{{ runningTime }}분</td>
  </tr>
</template>

<script>
export default {
    name: "ListRow",
    
    props: {
        no: String,
        id: Number,
        title: String,
        director: String,
        genre: String,
        runningTime: Number,
    },

    methods: {

    }

}
</script>

<style scoped>
td {
  text-align: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
}
</style>