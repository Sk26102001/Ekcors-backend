const Logger = require('../models/loggerModel')

exports.loggerFnc = async ({ adRefs, action, userId }) => {
    if (!adRefs?.length) return

    await Logger.create({
        adRefs,
        action,
        userId,
    })
}
