const app = require('./app');
const PORT = process.env.PORT || 3030;
require('dotenv').config();

console.log("Testing now.. ",process.env.TESTER)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
