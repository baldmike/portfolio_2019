<template>
    <div class="container-fluid">
        
        <div class="parallax parapic1" id="top">
            <div class="headline">
                <p>I'M BALD MIKE.</p>
                <p>I BUILD WEB APPLICATIONS.</p>
            </div>
        </div>

        <div class="credit">
            <p style="font-size: .6rem;">Photo by Ales Nesetril on Unsplash</p>
        </div>

        <div class="white-bar" id="nav">
            <b-row>
                <b-col cols="12" sm="3">
                    <button class="about button" @click="$bvModal.show('aboutModal')">ABOUT</button>
                </b-col>
                
                <b-col cols="12" sm="3">
                    <button class="projects button" @click="goto('projects')" id="projectsButton">PROJECTS</button>
                </b-col>

                <b-col cols="12" sm="3">
                    <a href="https://github.com/baldmike" target="_blank"><button id="github-desc" class="github-desc button">GITHUB</button></a>
                </b-col>
                
                <b-col cols="12" sm="3">
                    <button class="contact button" @click="goto('contactSection')" id="contact">CONTACT</button>
                </b-col>
            </b-row>
        </div>
        

        <div class="parallax parapic2 nophone"></div>

        <div class="shout" id="projects">
            <h1>PROJECTS</h1>
        </div>
        <div class="white-bar">
            <b-row>
                <b-col cols="12" sm="3">
                    <button @click="$bvModal.show('rooModal')" id="rooButton" class="roo button"></button>
                </b-col>
                
                <b-col cols="12" sm="3">
                    <button class="gmap button" @click="$bvModal.show('gmapModal')"></button>
                </b-col>
                
                <b-col cols="12" sm="3">
                    <button class="regroup button" id="regroupButton" @click="$bvModal.show('regroupModal')"></button>
                </b-col>

                <b-col cols="6" sm="3">
                  <b-button class="button"><router-link to="/resqmia">resQmia</router-link></b-button>
                </b-col>
            </b-row>
        </div>

        <div class="parallax parapic4 nophone" id="testimonySection"></div>

        <div class="credit">
            <p style="font-size: .6rem;" class="nophone">Photo by Dean Brierley on Unsplash</p>
        </div>

        <div class="shout">
            <h1>KIND WORDS</h1>
        </div>

        <div class="testimony-box">
            <p>"Mike came along at a time when we were having major website issues, causing many frustrated users to not be able to successfully donate or apply. I was so sick of dealing with people that never responded or could not fix our issues. Mike came swooping in and fixed all of our issues, made our site uber user-friendly, and built a gorgeous, informative brand new webapp."</p>

            <p>Sarah Lauch, Founder, The Live Like Roo Foundation</p>
        </div>
        
        <div class="parallax parapic3 nophone"></div>    
        
        
        <div>
            <div class="shout">
            <h1>CONTACT BALD MIKE</h1>
        </div>
        

        <div class="white-bar" id="contactSection">    
            <b-row>
                <b-col cols="12" sm="3">
                    <a href="mailto:baldmike312@gmail.com"><button class="email button"><img src="/images/icons8-email-96.png"></button></a>
                </b-col>

                <b-col cols="12" sm="3">
                    <a href="https://www.linkedin.com/in/baldmike/" target="_blank"><button class="contact button"><img src="/images/icons8-linkedin-96.png"></button></a>
                </b-col>
            
                <b-col cols="12" sm="3">
                    <a href="https://www.twitter.com/baldmikesays" target="_blank"><button id="twitterButton" class="button"><img src="/images/icons8-twitter-96.png"></button></a>
                </b-col>

                <b-col cols="12" sm="3">
                    <a href="https://www.github.com/baldmike" target="_blank"><button class="button"><img src="/images/icons8-github-96.png"></button></a>
                </b-col>      
            </b-row>
        </div>
        </div>

        <b-row class="api-strip">
            <b-col cols="4">
                <p>{{ temp }}&deg;</p>
            </b-col>
            <b-col cols="4">
                <p>{{ theTime }}</P>
            </b-col>
            <b-col cols="4">
                <p>{{ weatherData.name }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="4" offset="4">
                <div class="copyright" style="text-align: center">
                    &copy; {{year}}
                    <a href="https://github.com/baldmike" target="_blank">Bald Mike</a>
                </div>
            </b-col>
        </b-row>
        <!-- <a href="https://icons8.com">Icons by Icons8</a> -->

    <!-- About Modal -->
    <b-modal id="aboutModal" title="Who is Bald Mike?" hide-footer no-close-on-backdrop>
      <b-row>
      
        <b-col cols="6">
          <p>Dog-lovin', bath-takin', foul-mouthed, kind-hearted, justice-demanding, truth-seeking, equality-driven bald hippie who sprinkles his rose-colored views with just enough pragmatism to keep him from dancing at many, but not all, inappropriate times. I can sing the entire beginning of "The Girl From Ipanema" in Portuguese.</p>
        </b-col>

        <b-col cols="6">
          <img src="images/baldNchop.png" alt="Bald Mike Himself" width="100%">
        </b-col>

      </b-row>
      <p>I'm also a pretty nimble PHP/Laravel and JavaScript/Vue.js web developer who delivers, on time. I'm fluent in Git, and equally comfortable on either "end." I've deployed to AWS and Digital Ocean, and I'd rather SSH than GUI. I've designed, architected, developed, deployed and maintained in PHP, Python, C# and the MEAN stack.</p>

      <p>After many years building teams and leading people, it was time for me to shift my focus back to my childhood dream of controlling the robots before they control us. And, for the last two years I've been doing just that. I began this chapter of my life by attending a coding bootcamp, which laid the foundation for a lifetime of learning.</p>

      <p>I approach each problem the exact same way:  If ~someone~ can solve this, then ~I~ can solve this. And then I don't give up until it's solved. I learned this technique from my dog, who could also use a job.</p>

      <p>And while I may have a personality and a sense of humor, I take my work, and the success of any team I am a part of,  very seriously. And I am currently available for full time, full stack developer roles. Oh, and...  got a role in a tech I don't yet know? Just give me a few days; I've got the resources, motivation and ability to get up to speed quickly.</p>


    </b-modal>



    <!-- Roo Modal -->
    <b-modal id="rooModal" title="The Live Like Roo Foundation" hide-footer no-close-on-backdrop>
      <p class="my-4">LLRF is an all-volunteer-run,  donation-based, 501C3 charitable organization who provides support and financial assistance to families whose pet faces a cancer diagnosis. In 2018, The Live Like Roo Foundation provided over $350,000 in financial assistance.</p>

      <p>The foundation had been reliant on a dated Wordpress website and multiple external applications and spreadsheets to handle their day to day operations. Handling about 50 financial applications and 200 care package requests a month had become a copy/paste nightmare. I was tasked with both giving the website a face-lift and creating a one-stop-shop solution to handle their donations (both single and monthly) and care package and financial assistance requests.</p>

      <p>Rebuilding from the ground up using PHP/Laravel and Vue.js, I was able to eliminate costly third-party applications. Donations are processed with a single Stripe integration and care packages are sent with a single Shippo integration - no more copying and pasting.</p>

      <p>The dashboard is built using Laravel Nova, and deployed using Laravel Forge on Digital Ocean. The code privately resides on Github, but I'm happy to share it (and a glimpse of the dashboard) in person to inquiring minds.</p>

      <div>
        <b-col cols="6" offset="3">
        <b-button class="button"><a href="https://livelikeroo.org">Live Like Roo</a></b-button>
      </b-col>
      </div>
    </b-modal>

    <!-- Regroup Modal -->
    <b-modal id="regroupModal" title="Regroup" hide-footer no-close-on-backdrop>
      <p class="my-4">About 111 million people live in "mental health professional shortage" areas, says the U.S. Department of Health and Human Services. And this is the problem Regroup is tackling.</p>
      
      <p>Using Agile methodology, I was contracted to assist the Lead with the completion of building, testing and deployment of regroupconnect, a hipaa-compliant tele-psychiatry platform built with Laravel and Vue.js and deployed on EC2 & S3.</p>

      <b-col cols="6" offset="3">
        <b-button class="button"><a href="https://www.regroupconnect.com">RegroupConnect</a></b-button>
      </b-col>
    </b-modal>

    <!-- Projects Modal -->

    
    <b-modal id="gmapModal" title="Coding Challenges & Personal Projects" hide-footer no-close-on-backdrop>

      <b-col class="6" offset="3">
        <b-button class="button"><a href="https://baldmike.github.io/filtered-google-maps/" target="_blank">Google Maps Challenge</a></b-button>
      </b-col>
      <p>Given a .xlsx file, place all 1500 properties on Google Map. Markers should be a gradient of green to red, based on estimated home value, low to high. Filters are all fully reactive. Clicking button above will open a new window with a demo.</p> 
      <hr>

      <b-col cols="6" offset="3">
        <b-button class="button"><a href="https://resqmia.com/animals">resQmia</a></b-button>
      </b-col>
      <p>
        resQmia! Built to replace several spreadsheets, resQmia is a simple notebook or "post-it" style application used to track cats and dogs' vaccines and brief medical history as they're under the supervision of Mia Lindner, director of Operations for Alive Rescue in Chicago. Built with Laravel/Vue using Laravel's Passport OAuth implementation to securely couple the back end with the client using token-based authentication. Tech: PHP/Laravel, JavaScript/Vue.js, Vuex, Vue-router, Bootstrap-vue, Axios HTTP library deployed on Digital Ocean with Laravel Forge.
      </p>
      
      <hr>

      <!-- <b-button><a href="https://baldmike.github.io/craps-vue/" target="_blank">Vue Craps Game</a></b-button> -->
      <b-col cols="6" offset="3">
        <b-button class="button"><router-link to="/craps">Vue Craps Game</router-link></b-button>
      </b-col>

      <p>A craps game in Vue.js. User can make a "pass line" wager of $5, $25, $50, $100, and starts game with $500. App uses Vuex for state management so there is a single source of truth. Clicking button above will open a new window with a demo.</p> 
      
    </b-modal>

    <!-- email Modal -->
    <b-modal id="emailModal" title="Email Bald Mike" hide-footer no-close-on-backdrop>
      <p class="my-4"></p>
    </b-modal>

</div>  
</template>

<script>

export default {
  name: 'Portfolio',

    data() {
        return {
            year: new Date().getFullYear(),
            weatherData: [],
            temp: '',
            lat: '',
            lon: '',
            ampm: 'am'
        }
    }, 

    methods: {
            // scrolling
        goto(value) {
            let elem = document.getElementById(value);
            elem.scrollIntoView({behavior: 'smooth'});
        },
        upTop() {
            let elem = document.getElementById("top");
            elem.scrollIntoView({behavior: 'smooth'});

        },

        getWeather(url) {
            axios.get(url)
                .then(response => {
                this.weatherData = response.data;
                this.temp = Math.floor(((this.weatherData.main.temp) - 273.15) * 9/5 + 32);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        geolocation() {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;

                // this.$store.dispatch('getWeather')

                this.getWeather(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=4184ae2eac1d3a7f63689ed17eb87201`);
            })
        },
    },

    

    computed: {
        theTime() {
            let today = new Date();
            let hour = today.getHours();
            let minutes = today.getMinutes();

            if (hour > 12) {
                hour -= 12;
                this.ampm = 'pm'
            }

            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            let todayNow = hour + ':' + minutes + this.ampm;
            return todayNow
        }
    },

    created() {
        // this.geolocation();
    }
}
</script>




<style scoped>
  * {
    font-family: 'Raleway', sans-serif;
  }

  @media only screen and (max-width: 500px) {
    .nophone {
      display: none;
      background: black;
    }
  }

  /* @media only screen and (min-width: 500px) { */

  
  .about:hover::after { 
    content: " - Who is Bald Mike?";
  }

  #projectsButton:hover::after { 
    content: " - Examples of recent work.";
  }

  #github-desc:hover::after { 
    content: " - Show me the code!";
  }

  #contact:hover::after { 
    content: " - Get in touch with Bald Mike!";
  }

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.parallax {
  margin-top: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
}

.parapic1 {
  background-image: url("/images/Photo_by_Ales_Nesetril_on_Unsplash.jpg");
  margin-top: -60px;
  height: auto;
  max-width: 100%;
}

.parapic2 {
  background-image: url("/images/logos.png");
}

.parapic3 {
  background-image: url("/images/codeBM2.jpg");
}

.parapic4 {
  background-image: url("/images/circuits.jpg");
  
  filter: blur(1px) saturate(6);
}


.white-bar { 
  background-color: white;
  text-align: center;
}

.button {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px 0px;
  background-size: 200px;
  background-repeat: no-repeat;
  background-color: black;
  color: cornflowerblue;
  transition: 800ms;
  outline: none;
}

.button:hover {
  color: black;
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  transition: 800ms;
}

.regroup {
  background-image: url("/images/regroup.png");
}

.regroup:hover:after {
  background-image: url('');
  background-color: white;

}
.roo {
  background-image: url("/images/llr_logo.png");
}

.gmap {
  background-image: url("/images/gmaps.png");
}

.github {
  background-image: url("/images/github.jpg");
}

.headline {
  position: sticky;
  text-align: center;
  font-size: 3vw;
  top: 180px;
  color: white;
  animation-name: slide;
  animation-duration: 3s;
}

@keyframes slide {
    from {top: 800px;}
    to {top: 180px;}
  }

.shout {
  margin-top: 40px;
}

.copyright {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}

.testimony-box {
  margin: 20px;
  font-size: 1.4rem;
}

.credit {
  position: relative;
  bottom: 0;
}

.api-strip {
    text-align: center;
    margin-top: 20px;
    color: darkgrey;
    font-size: 1vw;
    height: 10vh;

}
</style>
