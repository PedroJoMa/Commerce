db.produtos.deleteMany({
  curtidas: {
    $lt: 50,
  },
}, {
  nome: true,
  _id: false,
});
db.produtos.find({}, {
  nome: true,
  _id: false,
});