import User from "../models/User";

export const createUser = (req, res) => {
    res.json('createUser')
}

export const getReqAdmin = async (req, res) => {
    try {
        const requests = await User.find({ roles: { $in: [ObjectId('644bb91feff1cda3d5f1fc69')] } });
        res.json(requests);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};