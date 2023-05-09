import Request from "../models/Request";

export const createRequest = async (req, res) => {
  try {
    const {
      nombre,
      guardia,
      fecha,
      grado,
      departamento,
      division,
      asunto,
      objeto,
      lugar,
      tiempoDesde,
      hasta,
      admin
    } = req.body;

    const newRequest = new Request({
      nombre,
      guardia,
      fecha,
      grado,
      departamento,
      division,
      asunto,
      objeto,
      lugar,
      tiempoDesde,
      hasta,
      estado: "Pendiente",
      admin
    });

    const requestSave = await newRequest.save();

    res.status(201).json(requestSave);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getRequest = async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getRequestAdmin = async (req, res) => {
  try {
    const requests = await Request.find({ admin: req.params.requestId });
    res.json(requests);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getNotification = async (req, res) => {
  try {
    const requests = await Request.find({ admin: req.params.requestId }, { estado: 'Pendiente' });
    res.json(requests);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getRequestById = async (req, res) => {
  try {
    const requests = await Request.findById(req.params.requestId);
    res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateRequestById = async (req, res) => {
  try {
    const updateRequest = await Request.findByIdAndUpdate(
      req.params.requestId,
      req.body,
      { new: true }
    );
    res.status(200).json(updateRequest);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteRequestById = async (req, res) => {
  try {
    await Request.findByIdAndDelete(req.params.requestId);
    res.status(204).json({ message: "Peticion eliminada" });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
