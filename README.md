# Dungeons and Dragons Character Selector
### Made by Justin Aiello for General Assembly's Software Engineering Immersive

---

#### This purpose of this project is to generate data on all twelve Dungeons and Dragons classes and present it to the user. There are also options to generate a random Character and play a small battle scenario. The API data for this project is being pulled from the [Open5e API] (https://api-beta.open5e.com/).

#### To pull class information, the app does the following: 
1. A jQuery event listener waits to see which class button is clicked.
2. Once a button is clicked a function runs that takes arguments of the correct index for the class and the corresponding photo.
3. An ajax request is made that appends the following information to the DOM and displays hidden divs:
  * Class name, class description, hit dice, spellcasting abilities, proficiency saving throws, armor, skills, archetype name, archetype description.
4. A sample event listener look like the following: 
```javascript
$('#barbarian').on('click', () => { $getCharInfo(0, "images/barbarian.png") })
```

---

#### To generate a character, the app does the following:
1. a jQuery event listener wait for the Generate button to be clicked.
2. Once the Generate button is clicked a hidden modal appears and blurs out the rest of the page and runs a function generate the data.
3. A function called `randomizer` is run first. It randomly selects 2 names from premade arrays and appends them to the DOM.
4. Next, 5 ajax requests are made and their respective information is appened to the modal. Random index numbers are generated so the information will be different every time. The following information is requested and appened:
 * Class name, race, magical item, magical item description, monster, current condition.
 
 ---
 
 #### To play the battle game the user clicks on the Battle button which will take the user to a seperate page which runs a brief script then segues into a brief battle scenario. The main purpose of the battle scenario was to learn how to run scripts and add/append DOM elements more dynamically.
