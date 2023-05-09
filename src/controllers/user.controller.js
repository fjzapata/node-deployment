import User from "../models/User";
import Role from "../models/Role";

export const createUser = (req, res) => {
    res.json('createUser')
}

export const getReqAdmin = async (req, res) => {
    try {
        const role = await Role.findOne({ name: "admin" });
        const requests = await User.find({ roles: { $in: [role._id] } }).select('_id', 'username');
        res.json(requests);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};