# openwhisk-response-action
Provides a builder class for http responses for the ibmcloud functions response type http in a serverless framework handler.

# How it works
You can change response parameters like status code, headers or body by calling methods on the response object. Because these methods return the respone object after alteration, method calls can be chained and used in a return statement.

```
const res = ...;
return res.status(404).json({error: {status: 404, message: 'No item with id 3 exists'}});
```

With that, the call of an API endpoint using this function will return something like this:

![response_example](https://github.com/Janinf/npm-packages-ibm-cloud-functions-response-builder/blob/master/docs/images/response_example.PNG)

A handler function for a ibmcloud action with the serverless framework would normally look like this:

```
module.exports.handler = params => {
    ...
    return {
        statusCode: 404,
        body: {
            error: {
                status: 404,
                message: 'No item with id 3 exists'
            }
        }
    }
}
```

The action can be integrated into this format like this:

```
const action = require('openwhisk-response-action');

module.exports.handler = action((params, locals, res) => {
    ...
    return res.status(404).json({error: {status: 404, message: 'No item with id 3 exists'}})
})
```

Or even shorter like this:

```
const action = require('openwhisk-response-action');

module.exports.handler = action((params, locals, res) => {
    ...
    return res.toError(404, 'No item with id 3 exists')
})
```

# Default Values
The default status code is 200 (OK) while body and headers are empty by default.
