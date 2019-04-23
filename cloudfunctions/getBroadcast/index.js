const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database({
  env: 'envid',
})
exports.main = async (event, context) => {
  return db.collection('broadcast')
    .where({
      hour: event.hour,
    })
    .get()
}