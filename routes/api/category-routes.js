const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [product]}).then((catergoryData) => {
    res.json(catergoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    }, include: [Product]}).then((res) => {
    res.json(res);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Catergory.create(req.body)
  .then((res) => {
    res.json(res);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      id: req.body.id
    },
    {
      where: {
        id: req.params.id
      },
    },
  ).then ((updatedCatergory) => {
    res.json(updatedCatergory);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Catergory.destroy({
    where: {
      id: req.params.id
    },
  }).then((deletedCategory) => {
    res.json(deletedCategory);
  });
});

module.exports = router;
