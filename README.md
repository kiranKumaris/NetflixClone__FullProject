# Netflix Clone

## Overview

This project is a Netflix Clone, a web application inspired by Netflix's design and functionality. It is built using React and Vite, featuring dynamic movie data fetched from the TMDb API, a responsive user interface, and a video player for trailers. The application includes essential features like user authentication, a home page with movie categories, a login page, and a video player for movie trailers.

## Project Description

The Netflix Clone is a modern web application designed to replicate the core features of Netflix. It allows users to browse movies, view trailers, and manage authentication (login and signup). The app is fully responsive, ensuring a seamless experience across devices. It uses Firebase for authentication and Firestore for user data storage.

## Features

- Dynamic Movie Data: Fetches movie data and trailers from the TMDb API.
- Responsive Design: Optimized for all screen sizes, including mobile, tablet, and desktop.
- Authentication: Login and signup functionality using Firebase.
- Video Player: Embedded YouTube player for movie trailers.
- Hero Section: Displays a featured movie with a banner and description.
- Scrollable Movie Cards: Horizontal scrolling for movie categories.
- Dark Mode: A toggle for dark mode (theme icon included).
- Fixed Navbar: Dynamic background on scroll.
- Footer: Includes links and social media icons.

## Tech Stack

- React, React Router, CSS
- Vite
- TMDb API
- Firebase Authentication, Firestore
- HTML
- JavaScript

## Deployment

- Hosted on Vercel
- Version control via GitHub

## Prerequisites

- Node.js
- TMDb API Key
- Firebase

## Folder Structure

├── .gitignore
├── eslint.config.js
├── firebase-debug.log
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│ ├── 404.html
│ ├── background_banner.jpg
│ ├── index.html
│ ├── netflix_favicon.ico
├── src/
│ ├── App.jsx
│ ├── firebase.js
│ ├── index.css
│ ├── main.jsx
│ ├── assets/
│ │ ├── back_arrow_icon.png
│ │ ├── bell_icon.svg
│ │ ├── caret_icon.svg
│ │ ├── dark.png
│ │ ├── facebook_icon.png
│ │ ├── hero_banner.jpg
│ │ ├── hero_title.png
│ │ ├── info_icon.png
│ │ ├── instagram_icon.png
│ │ ├── logo.png
│ │ ├── netflix_spinner.gif
│ │ ├── play_icon.png
│ │ ├── profile_img.png
│ │ ├── search_icon.svg
│ ├── components/
│ │ ├── Footer/
│ │ │ ├── Footer.jsx
│ │ │ ├── Footer.css
│ │ ├── Navbar/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Navbar.css
│ │ ├── TitleCards/
│ │ ├── TitleCards.jsx
│ │ ├── TitleCards.css
│ ├── pages/
│ │ ├── Home/
│ │ │ ├── Home.jsx
│ │ │ ├── Home.css
│ │ ├── Login/
│ │ │ ├── Login.jsx
│ │ │ ├── Login.css
│ │ ├── Player/
│ │ ├── Player.jsx
│ │ ├── Player.css

## API Usage

- Fetch Movies: `https://api.themoviedb.org/3/movie/{category}`
- Fetch Trailers: `https://api.themoviedb.org/3/movie/{id}/videos`

## UI/UX

- Fully responsive design
- Smooth scrolling and hover effects
- Fixed navbar with dynamic background
- Dark mode switching themes.

GitHub Repo Link: https://github.com/kiranKumaris/NetflixClone__FullProject
Website URL on Vercel: https://netflix-clone-bay-nu-46.vercel.app/
