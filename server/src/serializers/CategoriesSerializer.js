import AnimalsSerializer from "./AnimalsSerializer.js";

class CategoriesSerializer {
  static getSummary(category) {
    const allowedAttributes = ["id", "name"];
    let serializedCategory = {};
    for (const attribute of allowedAttributes) {
      serializedCategory[attribute] = category[attribute];
    }
    return serializedCategory;
  }

  static async getDetails(category) {
    const serializedCategory = this.getSummary(category);
    const relatedAnimals = await category.$relatedQuery("animals");
    const serializedAnimals = await Promise.all(
      relatedAnimals.map(async (pasta) => AnimalsSerializer.getDetails(animal))
    );
    serializedCategory.animals = serializedAnimals;
    return serializedCategory;
  }
}

export default CategoriesSerializer;
