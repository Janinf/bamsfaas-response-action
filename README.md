# npm-packages-ibm-cloud-functions-response-builder
Provides a builder class for http responses for the ibmcloud functions response type http

# How it works
You can change response parameters like status code, headers or body by calling methods on the response object. Because these methods return the respone object after alteration, method calls can be chained and used in a return statement.

```
const res = ...;
return res.status(404).json({error: {status: 404, message: 'No item with id 3 exists'}});
```

With that the call of an api endpoint using this function will return something like this:

![response_example](https://github.com/Janinf/npm-packages-ibm-cloud-functions-response-builder/blob/master/docs/images/response_example.png)

A handler function for a ibmcloud action would normally look like this:

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

The builder can be integrated into this format like this:

```
const builder = require('ibm-cloud-functions-response-builder');

module.exports = params => builder(params, (params, res) => {
    ...
    return res.toError(404, 'No item with id 3 exists')
})
```

I prefer code like this. Of course you can disagree, so just use this if you like it.
