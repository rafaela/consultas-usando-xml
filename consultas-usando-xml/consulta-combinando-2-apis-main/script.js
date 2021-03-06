var lat, long
function consulta() { 
    cidade = document.getElementById('cidade');       
    $.ajax({
        type: 'GET',
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ cidade.value + "&units=metric&&mode=xml&APPID=da4888faed3e2260a497123468982502",
        success: function(resposta) { 


            let temp = resposta.getElementsByTagName('temperature')[0];
            let sun = resposta.getElementsByTagName('sun')[0];
            let coord = resposta.getElementsByTagName('coord')[0]; 
            let weather = resposta.getElementsByTagName('weather')[0];

            let rise = new Date(new Date(sun.getAttribute('rise') + "+0000"));            
            let set = new Date(new Date(sun.getAttribute('set') + "+0000"));

            $("#tempAtual").html(temp.getAttribute('value')),  
            $("#tempMax").html(temp.getAttribute('min')),
            $("#tempMin").html(temp.getAttribute('max')),
            date1 = new Date(rise * 1000)
            $("#nascerSol").html(date1.getHours() + ":" + date1.getMinutes()),
            date2 = new Date(set * 1000)
            $("#porSol").html(date2.getHours() + ":" + date2.getMinutes()),
            $("#long").html(coord.getAttribute('lon')),
            long = coord.getAttribute('lon')
            $("#latitude").html(coord.getAttribute('lat')),
            lat = coord.getAttribute('lat')

            var icon = "http://openweathermap.org/img/w/" + weather.getAttribute('icon') + ".png";
            $('#cond').attr("src", icon);
            
            
            //initMap();   
        }
    });
}  

let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: Number(lat), lng: Number(long) },
        zoom: 8,
    });
}