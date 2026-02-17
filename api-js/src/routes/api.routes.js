const { Router } = require("express");
const router = Router();

router.get("/check", (req, res) => {
  res.status(200).json({ status: "OK" });
});

router.get("/info", (req, res) => {
  res.status(200).json({
    Instancia: "Maquina 1 - Api 1",
    Curso: "Seminario de Sistemas 1 A",
    Grupo: "Grupo 2",
  });
});

module.exports = router;
