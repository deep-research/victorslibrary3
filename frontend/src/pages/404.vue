<template>
  <Layout>
    <b-container class="text-center">
        <h3 class="mt-4 mb-2">Page Not Found</h3>
        <h1 class="display-3 mb-4">404</h1>
        <b-button variant="primary" class="mr-3" g-link to="/">Return to Home</b-button>
        <b-button variant="secondary" g-link @click="$router.go(-1)">Previous Page</b-button>
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>
