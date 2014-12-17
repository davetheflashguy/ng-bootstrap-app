app.controller('FolioCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
  $scope.folios = [
    {
      logo : '/img/logos/reuters.png',
      organization: 'Thomson Reuters',
      position: 'Senior UI Developer',
      description: 'Working on a central user experience team, I assist in building and maintaining advanced Angular directives for a community of internal software developers.',
      start: "September 2014",
      end: "",
      accomplishments : [
        {
          label: 'Responsible for platform upgrades (Angular Bootstrap, Bootstrap, Wijmo)',
        },
        {
          label: 'Prototype components using various JavaScript libraries',
        },
        {
          label: 'Work very closely with UX and visual designers to create pixel perfect cross browser experiences',
        },
      ]
    },
    {
      logo : '/img/logos/ac0b3049f82aad69089a4bddb815b4c6.png',
      organization: 'Dave Collier Consulting, LLC',
      position: 'UI Architect / Developer',
      description: 'Provided clients with lightweight, intelligent mobile and desktop solutions. I went on my own in October of 2011 and work as an independent contractor. I also provide freelance and moonlighting services, please visit my web site or email me for more information.',
      start: "October 2011",
      end: "October 2014",
      accomplishments : [
        {
          
        },        
      ]
    },
    {
      logo : '/img/logos/clearchannel.jpg',
      organization: 'Clear Channel',
      position: 'Manager, Flash',
      description: 'Managed all Flash architecture and development ranging from widgets to applications to support the iHeartRadio platform.',
      start: "September 2014",
      end: "",
      accomplishments : [
        {
          label: 'Architected and developed an embeddable flash objects used for large scale integration with partners such as Farmville, General Motors, Sims, Microsoft (XBOX)',
        },
        {
          label: 'Technical lead for application development on multiple platforms (HP Touchpad, Blackberry Playbook, Yahoo TV, General Motors in dash application)',
        },
        {
          label: 'Technical Lead for Farmville / Lady Gaga album release promotion (~3M listens per day)',
        },
      ]
    },
    {
      logo : '/img/logos/rockstargames.png',
      organization: 'Rockstar Games',
      position: 'Senior Web Developer',
      description: 'Built websites, widgets and services to support online marketing for all video game titles.',
      start: "June 2008",
      end: " June 2009",
      accomplishments : [
        {

        }
      ]
    },
    {
      logo : '/img/logos/nba.png',
      organization: 'National Basketball Association',
      position: 'Senior Flash Engineer',
      description: 'Responsible for Flash development during 2008 playoffs and finals',
      start: "January 2008",
      end: " June 2008",
      accomplishments : [
        {
          
        }
      ]
    },
    {
      logo : '/img/logos/ci-group.png',
      organization: 'Corporate Incentives',
      position: 'Developer',
      description: 'Web development with a focus on Flash, Classic ASP, SQL, and variable data print.',
      start: "2005",
      end: "2008",
      accomplishments : [
        {
          
        }
      ]
    },
    {
      logo : '/img/logos/mtv.jpg',
      organization: 'MTV Networks',
      position: 'Flash Developer',
      description: 'Worked on MTV Overdrive',
      start: "2004",
      end: "2005",
      accomplishments : [
        {
          
        }
      ]
    },
    {
      logo : '/img/logos/usace.png',
      organization: 'USACE Army Corps of Engineers',
      position: 'Web Master',
      description: 'Updated / Maintained intranet / websites for government documents',
      start: "2002",
      end: "2004",
      accomplishments : [
        {
          
        }
      ]
    },
  ]
}]);