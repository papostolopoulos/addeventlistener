import Vue from 'vue'
// import App from './App.vue'
//
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
console.log("Hello")
Vue.component('tags', {
  template: `
    <div>
      <header>
        <nav class="tags">
          <ul>
            <li v-for="tag in tags" v-bind:class="{ 'is-active': tag.isActive }">
              <a v-bind:href="tag.href" v-on:click="selectTag(tag)">
                {{tag.name}}
              </a>

            </li>
          </ul>
        </nav>
      </header>

      <main class="tag-details">
        <slot></slot>
      </main>
    </div>
    `,

    created() {
      this.tags = this.$children;
    },

    data() {
      return {
        tags: [],
      }
    },

    methods: {
      selectTag(selectedTag) {
        this.tags.forEach(tag => {
          tag.isActive = (tag.name === selectedTag.name)
        });
      }
    }
});

Vue.component('tag', {
  template: `
    <div v-show="isActive"><slot></slot></div>
  `,

  props: {
    name: {required: true},
    selected: {default: false}
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
})

Vue.component('job-title', {
  template: '<h1><slot></slot></h1>'
});

Vue.component('company', {
  template: '<h1><slot></slot></h1>'
});

Vue.component('location', {
  template: '<h3><slot></slot></h3>'
});


Vue.component('dates', {
  template: '<h4><slot></slot></h4>'
});

Vue.component('description', {
  template: `
      <li><slot></slot></li>
  `
});

Vue.component('image-container', {
  template: '<div><slot></slot></div>'
});

Vue.component('video-container', {
  template: '<div><slot></slot></div>'
})

var positions = new Vue({
  el: '#navigation-tags',
  computed: {
    indexPage() {
      return this.positions.filter(position => position.type_of_position === "homepage");
    },
    aboutMe() {
      return this.positions.filter(position => position.type_of_position === "about me");
    },
    developmentProjects() {
      return this.positions.filter(position => position.type_of_position === "project");
    },
    professionalExperience() {
      return this.positions.filter(position => position.type_of_position === "job");
    },
    academicExperience() {
      return this.positions.filter(position => position.type_of_position === "study");
    },
    skillSet() {
      return this.positions.filter(position => position.type_of_position === "skills");
    },
    hobbies() {
      return this.positions.filter(position => position.type_of_position === "hobbies");
    }

  },
  data: {
    positions: [
      {id: 0,
      company: "Hello, I am Paris",
      company_url: "http://addeventlistener.xyz",
      location: "And no, I am not French.",
      job_title: "Mostly unemployed but it helps me stay fit...",
      start_date: "People tend",
      end_date: "not take me seriously for being a:",
      description: [
        {bullet: "Team Leader"},
        {bullet: "Follower"},
        {bullet: "Web Developer"},
        {bullet: "Project Manager"},
        {bullet: "Teacher"},
        {bullet: "Athletic Trainer"}
      ],
      type_of_position: "homepage",
      image_url: "",
      video_url: "./src/assets/videos/20170504_194548_34804425076.mp4"
      },

      {id: 1,
      company: "listMe.xyz",
      company_url: "http://listme.xyz",
      location: "San Francisco, CA",
      job_title: "Full Stack Developer",
      start_date: "03/2017",
      end_date: "03/2017",
      description: [
        {bullet: "Full stack CRUD todo list."},
        {bullet: "Created an app where the user can create, read, update and delete lists of todo items"},
        {bullet: "Node, Express, knex, psql, JQuery, handlebars, CSS"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 2,
      company: "writeit.pro",
      company_url: "http://writeit.pro",
      location: "San Francisco, CA",
      job_title: "Full Stack Developer",
      start_date: "02/2017",
      end_date: "02/2017",
      description: [
        {bullet: "Full stack CRUD blog."},
        {bullet: "A blog environment with a WYSIWYG text editor."},
        {bullet: "The user can update the blog postings, upload images and video."},
        {bullet: "The app is responsive"},
        {bullet: "(Node, Express, psql, JavaScript, handlebars, html, CSS"}
      ],
      type_of_position: "project",
      image_url: "./src/assets/images/writeit.png",
      video_url: ""
      },

      {id: 3,
      company: "Simple CSS Tutorial",
      company_url: "https://git.io/vMM8C",
      location: "San Francisco, CA",
      job_title: "Developer",
      start_date: "01/2017",
      end_date: "01/2017",
      description: [
        {bullet: "CSS tutorial for the users interested learning basic aspects of CSS"},
        {bullet: "Analyzed Reset, Specificity, the Box Model, Positioning, Typography, Backgrounds, Responsive Design"},
        {bullet: "HTML, Vanilla CSS"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 4,
      company: "Spotify Discography Search",
      company_url: "https://git.io/vyfiO",
      location: "San Francisco, CA",
      job_title: "Developer",
      start_date: "01/2017",
      end_date: "01/2017",
      description: [
        {bullet: "Search engine with API calls to the Spotify API."},
        {bullet: "The user can search for artists' discographies and review the song titles and album covers"},
        {bullet: "JavaScript, Ajax calls, CSS, HTML"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 5,
      company: "Image editing",
      company_url: "https://goo.gl/s9sHDS",
      location: "San Francisco, CA",
      job_title: "Developer",
      start_date: "11/2016",
      end_date: "11/2016",
      description: [
        {bullet: "Image editing console."},
        {bullet: "This is a barebones image filtering environment. The user can open images from the hard drive or online sources and apply filters or save in a different image format"},
        {bullet: "Node, JavaScript, CSS, HTML"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 6,
      company: "Sporty tourist",
      company_url: "http://sportytourist.com",
      location: "San Francisco, CA",
      job_title: "Developer",
      start_date: "10/2016",
      end_date: "10/2016",
      description: [
        {bullet: "Sports news aggregator."},
        {bullet: "The user can review news titles from various sports sources and click through in order to view the full article. Front end app only."},
        {bullet: "JavaScript, AJAX, CSS, HTML"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 7,
      company: "Hangman game",
      company_url: "http://hangman.pro",
      location: "San Francisco, CA",
      job_title: "Developer",
      start_date: "08/2016",
      end_date: "08/2016",
      description: [
        {bullet: "This is a single page application with a hangman game."},
        {bullet: "The user can request for a random word and play the game online."},
        {bullet: "JQuery, AJAX, CSS, HTML"}
      ],
      type_of_position: "project",
      image_url: "",
      video_url: ""
      },

      {id: 8,
      company: "Yahoo Inc",
      company_url: "https://yahoo.com",
      location: "Sunnyvale, CA",
      job_title: "Lead Search Editor",
      start_date: "03/2013",
      end_date: "02/2016",
      description: [
        {bullet: "Lead the Algo Search Escalations team with members in seven countries. Query analysis meetings with Yahoo (mobile), Microsoft (desktop) PMs & engineering teams."},
        {bullet: "Managed the Search results enhancement requests between the Yahoo Search and Microsoft’s Bing."},
        {bullet: "Lead shopping products QA team through query evaluations, use cases, debugging, escalations."},
        {bullet: "Managed internal Query Triage tool for bug distribution, escalations, shift management."},
        {bullet: "Review of verticals new experiences through A/B testing."}
      ],
      type_of_position: "job",
      image_url: "",
      video_url: ""
      },

      {id: 9,
      company: "Google Inc (Maps)",
      company_url: "https://maps.google.com",
      location: "Mountain View, CA",
      job_title: "Project Coordinator, Team Leader",
      start_date: "02/2012",
      end_date: "03/2013",
      description: [
        {bullet: "Lead ~30 Specialists with project delivery, policy, issues resolution and communication with remote client teams."},
        {bullet: "Oversaw the mapping production quality evaluation for ~25 countries within four launch cycles."},
        {bullet: "Created and coordinated the team's internal website. used for the project goals, education and team changes."},
        {bullet: "Built a prioritization model aimed at the communication of tasks between PMs, engineers, and Data Specialists."}
      ],
      type_of_position: "job",
      image_url: "",
      video_url: ""
    },

    {id: 10,
    company: "Google Inc (Maps)",
    company_url: "https://www.google.gr/maps/@38.32,23.2,6z",
    location: "Mountain View, CA",
    job_title: "Maps Visual Data Specialist",
    start_date: "02/2011",
    end_date: "02/2012",
    description: [
      {bullet: "Managed the Mapping Team for the Greek National Road Network. Liaison with India and Washington offices to identify 2,000+ national and provincial routes."},
      {bullet: "Audited street geometry, driving directions priority, route consistency, street names, POIs, location placement."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 11,
    company: "Yahoo Inc",
    company_url: "https://yahoo.com",
    location: "Sunnyvale, CA",
    job_title: "Search Editor",
    start_date: "11/2009",
    end_date: "02/2011",
    description: [
      {bullet: "Front page content editing in various verticals."},
      {bullet: "Query interpretation, classification, user Intent analysis."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 12,
    company: "Renoir Hotel (currently Proper Hotel)",
    company_url: "http://www.properhotel.com/san-francisco",
    location: "San Francisco, CA",
    job_title: "Internet Revenue Manager",
    start_date: "02/2008",
    end_date: "07/2009",
    description: [
      {bullet: "Inventory optimization, rates strategy implementation. Management of 30 online extranets."},
      {bullet: "Price, promotion and package modification strategies based on forecast reports, competitive set analysis"},
      {bullet: "Relationship management with the hotel’s online travel and Global Distribution Systems partners."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 13,
    company: "Greek School of the Holy Cross",
    company_url: "http://belmontgreekschool.com/",
    location: "Belmont, CA",
      job_title: "Teacher",
    start_date: "02/2008",
    end_date: "06/2009",
    description: [
      {bullet: "Greek Language Teacher for elementary school children"}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 14,
    company: "yourGreece Tourist Enterprises",
    company_url: "",
    location: "Athens, Greece",
    job_title: "Internet Revenue Manager",
    start_date: "03/2007",
    end_date: "06/2007",
    description: [
      {bullet: "Provided online and phone services to international clientele interested in company’s traveling services."},
      {bullet: "Was responsible for the interaction of the network’s 60 hotel affiliates with the company for arranging the rates of commission, payment procedures and verifying traveling dates of online clientele."},
      {bullet: "Accounts Payable - Receivable"}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 15,
    company: "Sportivo Club - Mini Soccer Facilities",
    company_url: "",
    location: "Spata, Greece",
    job_title: "Sports Marketing Consultant",
    start_date: "10/2006",
    end_date: "02/2007",
    description: [
      {bullet: "Created service packages for for the increase of Club’s revenue through sponsorship, promotions, advertising and new client services."},
      {bullet: "Initiated promotion techniques by creating the company’s web page"},
      {bullet: "Successfully identified the best channels of communication for future promotions of services and events."},
      {bullet: "Identified and contacted businesses interested in promoting their products at the available facilities. "},
      {bullet: "Created a broader clientele base by promoting club’s name at various communication channels."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 16,
    company: "Real Time Events",
    company_url: "",
    location: "Athens, Greece",
    job_title: "Accounts Coordinator",
    start_date: "06/2006",
    end_date: "09/2006",
    description: [
      {bullet: "Handled accounts of African embassies and ethnic communities and promoted musical and cultural events for the leasing of kiosks and exhibit space at company’s music events."},
      {bullet: "Created material for below the Line marketing through directed communication channels."},
      {bullet: "Composed press releases and weekly news updates in regards to the performers of the musical events for online news resources, blogs and social networking web portals."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 17,
    company: "BRC Group",
    company_url: "http://brcgrp.com/",
    location: "San Francisco, CA",
    job_title: "Sports Marketing Analyst Intern",
    start_date: "11/2005",
    end_date: "03/2006",
    description: [
      {bullet: "Identified trends, social and demographic characteristics of company’s clientele."},
      {bullet: "Researched market conditions in regional areas the company is active at to determine potential expansion."},
      {bullet: "Created a survey based research tool for identifying market conditions, customers’ buying habits, media habits and regional preferences. "},
      {bullet: "Contributed in the planning of marketing management for the adjustment of promotions of corporate sponsors based on research findings and statistical analysis. "},
      {bullet: "Created accurate reports identifying the dynamics of emerging markets and assisted in the selection of new markets company expanded at."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 18,
    company: "Golden State Warriors",
    company_url: "http://www.nba.com/warriors/",
    location: "Oakland, CA",
    job_title: "Sports Marketing Analyst Intern",
    start_date: "10/2003",
    end_date: "05/2004",
    description: [
      {bullet: "Created online survey with the approval from the NBA to examine fan satisfaction from Arena services."},
      {bullet: "Researched fans’ intention to attend future events."},
      {bullet: "Identified trends in internet usage, TV viewership and frequency of Arena visitation from a sample of 3,500 fans."},
      {bullet: "Research results were used to redefine the methods used to promote merchandise and services online through the team’s internet shop."},
      {bullet: "New promotion channels were used based on the media habits clientele of different demographic had."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 19,
    company: "University of San Francisco. Jesuit Community House",
    company_url: "https://www.usfca.edu/",
    location: "San Francisco, CA",
    job_title: "Pantry Worker",
    start_date: "04/2003",
    end_date: "05/2004",
    description: [
      {bullet: "Preparation of light meals, appetizers, deserts"},
      {bullet: "Pantry and food inventory maintenance, restocking"}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 20,
    company: "University of San Francisco. Koret Health and Recreation Centre",
    company_url: "https://www.usfca.edu/koret",
    location: "San Francisco, CA",
    job_title: "Facility Attendant",
    start_date: "09/2002",
    end_date: "04/2003",
    description: [
      {bullet: "Supervision of fitness and swimming facilities for ensuring efficient operations process."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 21,
    company: "5th Elementary School of Thessalonica",
    company_url: "https://www.facebook.com/pages/5%CE%BF-%CE%94%CE%B7%CE%BC%CE%BF%CF%84%CE%B9%CE%BA%CE%BF-%CE%A3%CF%87%CE%BF%CE%BB%CE%B5%CE%B9%CE%BF-%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%B9%CE%BA%CE%B7%CF%82/682923778403383",
    location: "Thessaloniki, Greece",
    job_title: "Athletic Trainer",
    start_date: "11/2001",
    end_date: "06/2002",
    description: [
      {bullet: "Training of adolescent with Cerebral palsy for the improvement of Motor Learning."},
      {bullet: "Contributed in improvement of gross motor skills, orientation, strength, body coordination."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 22,
    company: "Athens Institute of Education and Research",
    company_url: "https://www.atiner.gr/",
    location: "Athens, Greece",
    job_title: "Research Assistant",
    start_date: "09/2000",
    end_date: "08/2001",
    description: [
      {bullet: "Identification of the demographic profile of Greek Hotel Owners."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 23,
    company: "Sivota Dive Club",
    company_url: "",
    location: "Sivota, Greece",
    job_title: "Scuba Instructor",
    start_date: "06/1999",
    end_date: "08/1999",
    description: [
      {bullet: "Instruction of divers for pursuing Scuba certificate."},
      {bullet: "Led underwater recreational tours."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 24,
    company: "Hercules Fitness Club",
    company_url: "https://www.facebook.com/pages/HERCULES-FITNESS-CLUB/181109971935026",
    location: "Athens, Greece",
    job_title: "Fitness Trainer",
    start_date: "08/1998",
    end_date: "12/1998",
    description: [
      {bullet: "Assistance of customers’ attainment of personal goals in physical conditioning."},
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 25,
    company: "Operational Program of Initial Professional Training, Democritus University of Thrace",
    company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
    location: "Komotini, Greece",
    job_title: "Swimming Instructor",
    start_date: "11/1997",
    end_date: "06/1998",
    description: [
      {bullet: "Instruction of swimming in children with Kinetic Clumsiness."},
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 26,
    company: "Dive Adventures",
    company_url: "http://www.divemykonos.gr",
    location: "Mykonos, Greece",
    job_title: "Scuba Instructor",
    start_date: "06/1997",
    end_date: "08/1997",
    description: [
      {bullet: "Instruction of divers for pursuing Scuba certificate."},
      {bullet: "Led underwater recreational tours."}
    ],
    type_of_position: "job",
    image_url: "",
    video_url: ""
    },

    {id: 27,
    company: "Galvanize",
    company_url: "http://www.galvanize.com/",
    location: "San Francisco, CA",
    job_title: "Full Stack Development Program",
    start_date: "19/2016",
    end_date: "02/2017",
    description: [
      {bullet: "Full Stack Immersive Program"},
      {bullet: "Express, PostgreSQL, JavaScript (ES5, ES6), JQuery, REST, Knex.js, Ajax, Regex, Node.js, NPM, HTML, CSS, Vue.js"}
    ],
    type_of_position: "study",
    image_url: "",
    video_url: ""
  },

    {id: 28,
    company: "University of San Francisco",
    company_url: "https://www.usfca.edu/arts-sciences/graduate-programs/sport-management",
    location: "San Francisco, CA",
    job_title: "Sports Management Graduate Program",
    start_date: "08/2002",
    end_date: "05/2004",
    description: [
      {bullet: "Masters in Sports Management"},
    ],
    type_of_position: "study",
    image_url: "",
    video_url: ""
  },

    {id: 29,
    company: "Aristotle University of Thessaloniki",
    company_url: "http://igrad.phed.auth.gr/",
    location: "Thessaloniki, Greece",
    job_title: "Sports Sciences Graduate Program",
    start_date: "09/1999",
    end_date: "05/2002",
    description: [
      {bullet: "Masters in Athletic Training (incomplete)"},
    ],
    type_of_position: "study",
    image_url: "",
    video_url: ""
    },

    {id: 30,
    company: "Democritus University of Thrace",
    company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
    location: "Komotini, Greece",
    job_title: "Department of Physical Education and Sports Sciences",
    start_date: "09/1994",
    end_date: "05/1999",
    description: [
      {bullet: "Bachelors on Physical Education and Athletic Training"},
      {bullet: "Major in Track and Field"},
      {bullet: "Minor in Strength Training"},
      {bullet: "Minor in Sports Management"}
    ],
    type_of_position: "study",
    image_url: "",
    video_url: ""
    },

    {id: 31,
    company: "Did you know that my official name is Paraskevas?",
    company_url: "https://www.greek-names.info/paraskevas/",
    location: "Fact: My full name does not fit in credit cards.",
    job_title: "About me? I am super awesome. That is all.",
    start_date: "Other things that make me really cool:",
    end_date: "",
    description: [
      {bullet: "I can write code. But I don't always understand it."},
      {bullet: "I can manage teams of people. But I somehow fail to manage my kids."},
      {bullet: "I am very organized. I put my socks and underwear in different drawers."},
      {bullet: "I like to learn new things. My next learning goal is how to bake cookies blidfolded."}
    ],
    type_of_position: "about me",
    image_url: "./src/assets/images/aboutme.jpg",
    video_url: ""
    },

    {id: 32,
    company: "This is where the company goes at",
    company_url: "",
    location: "This is where the location goes at",
    job_title: "Technical Skills",
    start_date: "No start date",
    end_date: "no End Date",
    description: [
      {bullet: "Express"},
      {bullet: "PostgreSQL"},
      {bullet: "JavaScript (ES5, ES6)"},
      {bullet: "Vue.js"},
      {bullet: "JQuery"},
      {bullet: "REST"},
      {bullet: "Knex.js"},
      {bullet: "Ajax"},
      {bullet: "Regex"},
      {bullet: "Node.js"},
      {bullet: "NPM"},
      {bullet: "HTML5"},
      {bullet: "CSS"}
    ],
    type_of_position: "skills",
    image_url: "",
    video_url: ""
    },

    {id: 33,
    company: "This is where the company goes at",
    company_url: "",
    location: "This is where the location goes at",
    job_title: "Soft and other skills",
    start_date: "No start date",
    end_date: "no End Date",
    description: [
      {bullet: "Team Leadership"},
      {bullet: "Project Management"},
      {bullet: "Resource management"},
      {bullet: "Localization"},
      {bullet: "Internationalization"},
      {bullet: "Maps"},
      {bullet: "shopping verticals"},
      {bullet: "Excel"},
      {bullet: "Jira"}
    ],
    type_of_position: "skills",
    image_url: "",
    video_url: ""
    },

    {id: 34,
    company: "This is where the company goes at",
    company_url: "",
    location: "This is where the location goes at",
    job_title: "Hobbies of Paris Apostolopoulos",
    start_date: "No start date",
    end_date: "no End Date",
    description: [
      {bullet: "Paris enjoys doing sports in his free time. Among other things, his favorite sporting activities are:"},
      {bullet: "Running"},
      {bullet: "Cycling"},
      {bullet: "Swimming"},
      {bullet: "Weight lifting"},
      {bullet: "Boxing"},
    ],
    type_of_position: "hobbies",
    image_url: "",
    video_url: ""
    },

    {id: 34,
    company: "This is where the company goes at",
    company_url: "",
    location: "This is where the location goes at",
    job_title: "Hobbies of Paris Apostolopoulos",
    start_date: "No start date",
    end_date: "no End Date",
    description: [
      {bullet: "Paris enjoys a couple of other things too as long as he has time and there is no pressure:"},
      {bullet: "Cooking"},
      {bullet: "Meeting friends"},
      {bullet: "Having fun with his kids"}
    ],
    type_of_position: "hobbies",
    image_url: "",
    video_url: ""
    }

    ]

  }
})





//------NOT USED

/*
Vue.component('positions-list', {
  template: `
    <div>
      <article v-for="position in positions">
        <job-title>
          {{position.job_title}}
        </job-title>

        <company>
          <a v-bind:href="position.company_url" target="_blank">
            {{position.company}}
          </a>
        </company>

        <location>
          {{position.location}}
        </location>

        <dates>
          {{position.start_date}} - {{position.end_date}}
        </dates>

        <ul>
          <description v-for="description in position.description" v-bind:key="description.id">
            {{description.bullet}}
          </description>
        </ul>


        <image-container>
          <img v-bind:src="position.image_url" v-bind:alt="position.company">
        </image-container>
      </article>


    </div>
  `,

  data() {
    return {
      positions: [
        {company: "listMe.xyz",
        company_url: "http://listme.xyz",
        location: "San Francisco, CA",
        job_title: "Full Stack Developer",
        start_date: "03/2017",
        end_date: "03/2017",
        description: [
          {bullet: "Full stack CRUD todo list."},
          {bullet: "Created an app where the user can create, read, update and delete lists of todo items"},
          {bullet: "Node, Express, knex, psql, JQuery, handlebars, CSS"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "writeit.pro",
        company_url: "http://writeit.pro",
        location: "San Francisco, CA",
        job_title: "Full Stack Developer",
        start_date: "02/2017",
        end_date: "02/2017",
        description: [
          {bullet: "Full stack CRUD blog."},
          {bullet: "A blog environment with a WYSIWYG text editor."},
          {bullet: "The user can update the blog postings, upload images and video."},
          {bullet: "The app is responsive"},
          {bullet: "(Node, Express, psql, JavaScript, handlebars, html, CSS"}
        ],
        type_of_position: "project",
        image_url: "./src/assets/images/writeit.png"
        },

        {company: "Simple CSS Tutorial",
        company_url: "https://git.io/vMM8C",
        location: "San Francisco, CA",
        job_title: "Developer",
        start_date: "01/2017",
        end_date: "01/2017",
        description: [
          {bullet: "CSS tutorial for the users interested learning basic aspects of CSS"},
          {bullet: "Analyzed Reset, Specificity, the Box Model, Positioning, Typography, Backgrounds, Responsive Design"},
          {bullet: "HTML, Vanilla CSS"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "Spotify Discography Search",
        company_url: "https://git.io/vyfiO",
        location: "San Francisco, CA",
        job_title: "Developer",
        start_date: "01/2017",
        end_date: "01/2017",
        description: [
          {bullet: "Search engine with API calls to the Spotify API."},
          {bullet: "The user can search for artists' discographies and review the song titles and album covers"},
          {bullet: "JavaScript, Ajax calls, CSS, HTML"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "Image editing",
        company_url: "https://goo.gl/s9sHDS",
        location: "San Francisco, CA",
        job_title: "Developer",
        start_date: "11/2016",
        end_date: "11/2016",
        description: [
          {bullet: "Image editing console."},
          {bullet: "This is a barebones image filtering environment. The user can open images from the hard drive or online sources and apply filters or save in a different image format"},
          {bullet: "Node, JavaScript, CSS, HTML"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "Sporty tourist",
        company_url: "http://sportytourist.com",
        location: "San Francisco, CA",
        job_title: "Developer",
        start_date: "10/2016",
        end_date: "10/2016",
        description: [
          {bullet: "Sports news aggregator."},
          {bullet: "The user can review news titles from various sports sources and click through in order to view the full article. Front end app only."},
          {bullet: "JavaScript, AJAX, CSS, HTML"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "Hangman game",
        company_url: "http://hangman.pro",
        location: "San Francisco, CA",
        job_title: "Developer",
        start_date: "08/2016",
        end_date: "08/2016",
        description: [
          {bullet: "This is a single page application with a hangman game."},
          {bullet: "The user can request for a random word and play the game online."},
          {bullet: "JQuery, AJAX, CSS, HTML"}
        ],
        type_of_position: "project",
        image_url: ""
        },

        {company: "Yahoo Inc",
        company_url: "https://yahoo.com",
        location: "Sunnyvale, CA",
        job_title: "Lead Search Editor",
        start_date: "03/2013",
        end_date: "02/2016",
        description: [
          {bullet: "Lead the Algo Search Query Triage escalations team with members in seven countries."},
          {bullet: "In charge of escalations for relevance, triggering, ranking with Yahoo and Bing PMs and engineering teams."},
          {bullet: "Managed the Search results enhancement requests between the Yahoo Search and Microsoft’s Bing."},
          {bullet: "In charge of the Query debugging and escalations shifts and internal tool for all the Yahoo Search verticals."},
          {bullet: "Lead the shopping search verticals QA team through query evaluations, use cases, debugging, escalations."}
        ],
        type_of_position: "job",
        image_url: ""
        },

        {company: "Google Inc (Maps)",
        company_url: "https://maps.google.com",
        location: "Mountain View, CA",
        job_title: "Project Coordinator, Team Leader",
        start_date: "02/2012",
        end_date: "03/2013",
        description: [
          {bullet: "Oversaw the mapping production progress for ~15 countries and a team of ~30 Data Specialists."},
          {bullet: "Coordinated the work of six POCs and appoints weekly and monthly priorities based on the production needs and each quarter's publishing goals."},
          {bullet: "Created and managed project efficiency guidelines and policies for the effective production of Data evaluations."},
          {bullet: "Maintained statistics and work progresses based on projects' status and map creation progress."},
          {bullet: "Created and is in charge of team's internal website that is used for the communication of project goals, ongoing education and structural team changes"},
          {bullet: "Supported, guided and mentored Data Specialists who are currently working in active datasets."},
          {bullet: "Assisted Data Specialists with policy guidelines, issue resolution and internal communication channels."},
          {bullet: "Fostered the implementation of Action Items that aim in the completion of stage work within the set time frames."},
          {bullet: "Communicated with outsourced offices in the US and overseas for the effective transition of information, knowledge and policy guidelines."},
          {bullet: "Communicated the priorities of the mapping production process between Program Managers, engineers and the Data Specialists."}
        ],
        type_of_position: "job",
        image_url: ""
      },

      {company: "Google Inc (Maps)",
      company_url: "https://www.google.gr/maps/@38.32,23.2,6z",
      location: "Mountain View, CA",
      job_title: "Maps Visual Data Specialist",
      start_date: "02/2011",
      end_date: "02/2012",
      description: [
        {bullet: "Initiated and led a team for the registration and road quality labeling of the full road network of Greece, constituted of 2,000+ national and provincial routes."},
        {bullet: "Audit reports for street geometry, structure, outlay quality and driving directions priority."},
        {bullet: "Route consistency, street names and driving directions quality confirmation."},
        {bullet: "Geopolitical codes and Points of Interest data comparison, location placement and verification."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Yahoo Inc",
      company_url: "https://yahoo.com",
      location: "Sunnyvale, CA",
      job_title: "Search Editor",
      start_date: "11/2009",
      end_date: "02/2011",
      description: [
        {bullet: "Content editing for Yahoo trending News, Finance, Sports, Movies, TV and search results pages."},
        {bullet: "Query interpretation, analysis and definition. User Intent analysis, timelessness, ambiguity, spelling."},
        {bullet: "Comparison of news, image, social media search results, content relevancy, freshness, grouping order."},
        {bullet: "Evaluation of Yahoo! interactive tools in shopping, entertainment and online research."},
        {bullet: "Spotchecking of the work of search editors in outsourced international companies. (https://gr.yahoo.com)"}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Renoir Hotel (currently Proper Hotel)",
      company_url: "http://www.properhotel.com/san-francisco",
      location: "San Francisco, CA",
      job_title: "Internet Revenue Manager",
      start_date: "02/2008",
      end_date: "07/2009",
      description: [
        {bullet: "Inventory optimization, rates strategy implementation. Management of 30 online extranets."},
        {bullet: "Price, promotion and package modification strategies based on forecast reports, competitive set analysis"},
        {bullet: "Relationship management with the hotel’s online travel and Global Distribution Systems partners."},
        {bullet: "Pricing strategies"},
        {bullet: "Forecasting reports and analysis"},
        {bullet: "Promotional packages creation. Online distribution and GDS exposure."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Greek School of the Holy Cross",
      company_url: "http://belmontgreekschool.com/",
      location: "Belmont, CA",
        job_title: "Teacher",
      start_date: "02/2008",
      end_date: "06/2009",
      description: [
        {bullet: "Greek Language Teacher for elementary school children"}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "yourGreece Tourist Enterprises",
      company_url: "",
      location: "Athens, Greece",
      job_title: "Internet Revenue Manager",
      start_date: "03/2007",
      end_date: "06/2007",
      description: [
        {bullet: "Provided online and phone services to international clientele interested in company’s traveling services."},
        {bullet: "Was responsible for the interaction of the network’s 60 hotel affiliates with the company for arranging the rates of commission, payment procedures and verifying traveling dates of online clientele."},
        {bullet: "Contributed to the increase of monthly online sales by 120%."},
        {bullet: "Accounts Payable - Receivable"},
        {bullet: "Captured online payments of clientele and was in charge of the online banking payments of 60 affiliates."},
        {bullet: "Recorded all clientele that purchased services online. Recorded company’s monthly performance."},
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Sportivo Club - Mini Soccer Facilities",
      company_url: "",
      location: "Spata, Greece",
      job_title: "Sports Marketing Consultant",
      start_date: "10/2006",
      end_date: "02/2007",
      description: [
        {bullet: "Created service packages for for the increase of Club’s revenue through sponsorship, promotions, advertising and new client services."},
        {bullet: "Initiated promotion techniques by creating the company’s web page"},
        {bullet: "Successfully identified the best channels of communication for future promotions of services and events."},
        {bullet: "Identified and contacted businesses interested in promoting their products at the available facilities. "},
        {bullet: "Created a broader clientele base by promoting club’s name at various communication channels."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Real Time Events",
      company_url: "",
      location: "Athens, Greece",
      job_title: "Accounts Coordinator",
      start_date: "06/2006",
      end_date: "09/2006",
      description: [
        {bullet: "Handled accounts of African embassies and ethnic communities and promoted musical and cultural events for the leasing of kiosks and exhibit space at company’s music events."},
        {bullet: "Created material for below the Line marketing through directed communication channels."},
        {bullet: "Composed press releases and weekly news updates in regards to the performers of the musical events for online news resources, blogs and social networking web portals."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "BRC Group",
      company_url: "http://brcgrp.com/",
      location: "San Francisco, CA",
      job_title: "Sports Marketing Analyst Intern",
      start_date: "11/2005",
      end_date: "03/2006",
      description: [
        {bullet: "Identified trends, social and demographic characteristics of company’s clientele."},
        {bullet: "Researched market conditions in regional areas the company is active at to determine potential expansion."},
        {bullet: "Created a survey based research tool for identifying market conditions, customers’ buying habits, media habits and regional preferences. "},
        {bullet: "Contributed in the planning of marketing management for the adjustment of promotions of corporate sponsors based on research findings and statistical analysis. "},
        {bullet: "Created accurate reports identifying the dynamics of emerging markets and assisted in the selection of new markets company expanded at."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Golden State Warriors",
      company_url: "http://www.nba.com/warriors/",
      location: "Oakland, CA",
      job_title: "Sports Marketing Analyst Intern",
      start_date: "10/2003",
      end_date: "05/2004",
      description: [
        {bullet: "Created online survey with the approval from the NBA to examine fan satisfaction from Arena services."},
        {bullet: "Researched fans’ intention to attend future events."},
        {bullet: "Identified trends in internet usage, TV viewership and frequency of Arena visitation from a sample of 3,500 fans."},
        {bullet: "Research results were used to redefine the methods used to promote merchandise and services online through the team’s internet shop."},
        {bullet: "New promotion channels were used based on the media habits clientele of different demographic had."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "University of San Francisco. Jesuit Community House",
      company_url: "https://www.usfca.edu/",
      location: "San Francisco, CA",
      job_title: "Pantry Worker",
      start_date: "04/2003",
      end_date: "05/2004",
      description: [
        {bullet: "Preparation of light meals, appetizers, deserts"},
        {bullet: "Pantry and food inventory maintenance, restocking"}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "University of San Francisco. Koret Health and Recreation Centre",
      company_url: "https://www.usfca.edu/koret",
      location: "San Francisco, CA",
      job_title: "Facility Attendant",
      start_date: "09/2002",
      end_date: "04/2003",
      description: [
        {bullet: "Supervision of fitness and swimming facilities for ensuring efficient operations process."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "5th Elementary School of Thessalonica",
      company_url: "https://www.facebook.com/pages/5%CE%BF-%CE%94%CE%B7%CE%BC%CE%BF%CF%84%CE%B9%CE%BA%CE%BF-%CE%A3%CF%87%CE%BF%CE%BB%CE%B5%CE%B9%CE%BF-%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%B9%CE%BA%CE%B7%CF%82/682923778403383",
      location: "Thessaloniki, Greece",
      job_title: "Athletic Trainer",
      start_date: "11/2001",
      end_date: "06/2002",
      description: [
        {bullet: "Training of adolescent with Cerebral palsy for the improvement of Motor Learning."},
        {bullet: "Contributed in improvement of gross motor skills, orientation, strength, body coordination."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Athens Institute of Education and Research",
      company_url: "https://www.atiner.gr/",
      location: "Athens, Greece",
      job_title: "Research Assistant",
      start_date: "09/2000",
      end_date: "08/2001",
      description: [
        {bullet: "Identification of the demographic profile of Greek Hotel Owners."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Sivota Dive Club",
      company_url: "",
      location: "Sivota, Greece",
      job_title: "Scuba Instructor",
      start_date: "06/1999",
      end_date: "08/1999",
      description: [
        {bullet: "Instruction of divers for pursuing Scuba certificate."},
        {bullet: "Led underwater recreational tours."}
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Hercules Fitness Club",
      company_url: "https://www.facebook.com/pages/HERCULES-FITNESS-CLUB/181109971935026",
      location: "Athens, Greece",
      job_title: "Fitness Trainer",
      start_date: "08/1998",
      end_date: "12/1998",
      description: [
        {bullet: "Assistance of customers’ attainment of personal goals in physical conditioning."},
      ],
      type_of_position: "job",
      image_url: ""
      },

      {company: "Operational Program of Initial Professional Training, Democritus University of Thrace",
      company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
      location: "Komotini, Greece",
      job_title: "Swimming Instructor",
      start_date: "11/1997",
      end_date: "06/1998",
      description: [
        {bullet: "Instruction of swimming in children with Kinetic Clumsiness."},
      ],
      type_of_position: "job",
      image_url: ""
    },

      {company: "Galvanize",
      company_url: "http://www.galvanize.com/",
      location: "San Francisco, CA",
      job_title: "Full Stack Development Program",
      start_date: "19/2016",
      end_date: "02/2017",
      description: [
        {bullet: "Full Stack Immersive Program"},
        {bullet: "Express, PostgreSQL, JavaScript (ES5, ES6), JQuery, REST, Knex.js, Ajax, Regex, Node.js, NPM, HTML, CSS, Vue.js"}
      ],
      type_of_position: "study",
      image_url: ""
    },

      {company: "University of San Francisco",
      company_url: "https://www.usfca.edu/arts-sciences/graduate-programs/sport-management",
      location: "San Francisco, CA",
      job_title: "Sports Management Graduate Program",
      start_date: "08/2002",
      end_date: "05/2004",
      description: [
        {bullet: "Masters in Sports Management"},
      ],
      type_of_position: "study",
      image_url: ""
    },

      {company: "Aristotle University of Thessaloniki",
      company_url: "http://igrad.phed.auth.gr/",
      location: "Thessaloniki, Greece",
      job_title: "Sports Sciences Graduate Program",
      start_date: "09/1999",
      end_date: "05/2002",
      description: [
        {bullet: "Masters in Athletic Training (incomplete)"},
      ],
      type_of_position: "study",
      image_url: ""
      },

      {company: "Democritus University of Thrace",
      company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
      location: "Komotini, Greece",
      job_title: "Department of Physical Education and Sports Sciences",
      start_date: "09/1994",
      end_date: "05/1999",
      description: [
        {bullet: "Bachelors on Physical Education and Athletic Training"},
        {bullet: "Major in Track and Field"},
        {bullet: "Minor in Strength Training"},
        {bullet: "Minor in Sports Management"}
      ],
      type_of_position: "study",
      image_url: ""
      }

      ]
    }
  }
});

new Vue({
el: '#resume',
data: {
positions: [
{company: "listMe.xyz",
company_url: "http://listme.xyz",
location: "San Francisco, CA",
job_title: "Full Stack Developer",
start_date: "03/2017",
end_date: "03/2017",
description: [
{bullet: "Full stack CRUD todo list."},
{bullet: "Created an app where the user can create, read, update and delete lists of todo items"},
{bullet: "Node, Express, knex, psql, JQuery, handlebars, CSS"}
],
type_of_position: "project",
image_url: ""
},

{company: "writeit.pro",
company_url: "http://writeit.pro",
location: "San Francisco, CA",
job_title: "Full Stack Developer",
start_date: "02/2017",
end_date: "02/2017",
description: [
{bullet: "Full stack CRUD blog."},
{bullet: "A blog environment with a WYSIWYG text editor."},
{bullet: "The user can update the blog postings, upload images and video."},
{bullet: "The app is responsive"},
{bullet: "(Node, Express, psql, JavaScript, handlebars, html, CSS"}
],
type_of_position: "project",
image_url: ""
},

{company: "Simple CSS Tutorial",
company_url: "https://git.io/vMM8C",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "01/2017",
end_date: "01/2017",
description: [
{bullet: "CSS tutorial for the users interested learning basic aspects of CSS"},
{bullet: "Analyzed Reset, Specificity, the Box Model, Positioning, Typography, Backgrounds, Responsive Design"},
{bullet: "HTML, Vanilla CSS"}
],
type_of_position: "project",
image_url: ""
},

{company: "Spotify Discography Search",
company_url: "https://git.io/vyfiO",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "01/2017",
end_date: "01/2017",
description: [
{bullet: "Search engine with API calls to the Spotify API."},
{bullet: "The user can search for artists' discographies and review the song titles and album covers"},
{bullet: "JavaScript, Ajax calls, CSS, HTML"}
],
type_of_position: "project",
image_url: ""
},

{company: "Spotify Discography Search",
company_url: "https://git.io/vyfiO",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "01/2017",
end_date: "01/2017",
description: [
{bullet: "Search engine with API calls to the Spotify API."},
{bullet: "The user can search for artists' discographies and review the song titles and album covers"},
{bullet: "JavaScript, Ajax calls, CSS, HTML"}
],
type_of_position: "project",
image_url: ""
},

{company: "Image editing",
company_url: "https://goo.gl/s9sHDS",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "11/2016",
end_date: "11/2016",
description: [
{bullet: "Image editing console."},
{bullet: "This is a barebones image filtering environment. The user can open images from the hard drive or online sources and apply filters or save in a different image format"},
{bullet: "Node, JavaScript, CSS, HTML"}
],
type_of_position: "project",
image_url: ""
},

{company: "Sporty tourist",
company_url: "http://sportytourist.com",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "10/2016",
end_date: "10/2016",
description: [
{bullet: "Sports news aggregator."},
{bullet: "The user can review news titles from various sports sources and click through in order to view the full article. Front end app only."},
{bullet: "JavaScript, AJAX, CSS, HTML"}
],
type_of_position: "project",
image_url: ""
},

{company: "Hangman game",
company_url: "http://hangman.pro",
location: "San Francisco, CA",
job_title: "Developer",
start_date: "08/2016",
end_date: "08/2016",
description: [
{bullet: "This is a single page application with a hangman game."},
{bullet: "The user can request for a random word and play the game online."},
{bullet: "JQuery, AJAX, CSS, HTML"}
],
type_of_position: "project",
image_url: ""
},

{company: "Yahoo Inc",
company_url: "https://yahoo.com",
location: "Sunnyvale, CA",
job_title: "Lead Search Editor",
start_date: "03/2013",
end_date: "02/2016",
description: [
{bullet: "Lead the Algo Search Query Triage escalations team with members in seven countries."},
{bullet: "In charge of escalations for relevance, triggering, ranking with Yahoo and Bing PMs and engineering teams."},
{bullet: "Managed the Search results enhancement requests between the Yahoo Search and Microsoft’s Bing."},
{bullet: "In charge of the Query debugging and escalations shifts and internal tool for all the Yahoo Search verticals."},
{bullet: "Lead the shopping search verticals QA team through query evaluations, use cases, debugging, escalations."}
],
type_of_position: "job",
image_url: ""
},

{company: "Google Inc (Maps)",
company_url: "https://maps.google.com",
location: "Mountain View, CA",
job_title: "Project Coordinator, Team Leader",
start_date: "02/2012",
end_date: "03/2013",
description: [
{bullet: "Oversaw the mapping production progress for ~15 countries and a team of ~30 Data Specialists."},
{bullet: "Coordinated the work of six POCs and appoints weekly and monthly priorities based on the production needs and each quarter's publishing goals."},
{bullet: "Created and managed project efficiency guidelines and policies for the effective production of Data evaluations."},
{bullet: "Maintained statistics and work progresses based on projects' status and map creation progress."},
{bullet: "Created and is in charge of team's internal website that is used for the communication of project goals, ongoing education and structural team changes"},
{bullet: "Supported, guided and mentored Data Specialists who are currently working in active datasets."},
{bullet: "Assisted Data Specialists with policy guidelines, issue resolution and internal communication channels."},
{bullet: "Fostered the implementation of Action Items that aim in the completion of stage work within the set time frames."},
{bullet: "Communicated with outsourced offices in the US and overseas for the effective transition of information, knowledge and policy guidelines."},
{bullet: "Communicated the priorities of the mapping production process between Program Managers, engineers and the Data Specialists."}
],
type_of_position: "job",
image_url: ""
},

{company: "Google Inc (Maps)",
company_url: "https://www.google.gr/maps/@38.32,23.2,6z",
location: "Mountain View, CA",
job_title: "Maps Visual Data Specialist",
start_date: "02/2011",
end_date: "02/2012",
description: [
{bullet: "Initiated and led a team for the registration and road quality labeling of the full road network of Greece, constituted of 2,000+ national and provincial routes."},
{bullet: "Audit reports for street geometry, structure, outlay quality and driving directions priority."},
{bullet: "Route consistency, street names and driving directions quality confirmation."},
{bullet: "Geopolitical codes and Points of Interest data comparison, location placement and verification."}
],
type_of_position: "job",
image_url: ""
},

{company: "Yahoo Inc",
company_url: "https://yahoo.com",
location: "Sunnyvale, CA",
job_title: "Search Editor",
start_date: "11/2009",
end_date: "02/2011",
description: [
{bullet: "Content editing for Yahoo trending News, Finance, Sports, Movies, TV and search results pages."},
{bullet: "Query interpretation, analysis and definition. User Intent analysis, timelessness, ambiguity, spelling."},
{bullet: "Comparison of news, image, social media search results, content relevancy, freshness, grouping order."},
{bullet: "Evaluation of Yahoo! interactive tools in shopping, entertainment and online research."},
{bullet: "Spotchecking of the work of search editors in outsourced international companies. (https://gr.yahoo.com)"}
],
type_of_position: "job",
image_url: ""
},

{company: "Renoir Hotel (currently Proper Hotel)",
company_url: "http://www.properhotel.com/san-francisco",
location: "San Francisco, CA",
job_title: "Internet Revenue Manager",
start_date: "02/2008",
end_date: "07/2009",
description: [
{bullet: "Inventory optimization, rates strategy implementation. Management of 30 online extranets."},
{bullet: "Price, promotion and package modification strategies based on forecast reports, competitive set analysis"},
{bullet: "Relationship management with the hotel’s online travel and Global Distribution Systems partners."},
{bullet: "Pricing strategies"},
{bullet: "Forecasting reports and analysis"},
{bullet: "Promotional packages creation. Online distribution and GDS exposure."}
],
type_of_position: "job",
image_url: ""
},

{company: "Greek School of the Holy Cross",
company_url: "http://belmontgreekschool.com/",
location: "Belmont, CA",
job_title: "Teacher",
start_date: "02/2008",
end_date: "06/2009",
description: [
{bullet: "Greek Language Teacher for elementary school children"}
],
type_of_position: "job",
image_url: ""
},

{company: "yourGreece Tourist Enterprises",
company_url: "",
location: "Athens, Greece",
job_title: "Internet Revenue Manager",
start_date: "03/2007",
end_date: "06/2007",
description: [
{bullet: "Provided online and phone services to international clientele interested in company’s traveling services."},
{bullet: "Was responsible for the interaction of the network’s 60 hotel affiliates with the company for arranging the rates of commission, payment procedures and verifying traveling dates of online clientele."},
{bullet: "Contributed to the increase of monthly online sales by 120%."},
{bullet: "Accounts Payable - Receivable"},
{bullet: "Captured online payments of clientele and was in charge of the online banking payments of 60 affiliates."},
{bullet: "Recorded all clientele that purchased services online. Recorded company’s monthly performance."},
],
type_of_position: "job",
image_url: ""
},

{company: "Sportivo Club - Mini Soccer Facilities",
company_url: "",
location: "Spata, Greece",
job_title: "Sports Marketing Consultant",
start_date: "10/2006",
end_date: "02/2007",
description: [
{bullet: "Created service packages for for the increase of Club’s revenue through sponsorship, promotions, advertising and new client services."},
{bullet: "Initiated promotion techniques by creating the company’s web page"},
{bullet: "Successfully identified the best channels of communication for future promotions of services and events."},
{bullet: "Identified and contacted businesses interested in promoting their products at the available facilities. "},
{bullet: "Created a broader clientele base by promoting club’s name at various communication channels."}
],
type_of_position: "job",
image_url: ""
},

{company: "Real Time Events",
company_url: "",
location: "Athens, Greece",
job_title: "Accounts Coordinator",
start_date: "06/2006",
end_date: "09/2006",
description: [
{bullet: "Handled accounts of African embassies and ethnic communities and promoted musical and cultural events for the leasing of kiosks and exhibit space at company’s music events."},
{bullet: "Created material for below the Line marketing through directed communication channels."},
{bullet: "Composed press releases and weekly news updates in regards to the performers of the musical events for online news resources, blogs and social networking web portals."}
],
type_of_position: "job",
image_url: ""
},

{company: "BRC Group",
company_url: "http://brcgrp.com/",
location: "San Francisco, CA",
job_title: "Sports Marketing Analyst Intern",
start_date: "11/2005",
end_date: "03/2006",
description: [
{bullet: "Identified trends, social and demographic characteristics of company’s clientele."},
{bullet: "Researched market conditions in regional areas the company is active at to determine potential expansion."},
{bullet: "Created a survey based research tool for identifying market conditions, customers’ buying habits, media habits and regional preferences. "},
{bullet: "Contributed in the planning of marketing management for the adjustment of promotions of corporate sponsors based on research findings and statistical analysis. "},
{bullet: "Created accurate reports identifying the dynamics of emerging markets and assisted in the selection of new markets company expanded at."}
],
type_of_position: "job",
image_url: ""
},

{company: "Golden State Warriors",
company_url: "http://www.nba.com/warriors/",
location: "Oakland, CA",
job_title: "Sports Marketing Analyst Intern",
start_date: "10/2003",
end_date: "05/2004",
description: [
{bullet: "Created online survey with the approval from the NBA to examine fan satisfaction from Arena services."},
{bullet: "Researched fans’ intention to attend future events."},
{bullet: "Identified trends in internet usage, TV viewership and frequency of Arena visitation from a sample of 3,500 fans."},
{bullet: "Research results were used to redefine the methods used to promote merchandise and services online through the team’s internet shop."},
{bullet: "New promotion channels were used based on the media habits clientele of different demographic had."}
],
type_of_position: "job",
image_url: ""
},

{company: "University of San Francisco. Jesuit Community House",
company_url: "https://www.usfca.edu/",
location: "San Francisco, CA",
job_title: "Pantry Worker",
start_date: "04/2003",
end_date: "05/2004",
description: [
{bullet: "Preparation of light meals, appetizers, deserts"},
{bullet: "Pantry and food inventory maintenance, restocking"}
],
type_of_position: "job",
image_url: ""
},

{company: "University of San Francisco. Koret Health and Recreation Centre",
company_url: "https://www.usfca.edu/koret",
location: "San Francisco, CA",
job_title: "Facility Attendant",
start_date: "09/2002",
end_date: "04/2003",
description: [
{bullet: "Supervision of fitness and swimming facilities for ensuring efficient operations process."}
],
type_of_position: "job",
image_url: ""
},

{company: "5th Elementary School of Thessalonica",
company_url: "https://www.facebook.com/pages/5%CE%BF-%CE%94%CE%B7%CE%BC%CE%BF%CF%84%CE%B9%CE%BA%CE%BF-%CE%A3%CF%87%CE%BF%CE%BB%CE%B5%CE%B9%CE%BF-%CE%98%CE%B5%CF%83%CF%83%CE%B1%CE%BB%CE%BF%CE%BD%CE%B9%CE%BA%CE%B7%CF%82/682923778403383",
location: "Thessaloniki, Greece",
job_title: "Athletic Trainer",
start_date: "11/2001",
end_date: "06/2002",
description: [
{bullet: "Training of adolescent with Cerebral palsy for the improvement of Motor Learning."},
{bullet: "Contributed in improvement of gross motor skills, orientation, strength, body coordination."}
],
type_of_position: "job",
image_url: ""
},

{company: "Athens Institute of Education and Research",
company_url: "https://www.atiner.gr/",
location: "Athens, Greece",
job_title: "Research Assistant",
start_date: "09/2000",
end_date: "08/2001",
description: [
{bullet: "Identification of the demographic profile of Greek Hotel Owners."}
],
type_of_position: "job",
image_url: ""
},

{company: "Sivota Dive Club",
company_url: "",
location: "Sivota, Greece",
job_title: "Scuba Instructor",
start_date: "06/1999",
end_date: "08/1999",
description: [
{bullet: "Instruction of divers for pursuing Scuba certificate."},
{bullet: "Led underwater recreational tours."}
],
type_of_position: "job",
image_url: ""
},

{company: "Hercules Fitness Club",
company_url: "https://www.facebook.com/pages/HERCULES-FITNESS-CLUB/181109971935026",
location: "Athens, Greece",
job_title: "Fitness Trainer",
start_date: "08/1998",
end_date: "12/1998",
description: [
{bullet: "Assistance of customers’ attainment of personal goals in physical conditioning."},
],
type_of_position: "job",
image_url: ""
},

{company: "Operational Program of Initial Professional Training, Democritus University of Thrace",
company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
location: "Komotini, Greece",
job_title: "Swimming Instructor",
start_date: "11/1997",
end_date: "06/1998",
description: [
{bullet: "Instruction of swimming in children with Kinetic Clumsiness."},
],
type_of_position: "job",
image_url: ""
},

{company: "Galvanize",
company_url: "http://www.galvanize.com/",
location: "San Francisco, CA",
job_title: "Full Stack Development Program",
start_date: "19/2016",
end_date: "02/2017",
description: [
{bullet: "Full Stack Immersive Program"},
{bullet: "Express, PostgreSQL, JavaScript (ES5, ES6), JQuery, REST, Knex.js, Ajax, Regex, Node.js, NPM, HTML, CSS, Vue.js"}
],
type_of_position: "study",
image_url: ""
},

{company: "University of San Francisco",
company_url: "https://www.usfca.edu/arts-sciences/graduate-programs/sport-management",
location: "San Francisco, CA",
job_title: "Sports Management Graduate Program",
start_date: "08/2002",
end_date: "05/2004",
description: [
{bullet: "Masters in Sports Management"},
],
type_of_position: "study",
image_url: ""
},

{company: "Aristotle University of Thessaloniki",
company_url: "http://igrad.phed.auth.gr/",
location: "Thessaloniki, Greece",
job_title: "Sports Sciences Graduate Program",
start_date: "09/1999",
end_date: "05/2002",
description: [
{bullet: "Masters in Athletic Training (incomplete)"},
],
type_of_position: "study",
image_url: ""
},

{company: "Democritus University of Thrace",
company_url: "http://www.phyed.duth.gr/undergraduate/index.php/el/",
location: "Komotini, Greece",
job_title: "Department of Physical Education and Sports Sciences",
start_date: "09/1994",
end_date: "05/1999",
description: [
{bullet: "Bachelors on Physical Education and Athletic Training"},
{bullet: "Major in Track and Field"},
{bullet: "Minor in Strength Training"},
{bullet: "Minor in Sports Management"}
],
type_of_position: "study",
image_url: ""
}

]
}
})


*/
