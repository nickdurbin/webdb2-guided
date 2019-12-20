
exports.up = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
    table.string("color", 128)
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("fruits", (table) => {
    table.dropColumn("color")
  })
};
