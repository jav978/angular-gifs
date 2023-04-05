import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs",
  description: "A Buildm Site",
  themeConfig: {
    logo: "/images/quotes/icons/buildmgreen.png",
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/introduction' },     
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "v 1.0", link: "/item-1" }          
        ],
      },
    ],
    sidebar: [
      {
        text: 'Getting Started  ',   
       
        collapsed: true,
        collapsible: true,  
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Quickstart Guide', link: '/quickstart' },
          {
            items: [
              { text: 'Floor Plan', link: '/menu_floorplan' },              
              { text: 'Exterior', link: '/menu_exterior' },
              { text: 'Interior', link: '/menu_interior' },
              { text: 'Details', link: '/menu_details' },
            ]
          }
        ]
      }
    ],
    socialLinks: [      
      { icon: "facebook", link: "https://es-la.facebook.com/" },
      { icon: "twitter", link: "https://twitter.com" },      
      { // Icon customizer
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path></svg>',
        },
        link: "https://www.instagram.com/"
      },
    ],
    // .vitepress/config.js
 footer: {
  message: "Released under the MIT License.",
  copyright: "Copyright © 2023-Serrot Consultores"  
},
  }
})
