exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
    table.increments("id")

    table.text("name").notNull().unique()
    table.float("avgWeightOz")
    table.boolean("delicious").defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("fruits")
};