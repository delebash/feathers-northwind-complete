/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);
const squelizeService = require('feathers-sequelize');
const models = require('./models');
const middleware = require('./middleware');

app.use('/customers', squelizeService({
  Model: models.customers,
  paginate: {
    default: 2,
    max: 4
  }
}));


// Configure must be after routes or error 404 not found due to error hanlder order matters in .use and .configure
//app.configure(middleware)

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
