const receiveWebhook = (req, res) => {
  console.log(req.body);
  res.send('webhook');
};

module.exports = receiveWebhook;
