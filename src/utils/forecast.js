const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f916eef0cd3b8962e580902c3e6bb9c2&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=m'
    //console.log(Url)
    //const Url = 'http://api.weatherstack.com/current?access_key=f916eef0cd3b8962e580902c3e6bb9c2&query=37.8267,-122.4233&units=f'

    request({
        url,
        json: true
    }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            //console.log(response.body)
            callback('Weather search failed for given location!', undefined)
        } else {
            callback(undefined, {
                message: body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.'
            })
        }
    })
}

module.exports = forecast