# ⏳ Countdown Timer

## ⚡️ Overview

- You can clone my project and run: `npm install` followed by `npm start`.
- Open [https://localhost:3001](https://localhost:3001) in the browser.
  <br />
  <br />
- The aim of this project was to **build a countdown timer** to an event which was happening in the future and **style a webpage to a wireframe provided**.

## 💾 Technologies & Tools

- HTML
- CSS / SCSS
- JavaScript
- React
- Material UI
- Node.js
- Jest
- Moment.js

## 🕰 Timeframe

## 📈 Planning

### Day 1

- Reading the brief and realising I lacked knowledge in particular sections, **I spent the evening researching** the following:

  - Snapshot testing in Jest,
  - How to add an event to Google calendar,
  - Sever Side Rendering,
  - Page Interaction Design

- I also made a Trello board so I could plan the whole project. **I split the project up into smaller tasks and divided them up to different days** depending on what needed to be done first.
- I wanted to be really strict with this - **logic first and styling after**!
  ![Trello](https://i.ibb.co/vq0DwGK/seTrello.png)

### Day 2

- I used `npx create-react-app` for my boilerplate and downloaded all the dependences I thought I needed.
- **Trying to be true to the mockup, I always had it open and in view** so to not deviate away from it.
- I started from the top down to implement the most basic component it could be. By the end of the day all the information on the page was rendered in the correct layout.
- Started a few snapshot tests but stopped as the the more I read on it, the more I realised that I was using it not to it's full capabilities. I stopped as I wanted to **concentrate on the functional MVP**.
- I also **implemented the logic for the countdown timer** as well as linking up all the buttons to external links.
  ![WIP](https://i.ibb.co/Xz5th5H/WIP1.png)

### Day 3

- I started the day trying to implement the add to Google Calender as from my research I thought this would take the longest as it seemed to be complicated. I'm glad I started the day with this as it was quite tricky!
- As part of the brief was to make the date easily changable, I then thought of an **edge case that if the user inputs the wrong day**, then the whole page would break. Therefore **I added a few extra steps of validation to prevent human error.** This way the date will always be validated before anything else happens.
  <img src="https://i.ibb.co/936T2Y0/window-alert.png" alt="window alert" width=500px />

- The rest of the day was to make sure that since the **date would be only changed in one place** (in the `config/dateChange.js`) which will then **update in other components and link up with the Google Calendar functionality.**
- I also realised that for **easier testing for the countdown**, I had added an `hour` and `minute` parameter so **getting the countdown timer to 0** was quicker and easier to then figure out how to force a refresh.
- **By the end of the day I had reached my goal of achieving a functional MVP which involed all the requirements of the task.**
- ![WIP2](https://i.ibb.co/4KZwMqS/WIP2.png)
  WIP End of day 3

### Day 4

## 🎈 Features

- Date validation and window alert.
- Date only being hard coded in once place.
- Add to Google Calendar functionality.

## 🤓 Notes & Resources

[Google Calendar API](https://developers.google.com/calendar)
<br />

[Google Event API](https://developers.google.com/calendar/v3/reference/events)
<br />

[Moment.js](https://momentjs.com/)
<br />

[Material UI](https://material-ui.com/)
