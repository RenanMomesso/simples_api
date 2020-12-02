const Item = require("../models/item");

const router = require("express").Router();

router.get("/", (req, res) => {
  Item.find({},(err,data)=>{
      return res.json(data)
  })
  
});

router.get("/:nome", (req, res) => {
    Item.findOne({nome:req.params.nome},(err,data)=>{
        return res.json(data)
    })
    
  });

  router.put("/:nome", (req, res) => {
    Item.findOne({name:req.params.name},(err,data)=>{
        data.nome = nome
        return res.json(data)
    })
    
  });



router.post("/criar/:nome", (req, res) => {
  const nome = req.params.nome;
  const newItem = new Item({ nome });
  newItem.save((item, err) => {
    if (err) return res.status(200).json(err);
    return res.json(item);
  });
});

module.exports = router;
