app.use vs app.service

https://docs.feathersjs.com/api/services.html#service-methods

https://github.com/feathersjs/feathers-docs/blob/master/api/services.md

https://docs.feathersjs.com/api/services.html#service-methods

Application
https://github.com/feathersjs/feathers-docs/blob/master/api/services.md

https://docs.feathersjs.com/api/databases/common.html

A service is either an adapter you imported such as NeDB adapter or a custom service

In the examples they have service = require('NeDB')  the word service can be anything such as MyService.  So a service either imports a database-adapter or a custom service you created.  

Services are what happens after you hit an endoint.

Location is the enpoint you define. app.use(location,service)  So in this case you could define it as
app.use('customers',MyService).  So when you navigate to http://localhost/customers you run MyService and in the case of of or neDB adapter we link it to the customers table.

Error

WARNING: No configurations found in configuration directory:D:\Development\FeathersJs\feathers-northwind-complete\config
WARNING: To disable this warning set SUPPRESS_NO_CONFIG_WARNING in the environmen

Change directory to server or run npm start with correct directory