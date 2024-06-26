

const btn = document.getElementById("submitBtn");




btn.addEventListener("click",handleBtnEvent);


function handleBtnEvent(e){

    const input_feild = document.getElementById("addressBox");
    const city = input_feild.value;

    if(city == ""){

        const warn = document.getElementsByClassName("city_empty")[0];
        warn.classList.toggle("toggle");
    }else{
        const result_form = document.getElementById("result_form")


        result_form.setAttribute("style","display:hidden")


        fetchDetails(city)
        input_feild.value = "";
    }
}


function fetchDetails(city){

    const url = `https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=5af6c323536a4166858882c472639030`

    fetch(url)
    .then(response => response.json())
    .then(result => {
    const data_set = result.results[0]
    if (data_set){
        renderDetails(data_set)
        console.log(data_set)
    }else{
        const warn = document.getElementsByClassName("city_empty")[0];
        warn.classList.toggle("toggle");
    }
   
  
    }
    )
    .catch(error => console.log('error',error));

}



function renderDetails(set){

    const result_form = document.getElementById("result_form")

    result_form["time_zone"].value = set.timezone.name
    result_form["lat"].value = set.lat
    result_form["long"].value = set.lon
    result_form["offset_std"].value = set.timezone.offset_STD
    result_form["offset_dst"].value = set.timezone.offset_DST
    result_form["offset_dst_sec"].value = set.timezone.offset_DST_seconds
    result_form["country"].value = set.country
    result_form["post_code"].value = set.postcode
    result_form["city"].value = set.county

    result_form.setAttribute("style","display:block")

}







// https://api.geoapify.com/v1/geocode/search?text=${delhi}&format=json&apiKey=5af6c323536a4166858882c472639030
