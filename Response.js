/**
 * Template for response objects that which is automatically transformed into a response by the api gateway
 */
class Response {

    /**
     * Create a new response object with custom or predefined values
     * @param {*} body Payload of response
     * @param {Number} statusCode HTTP status code
     * @param {*} headers HTTP headers
     */
    constructor(body = {}, statusCode = 200, headers = {}) {
        this.body = body;
        this.statusCode = statusCode;
        this.headers = headers;
    }

    /**
     * Changes the response status code and returns the response
     * @param {Number} statusCode HTTP status code
     * @returns {Response} Response with changed status code
     */
    status(statusCode) {
        this.statusCode = statusCode;
        return this;
    }

    /**
     * Changes the response body and returns the response
     * @param {*} body Payload of response
     * @returns {Response} Response with changed body
     */
    json(body) {
        this.body = body;
        return this;
    }

    /**
     * Adds a http header to response and returns it
     * @param {*} headers Response header in form of a key-value-pair
     * @returns {Response} Response with added header
     */
    addHeaders(headers) {
        Object.keys(headers).forEach(n => this.headers[n] = headers[n]);
        return this;
    }

    /**
     * Sets given error status code, changes body to error format and returns response
     * @param {Number} status Error HTTP status code
     * @param {string} message Error message
     * @returns {Response} Response representing an error
     */
    toError(status, message) {
        return this.status(status).json({error: {status, message}});
    }
}

/**
 * Template for response objects that which is automatically transformed into a response by the api gateway
 * @type {Response}
 */
module.exports = Response;
