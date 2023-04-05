---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
# Hero section
hero:
  name: Buildm Quote
  text: User's manual
  image:
    src: /images/quotes/icons/logo-blue_big.svg
    alt: Adocs logo
  tagline: Versión 1.0    
  actions:
    - theme: brand
      text: Get Started
      link: /quickstart
# Features section
features:
  - icon: FP
    link: /menu_floorplan
    title: Floor Plan
    details: Interface that helps us select the floor plan by pre-established measures and type of appliances.
  - icon: E
    link: /menu_exterior
    title: Exterior
    details: Interface that helps us select the color of the wall, Fasci and gutter from the exterior design
  - icon: I
    link: /menu_interior
    title: Interior
    details: Interface that helps us select from the interior design the color of the wall, kitchen floor, living room, shows us the model of the bathroom and bedroom.
  - icon: D
    link: /menu_details
    title: Details
    details: Interface that helps us send the quote information to the sales agent by email.

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
      href: /images/quotes/icons/logo-blue_big.svg
---