let io = null

exports.setSocketInstance = (ioInstance) => {
    io = ioInstance
}

exports.getSocketInstance = () => {
    if (!io) {
        throw new Error('Socket.io instance not set')
    }
    return io
}
