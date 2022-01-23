<template>
  <div class="add-card">
    <form>
      <input class="form-control" type="text" v-model="inputTitle" ref="inputText">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancel-add-btn" href="" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputTitle: ''
    }
  },
computed: {
  invalidInput() {
    return !this.inputTitle.trim()
  }
},
  mounted () {
    this.$refs.inputText.focus()
  }
}

</script>
