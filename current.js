

let lat , long;

const position = navigator.geolocation.getCurrentPosition(showPosition)

function showPosition(position){

    lat = position.coords.latitude
    long = position.coords.longitude

    getCurrentTimeZone(lat,long)
}

function getCurrentTimeZone(lat,long){

url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=5af6c323536a4166858882c472639030`

fetch(url)
.then(respo => respo.json())
.then(result=>{
    const curr_set = result.results[0]

    renderCurrent(curr_set)
})

}

function renderCurrent(data_set){

const heading = document.getElementById("time_zone_current")

const current_form = document.getElementById("current_time")

heading.innerText = data_set.timezone.name

current_form["time_zone"].value = data_set.timezone.name
current_form["lat"].value = data_set.lat
current_form["long"].value = data_set.lon
current_form["offset_std"].value = data_set.timezone.offset_STD
current_form["offset_dst"].value = data_set.timezone.offset_DST
current_form["offset_dst_sec"].value = data_set.timezone.offset_DST_seconds
current_form["country"].value = data_set.country
current_form["post_code"].value = data_set.postcode
current_form["city"].value = data_set.city








}