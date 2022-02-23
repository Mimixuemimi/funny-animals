import { User } from "../../models/index.js";

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "mimixue@gmail.com",
        cryptedPassword: "123456",
      },
      {
        email: "xuemimi@gmail.com",
        cryptedPassword: "654321",
      },
    ];
    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne({
        email: singleUserData.email,
      });
      if (!currentUser) {
        await User.query().insert(singleUserData);
      }
    }
  }
}

export default UserSeeder;
