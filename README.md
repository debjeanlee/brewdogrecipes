# BREW-yourown-DOG

An app that let's you explore Brewdog's catalogue of recipes.

## Description

This app allows easy access to Brewdog's beer recipes.

Currently, they've released a PDF catalogue of their recipes which I found was very hard to scroll through and tedious to find specific beers, therefore pushing me to create this web app.

The current state of the app allows users to search for individual beers by name, sort by alcohol content, bitterness, or color, search for beers that pair well with different types of food, and is also able to generate a random beer, for the indecisive.

### Tech Used

* React
* Bootstrap with react
* Ajax (axios) for API
* HTML
* CSS
* Javascript


### Wireframes

These are the rough sketches of the main reusable components my app needed.
![Wireframe Sketch](/userstory/wireframes.jpg)

### User Stories

**a user should be able to**
* Browse the catalogue of recipes easily
* Search for specific beers or foods or otherwise
* Easily view the recipes

---

## Planning and Development Process

I thought about the main components that the app would need based on what the user would like to see in the functionality of the app, then broke them down into smaller components.

Afterwards, I coded the components and slowly added more functions accordingly.

##### How it turned out:
_Homepage_
![Home](/userstory/home.png)

_Browse Page_
![Browse](/userstory/sort.png)

_Recipe Page_
![Recipe](/userstory/beerrecipe.png)

_Get Random Beer_
![Random](/userstory/randombeer.png)

_Search function in action_
![Search](/userstory/search.png)
![Results](/userstory/searchres.png)

I added this page later:
_Basics of Brewing_
![Basics](/userstory/basics.png)

### Problem-Solving Strategy

At first I was making a ridiculous number of API calls to get the information I needed.

For example:
> Everytime I changed a page, I would make an API call to get a specific page from the API.
> (This particular API has a max limit of 80 items per page)

Upon future realisation that there was definitely a way to consolidate all my data..
```
What I did:
I made a bunch of API calls at the start to consolidate all my data, to prevent too many re-renders.
Doing this enabled me to set the number of items I wanted to display on each page.
```

### Unsolved problems

##### Sort function in browse page

The function currently does not reset the page to the first page, but displays the items on the current page instead.
It also doesn't reset to it's original state.

##### Minor problems with CSS responsiveness

Some things just aren't lining up correctly when the screen size shrinks.

### Future Upgrades

- [ ] Adding a function that allows users to choose the number of items to display on the page
- [ ] Adding firebase user auth so users can login and save their favourite recipes
- [ ] Links to buy ingredients for specific beer?

## APIs Used

I used [Punk API](https://punkapi.com/).

I used it because it contained most of the information I needed!

---

## Acknowledgments
###### Icons from The Noun Project:
Icon | Creator
--------- | ---------
excited | Alice Design
Idea | Adrien Coquet
Food | Aiden Icons
yeast | Christopher T. Howlett
Hops | Jake Dunham
Wheat | Sebastian Belalcazar Lareo
Fermentation Tank | Ted Casper
Beer Kettle | Ted Caspar
Beer Bottle | Alice Noir
Wait | Vadim Solomakhim
Fermenter and cellar tank | Becris
boiling temperature | Weltenraser
pot | Laura Faraci

---
