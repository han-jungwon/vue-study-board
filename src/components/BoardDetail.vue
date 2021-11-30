<template>
  <div>
    Board Detail
    <div v-if="loading">게시글 로딩중</div>
    <div v-else>did : {{ did }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      did: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      setTimeout(() => {
        this.did = this.$route.params.did
        this.loading = false
      }, 500)
    }
  }

}

</script>

<style>

</style>
