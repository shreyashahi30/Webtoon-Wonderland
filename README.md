# Webtoon-Wonderland
# Webtoon Showcase Application

A single-page application that showcases the top 5 fantasy webtoons. This project consists of a front-end built with React.js and a back-end built with Node.js and Express, along with MongoDB for data storage. Users can vote for their favorite version of a selected webtoon (manhwa or anime) and see live results.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Displays the top 5 fantasy webtoons with titles, images, and descriptions.
- Users can vote for their favorite version of each webtoon (manhwa or anime).
- Real-time voting results using AJAX.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- **Front-End**: 
  - React.js
  - HTML, CSS
  - Axios for API calls

- **Back-End**: 
  - Node.js
  - Express
  - MongoDB (with Mongoose)

- **Development Tools**: 
  - npm (Node Package Manager)
  - nodemon (for auto-restarting the server)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (locally installed or a cloud service like MongoDB Atlas)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/webtoon-showcase.git
   cd webtoon-showcase
   
### Set up the Back-End:

Navigate to the server directory:

bash
cd server
Install the dependencies:

bash
npm install

### Create a .env file in the server directory with the following content:

plaintext
MONGO_URI=mongodb://localhost:27017/webtoonDB
PORT=5000

### Start the server:

bash
npm run dev

### Set up the Front-End:

Open a new terminal, navigate to the client directory:

bash
cd client

### Install the dependencies:

bash
npm install
Start the React application:

bash
npm start

**Usage**
Once both the front-end and back-end servers are running, navigate to http://localhost:3000 in your web browser to view the application.

**API Endpoints**
GET /api/webtoons

Description: Retrieve all webtoon data.
Response: An array of webtoon objects.
POST /api/webtoons

Description: Create a new webtoon.
Request Body:
json
{
  "title": "New Webtoon",
  "image": "path/to/image.jpg",
  "description": "Description of the new webtoon."
}
Response: The created webtoon object.
