
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



var proxy = 'https://proxycarlos.herokuapp.com/?q='


urls2 = [
    "https://agadir24.info/feed/",
    "https://www.alyaoum24.com/feed/",
    "https://ahdath.info/feed",
    "https://akhbarnador.com/feed/",
    "https://aladabia.net/feed/",
    "https://alalam.ma/feed/",
    "https://assabah.ma/feed/",
    "https://bayanealyaoume.press.ma/feed/",
    "https://cawalisse.com/feed/",
    "https://chamaly.ma/feed/",
    "https://dalil-rif.com/feed/",
    "https://democpress.com/feed/",
    "https://kech24.com/feed/",
    "https://laracheinfo.com/feed/",
    "https://n24.ma/feed/",
    "https://presstetouan.com/feed/",
    "https://rue20.com/feed/",
    "https://tanja24.com/feed/",
    "https://tanjanews.com/feed/",
    "https://telexpresse.com/feed/",
    "https://tetouanews.ma/feed/",
    "https://tetouanplus.com/feed/",
    "https://www.agora.ma/feed/",
    "https://www.al9anat.com/feed/",
    "https://www.alampress.info/?feed=rss2",
    "https://www.alhodoud.com/feed",
    "https://www.alhurra.ma/feed/",
    "https://www.alittihad.info/feed/",
    "https://www.aljassour.com/feed/",
    "https://www.almaghreb24.com/feed/",
    "https://www.almassaepress.com/feed/",
    "https://www.analkhabar.com/feed/",
    "https://www.andaluspress.com/feed/",
    "https://www.barlamane.com/feed/",
    "https://www.febrayer.com/feed/",
    "https://www.mithaqarrabita.ma/feed/",
    "https://www.noonpresse.com/feed/",
    "https://www.tizpress.com/feed/",
    "http://www.ariffino.net/feed/",
    "http://www.safitoday.com/feed/",
]




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



                let ourRequest3 = new XMLHttpRequest();
                ourRequest3.open('GET', proxy + urls2[i2]);

                ourRequest3.onerror = function () {
                    i2++
                    send2(i2);
                }

                ourRequest3.onload = function () {


                    xmlDoc4 = ourRequest3.responseText.replace(/<!\[CDATA\[/g, " ").replace(/\]\]>/g, "");


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

                        xmlDoc3 = ourRequest2.responseText.replace(/<!\[CDATA\[/g, " ").replace(/\]\]>/g, "");


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

    chuncked = []

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




    document.getElementById("news").innerHTML = "";



    ss = s + 1



    document.getElementById("page").innerHTML = ss + "/" + chuncked.length



    if (s > chuncked.length || s < 0) {
        s = 0
    }




    let newsContainer = document.getElementById("news");



    let length = chuncked[s].length



    let htmlString = "";






    for (f = 0; f < length; f++) {


        //image



      image = ""

      image1 = ""

      image0 = ""


   
            if (chuncked[s][f]["content:encoded"]) {

                string =  "chuncked[s][f][\"content:encoded\"]"

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

        link = chuncked[s][f].link[0].jValue


        // time

        time = chuncked[s][f].pubDate[0].jValue

        //title 

        title = chuncked[s][f].title[0].jValue




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


    objectm = response

    sort(response)



    ///////

    response2 = await second()

    objectm2 = response2


    objectm2.push(objectm)

    objectm3 = [].concat.apply([], objectm2);


    duplicates(objectm3)


}


dowork()
