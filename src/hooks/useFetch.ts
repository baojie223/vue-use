import { onUnmounted, ref, watchEffect } from 'vue'

const useFetch = (url: string, config?: RequestInit) => {
  const abortController = new AbortController()
  const loading = ref(false)
  const result = ref(null)

  watchEffect(() => {
    loading.value = true
    fetch(url, { ...config, signal: abortController.signal })
      .then((response) => response.json())
      .then((res) => (result.value = res))
      .catch((err) => console.error(err))
      .finally(() => (loading.value = false))
  })

  onUnmounted(() => abortController.abort())

  return { loading, result }
}

export default useFetch
