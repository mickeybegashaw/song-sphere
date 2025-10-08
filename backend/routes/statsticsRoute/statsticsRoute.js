import express from "express"
import StatsticsController from "../../controllers/statsticsController.js"

const router = express.Router()

router.get("/", StatsticsController)

export default router