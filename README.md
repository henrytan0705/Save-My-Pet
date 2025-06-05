# Save My Pet

**Save My Pet** is a platform designed to help reunite pets and animals with their owners after a natural disaster, such as a flood, fire, or hurricane. The website allows users to post details of their missing pets, including pictures, descriptions, medical history, and last known location, to help in the rescue and reunification efforts.

## Project Overview

**Save My Pet** aims to help residents and pet owners of cities prone to natural disasters by providing a simple platform for posting and searching for lost pets. Initially, the platform will focus on Manhattan due to its familiarity and abundance of data. The website will feature responsive design, CRUD functionality for posts, search and filtering, and integration with social media for scraping relevant posts.

## Project Goal

To create a **working, responsive website** that helps assist with pet rescue and reunification during or after a natural disaster.

## Problem Statement

During the **Los Angeles fire**, many pet owners were forced to leave their pets behind or were prohibited from returning to reunite with them. There is a significant need for a platform to help reunite pets with their owners in such situations.

## Proposed Solution

**Save My Pet** will provide a **platform for pet owners** to post about their missing or found pets. The posts will contain:
- **Pictures**
- **Descriptions**
- **Medical history**
- **Last known location**

This information will help rescue teams and pet owners find and reunite with their pets.

## Target Audience

Our website will initially focus on **residents and pet owners** of a specific city prone to natural disasters, with a focus on **Manhattan** for its familiarity and data availability.

## Features

### Core Features:
- **Responsive Design**: The website will be optimized for all devices (mobile, tablet, and desktop).
- **Form Validation & Error Handling**: Implemented on the **Sign-up/Login** and **Post creation** forms to ensure proper user input.
- **CRUD Operations for Posts**: Users can create, read, update, and delete posts related to missing or found pets.
- **Search and Filtering**: Users can search and filter posts by **description**, **location**, or **date** of the post.
- **Map Integration**: Posts will appear as **markers on a map** based on their geographical coordinates.
- **Social Media Scraping (TBD)**: Scrape relevant data from social media platforms (e.g., Twitter) for pet rescue information.

### Nice-to-Have Features:
- **User Profile**: Allow users to view and manage their profile and all posts they have created.
- **Image Upload**: Implement image upload functionality for pet posts, storing images in the cloud (e.g., AWS S3).
- **Comments**: Enable users to comment on posts for further discussion or additional information.
- **Real-Time Updates**: Use **WebSockets** to push real-time updates to users when new posts are created or updated.

## Technology Stack

### Prototype:
- **Figma**: The prototype of the website will be designed using Figma.

### Frontend:
- **HTML, CSS, JavaScript**
- **React.js**: For building the user interface with dynamic components and state management.

### Backend:
- **Node.js**: For creating the server-side logic and API routes.
- **Python**: (Optional) for **social media scraping** using libraries like **BeautifulSoup** or **Scrapy**.

### Database:
- **MongoDB**: A NoSQL database to store user data, posts, and pet information.

### Web Servers/Hosting:
- **Node.js** and **Express.js**: For the backend server and API handling.
- **(TBD)**: For deployment and hosting. (e.g Vercel, Render, etc)

### DevOps/Tools:
- **GitHub**: Version control using GitHub repositories.

## Installation

### Prerequisites
- **Node.js**: You need to have [**Node.js**](https://nodejs.org/en) installed on your machine.



## Current Versions
- **Node.js**: Version 22.16.0
- **React.js**: Version 19.1
