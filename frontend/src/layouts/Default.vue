<template>
  <div class="d-flex flex-column min-vh-100">
    <nav>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-container>
          <b-navbar-toggle target="nav-text-collapse" />

          <!-- Website Title -->
          <b-navbar-brand tag="h1" class="mb-0">
            <div class="site-title"><g-link to="/">{{ $static.metadata.siteName }}</g-link></div>
            <div class="site-subtitle pl-3">Research on Music<br />
              <span class="site-subtitle-2">and Religion</span>
            </div>
          </b-navbar-brand>

          <!-- Navbar Navigation Menu -->
          <b-collapse id="nav-text-collapse" is-nav toggleable="lg">
            <b-navbar-nav id="navbar-nav" class="ml-auto">
              <b-nav-item g-link to="/">
                <!-- House icon -->
                <b-icon-house-fill class="navbar-nav-icon" />Home
              </b-nav-item>
              <b-nav-item g-link to="/songs/">
                <!-- Songs Note icon -->
                <b-icon-music-note-beamed class="navbar-nav-icon" />Songs
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <hr class="mt-0 mb-0" />
    </nav>
    <main class="flex-fill">
      <slot />
    </main>

    <footer class="text-center my-4">
      © {{ new Date().getFullYear() }} Victor Fisher
    </footer>
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
  /* Remove list Indentation */
  ul, ol {
    padding-left: 20px;
  }

  /* Google Font for Title */
  .site-title {
    font-family: 'Merienda One', Merriweather, lato,'helvetica neue', helvetica, arial, serif;
    font-size: 27.5px !important;
  }

  /* Remove Title link formatting */
  .site-title a, .site-title a:hover {
    text-decoration: none;
    color: black;
 }

  /* Google Font for Subtitle */
  .site-subtitle {
    font-family: 'Gilda Display', lato,'helvetica neue', helvetica, arial, sans-serif;
    font-weight: bold;
    font-size: 18.5px !important;
  }

  .site-subtitle-2 {
    padding-left: 2px;
  }

  /* Google Font for body text */
  p, ul, ol {
    line-height: 175%;
    font-size: 17.25px;
    font-family: 'Amiko','lato', lato, 'helvetica neue', helvetica, arial, sans-serif;
  }

  /* Vertically center Navbar Nav icons */
  .navbar-nav-icon {
    padding-bottom:5.5px
  }

  h3 {
    margin-bottom: 24px !important;
  }

  h4 {
    margin-bottom: 12px !important;
    margin-top: 24px !important;
  }

  html {
    scroll-behavior: smooth !important;
  }

  ::selection {
    background-color: #C3DAFE;
  }
  ::-moz-selection {
    background-color: #C3DAFE;
  }
</style>
