const helper = {}

helper.handleError = (error, res) => {
    const defaultStatus = 500;
    return res.status(error.status || defaultStatus).json({
        success: false,
        message: error.message
    });
};

module.exports = helper;
