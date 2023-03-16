db.produtos.find({
  ingredientes: {
    $eq: "picles",
  },
}, {
  nome: true,
  ingredientes: true,
  _id: false,
  valoresNutricionais: {
    $slice: 3,
  },
});