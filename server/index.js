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

app.use('/employees', squelizeService({
  Model: models.employees,
  paginate: {
    default: 2,
    max: 4
  }
}));
app.use('/products', squelizeService({
  Model: models.products,
  paginate: {
    default: 2,
    max: 4
  }
}));

app.use('/suppliers', squelizeService({
  Model: models.suppliers,
  paginate: {
    default: 2,
    max: 4
  }
}));
// Configure must be after routes or error 404 not found due to error hanlder order matters in .use and .configure
app.configure(expressServerMiddlewhere);


//npm start ./server/index.js is not working correctly
//cd to server directory and run node .

server.on('listening', () =>
 console.log(`Feathers application started on ${host}:${port}`)

);

