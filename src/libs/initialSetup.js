import Role from "../models/Role";
import User from "../models/User";
import config from '../config'
export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  try {
    const count = await User.estimatedDocumentCount();

    if (count > 0) return;

    const role = await Role.findOne({ name: "admin" });
    
    const values = await Promise.all([
      new User({
        username: "admin",
        cedula: "1004559997",
        password: await User.encryptPassword(config.PSSWSECRET),
        roles: [role._id]
      }).save()
    ])
    console.log(values)
  } catch (error) {
    console.error(error)
  }
}
