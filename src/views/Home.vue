<template>
  <div class="home">
    <pageHeader/>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
     PageHeader
  }
}
</script>
