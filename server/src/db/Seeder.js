/* eslint-disable no-console */
import { connection } from "../boot.js";
import AnimalSeeder from "./seeders/AnimalSeeder.js";
import CategorySeeder from "./seeders/CategorySeeder.js";

import UserSeeder from "./seeders/UserSeeder.js";

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("seeding categories");
    await CategorySeeder.seed();

    console.log("seeding animals");
    await AnimalSeeder.seed();

    console.log("seeding users");
    await UserSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
