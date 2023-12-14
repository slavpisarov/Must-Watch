# Must Watch

This is an application that provides the users with the opportunity to keep track of the Movies and TV series they want to watch in an engaging way. The users can add and comment on theirs and other people's media preferences. Must Watch uses React for Frontend and Softuni's practice server for Backend.

## Demo

You can see the live demo of Must Watch at https://must-watch-react.web.app, deployed with Firebase.

## Local Instalation 

1. Clone the repository to your local machine
2. Navigate to the server folder to start the server (cd .\server)
  * Start the server with (node .\server.js) command to start the back-end
3. Navigate to the client folder (cd .\client)
  * npm install - command for install all packages and dependencies
  * npm run dev - to start the development server and run the app
  * open your browser and go to http://localhost:5173 to access the application


## Demo

You can see the live demo of Must Watch at https://must-watch-react.web.app/.
The Frontend demo is deployed with Firebase.

## Authentication 
 You can use two users for immediate testing:

  ### User 1:
   * Email: peter@abv.bg
   * Password: 123456

  ### User 2:
   * Email: george@abv.bg
   * Password: 123456

   ## User Permissions

1. All users and guests:
   * View home page with most commented media
   * View catalog with all media
   * View details and read comments

2. Not Logged guests
    * Login and register

3. Logged in users
    * Add media
    * Access their own movies / tv series pages
    * Write comments

4. Users (Owners)
    * Edit and delete their media

  ## Features
 There is pre-seeded data on the server for better user experience.
1. Public part - no authentication 
    * **Home** page is accessible by all users, and includes a short text and 4 most commented media.
    * **Catalog** page includes all uploaded media.
    * **Details** page with info about the media and comments for it.
    * **Register** page requires username,email,password and rePassword. Email must not be registered before and passwords must match.
    * **Login** page requires valid email and assword.

2. Private part - authentication and authorization:
    * **Details** page with info about the media, comments and can comment themselve. Owners can also see edit and delete buttons.
    * **Create** page where new media is added. Required fields are title and type, for redirection purposes.For better UX also add year, genre, notes and imageUrl.
    * **MyList** pages are two separate pages for either movies, or tv series that a user has created with links to their details page.


  ## Security

* The application requires the user to be authenticated to take advantage of the full functionalities.
* Guards: Auth guard and Guest guard have been implemented to ensure access to the appropriate experience based on user authenticity .
* 404 Page is implemented to handle undefined routes with the option of redirection to home page.
* Error boundary: catch JS errors and redirect to 404 page for bettter UX.

  ## Additional Libraries

* React Bootstrap - for some pre-styled components.
* React Router DOM - handles the routing of the application.