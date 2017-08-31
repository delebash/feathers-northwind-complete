/* eslint-disable no-console */
const squelizeService = require('feathers-sequelize');
const models = require('./models');
const expressServerMiddlewhere = require('./middleware');
const app = require('./app');
const host = app.get('host');
const port = app.get('port');
const server = app.listen(port);


app.use('/customers', squelizeService({
  Model: models.customers,
  paginate: {
    default: 2,
    max: 4
  }
}));

// Configure must be after routes or error 404 not found due to error hanlder order matters in .use and .configure
app.configure(expressServerMiddlewhere);


//npm start ./server/index.js is not working correctly

server.on('listening', () =>
 console.log(`Feathers application started on ${host}:${port}`)

);

