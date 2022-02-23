class AnimalsSerializer {
  static getDetails(animal) {
    const allowedAttributes = ["id", "name", "description", "skill", "image"];
    let serializedAnimal = {};
    for (const attribute of allowedAttributes) {
      serializedAnimal[attribute] = animal[attribute];
    }
    return serializedAnimal;
  }
}

export default AnimalsSerializer;
