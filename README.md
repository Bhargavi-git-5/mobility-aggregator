# Mobility Aggregator Platform

## Overview
This project is a static multi-page website designed to display popular mobility apps (e.g., Uber, Ola, Rapido, etc.) across various cities in India. The website provides categorized listings for Cabs, Bikes, Autos, and Porter Services based on the selected city.

### Features:
- Displays mobility apps based on the user's selected city.
- Allows users to choose between different cities (e.g., Delhi, Mumbai, Bangalore, etc.).
- Shows a message when there is no data available for a particular city.
- Includes an "Antique Mobility Museum" section with trivia and images.
- Provides links to popular app icons (e.g., Uber, Ola).
- Users can subscribe to receive updates on upcoming mobility options.

### Files & Folders:
- **index.html**: Homepage that displays the mobility apps based on the selected city.
- **app-detail.html**: Detailed page for each app, which includes company overview, download links, booking links, and reviews.
- **css/style.css**: Stylesheet for the layout and design of the website.
- **js/script.js**: JavaScript file for handling interactivity (e.g., city selection, dynamic content display).
- **images/**: Folder containing the logos and images used in the project (app icons, museum images, etc.).
  - **Images for App Logos**:
    - `uber.png` - Logo for Uber (used in Cabs category).
    - `ola.png` - Logo for Ola (used in Cabs and Autos categories).
    - `meru.png` - Logo for Meru (used in Cabs category).
    - `rapido.png` - Logo for Rapido (used in Bikes category).
    - `bounce.png` - Logo for Bounce (used in Bikes category).
    - `vogo.png` - Logo for Vogo (used in Bikes category).
    - `jugnoo.png` - Logo for Jugnoo (used in Autos category).
    - `porter.png` - Logo for Porter (used in Porter Services category).
    - `blowhorn.png` - Logo for Blowhorn (used in Porter Services category).
  - **Museum Image**:
    - `rapido-bike.jpg` - Image used in the Antique Mobility Museum section.

### How to Run:
1. Download or clone the project files to your local system.
2. Open the `index.html` file in your preferred web browser to view the homepage.
3. To view the detailed page for any app, click on the app’s name from the homepage (you can link them to their respective pages in `app-detail.html`).
4. Use the city dropdown to switch between cities and see the apps related to each city.

### Assumptions:
- The images provided in the `images/` folder should be correctly named to match the app logos (e.g., `meru.png`, `ola.png`, etc.) to ensure they are displayed correctly on the website.
- The website does not use any external libraries or frameworks; all functionalities are implemented using plain HTML, CSS, and JavaScript.
- City-specific data is statically defined in JavaScript (e.g., no backend server or database is used).

### Future Improvements (Optional):
- Implement dynamic data loading from an external API for real-time app data.
- Add a search feature to filter apps based on name or category.
- Improve accessibility by adding ARIA labels and ensuring keyboard navigability.
