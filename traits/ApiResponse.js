const responseNotFound = (res) => {
    res.status(404).json({
        succes: false,
        message: 'Not Found'
    })
}

const responseSuccess = (res, result, message) => {
    return res.status(200).json({
        succes: true,
        message: message,
        data: result
    })
}

module.exports = {
    responseNotFound,
    responseSuccess
}