 const userModels = require("../Models/userModels");

  const getUsers = async (req, res) =>{
    try{
        const [users] = await userModels.getUsers();
        console.log("users:=>", users);
        res.send(users);

    } catch (error) {
        res.status(500).send(error);
    } };
    const addUser = async (req, res) =>{
      try{
          const { firstname, lastname, email, city, language, hashPassword } = req.body;

          const [result] = await userModels.addUser( lastname, firstname, email, city, language, hashPassword);
          if (!result.affectedRows) {
            res.send("erreur")
          }else {
            res.send("crée");
          }

      }catch (erreur){
        res.status(500).sens(erreur);
      }
    };

  module.exports = {
    getUsers,
    addUser
  };

