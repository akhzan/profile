<template>
  <div class="container">
    <div class="header">
        <router-link class="x-button" to="/">&#x2716</router-link>
        <div class="nav">
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
    <div class="pf-content">
        <div class="pf-img-bg">
            <img v-if="selectedPortfolio.code == 'sam'" src="./../../assets/sam.png" alt="x" />
            <img v-if="selectedPortfolio.code == 'porse'" src="./../../assets/quiz.png" alt="x" />
            <img v-if="selectedPortfolio.code == 'ehs'" src="./../../assets/ehs.png" alt="x" />
        </div>
        <div class="pf-title">{{selectedPortfolio.title}}</div>
        <div class="pf-acronym">{{selectedPortfolio.acronym}}</div>
        <p class="block pf-desc"><i>{{selectedPortfolio.desc}}</i></p>
        <div class="pf-add">
            <div class="block wow fadeInUp">
                <div class="pf-add-title">Status</div>
                <div class="pf-add-items">
                    <div>{{selectedPortfolio.status}}</div>
                </div>
            </div>
            <div class="block wow fadeInUp">
                <div class="pf-add-title">Roles</div>
                <div class="pf-add-items">
                    <div v-for="item in selectedPortfolio.roles" :key="item">{{item}}</div>
                </div>
            </div>
            <div class="block wow fadeInUp">
                <div class="pf-add-title">Technologies</div>
                <div class="pf-add-items">
                    <div v-for="item in selectedPortfolio.technologies" :key="item">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
      return {
          selectedPortfolio: {},
          portfolios: [{
              code: 'sam',
              title: 'SAM Advance',
              acronym: 'Sales Activity Management',
              desc: 'A progressive web app - mobile web based application, used for automative sales transaction by Toyota Sales Operation (Auto2000) accross Indonesia.',
              status: 'Done, additional features in development',
              roles: ['Frontend Developer ( July 2017 - present )', 'Fullstack Developer ( August 2016 - June 2017 )'],
              technologies: ['C# .Net Web API, Oauth 2.0, Microsoft SQL Server', 'Angular JS, Progressive Web App']
          },{
              code: 'porse',
              title: 'PORSE Quiz Astra',
              acronym: 'Astra - Pekan Olahraga dan Seni - Smart Quiz',
              desc: 'A web based application, used for smart quiz at PORSE Astra. It uses realtime mechanism to show the answers of all quiz participants while participants use ipad to answer the questions.',
              status: 'Done',
              roles: ['Developer ( September 2017 )'],
              technologies: ['Vanilla JS, jQuery, Socket.io, Express JS, Mongoose, Mongo DB']
          },{
              code: 'ehs',
              title: 'Lab EHS',
              acronym: '\'Laboratorium Lingkungan\' Astra International',
              desc: 'A web based application, used for smart quiz at PORSE Astra. It uses realtime mechanism to show the answers of all quiz participants while participants use ipad to answer the questions.',
              status: 'Done',
              roles: ['Developer ( September 2017 )'],
              technologies: ['Vanilla JS, jQuery, Socket.io, Express JS, Mongoose, Mongo DB']
          }]
      }
  },
  created() {
      this.selectedPortfolio = this.portfolios.find(x => x.code == this.$route.params.code)
      window.scrollTo(0, 0);
  }
};
</script>

<style lang="scss">
@import "./../../main.scss";
.pf-content {
    margin-top: 50px;
    width: 100%;
}
.pf-title {
    font-size: 2rem;
    font-weight: bolder;
    margin-top: 20px;
}
.pf-acronym {
    margin-bottom: 10px;
}
.pf-desc {
    font-size: 0.9rem;
    line-height: 1rem;
    padding: 10px 0;
}
.pf-img-bg {
    width: 100%;
    height: 40vh;
    background-color: $primary-color;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 70%;
    }
}
.pf-add {
    line-height: 1.4rem;
}
.pf-add-title {
    font-weight: bold;
}
</style>
