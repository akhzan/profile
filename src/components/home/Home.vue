<template>
    <div class="container">
        <div class="header">
            <div class="logo">Syafrizal Akhzan</div>
            <div class="nav">
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
        </div>
        <div class="mid-content">
            <div>frontend web developer, based in Jakarta</div>
        </div>
        <div class="portfolios">
            <div class="split-portfolios">
                <router-link to="/portfolios/sam" class="portfolios-item">
                    <div v-on:mouseover="project0=true" v-on:mouseleave="project0=false">
                        <div class="portfolio-img-container tall">
                            <img key="img" v-show="!project0" class="img-small" src="./../../assets/sam.png" alt="x" />
                            <div key="title" v-show="project0" class="portfolio-img-container-fill">
                                SAM
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/portfolios/porse" class="portfolios-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div href="/" v-on:mouseover="project1=true" v-on:mouseleave="project1=false">
                        <div class="portfolio-img-container short">
                            <img v-show="!project1" class="img-small-width" src="./../../assets/quiz.png" alt="x" />
                            <div v-show="project1" class="portfolio-img-container-fill">
                                PORSE QUIZ
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="split-portfolios">
                <router-link to="/portfolios/ehs" class="portfolios-item wow fadeInUp" data-wow-duration="1s">
                    <div v-on:mouseover="project2=true" v-on:mouseleave="project2=false">
                        <div class="portfolio-img-container short">
                            <img v-show="!project2" class="img-small" src="./../../assets/ehs.png" alt="x" />
                            <div v-show="project2" class="portfolio-img-container-fill">
                                LAB EHS
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="experience wow fadeInUp">
                <div class="experience-title">job experiences</div>
                <div class="experience-item">
                    <div class="exp-title">Frontend Developer</div>
                    <div class="exp-company">Astra International Project - Astra Graphia Information Technology</div>
                    <div class="exp-time">July 2017 - present</div>
                </div>
                <div class="experience-item">
                    <div class="exp-title">Fullstack Developer</div>
                    <div class="exp-company">Astra International Project - Astra Graphia Information Technology</div>
                    <div class="exp-time">January 2015 - June 2017</div>
                </div>
                <div class="experience-item">
                    <div class="exp-title">Management Trainee</div>
                    <div class="exp-company">Astra Graphia Information Technology</div>
                    <div class="exp-time">December 2014 - December 2015</div>
                </div>
            </div>
            <div class="skills wow fadeInUp">
                <div class="skill-container">
                    <div class="skill-content wow fadeInUp">
                        <div class="skill-header">
                            <div class="skill-title">
                                <div>Frontend Technologies</div>
                            </div>
                        </div>
                        <div class="skill-items">
                            <div class="skill-item" v-for="item in skills.fronts" :key="item.description">
                                <div class="skill-item-desc">{{item.description}}</div>
                                <div class="skill-item-score">
                                    <div class="skill-item-score-circle" v-bind:class="{ 'filled': index <= item.score }" v-for="index in 5" :key="index"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="skill-container">
                    <div class="skill-content small top wow fadeInUp">
                        <div class="skill-header">
                            <div class="skill-title">
                                <div>Backend Technologies</div>
                            </div>
                        </div>
                        <div class="skill-items">
                            <div class="skill-item" v-for="item in skills.backs" :key="item.description">
                                <div class="skill-item-desc">{{item.description}}</div>
                                <div class="skill-item-score">
                                    <div class="skill-item-score-circle" v-bind:class="{ 'filled': index <= item.score }" v-for="index in 5" :key="index"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-content small wow fadeInUp">
                        <div class="skill-header">
                            <div class="skill-title">
                                <div>Other Technologies</div>
                            </div>
                        </div>
                        <div class="skill-items">
                            <div class="skill-item" v-for="item in skills.others" :key="item.description">
                                <div class="skill-item-desc">{{item.description}}</div>
                                <div class="skill-item-score">
                                    <div class="skill-item-score-circle" v-bind:class="{ 'filled': index <= item.score }" v-for="index in 5" :key="index"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      project0: false,
      project1: false,
      project2: false,
      skills: {
        fronts: [
          {
            description: "Angular JS",
            score: 4
          },
          {
            description: "React JS",
            score: 3
          },
          {
            description: "Vue.js",
            score: 3
          },
          {
            description: "Angular 4",
            score: 2
          },
          {
            description: "jQuery",
            score: 3
          },
          {
            description: "Polymer",
            score: 2
          },
          {
            description: "ES6",
            score: 4
          },
          {
            description: "NPM",
            score: 4
          },
          {
            description: "Gulp",
            score: 4
          },
          {
            description: "Webpack",
            score: 4
          },
          {
            description: "SCSS",
            score: 5
          },
          {
            description: "Responsive Design with CSS3",
            score: 4
          },
          {
            description: "Bootstrap",
            score: 2
          },
          {
            description: "RxJS",
            score: 1
          }
        ],
        backs: [
          {
            description: "C#, ASP .Net, .Net Web API",
            score: 5
          },
          {
            description: "Node JS + Express JS",
            score: 2
          },
          {
            description: "Microsoft SQL Server",
            score: 5
          },
          {
            description: "Mongo DB",
            score: 2
          }
        ],
        others: [
          {
            description: "GIT",
            score: 4
          },
          {
            description: "Team Foundation Server",
            score: 4
          },
          {
            description: "Jenkins (CI)",
            score: 2
          },
          {
            description: "Design Tools",
            score: 3
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import "./../../main.scss";
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
.mid-content {
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 4.5rem;
}
.portfolios {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.split-portfolios {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-left: -10px;
  margin-right: -10px;
}
.portfolios-item {
  width: calc(100% - 20px);
  padding: 10px;
  text-decoration: none;
}

.portfolio-img-container {
  background-color: $primary-color;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &.tall {
    height: 60vh;
  }

  &.short {
    height: 50vh;
  }

  .img-small {
    height: 60%;
  }

  .img-big {
    height: 75%;
  }

  .img-small-width {
    width: 75%;
  }
}

.more-portfolios {
  padding: 10px 0;
  display: flex;
  justify-content: center;

  button {
    padding: 10px;
    background: none;
    border: 1px solid $primary-color;
    border-radius: 2px;
    cursor: pointer;
    font-weight: bold;
    color: $primary-color;
  }
}

.skills {
  margin-top: 100px;
  background-color: $primary-color;
  height: 500px;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.skill-container {
  height: 100%;
  width: calc(100%/2 - 10px);
}
.skill-content {
  background-color: $third-color;
  height: 100%;
  width: 100%;
  &.small {
    height: calc(100%/2 - 10px) !important;
  }
  &.top {
    margin-bottom: 20px;
  }
}
.skill-header {
  height: 100px;
  width: 100%;
  // background-color: $secondary-color;
  background-color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: flex-end;
}
.skill-title {
  padding: 20px;

  div {
    padding: 10px 0;
    border-bottom: 1px solid $primary-color;
    font-weight: 500;
  }
}
.skill-items {
  color: white;
  font-size: 0.8rem;
  padding: 20px;
}
.skill-item {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
}

.skill-item-score {
  display: flex;
  justify-content: center;
}

.skill-item-score-circle {
  width: 8px;
  height: 8px;
  margin: 1px;
  border: 1px solid white;
  border-radius: 50%;

  &.filled {
    background-color: white;
  }
}

.experience {
  margin-top: 70px;
  line-height: 1.5rem;
}
.experience-title {
  font-weight: bold;
  font-size: 1.8rem;
  padding: 20px 0;
  margin-bottom: 10px;
}
.experience-item {
  margin-bottom: 20px;
}
.exp-title {
  font-weight: bold;
}

.portfolio-img-container-fill {
  background-color: darkgrey;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.2rem;
  font-weight: bolder;
  color: white;
  text-align: center;
}
</style>
