exports.seed = async function(knex) {
  await knex("fruits").truncate()
   await knex('fruits').insert([
    { name: "dragonfruit", avgWeightOz: 16.7, delicious: true, color: "red" },
    { name: "strawberry", avgWeightOz: 0.42, delicious: true, color: "red" },
    { name: "banana", avgWeightOz: 4.0, delicious: true, color: "yellow" },
    { name: "noni", avgWeightOz: 1.0, delicious: false, color: "white" }
  ]); 
};