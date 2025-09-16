import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função de autenticação para verificar se o usuario esta enviando o token e se ele é valido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
    // DIVIDINDO A STRING DO TOKEN
    const bearer = authToken.split(" ");
    const token = bearer[1];
    //validando o token
    jwt.verify(token, userController.jwtSecret, (error, data) => {
      if (error) {
        res.status(401).json({ error: "Token invalido" });
      } else {
        req.token = token;
        req.loggedUser = {
          id: data.id,
          email: data.iemail,
        };
        next();
      }
    });
    next();
  } else {
    res.status(401).json({ error: "Acesso não autorizado. Token invalido" });
  }
};

export default { Authorization };
