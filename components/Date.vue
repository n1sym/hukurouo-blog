<template>
  <div>
    {{ formatDate }}
  </div>
</template>

<script>
export default {
  props: {
    date: ""
  },
  computed: {
    formatDate: function () {
      return String(this.date).substring(0, 10) + ' :'
    }
  }
}
</script>