function getHello(req, res) {
  res.status(200).send({ msg: "Hola desde controller" });
}

module.exports = {
  getHello,
};
