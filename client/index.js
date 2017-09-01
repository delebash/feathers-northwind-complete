const feathers = require('../node_modules/feathers-client');
const io = require('../node_modules/socket.io-client');
const Realtime = require('feathers-offline-realtime');

const step1 = require('./1-third-party');
const step2 = require('./2-reconnect');

const feathersApp = feathers()
  .configure(feathers.socketio(io('http://localhost:3030')));

const customerRemote = feathersApp.service('/customers');
const customerRealtime = new Realtime(customerRemote);
sync()
async function sync() {
  await customerRealtime.connect()
  await step1(feathersApp, customerRealtime);
  await step2(feathersApp, customerRealtime);
  console.log('===== Example finished.');

}

async function add() {
  let user = await customers.create({first_name: 'dan@gmail.com', last_name: 'test'});
  console.log(user)
}

async function get () {
  let results = await  customers.find()
  console.log('find all items\n', results)
}

