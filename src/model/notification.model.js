var mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    subscription: Object
});

const Notification = mongoose.model('notification', NotificationSchema);
module.exports = Notification;