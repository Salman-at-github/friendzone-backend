const cors = require('cors');
const bodyParser = require('body-parser');

const expressConfig = (app) => {
  const frontendDomains = process.env.ALLOWED_HOSTS
    ? process.env.ALLOWED_HOSTS.split(',')
    : ['http://localhost:3000'];

  const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || frontendDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};

module.exports = expressConfig;
