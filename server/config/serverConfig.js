const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const feathers = require('feathers');
const appHooks = require('../app.hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const hooks = require('feathers-hooks');
const favicon = require('serve-favicon');
const services = require('../services');

module.exports = () => {
  const app = feathers()
    .use(compress())
    .options('*', cors())
    .use(cors())
    .use('/', feathers.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .use(helmet())
    .use(compress())
    // Set up Plugins and providers
    .configure(hooks())
    .configure(rest())
    .configure(socketio())

    // Set up our services (see `services/index.js`)
    .configure(services)

  app.hooks(appHooks);

  return app;
};
