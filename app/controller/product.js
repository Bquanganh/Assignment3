const PRODUCTS = [
    {
      imageLink: "http://mvbinz.xyz/images/1.jpg",
      name: "Rayon a-line Dress",
      price: "13.45",
      type: "Orther",
    },
  ];
  
  module.exports = {
    getProducts: function (req, res, next) {
      return res.status(200).json({ products: PRODUCTS });
    },
    createProducts: async function (req, res, next) {
    try {
            const {name,imageLink,type,price} = req.body;

            const newProd= new Products({
                name: name,
                imageLink: imageLink,
                type: type,
                price: price,
            } );
      await newProd.save();

      res.status(201).json({product_created: newProd});
    }catch(err) {
            res.status(500).json({message: err.message});
        }

    },
  };