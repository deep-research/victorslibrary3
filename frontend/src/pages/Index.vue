<template>
  <Layout>
    <b-container>
      <b-row align-h="center">
        <b-col cols="10" class="welcome-quote">
          <p class="mb-0">"The individual has always had to struggle to keep from being overwhelmed by the tribe.
            If you try it, you will be lonely often, and sometimes frightened. But no price is too
            high to pay for the privilege of owning yourself."</p>
          <p class="text-center">- Rudyard Kipling</p>          
        </b-col>
      </b-row>
      <br />

      <div class="page-title-mobile">
        <h3 class="text-center">Home</h3>
        <br />
      </div>
      <b-row class="flex-column-reverse flex-md-row">
        <b-col md="8">
          <div class="page-title-desktop">
            <h3 class="text-center">Home</h3>
            <br />
          </div>

          <!-- <h4>News</h4>
          <ul>
            <li>1/2/21: The United States Congress will vote on the outcome of the 2020
              Presidential Election on the 6th of this month. President Trump will speak at a rally
              contesting the results of the election right before the vote. He alleges that there
              was widespread fraud in battleground states against his campaign.
            </li>
          </ul>
          <br /> -->

          <h4 id="updates">Updates</h4>
          <ul>
            <li>1/2/21: This is an experimental redesign of <a href="https://victorslibrary.com/"
              target="_blank">victorslibrary.com</a>. The <g-link to="/">Home</g-link> page has
              been created.</li>
          </ul>
          <br />

          <h4 id="topics">Topics</h4>
          <ul>
            <li><g-link to="/music">Music</g-link></li>
          </ul>
          <br />

          <h4 id="about">About</h4>
          <p>Victor's library contains multidisciplinary research on rock music and occult philosophy.
            Victor holds a bachelor’s degree in music and religion, and he is also interested in
            library science.</p>
          <p>Thank you for visiting! Questions and comments are welcome.</p>
          <b-container class="px-0">
            <b-button href="https://bandcamp.com/contact?b=1631569890"
              target="_blank">Contact Form</b-button>
          </b-container>
          <br />
          <p style="font-weight: bold;">Copyright © {{ new Date().getFullYear() }}
            by Victor Fisher</p>
          <br />

          <g-image style="display:block;" src="~/mushroom.svg" width="200"/>
          <br /><br />
        </b-col>
        <b-col md="4">
          <b-card title="Contents" class="bg-light contents">
            <b-card-text>
              <ol>
                <li><a href="#updates">Updates</a></li>
                <li><a href="#topics">Topics</a></li>
                <li><a href="#about">About</a></li>
              </ol>
            </b-card-text>
          </b-card>
          <br />
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
}
</script>

<style>
  .welcome-quote p {
    /* margin-right: 3rem;
    margin-left: 3rem; */
    font-size: 100%;
    line-height: 150%;
    color: #6c757d;
  }

  /* Indent Contents List */
  .contents ol {
    padding-left: 40px;
  }

  @media (max-width: 767px) {
    .page-title-desktop { 
      display: none;
    }
  }

  @media (min-width: 768px) {
    .page-title-mobile { 
      display: none;
    }
  }
</style>
