<template>
<div>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-container>
      <b-navbar-brand href="#" tag="h1" class="mb-0">Victor's Library</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>Research on Music and Religion</b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Music</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
  <hr class="mt-0" />
</div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<style>
.navbar-nav .navbar-text {
    color: rgba(0, 0, 0, 0.9);
}
</style>
