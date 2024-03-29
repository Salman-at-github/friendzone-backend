require('dotenv').config(); //load the env first so that all dependencies get access to it.
const app = require('./app');
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
