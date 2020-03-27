const https = require('https');

let html = "";
let tulostettu = false;

https.get('https://www.ilmatieteenlaitos.fi/saa/turku', (res) => {
  //console.log('statusCode:', res.statusCode);
  //console.log('headers:', res.headers);

  res.on('data', (d) => {
    html = html + d;

    let indeksi = html.indexOf('<tr class="meteogram-temperatures">');
    // console.log(indeksi);
    if (indeksi > 0) {

      if (!tulostettu) {
        // console.log("Aloitus");
        let lämpötila = html.substr(indeksi + 118, 1);
        console.log("Lämpötila Turussa: "+ lämpötila + " astetta.");

        tulostettu = true;
      }
    }
  });

}).on('error', (e) => {
  console.error(e);
});



/*
 == Avoin rajapinta/data ei toimi ==
const https = require("https");

console.log("Ohjelma alkaa.");

const options = {
    hostname: "https://opendata.fmi.fi/wfs",
    port: 443 ,
    path: "/",
    method: "GET"
};

const saaData = https.request(options, (res) => {
    console.log("Tietoa haettu.");
    res.on('data',(d) => {
        console.log("Jotain tehdään?");
        //process.stdout.write(d);
    });
    console.log("Haku päättyy.");
});


saaData.on('error', (e) => {
    console.error(e);
  });
saaData.end();

console.log("Ohjelma loppuu.");
*/