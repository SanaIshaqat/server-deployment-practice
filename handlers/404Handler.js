module.exports = (req, res) => {
    res.status(404).send({
      errorType: 404,
      message: "Path Not found"
    });
  }