<template>
  <Layout>
    <b-container>
      <h3 class="text-center">Home</h3>
      <br />

      <h4>News</h4>
      <ul>
        <li>1/2/21: This is an experimental redesign of <a href="https://victorslibrary.com/" target="_blank">victorslibrary.com</a>.</li>
      </ul>
      <br />

      <h4>Updates</h4>
      <ul>
        <li>1/2/21: The <g-link to="/">Home</g-link> page has been updated.</li>
      </ul>
      <br />

      <h4>Topics</h4>
      <ul>
        <li><g-link to="/original-music">Original Music</g-link></li>
      </ul>
      <br />

      <h4>About</h4>
      <p>Victor's library contains research on rock music and occult philosophy. Victor holds a bachelor’s degree in music and religion, and he is also interested in library science.</p>
      <p>Thank you for visiting! Questions and comments are welcome:</p>
      <b-container class="px-0">
        <b-button href="https://bandcamp.com/contact?b=1631569890" target="_blank">Contact Form</b-button>
      </b-container>
      <br />
      <p style="font-weight: bold;">© {{ new Date().getFullYear() }} Victor Fisher</p>
      <br />
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
