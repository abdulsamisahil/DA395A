const lon = $('#longitude')
const lat = $('#latitude')
const prec = $('#accuracy')
const alti = $('#altitude')
const prec_alti = $('#accuracy-altitude')
const speed = $('#speed')
const speedText = $("#currect-speed")

let options = {
  // Försök tvinga enheten till en så precis position som möjligt
  enableHighAccuracy: true,
  // Maximal tid i millisekunder som enheten har på sig att ge oss en position
  timeout: 5000,
  // Hur länge vår position får tillfälligt lagras (millisekunder)
  maximumAge: 0,
}

const success = (position) => {
  // Ta en titt i er webbkonsol och se vad den innehåller.
  console.log('This is our position: ', position)
  lon.text(position.coords.longitude)
  lat.text(position.coords.latitude)
  prec.text(position.coords.accuracy)

  alti.text(position.coords.altitude || '0')
  prec_alti.text(position.coords.altitudeAccuracy || '0')
  speed.text(position.coords.speed)

  //alert(speed.text());
  
  if (speed.text() != "") {
    $('#speed-container').attr("class", getSpeedClass(speed.text()))
  }
}

const error = (err) => {
  console.warn('Something went wrong: ', err.message)
}


const getSpeedClass = (speed) => {
  
  speed = 3.6 * parseFloat(speed) 
  let sp_num = Math.round(speed) 
  speedText.text(`${sp_num} km/h`);

  if (sp_num <= 5) {
    return 'alert alert-danger'
  } else if (sp_num > 5 && sp_num < 10) {
    return 'alert alert-warning'
  } else if (sp_num >= 10) {
    return 'alert alert-success'
  }

  return ''
}

// Skicka med våra funktioner och inställningar,
// dessa kommer sedan anropas kontinuerligt medan vi rör på oss.
let watchID = navigator.geolocation.watchPosition(success, error, options)

// Skulle vi sedan vilja avbryta detta hade vi anropat `clearWatch`
//navigator.geolocation.clearWatch(watchID)


