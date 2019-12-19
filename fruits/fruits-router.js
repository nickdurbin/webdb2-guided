const express = require("express")
const knex = require("knex")

const db = knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./produce.db3",
  },
})

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const fruits = await db("fruits").select()
    
    res.json(fruits)
  } catch (err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const fruit = await db("fruits").where({ id: req.params.id }).first()
    
    res.json(fruit)
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const ids = await db("fruits").insert(req.body)
    const newFruit = await db("fruits").where({ id: ids[0] }).first()
    
    res.status(201).json(newFruit)
  } catch (err) {
    next(err)
  }
})

module.exports = router