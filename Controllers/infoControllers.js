const Info = require("../models/infoModels");
const mongoose = require("mongoose");

// get all info
const getInfo = async (req, res) => {
  const info = await Info.find({}).sort({ createdAt: -1 });

  res.status(200).json(info);
};

// get a single info
const getInfoById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id not valid" });
  }
  const info = await Info.findById(id);

  if (!info) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.status(200).json(info);
};

//create info
const createInfo = async (req, res) => {
  const { campaignName, campaignId, click, hooverTime } = req.body;

  //add doc to db
  try {
    const info = await Info.create({
      campaignName,
      campaignId,
      click,
      hooverTime,
    });

    res.status(200).json(info);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "Post data" });
};

//delete info
const deleteInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id not valid" });
  }
  const info = await Info.findOneAndDelete({ _id: id });

  if (!info) {
    return res.status(400).json({ error: "Not Found" });
  }
  res.status(200).json(info);
};

//update info
const updateInfo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Id not valid" });
  }
  const info = await Info.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!info) {
    return res.status(400).json({ error: "Not Found" });
  }
  res.status(200).json(info);
};

module.exports = {
  createInfo,
  getInfo,
  getInfoById,
  deleteInfo,
  updateInfo,
};
