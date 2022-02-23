import express from "express";
import AnimalsSerializer from "../../../serializers/AnimalsSerializer.js";

import { Animal } from "../../../models/index.js";

const animalsRouter = new express.Router();

animalsRouter.get("/", async (req, res) => {
  try {
    const animals = await Animal.query();
    const serializedAnimals = await Promise.all(
      animals.map(async (animal) => {
        return AnimalsSerializer.getDetails(animal);
      })
    );
    return res.status(200).json({ animals: serializedAnimals });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

animalsRouter.get("/:id", async (req, res) => {
  const animalIndex = req.params.id;
  try {
    const animal = await Animal.query().findById(animalIndex);
    const serializedAnimal = AnimalsSerializer.getDetails(animal);
    serializedAnimal.category = await animal.$relatedQuery("category");

    return res.status(200).json({ animal: serializedAnimal });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default animalsRouter;
