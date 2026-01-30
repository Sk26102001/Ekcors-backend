const Notification = require('../models/notificationModel')
const { getSocketInstance } = require('../socket/socket')
const { getSocketByUserId } = require('../socket/user.socket')

async function sendNotification(data) {
    await Notification.create(data);

    const io = getSocketInstance();
    const targetSocketId = getSocketByUserId(data.receiverId);

    if (targetSocketId) {
        io.to(targetSocketId).emit("receive-notification", {
            ...data,
            createdAt: Date.now(),
        });
    }
}

module.exports = sendNotification