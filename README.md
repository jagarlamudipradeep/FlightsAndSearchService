# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create `.env`  file in the root directory and add the followingenvironment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
    "username": "root",
    "password": "Pradeep2580#",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`