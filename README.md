# CredenceAnalytics-Code

To run the server, after cloning the repository run the command in the main directory of the project.

-> npm install (download all the dependencies)

-> npm start (start the server)

To run the server on custom port , add a .env file in the main directory and add a PORT = <PORT_NO> in the file, otherwise by default the server will run on port 3000.

Ex: PORT = 1234

Routes:

get('/') -> show all the data in the database

post('/add) -> add a new entry to the database

put('/:id/edit') -> update an entry in the database

delete('/:id/delete') -> delete an entry from the database
