const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiY2FsZWItc2hhbm5vbiIsImEiOiJjbHN6ZXpxZjcwbXNlMmltdWJ3cnlkdzZnIn0.eYGvdS_uidfsvxVpDW3mTg'

    request({
        url,
        json: true
    }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length < 1){
            callback('Location search failed! Try again with another address.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                longitude: body.features[0].center[0], 
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode