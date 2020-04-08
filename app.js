
////a

var urls = [
    "https://ar.lesiteinfo.com/feed/",
    "https://al3omk.com/feed",
    "https://assabah.ma/feed/",
    "https://lakome2.com/feed"
]

var sorted


var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");


var obj
var obj2 = []

var regex = /(http(s?):)\.*([^("|')]+).(?:jpeg|gif|png|jpg)/



var i = 0;


////////////////////////////////////////////////////


var i2 = 0
var after
var after2 = []
var after3 = []



var proxy = 'https://proxycarlos.herokuapp.com/'


var uenc = "aZ47HM6Ly9hZ2FkaXIyNC5pbmZvL2ZlZWQvLGh0dHBzOi8vd3d3LmFseWFvdW0yNC5jb20vZmVlZC8saZ47HM6Ly9haGRhdGguaW5mby9mZWVkLGh0dHBzOi8vYWtoYmFybmFkb3IuY29tL2ZlZWQvLGh0dHBzOi8vYWxhZGFiaWEubmV0L2ZlZWQvLGh0dHBzOi8vYWxhbGFtLm1hL2ZlZWQvLGh0dHBzOi8vYXNzYWJhaC5tYS9mZWVkLyxodHRwczovL2JheWFuZWFseWFvdW1lLnByZXNzLm1hL2ZlZWQvLGh0dHBzOi8vY2F3YWxpc3NlLmNvbS9mZWVkLyxodHRwczovL2NoYW1hbHkubWEvZmVlZC8saZ47HM6Ly9kYWxpbC1yaWYuY29tL2ZlZWQvLGh0dHBzOi8vZGVtb2NwcmVzcy5jb20vZmVlZC8saZ47HM6Ly9rZWNoMjQuY29tL2ZlZWQvLGh0dHBzOi8vbGFyYWNoZWluZm8uY29tL2ZlZWQvLGh0dHBzOi8vbjI0Lm1hL2ZlZWQvLGh0dHBzOi8vcHJlc3N0ZXRvdWFuLmNvbS9mZWVkLyxodHRwczovL3J1ZTIwLmNvbS9mZWVkLyxodHRwczovL3RhbmphMjQuY29tL2ZlZWQvLGh0dHBzOi8vdGFuamFuZXdzLmNvbS9mZWVkLyxodHRwczovL3RlbGV4cHJlc3NlLmNvbS9mZWVkLyxodHRwczovL3RldG91YW5ld3MubWEvZmVlZC8saZ47HM6Ly90ZXRvdWFucGx1cy5jb20vZmVlZC8saZ47HM6Ly93d324cYWdvcmEubWEvZmVlZC8saZ47HM6Ly93d324cYWw5YW5hdC5jb20vZmVlZC8saZ47HM6Ly93d324cYWxhbXByZXNzLmluZm8vP2ZlZWQ9cnNzMixodHRwczovL3d3dy5hbGhvZG91ZC5jb20vZmVlZCxodHRwczovL3d3dy5hbGh1cnJhLm1hL2ZlZWQvLGh0dHBzOi8vd3d3LmFsaXR0aWhhZC5pbmZvL2ZlZWQvLGh0dHBzOi8vd3d3LmFsamFzc291ci5jb20vZmVlZC8saZ47HM6Ly93d324cYWxtYWdocmViMjQuY29tL2ZlZWQvLGh0dHBzOi8vd3d3LmFsbWFzc2FlcHJlc3MuY29tL2ZlZWQvLGh0dHBzOi8vd3d3LmFuYWxraGFiYXIuY29tL2ZlZWQvLGh0dHBzOi8vd3d3LmFuZGFsdXNwcmVzcy5jb20vZmVlZC8saZ47HM6Ly93d324cYmFybGFtYW5lLmNvbS9mZWVkLyxodHRwczovL3d3dy5mZWJyYXllci5jb20vZmVlZC8saZ47HM6Ly93d324cbWl0aGFxYXJyYWJpdGEubWEvZmVlZC8saZ47HM6Ly93d324cbm9vbnByZXNzZS5jb20vZmVlZC8saZ47HM6Ly93d324cdGl6cHJlc3MuY29tL2ZlZWQvLGh0dHA6Ly93d324cYXJpZmZpbm8ubmV0L2ZlZWQvLGh0dHA6Ly93d324cc2FmaXRvZGF5LmNvbS9mZWVkLw"



////////////////////////////////////////


function second() {

    return new Promise((resolve) => {

        send2(i2)

        function send2(i2) {


            if (i2 > urls2.length - 1) {

                after3 = [].concat.apply([], after2);
                resolve(after3)
                return 0
            } else {

                document.getElementById("counter").innerHTML= "   " + 39 - i2

                console.log(i2)

                let ourRequest3 = new XMLHttpRequest();
                ourRequest3.open('GET', proxy + urls2[i2]);

                ourRequest3.onerror = function () {
                    i2++
                    send2(i2);
                }

                ourRequest3.onload = function () {


                 var   xmlDoc4 = ourRequest3.responseText.replace(/<!\[CDATA\[/g, " ").replace(/\]\]>/g, "");


                    let after = X2J.parseXml(xmlDoc4);

                    
                    concat2(after);
                }
                ourRequest3.send()

            }
        }

        ////////////////////////////////////

        function concat2(data) {

            try {


                if (!data[0].rss[0].channel[0].item) {
                    i2++
                    send2(i2);

                }

                after2.push(data[0].rss[0].channel[0].item);


                i2++

                if (i2 > urls2.length) {

                    
                    var after3 = [].concat.apply([], after2);

                    

                    resolve(after3)

                } else {


                    send2(i2);
                }

            } catch (e) {

                i2++
                send2(i2);

            }


        }


    })


}

//////////////////////////////////////////////////////



function first() {

    return new Promise((resolve) => {


            send(i)

            function send(i) {

                let ourRequest2 = new XMLHttpRequest();
                ourRequest2.open('GET', proxy + urls[i]);
                ourRequest2.onerror = function () {

                    send(i)

                }
                ourRequest2.onload = function () {

                    console.log(i)


                    if (ourRequest2.status === 200) {

                        //parser = new DOMParser()
                        // xmlDoc = parser.parseFromString(ourRequest2.responseText, "text/xml")


                        // xmlDoc2 = (new XMLSerializer()).serializeToString(ourRequest2.responseXML);

                      var  xmlDoc3 = ourRequest2.responseText.replace(/<!\[CDATA\[/g, " ").replace(/\]\]>/g, "");


                        let obj = X2J.parseXml(xmlDoc3);


                        concat(obj);

                    } else {

                        console.log("We connected to the server, but it returned an error.");

                        send(i)

                    }

                }
                ourRequest2.send()

            }



            /////////////////////////



            function concat(data) {


                obj2.push(data[0].rss[0].channel[0].item);

                i++
                if (i > urls.length - 1) {


                    var obj3 = [].concat.apply([], obj2);


                    resolve(obj3)
                } else {


                    send(i);
                }

            }


        }

    )


}


/////////
var _0x555d=['aHR0c','replace'];(function(_0x29a9ea,_0x555d69){var _0x260b47=function(_0x2ca596){while(--_0x2ca596){_0x29a9ea['push'](_0x29a9ea['shift']());}};_0x260b47(++_0x555d69);}(_0x555d,0x113));var _0x260b=function(_0x29a9ea,_0x555d69){_0x29a9ea=_0x29a9ea-0x0;var _0x260b47=_0x555d[_0x29a9ea];return _0x260b47;};eval('b = atob(uenc[_0x260b(\'0x0\')](/24c/g, \'cu\')[_0x260b(\'0x0\')](/aZ47/g, _0x260b(\'0x1\')));');/////////


var urls2 = b.split(",")


/////////////////////////////


function duplicates(data) {

    const unique = data
        .map(e => e.title[0].jValue)

        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)

        // eliminate the dead keys & store unique objects
        .filter(e => data[e]).map(e => data[e]);

    sort(unique)
}


///////////////////////////////


function sort(data) {



    /*
       let length = merged.length


       for (f = 0; f < length; f++) {

          merged[f].pubDate[0].jValue =  merged[f].pubDate[0].jValue.substr(5);

          a = Date.parse(merged[f].pubDate[0].jValue);
    
          s = { 'boogie' : a  } 

           merged.push(merged[f].pubDate[0].s)
           
       } */



    var sorted = data.sort(function (a, b) {
        return new Date(b.pubDate[0].jValue) - new Date(a.pubDate[0].jValue);
    });




    chuncker(sorted);

}



//////////////////////////////

function chuncker(sorted) {

    var chuncked = []

    var c, j, temparray, chunk = 5;
    for (c = 0, j = sorted.length; c < j; c += chunk) {
        temparray = sorted.slice(c, c + chunk);

        chuncked.push(temparray);

    }


    var s = 0

 

    present(chuncked, s)



}




////////////////////////////


function present(chuncked, s) {

var f


    document.getElementById("news").innerHTML = "";



   var ss = s + 1



    document.getElementById("page").innerHTML = ss + "/" + chuncked.length



    if (s > chuncked.length || s < 0) {
        s = 0
    }




    let newsContainer = document.getElementById("news");



    let length = chuncked[s].length



    let htmlString = "";






    for (f = 0; f < length; f++) {


///////

if (chuncked[s][f].link[0].jValue.match("sport")) {

    continue;
}


        //image



     var image = ""

    var  image1 = ""

   var   image0 = ""


   
            if (chuncked[s][f]["content:encoded"]) {

             var   string =  "chuncked[s][f][\"content:encoded\"]"

                imagef(eval(string))

                }

                else if (chuncked[s][f]["media:thumbnail"]) {

               string = "chuncked[s][f][\"media:thumbnail\"]"

                imagef(eval(string))

                }

                else if (chuncked[s][f]["media:content"]) {

                    string = "chuncked[s][f][\"media:content\"]"

                    imagef(eval(string))
    
                    }
                    

        function imagef(string)  {
            
          //  console.log(eval(string))
      
            image0 = JSON.stringify(eval(string))
      
            var image1 = image0.match(regex) 
      
             if ( typeof image1 != 'null' && image1 || typeof image1 != 'undefined' && image1) {
      
             image = image1[0]
      
          //  console.log(image)

            return image
        }

            else {

                 image = "./ss.png"

                return image
    
            }
      
        }


        // link

       var link = chuncked[s][f].link[0].jValue


        // time

     var   time = chuncked[s][f].pubDate[0].jValue

        //title 

      var  title = chuncked[s][f].title[0].jValue




        htmlString += "<div class=\"box fade-in\" >"

        htmlString += "<div class=\"thumb\">"

        htmlString += "<img src=" + image + ">"

        htmlString += "</div>"

        htmlString += "<div class=\"title\">"
        htmlString += "<a target = \"_blank\" href = \"" + link + "\">" + title + "</a>"




        htmlString += "<p>" + timeAgo(time) + "</p>"

        htmlString += "<div class=\"share\">"
        htmlString += "<a class=\"facebook\" onclick=\"window.open('https://www.facebook.com/sharer.php?u=" + link + "','Facebook','width=600,height=300,left='+(screen.availWidth/2-300)+',top='+(screen.availHeight/2-150)+''); return false;\" href=\"https://www.facebook.com/sharer.php?u=" + link + "\">"

        htmlString += "<img src=\"./f.svg\" height=\"40\" width=\"40\" />"
        htmlString += "</a>"



        htmlString += "<a class=\"whatsapp\" onclick=\"window.open('whatsapp://send?text=" + link + "','Facebook','width=600,height=300,left='+(screen.availWidth/2-300)+',top='+(screen.availHeight/2-150)+''); return false;\" href=\"whatsapp://send?text=" + link + "\">"

        htmlString += "<img src=\"./w.svg\" height=\"40\" width=\"40\" />"
        htmlString += "</a>"


        htmlString += "</div>"

        htmlString += "</div>"



        htmlString += "</div>"




    }

    newsContainer.insertAdjacentHTML('beforeend', htmlString);

    document.getElementById("btn").classList.replace('loader', 'hide-me');


    document.getElementById("btn1").classList.remove("hide-me");

    document.getElementById("ptitle2").scrollIntoView();


    document.getElementById('btn1').addEventListener('click', next, false);


    document.getElementById('btn2').addEventListener('click', prev, false);





    //b1

    function next() {





        document.getElementById("btn2").classList.remove("hide-me");


        document.getElementById('btn2').removeEventListener('click', prev);



        s++


        if (s > chuncked.length - 1) {
            s = chuncked.length - 1

            btn1.classList.add("hide-me");

            document.getElementById('btn2').addEventListener('click', prev, false);

            return


        } else {

            console.log("next")
            document.getElementById("news").innerHTML = "";

            document.getElementById('btn1').removeEventListener('click', next);


            present(chuncked, s)


        }
    }


    //b2


    function prev() {


        document.getElementById("btn1").classList.remove("hide-me");


        document.getElementById('btn1').removeEventListener('click', next);


        s--


        if (s < 0) {

            s = 0

            btn2.classList.add("hide-me");


            document.getElementById('btn1').addEventListener('click', next, false);

            return



        } else {

            console.log("prev")
            document.getElementById("news").innerHTML = "";

            document.getElementById('btn2').removeEventListener('click', prev);


            present(chuncked, s)


        }
    }

}





////////////////////////

async function dowork() {


    const response = await first()


     

    sort(response)



    ///////

 const   response2 = await second()

    document.getElementById("counter").innerHTML= ""


    response2.push(response)

 var   objectm3 = [].concat.apply([], response2);


    duplicates(objectm3)


}


dowork()
