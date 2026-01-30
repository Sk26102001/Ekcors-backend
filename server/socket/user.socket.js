const socketUsers = {}

exports.addUser = (userId, socketId) => {
    socketUsers[userId] = socketId
}

exports.removeUserBySocket = (socketId) => {
    for (let user in socketUsers) {
        if (socketUsers[user] === socketId) {
            delete socketUsers[user]
            break
        }
    }
}

exports.getSocketByUserId = (userId) => {
    return socketUsers[userId]
}
