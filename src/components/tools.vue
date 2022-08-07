<template>
  <div class="tools-component">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'tools',
  data () {
    return {
      msg: 'tools page'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
