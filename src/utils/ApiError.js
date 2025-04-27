export default class ApiError extends Error {
    constructor({
        statusCode,
        message = "Something Went Wrong", // Default if no msg is given ,
        errors = [],
        stack = "",
    }) {
        super(message); // to overrride the exisitng values/ as mesg here
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
