
/* eslint-disable no-console */
const squelizeService = require('feathers-sequelize');
const models = require('./models');
const expressServerMiddlewhere = require('./middleware');
const app = require('./app');
const host = app.get('host');
const port = app.get('port');
const server = app.listen(port);


app.use('/animal', squelizeService({
  Model: models.animal,
  paginate: {
    default: 2,
    max: 4
  }
}));


app.use('/lookup_animal_category', squelizeService({
  Model: models.lookup_animal_category,
  paginate: {
    default: 2,
    max: 4
  }
}));


app.use('/lookup_animal_type', squelizeService({
  Model: models.lookup_animal_type,
  paginate: {
    default: 2,
    max: 4
  }
}));


app.use('/lookup_sex', squelizeService({
  Model: models.lookup_sex,
  paginate: {
    default: 2,
    max: 4
  }
}));


app.use('/lookup_species', squelizeService({
  Model: models.lookup_species,
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
