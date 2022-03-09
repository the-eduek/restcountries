# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). For this solution, I tweaked the original designs a little to create something I think would be just a little original. I changed the typeface and used a different typeface for the header to simulate a logo.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- Live Site URL: [the-eduek.github.io/restcountries](https://the-eduek.github.io/restcountries)

## My process

### Built with

- Mobile first workflow
- Semantic HTML5 markup
- React.js, Tailwind CSS


### What I learned

Basically, this project was to test and practice my React knowledge.  I used React Router v6.

With this project, I finally encountered a use case for the CSS grid `auto-fill` property. This was useful when a users search result contained a small number of countries. The `auto-fill` ensured that the search results did not take up all available space but instead implicit grid items filled up the space. 

I also created my search and filter functionality such that new API requests aren't made each time but instead the existing data is filtered according to the condition. This allows for improved user search, i.e. a user could search only the results of a filtered region or filter a search results by region.

## Author

- twitter - [@the_eduek](https://www.twitter.com/the_eduek)