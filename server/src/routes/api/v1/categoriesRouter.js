import express from "express";

import CategoriesSerializer from "../../../serializers/CategoriesSerializer.js";
import { Category } from "../../../models/index.js";

const categoriesRouter = new express.Router();

categoriesRouter.get("/", async (req, res) => {
  try {
    const categories = await Category.query();
    const serializedCategories = await Promise.all(
      categories.map(async (category) => {
        return CategoriesSerializer.getSummary(category);
      })
    );
    return res.status(200).json({ categories: serializedCategories });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

categoriesRouter.get("/summary", async (req, res) => {});

categoriesRouter.get("/detail", async (req, res) => {});

export default categoriesRouter;
