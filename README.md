Danielle Pont • Product Project
A database of products and a space to review them.

Front-end has been built using React, with Redux as a means of centralizing the state of the app.

The data is managed on the serverside with the use of Knex to build the SQL queries.
In the database, there are two tables (as of now) - The first table is products list, which includes the product's name and brand as well as an image url, and the second table is to store the reviews, which includes the author ID.

Auth0 will eventually be used to generate the user IDs and will make it so that only users who are logged in can see the reviews/products.

Chakra UI and traditional CSS will be used for the styling of this application.
