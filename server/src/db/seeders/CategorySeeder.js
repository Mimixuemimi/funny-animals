import { Category } from "../../models/index.js";

class CategorySeeder {
  static async seed() {
    const categoriesData = [
      { name: "Cutie" },
      { name: "Scary" },
      { name: "Fluffy" },
      { name: "Birdy" },
      { name: "Death Wish List" },
      { name: "Wish List" },
    ];
    for (const singleCategoryData of categoriesData) {
      const currentCategory = await Category.query().findOne({
        name: singleCategoryData.name,
      });
      if (!currentCategory) {
        await Category.query().insert(singleCategoryData);
      }
    }
  }
}

export default CategorySeeder;
