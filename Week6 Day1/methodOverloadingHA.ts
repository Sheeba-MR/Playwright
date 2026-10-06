// Create a class named APIClient
class APIClient {
    // define the sendRequest method with multiple overloaded versions
    sendRequest(endpoint:string): void
    sendRequest(endpoint:string, httpMethod:string, requestStatus:boolean): void

    sendRequest(endpoint:string, requestBody?:string, requestStatus?:boolean): void {
        if(typeof endpoint === "string" && typeof requestBody === "string" && typeof requestStatus === "boolean") {
            console.log("Endpoint: ", endpoint)
            console.log("Request Body: ", requestBody)
            console.log("Request Status: ",requestStatus )
        }
        else {
            console.log("Endpoint: ", endpoint)
            console.log("Request Body: ", requestBody)
        }
    }
}
// object creation
let api = new APIClient()
api.sendRequest("www.google.com","GET",true)
api.sendRequest("www.google.com")
