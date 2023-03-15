db.produtos.find({
  "vendidos": {
    $not: {
      $eq: 50
    }
  },
  "tags": {
    $exists: false
  }
}, {
  "nome": true,
  "vendidos": true,
  "_id": false,
});