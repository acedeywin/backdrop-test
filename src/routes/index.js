import express from "express"
import Model from "../models/model"

const route = express.Router()

route.get("/:code", async (req, res) => {
  try {
    const urlCode = req.params.code

    const url = await Model.findUrlCode(urlCode)

    return url
      ? res.redirect(url.long_url)
      : res.status(404).json("No url found.")
  } catch (err) {
    console.log(err)
    return res.status(500).json("Server error")
  }
})

export default route
