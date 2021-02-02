<template>
  <Layout>
    <b-container>
      <br />
      <h3>Title: {{ $page.article.title }}</h3>
      <p class="intro">Summary: {{ $page.article.summary }}</p>
      <p>Content:</p>
      <VueRemarkContent />
    </b-container>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query article ($id: ID!) {
  article(id: $id) {
    title
    summary
  }
}
</page-query>