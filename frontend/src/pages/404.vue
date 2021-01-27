<template>
  <Layout>
    <div class="pb-2">
      <b-container class="text-center py-4">
          <h3 class="mb-4">Page Not Found</h3>
          <h3 class="mb-4">⚠️</h3>
          <h3 class="mb-4">404 Error</h3>
          <b-button variant="primary" class="mr-3" g-link to="/">Home Page</b-button>
          <b-button variant="secondary" g-link @click="$router.go(-1)">Previous Page</b-button>
      </b-container>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page Not Found'
  }
}
</script>
