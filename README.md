# ⏳ Countdown Timer

## ⚡️ Overview

- You can clone my project and run: `npm install` followed by `npm start`.
- Open [https://localhost:3000](https://localhost:3000) in the browser. **NOTE: Google Calendar API will ONLY allow `localhost:3000` or `localhost:3001`**.
- **‼️ TO CHANGE THE DATE GO TO `src/config/dateChange.js` AND ADD THE END DATE THERE ‼️**
  <br />
  <br />
- The aim of this project was to **build a countdown timer** to an event which was happening in the future and **style a webpage to a wireframe provided**.
- **Refresh when countdown to 0 has been implemented as well as reveal functionality.**
- Site is fully responsive.

## 💾 Technologies, Tools & Libraries

- HTML
- CSS / SCSS
- JavaScript
- React
- Material UI
- Node.js
- Jest
- Moment.js
- Hover.css
- React Reveal
- React Dom Confetti

## 📈 Planning

### Day 1

- Reading the brief and realising I lacked knowledge in particular sections, **I spent the evening researching** the following:

  - Snapshot testing in Jest,
  - How to add an event to Google calendar,
  - Sever Side Rendering,
  - Page Interaction Design

- I made a Trello board to plan the whole project. **The project was split into smaller tasks and set to different days**.
  ![Trello](https://i.ibb.co/vq0DwGK/seTrello.png)

### Day 2

- I used `npx create-react-app` for my boilerplate.
- **Mockup was always open and in view** so to not deviate away from it.
- Started a few snapshot tests but stopped as the the more I read on it, the more I realised that I was using it not to it's full capabilities. I stopped and decided to **concentrate on the functional MVP**.
- **Logic to the countdown timer** and links to external sites complete.
- By the end of the day all the information on the page was rendered in the correct layout.

### Day 3

- Implemented the add to Google Calender - from my research it seemed complex was this was the priority of the day.

- As part of the brief was to make the date easily changable, I then thought of an **edge case that if the user inputs the wrong day**, then the whole page would break. Therefore **I added a few extra steps of validation to prevent human error.** This way the date will always be validated before anything else happens.
  <img src="https://i.ibb.co/936T2Y0/window-alert.png" alt="window alert" width=500px />

- The rest of the day was to make sure that since the **date would be only changed in one place** (in the `config/dateChange.js`) which will then **update in other components and link up with the Google Calendar functionality.**
- For **easier testing for the countdown** I had added an `hour` and `minute` parameter so **getting the countdown timer to 0** was quicker and easier to then figure out how to force a refresh.
- **At the end of the day I had reached my goal of achieving a functional MVP which involed all the requirements of the task.**

### Day 4

- The ockup was given with rulers so safe to assume that the **layout had to be accurate** to that.
  - Working out the ratios from the mockup I **added colourful divs as a background to achieve a visual guide to help me align the layout**.
    <br />
    <br />
    <img src="https://i.ibb.co/4ZYc2Dg/ratio-wireframes.png" alt="wireframe ratios" height="500px" />
  - Being this stict with the layout took much longer than expected which meant that I had to push a few tasks to the next day.

### Day 5

- **Day was spent mainly making the site responsive and fixing all the styling bugs**.
- This included adding a burger menu to the nav bar.
- **Implemented all the snapshot tests for each component.**
- Created the reveal page when the timer hits 0.

### Day 6

- Finishing touches with page interactions.
- Refactoring code.

## 🎈 Features

- Date validation and window alert.
- Date only being hard coded in once place.
- Add to Google Calendar functionality.
- Reveal page implemented.
- Fully responsive site.

## 🤓 Notes & Resources

[Google Calendar API](https://developers.google.com/calendar)

[Google Event API](https://developers.google.com/calendar/v3/reference/events)

[Moment.js](https://momentjs.com/)

[Material UI](https://material-ui.com/)

[React Reveal](https://www.react-reveal.com/)

[Moment.js](https://momentjs.com/)

[React DOM Confetti](https://daniel-lundin.github.io/react-dom-confetti/)

[Hover.css](https://ianlunn.github.io/Hover/)
