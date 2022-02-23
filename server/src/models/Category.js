const Model = require("./Model.js");

class Category extends Model {
  static get tableName() {
    return "categories";
  }

  static get relationMappings() {
    const Animal = require("./Animal");
    return {
      animals: {
        relation: Model.HasManyRelation,
        modelClass: Animal,
        join: {
          from: "categories.id",
          to: "animals.categoriesId",
        },
      },
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    };
  }
}

module.exports = Category;
