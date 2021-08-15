function validResponse(payload){
    return {
        "response" : "OK",
        "data" : payload
    }
}

function errorResponse(message) {
    return {
        "response":"BAD",
        "data" : {
            "exception" : {
                "message" : message
            }
        }
    }
}

module.exports = {validResponse, errorResponse}