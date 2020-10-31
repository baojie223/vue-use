<template>
  <h1>{{ loading }}</h1>
  <h2>{{ result }}</h2>
  <!-- <div>1</div> -->
</template>

<script lang="ts">
// import useFetch from '../src/useFetch'

export default {
  setup() {
    // const { loading, result } = useFetch('http://www.baidu.com')
    const { loading, result } = { loading: true, result: 'shit' }

    return {
      loading,
      result,
    }
  },
}
</script>