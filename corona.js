
var corona = function () {


    setTimeout(sendc, 3000);


function sendc() {

    let request = new XMLHttpRequest();
    request.open('GET', "https://corona-stats.online/ma?format=json");
    request.onload = function () {

            if (request.status === 200) {

                corona(request.responseText);

            } else {

                console.log("We connected to the server, but it returned an error.");

                sendc()

            }

    }
    request.send()
   
}




function corona(data) {

    document.getElementById("corona").innerHTML = ""

    var cobj = JSON.parse(data)

    let coronacont = document.getElementById("corona");

    let string = "";


    string += "<p class=fade-in>" + cobj.data[0].recovered +  " : " + "المتعافون 🤒" + "</p>"

    string += "<p class=fade-in>" + cobj.data[0].deaths +  " : " +"الوفيات 💀" + "</p>"

    string += "<p class=fade-in>" + cobj.data[0].cases + " : " + "عدد الحالات 🤒" + "</p>"

    
    

    coronacont.insertAdjacentHTML('beforeend', string);


    return 0
}



}

corona()
setInterval(corona, 40000);
