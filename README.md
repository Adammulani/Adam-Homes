# Adam Homes

**Important Note**:------------------- Allow popups in your browser settings to ensure proper functionality of the website.----------------------------------------

## Project Description

Adam Homes is a real-estate project where you can browse properties with images, prices, locations, and descriptions. Users can sign up or log in to book property visits, cancel bookings, and mark properties as favorites. Properties can be searched by title, city, or country. We use MongoDB Atlas for cloud-based data storage.

- ## Deployed version
  ## Don't forget to **allow Popup** because it is part of **Auth0 authentication process** else website will not work as you will not be able to login properly
 - https://adam-homes-ivory.vercel.app/  

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js and Express
- **Authentication:** Auth0
- **Forms:** Mantine library
- **Data Storage:** MongoDB Atlas
- **Security:** JWT token
- **Database Management:** Prisma
- **Image Storage:** Cloudinary

## Project Features

1. **Authentication:** Users can sign up, log in, and log out.
2. **Cloud Data Storage:** Uses MongoDB Atlas for storing data, accessible across devices.
3. **Protected Routes:** All routes are secured with JWT tokens.
4. **Responsive Design:** The website is responsive across devices.
5. **RESTful API:** Endpoints are available to manage tasks.
6. **Property Search:** Users can search properties by title, city, or country.
7. **Property Listing:** Displays all properties with details.
8. **Property Details:** View details of a single property by clicking on its card.
9. **Favorites:** Users can mark properties as favorites.
10. **Favorites Page:** Dedicated page listing all favorite properties.
11. **Add New Property:** Add new properties with title, description, image, and location.

## Installation

### Clone the Repository

```sh
git clone https://github.com/Adammulani/Adam-Homes.git

1. Navigate to the client directory and execute the following command to install frontend dependencies:
    ```
    npm install
    ```

2. Navigate to the server directory and execute the following commands to install backend dependencies and set up Prisma:
    ```
    npm install
    npx prisma db push
    npx prisma generate
    ```

3. Configure Auth0 for authentication:
    - Go to the official website of Auth0 (auth0.com), sign up/login, and create a new application.
    - Choose frontend technology for a quickstart guide. Follow the steps in the documentation to connect your application with Auth0. **Documentation** https://auth0.com/docs/quickstarts
    - Create an API on the Auth0 website. Inside the identifier field, provide a unique name. This identifier will be used as the audience parameter for Auth0 configuration in your code.
    - While attempting to login, ensure to allow popups to prevent issues with the website's functionality.

4. Update the `.env` file with your own `DATABASE_URL`. First, create a database in MongoDB Atlas or on your local machine, and remember its password.

## Usage

After completing the installation steps, you can run the application locally to start managing tasks.

## Start the frontend
- cd client
- npm run dev

## Start the backend
- cd server
- npm run start
