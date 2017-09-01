
const snapshot = require('feathers-offline-snapshot');
const { sortArrayByProp } = require('./utils');

module.exports = (service, slug, logRecords) => {
  const ids = {};

  return snapshot(service, { $sort: { id: 1 } }).then(records => {

    records.forEach(record => {
      ids[record[slug]] = record.id;

      if (logRecords) {
        console.log(record);
      }
    });

    return ids;
  })
};
