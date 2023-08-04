const app = require('./index');
const { conn } = require('./db');

const PORT = process.env.PORT || 8000;

conn.sync({ force: false }).then(() => {
  console.log('db connected successfully');
  app.listen(PORT, () => console.log(`sv running at port ${PORT}`));
});
