

interface Config {
    endPoint : string,
    apiKey : string
}


const configuration : Readonly<Config> = {
    endPoint : "https://api.example.com",
    apiKey : "abcdef123456"
}


// cannot assign to 'endPoint' because it is a read-only property.
// configuration.endPoint = "newEndPoint"