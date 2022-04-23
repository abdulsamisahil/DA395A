const lon = $('#longitude')
const lat = $('#latitude')
const prec = $('#accuracy')
const alti = $('#altitude')
const prec_alti = $('#accuracy-altitude')
const speed = $('#speed')

// Vi kommer fylla på denna i steg 2.
/* let options = {}

function success(position) {
  // Ta en titt i er webbkonsol och se vad den innehåller.
  console.log('This is our position: ', position)
  lon.text(position.coords.longitude)
  lat.text(position.coords.latitude)
  prec.text(position.coords.accuracy)

  alti.text(position.coords.altitude || '0')
  prec_alti.text(position.coords.altitudeAccuracy || '0')
  speed.text(position.coords.speed || 'NaN')
}

function error(err) {
  console.warn('Something went wrong: ', err.message)
}

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas när en position försöker fastställas.
navigator.geolocation.getCurrentPosition(success, error, options) */

let options = {
  // Försök tvinga enheten till en så precis position som möjligt
  enableHighAccuracy: true,
  // Maximal tid i millisekunder som enheten har på sig att ge oss en position
  timeout: 5000,
  // Hur länge vår position får tillfälligt lagras (millisekunder)
  maximumAge: 0,
}

function success(position) {
  // Ta en titt i er webbkonsol och se vad den innehåller.
  console.log('This is our position: ', position)
  lon.text(position.coords.longitude)
  lat.text(position.coords.latitude)
  prec.text(position.coords.accuracy)

  alti.text(position.coords.altitude || '0')
  prec_alti.text(position.coords.altitudeAccuracy || '0')
  speed.text(position.coords.speed || 'NaN')
}

function error(err) {
  console.warn('Something went wrong: ', err.message)
}

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas kontinuerligt medan vi rör på oss.
let watchID = navigator.geolocation.watchPosition(success, error, options)

// Skulle vi sedan vilja avbryta detta hade vi anropat `clearWatch`
//navigator.geolocation.clearWatch(watchID)
