require('dotenv').config(); //load the env first so that all dependencies get access to it.
const app = require('./app');
const PORT = process.env.PORT || 3030;
console.log("Index ============================================== ",process.env.DATABASE_URI)
console.log("Testing now.. ",process.env.TESTER)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
