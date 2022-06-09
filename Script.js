var NomorWa = "+6282196525714";
var AlamatEmail = "yusranmazidan@gmail.com";
const NamaPekerjaan = ["Graphic Designer","Student","Programmer","Gamer","Game Creator","Video Editor"];
const FotoKerja = ["Poster Simple","Poster Simple1","Poster Simple2","Poster Simple3","Poster Simple4","Poster Simple5","Poster Simple6","Poster Simple7"];
UbahNamaKerja();
Works();

function UbahNamaKerja() {
    var i = 0, howManyTimes = NamaPekerjaan.length;

    function HitungMundur() {
    document.getElementById("Pekerjaan").innerHTML = NamaPekerjaan[i];
    i++;
    if (i == howManyTimes) {
        i = 0;
    }
    if (i < howManyTimes) {
        setTimeout(HitungMundur, 3000);
        }
    }
    
    HitungMundur();
}

function Works() {
    
    var KategoriKerja = document.getElementById("Corel").children;
    var row = KategoriKerja[0].children;

    for (let i = 0; i < FotoKerja.length; i++) {
        Corel(i,row);        
    }
    console.log(FotoKerja.length);
}
function Corel(i,row) {
    
    var Works = row[i].children;
    var card = Works[0].children;
    var foto = card[0];
    var title = card[1].children;
    foto.src = "Source/" + FotoKerja[i] +".png";
    title[0].innerHTML = FotoKerja[i];
    title[1].innerHTML = FotoKerja[i] + " Judul";
    
}


function KopiNomor() {
    navigator.clipboard.writeText(NomorWa);
    document.getElementById("YangTersalin").innerHTML= NomorWa + " Tersalin";
    YangTersalin = NomorWa;
}

function KopiEmail() {
    navigator.clipboard.writeText(AlamatEmail);
    document.getElementById("YangTersalin").innerHTML= AlamatEmail + " Tersalin";
    
}