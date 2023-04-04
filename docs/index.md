---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# Hero section
hero:
  name: Builder CRM
  text: User's manual
  image:
    src: /images/users/icons/logo-blue_big.svg
    alt: Adocs logo
  tagline: Versión 2.4.13      
  actions:
    - theme: brand
      text: Get Started
      link: /quickstart
# Features section
features:
  - icon: AA
    link: /users_agency_agent
    title: Agency Agent
    details: Lorem ipsum...
  - icon: AM
    link: /users_agency_manager
    title: Agency Manager
    details: Lorem ipsum...
  - icon: C
    link: /users_corporate_manager
    title: Corporate
    details: Lorem ipsum...
  - icon: S
    link: /users_supplier
    title: Supplier
    details: Lorem ipsum...

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: Adocs
  - - meta
    - property: og:image
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - meta
    - property: og:url
      content: https://vitejs.dev/blog/announcing-vite3
  - - meta
    - name: title
      content: Adocs
  - - meta
    - name: twitter:card
      content: https://user-images.githubusercontent.com/62628408/200117602-4b274d14-b1b2-4f61-8dcd-9f9482c677a0.png
  - - link
    - rel: icon
      type: image/svg
      href: /images/users/icons/logo-blue_big.svg
---