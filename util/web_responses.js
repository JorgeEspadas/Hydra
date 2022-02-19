function validResponse(payload){
    return {
        "response" : "OK",
        "data" : payload
    }
}

function errorResponse(payload) {
    return {
        "response":"BAD",
        "data" : {
            "exception" : payload
        }
    }
}

module.exports = {validResponse, errorResponse}