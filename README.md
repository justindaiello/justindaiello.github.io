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

####
