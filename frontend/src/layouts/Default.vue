<template>
  <div class="layout">
    <b-navbar toggleable="sm" type="light" variant="light">
      <b-container>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand tag="h1" class="mb-0">
          <span class="site-title"><g-link to="/">{{ $static.metadata.siteName }}</g-link></span><br />
          <span class="site-subtitle">&#8239;Research on Music 
            <span class="site-subtitle-xs"><br />&#8239;</span>and 
            <span class="site-subtitle-sm"><br />&#8239;</span>Religion
          </span>
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav id="navbar-nav" class="ml-auto">
            <b-nav-item href="/"><b-icon-house-fill style="padding-bottom:5.5px" />Home</b-nav-item>
            <b-nav-item href="/music"><b-icon-music-note-beamed style="padding-bottom:5.5px" />Music</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <hr class="mt-0" />

    <slot/>
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
  ul {
    padding-left: 20px;
  }

  .site-title {
    font-family: 'Merienda One', Merriweather, lato,'helvetica neue', helvetica, arial, serif;
    font-size: 38px;
  }

 .site-title a, .site-title a:hover {
    text-decoration: none;
    color: black;
 }

  #navbar-nav a {
    text-decoration: none;
    color:rgba(0, 0, 0, 0.5)
 }

 #navbar-nav a:hover {
   color: rgba(0, 0, 0, 0.7)
 }

  /* .navbar.navbar-light.bg-light{
    background-color: blue !important;
    background-image: url("");
    padding-top: 0;
    margin-bottom: 0;
  } */

  @media only screen and (max-width: 420px) {
    .site-title {
      font-size: 27px;
      transition: .1s linear;
    }    
  }

  @media only screen and (max-width: 319px) {
    .site-title {
      font-size: 23px;
      transition: .1s linear;
    }    
  }  

  .site-subtitle {
    font-family: 'Gilda Display', lato,'helvetica neue', helvetica, arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    white-space: normal
  }

  .site-subtitle-sm {
    display: none
  }
  .site-subtitle-xs {
    display: none
  }

  p, ul, ol {
    line-height: 175%;
    font-size: 17.25px;
    font-family: 'Amiko','lato', lato, 'helvetica neue', helvetica, arial, sans-serif;
  }

  @media only screen and (max-width: 420px) {
    .site-subtitle {
      font-size: 16px;
      transition: .1s linear;
    }
  }

  @media only screen and (min-width: 335px) and (max-width: 360px) {
    .site-subtitle-sm {
      display: inline;
    }
  }

  @media only screen and (max-width: 335px) {
    .site-subtitle-xs {
      display: inline;
    }
    .navbar-brand {
      margin-right: 0px !important;
    }
  }
</style>
