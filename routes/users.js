const express = require('express')
const router = express.Router();

router.get('/', ((req,res, next) => {
  res.send("Users")
}))

router.post('/', ((req, res, next) => {

}))

module.exports = router
