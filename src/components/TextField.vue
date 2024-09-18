<template>
  <v-text-field :label='label' @input="handleInput" outlined />
</template>

<script>
export default {
  name: 'TextField', 

  props: {
    label: { type: String, default: '' },
  },

  data () {
    return {
      timeout: null,
    }
  },

  methods: {
    handleInput (event) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.$emit('input', event)
      }, 100)
    },
  }
}
</script>