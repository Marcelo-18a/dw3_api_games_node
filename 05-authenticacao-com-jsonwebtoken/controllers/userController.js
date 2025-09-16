import userService from "../services/userService.js";

//função para cadastrar um usuario

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastrado" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
export default { createUser };
