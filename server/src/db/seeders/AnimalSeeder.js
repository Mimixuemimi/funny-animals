import { Animal, Category } from "../../models/index.js";

// Change title to name, &  add skill
class AnimalSeeder {
  static async seed() {
    const wishList = await Category.query().findOne({ name: "Wish List" });
    const birdy = await Category.query().findOne({ name: "Birdy" });
    const deathWish = await Category.query().findOne({ name: "Death Wish List" });
    const cutie = await Category.query().findOne({ name: "Cutie" });
    const fluffy = await Category.query().findOne({ name: "Fluffy" });
    const scary = await Category.query().findOne({ name: "Scary" });
    // define cateogies as a vairable
    // update title to name for each animal
    const animalsData = [
      {
        name: "Zouwu",
        description:
          "The Zouwu is a powerful magical creature native to China. It is five-coloured and resemble a gigantic elephant-sized cat. Zouwus are incredibly powerful and fast, capable of travelling 1,000 miles in a day.",
        skill: "Fight for you, purrrr with you!",
        image:
          "https://cdn.i-scmp.com/sites/default/files/styles/1320w/public/d8/images/2018/11/22/076_chl_127785.jpg?itok=onoD74cw",
        categoryId: wishList.id,
      },
      {
        name: "Niffler",
        description:
          "Nifflers are small mole-like magical creatures with long snouts and fluffy coats of fur. They have a prodigious attraction to shiny objects.",
        skill: "Rob the bank for you!",
        image:
          "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6049cc3f-77d9-4d12-b418-f83cf25d1376/dd4ptr6-a0e91dcb-120a-4b39-a15e-a83e04b02db3.jpg/v1/fill/w_944,h_846,q_70,strp/niffer_by_danitta_cortes_dd4ptr6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwNDljYzNmLTc3ZDktNGQxMi1iNDE4LWY4M2NmMjVkMTM3NlwvZGQ0cHRyNi1hMGU5MWRjYi0xMjBhLTRiMzktYTE1ZS1hODNlMDRiMDJkYjMuanBnIiwiaGVpZ2h0IjoiPD05MTgiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC82MDQ5Y2MzZi03N2Q5LTRkMTItYjQxOC1mODNjZjI1ZDEzNzZcL2Rhbml0dGEtY29ydGVzLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.G1s0b203mnhyLboMqkV-AR80hbMcgh_XB1HiDO45T3c",
        categoryId: wishList.id,
      },
      {
        name: "Thunderbird",
        description:
          "Thunderbirds are spectacular avian creatures that are native to North America. They appear to have heads reminiscent of eagles. They also have three sets of wings with brilliant gold, blue, and white plumage.",
        categoryId: birdy.id,
      },
      {
        name: "Bowtruckle",
        description:
          "Bowtruckles are tree-dwelling creatures made of vines and branches. They only inhabit trees of sufficient quality to produce magical wands, so if you find a tree with Bowtruckles on it, you might want to collect a few samples. ",
        categoryId: wishList.id,
      },
      {
        name: "Dementor",
        description:
          "Dementors are spectral beings that bring darkness and despair wherever they go. They feed on the emotions of humans and, if they can get close enough, they will suck out a person’s soul. Those who suffer the so-called Dementor’s Kiss are left in a permanent vegetative state.",
        categoryId: deathWish.id,
      },
      {
        name: "Mooncalf",
        description:
          "Mooncalves are shy, rare creatures that only emerge during the night of a full moon. They have stubby legs, webbed feet, and long necks like giraffes.",
        categoryId: cutie.id,
      },
      {
        name: "Phoenix",
        description:
          "Phoenixes are magical birds bearing stunning red and gold plumage. They have many powerful magical properties. At the end of their lives, their feathers wilt until they burst into flame. However, once they burn away, they are are reborn from their ashes.",
        skill:
          "Comes back to life every time it perishes. Can manipulate fire and heal other beings with its tears.",
        image: "https://i.pinimg.com/originals/e9/ac/f9/e9acf9772b4173a8d93914d256846a6b.png",
        categoryId: birdy.id,
      },
      {
        name: "Dragon",
        description:
          "Dragons exist in myths and legends throughout the world in various forms. Almost every region of the magical world has a native species of dragons. However, they are all powerful, dangerous creatures with immense strength, fire breath, and great wingspans.",
        categoryId: birdy.id,
      },
      {
        name: "Demiguise",
        description:
          "Demiguise are monkey-like creature which can tell the future and turn invisible when threatened; native to the Far East and has fur suitable for invisibility cloaks.",
        categoryId: fluffy.id,
      },
      {
        name: "Kelpie",
        description:
          "Kelpie are shape-shifting water demon native to Britain and Ireland which inhabits rivers and lakes; usually takes the form of a horse with a bulrush mane and eats humans.",
        categoryId: birdy.id,
      },
      {
        name: "Quintaped",
        description:
          "five-legged club-footed creature with red-brown fur native to the Isle of Drear off the northernmost tip of Scotland; hostile and eats humans.",
        categoryId: scary.id,
      },
    ];
    for (const singleAnimalData of animalsData) {
      const currentAnimal = await Animal.query().findOne({
        name: singleAnimalData.name,
      });
      if (!currentAnimal) {
        await Animal.query().insert(singleAnimalData);
      }
    }
  }
}

export default AnimalSeeder;
