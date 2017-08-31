const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

const services = require('./services');
const appHooks = require('./app.hooks');

const app = feathers()

// Load app configuration
.configure(configuration())

.use(cors())
.use(helmet())
.use(compress())
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
// Set up Plugins and providers
.configure(hooks())
.configure(rest())
.configure(socketio())

// Set up our services (see `services/index.js`)
.configure(services)

app.hooks(appHooks);

module.exports = app;
