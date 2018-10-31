const Response = require('./Response');

/**
 * Provides methods creating response objects
 * @type {{res: (function(*=, number=, *=): Response), errorRes: (function(number, string, *=): Response)}}
 */
const builder = {
    /**
     * Creates and returns a response object with (optional) custom values
     * @param {*} body Payload of request
     * @param {number} statusCode HTTP status code
     * @param {*} headers HTTP headers
     * @returns {Response} A response object with custom or predefined values
     */
    res: (body = {}, statusCode = 200, headers = {}) => new Response(body, statusCode, headers),
    /**
     *
     * @param {number} statusCode
     * @param {string} message
     * @param {*} headers
     * @returns {Response}
     */
    errorRes: (statusCode, message, headers = {}) => new Response({error: {statusCode, message}}, statusCode, headers)
};

/**
 * Takes params of the ibmcloud function and puts it with a new response object into the handler function
 * @param {*} params Parameters given to ibmcloud function
 * @param {function} handler Function handling input parameters and defining function output
 * @returns {Response} The handler function should return a response object
 */
module.exports = (params, handler) => handler(params, builder.res());
