const db = require("../database");
const getUsers =() => {
    return db.query("select firstname, lastname, email, city, language from users");

};

const addUser = (  
  firstname,
  lastname,
  email,
  city,
  language,
  hashdPassword
  ) => {
    return db.query(
        "insert into users (firstname, lastname, email, city, language, hashdPassword) values (?, ?, ?, ?, ?, ?)", 
        [firstname, lastname, email, city, language, hashdPassword]
    );

  };


module.exports = {
    getUsers,
    addUser
};
