<template>
  <div class="layout">
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand tag="h1" class="mb-0"><span id="title">{{ $static.metadata.siteName }}</span><br /><span id="subtitle">&#8239;Research on Music <span id="subtitle-xs"><br />&#8239;</span>and <span id="subtitle-sm"><br />&#8239;</span>Religion</span></b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item>Songs</b-nav-item>
            <b-nav-item>About</b-nav-item>
            <b-nav-item>Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <hr class="mt-0" />
    </div>

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
  #title {
    font-family: 'Merienda One', Merriweather, lato,'helvetica neue', helvetica, arial, serif;
    font-size: 30px;
  }

  @media only screen and (max-width: 415px) {
    #title {
      font-size: 27px;
      transition: .1s linear;
    }    
  }

  @media only screen and (max-width: 320px) {
    #title {
      font-size: 23px;
      transition: .1s linear;
    }    
  }  

  #subtitle {
    font-family: 'Gilda Display', lato,'helvetica neue', helvetica, arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    white-space: normal
  }

  #subtitle-sm {
    display: none
  }
  #subtitle-xs {
    display: none
  }

  @media only screen and (max-width: 415px) {
    #subtitle {
      font-size: 18px;
      transition: .1s linear;
    }
  }

  @media only screen and (max-width: 390px) and (min-width: 335px) {
    #subtitle-sm {
      display: inline;
    }
  }

  @media only screen and (max-width: 335px) {
    #subtitle-xs {
      display: inline;
    }
    .navbar-brand {
      margin-right: 0px !important;
    }
  }
</style>
