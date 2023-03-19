db.produtos.updateMany({
  "valoresNutricionais.2.percentual": {
    $gt: 20,
    $lt: 40,
  },
}, {
  $push: {
    tags: "contém sódio",
  },
});
db.produtos.find({}, {
  nome: true,
  tags: true,
  _id: false,
});