<template>
  <v-text-field :label='label' outlined />
</template>

<script>
export default {
  name: 'HelloWorld', 

  props: {
    label: { type: String, default: '' },
  }
}
</script>