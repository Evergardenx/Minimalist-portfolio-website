export const state = () => ({
  projects: [
    {
      name: 'Manage',
      slug: 'manage',
      excerpt: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
      description: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
      roles: ['Interaction Design', 'Front End Development'],
      languages: ['HTML', 'CSS', 'JS'],
      websiteUrl: '#'
    },
    {
      name: 'Bookmark',
      slug: 'bookmark',
      excerpt: 'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
      description: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
      roles: ['Interaction Design', 'Front End Development'],
      languages: ['HTML', 'CSS', 'JS'],
      websiteUrl: '#'
    },
    {
      name: 'Insure',
      slug: 'insure',
      excerpt: 'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
      description: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
      roles: ['Interaction Design', 'Front End Development'],
      languages: ['HTML', 'CSS', 'JS'],
      websiteUrl: '#'
    },
    {
      name: 'Fylo',
      slug: 'fylo',
      excerpt: 'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
      description: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that 
      enables you to practice building websites to a design and project brief. Each challenge 
      includes mobile and desktop designs to show how the website should look at different 
      screen sizes. Creating these projects has helped me refine my workflow and solve 
      real-world coding problems. I’ve learned something new with each project, helping 
      me to improve and adapt my style.`,
      roles: ['Interaction Design', 'Front End Development'],
      languages: ['HTML', 'CSS', 'JS'],
      websiteUrl: '#'
    }
  ]
})

export const getters = {

  getProjects: (state) => {
    return state.projects
  },

  getProject: (state) => (slug) => {
    const index = state.projects.findIndex((el) => {
      return el.slug === slug
    })

    return state.projects[index]
  },

  getProjectPrev: (state) => (slug) => {
    const index = state.projects.findIndex((el) => {
      return el.slug === slug
    })

    if (index === 0) {
      return state.projects[state.projects.length - 1]
    }

    return state.projects[index - 1]
  },

  getProjectNext: (state) => (slug) => {
    const index = state.projects.findIndex((el) => {
      return el.slug === slug
    })

    if (index === state.projects.length -1) {
      return state.projects[0]
    }
    
    return state.projects[index + 1]
  }

}