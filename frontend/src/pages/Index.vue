<template>
  <Layout>
    <b-container>
      <b-row align-h="center">
        <b-col cols="10" class="welcome-quote">
          <p class="mb-0 mt-3">"The individual has always had to struggle to keep from being overwhelmed by the tribe.
            If you try it, you will be lonely often, and sometimes frightened. But no price is too
            high to pay for the privilege of owning yourself."</p>
          <p class="text-center mb-0">- Rudyard Kipling</p>          
        </b-col>
      </b-row>

      <div class="page-title-mobile">
        <h3 class="text-center">Home</h3>
      </div>
      <b-row class="flex-column-reverse flex-lg-row">
        <b-col lg="8">
          <div class="page-title-desktop">
            <h3 class="text-center">Home</h3>
          </div>

          <h4 id="updates">Updates</h4>
          <ul>
            <li>1/2/21: This is an experimental redesign of <a href="https://victorslibrary.com/"
              target="_blank">victorslibrary.com</a>. The <g-link to="/">Home</g-link> page has
              been created.</li>
          </ul>

          <h4 id="topics">Topics</h4>
          <ul>
            <li><g-link to="/music/">Music</g-link></li>
          </ul>

          <h4 id="about">About</h4>
          <p>Victor's library contains multidisciplinary research on rock music and spirituality.
            Victor holds a bachelor’s degree in music and religion, and he is also interested in
            library science.</p>
          <p>Thank you for visiting! Questions and comments are welcome.</p>
          <b-container class="px-0 mb-4">
            <b-button href="https://bandcamp.com/contact?b=1631569890"
              target="_blank">Contact Form</b-button>
          </b-container>
          <p><a href="#top" @click.stop>Back to top of page.</a></p>

          <g-image id="mushroom" class="mb-2 mt-4" src="~/mushroom.svg" width="200" />
        </b-col>
        <b-col lg="4">
          <b-card title="Contents" class="bg-light contents">
            <ol>
              <li><b-link href="#updates" class="card-link" @click.stop>Updates</b-link></li>
              <li><b-link href="#topics" class="card-link" @click.stop>Topics</b-link></li>
              <li><b-link href="#about" class="card-link" @click.stop>About</b-link></li>
            </ol>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Home'
    }
    // methods: {
    //   mounted () {
    //     window.scrollTo(0, 0)
    //   }
    // }
  }
</script>

<style>
  .welcome-quote p {
    font-size: 100%;
    line-height: 150%;
    color: #6c757d;
  }

  .welcome-quote {
    margin-bottom: 24px;
  }

  /* Indent Contents List */
  .contents ol {
    padding-left: 40px;
  }

  @media (max-width: 991px) {
    .page-title-desktop { 
      display: none;
    }

    .contents {
      max-width: 308px;
    }
  }

  @media (min-width: 992px) {
    .page-title-mobile { 
      display: none;
    }
  }

  #mushroom {
    display: block;
  }

  .contents .card-title {
    margin-top: 16px !important;
  }
</style>
