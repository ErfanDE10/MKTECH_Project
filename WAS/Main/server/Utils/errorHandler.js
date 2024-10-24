// error handel
const asyncHandler = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// set special error 
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Log info 
const logInfo = (message) => {
    const now = new Date().toISOString();
    console.log(`[${now}] INFO: ${message}`);
};

const logError = (message) => {
    const now = new Date().toISOString();
    console.error(`[${now}] ERROR: ${message}`);
};

// response error from json 
const sendErrorResponse = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Server Error';

    logError(`${statusCode} - ${message}`);

    res.status(statusCode).json({
        success: false,
        error: message
    });
};

// validate ProductData
const validateProductData = (data) => {
    if (!data.name || !data.price || !data.description) {
        throw new ErrorResponse('All product fields are required', 400);
    }
};


module.exports = {
    asyncHandler,
    ErrorResponse,
    logInfo,
    logError,
    sendErrorResponse,
    validateProductData
};
