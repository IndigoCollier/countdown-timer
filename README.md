# Zodiac Countdown

A fun, interactive web app where users can select their birthdate and watch a countdown to their next birthday — complete with a personalized zodiac theme, seasonal messages, and in-depth yearly horoscopes.



---

## Features

-  **Countdown Timer** — Countdown to the selected birthdate
-  **Zodiac Detection** — Automatically shows the correct zodiac sign
-  **Seasonal Themes** — Display custom birthday or zodiac season messages
-  **Horoscope Popup** — View detailed yearly predictions in a stylish modal
-  **Copy & Download** — Copy horoscope to clipboard or save as a text file *(optional to add)*
-  **Background Music** — Plays looping zodiac-inspired music on start
-  **Zodiac Sidebar** — Clickable zodiac icons to explore other signs

---

## Example Workflow

1. Choose a birthdate using the date-time picker
2. App identifies your zodiac sign and starts a live countdown
3. Special themed messages and styling appear for your sign
4. Click **"Learn More"** to view a detailed horoscope
5. Use sidebar to preview other zodiac signs

---

## Technologies Used

- **HTML5** + **CSS3** — Responsive layout and visual styling
- **JavaScript** — Countdown logic, zodiac data, modal interactions
- **Clipboard API** — For copying horoscope text
- **Audio API** — Background music on start

---

## Project Structure

```bash
├── index.html
├── style.css
├── script.js
├── /images
│   ├── aries.jpg
│   ├── taurus.jpg
│   └── ... (other signs)
├── /zodMusic.mp3

