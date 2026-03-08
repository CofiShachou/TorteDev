$(document).ready(()=>{
    let nizKolacica=document.cookie.split(";")
    console.log("Niz kolacica= "+nizKolacica);
    let [n,v]=nizKolacica[0].split("=")

    if(!n){
        $("#neradniDanWrapper").css("display","flex");
    }

$("#neradniDanButton").click(()=>{
    $("#neradniDanWrapper").animate({
        height: 0,
        opacity:0
    }, 200);
    
    setTimeout(() => {
        $("#neradniDanWrapper").css("display","none");
    }, 1000);

    let datum=new Date()
    datum.setHours(datum.getHours()+2);
    document.cookie=`neradniDan=OK;expires=`+datum.toUTCString();
})


$("body").prepend(`<header id="header">
<div id="nav">
    <a href="index.html"><img src="resources/images/logo.png" alt="logo" class="logo" id="logo"></a>
    <i id="click" class="fa-solid fa-list-ul" ></i>
    
    </div>
        <ul>
            <li><a href="kolaci.html">Kolači</a></li>
            <li id="torte">
                <a href="torte.html">Torte</a>
                <i class="fa-solid fa-chevron-down down" id="torteDown"></i> 

                <div class="dropDown">
                    <div class="svecane">
                        <div>
                            <a href="svecaneTorte.html">Svečane</a>
                            <i class="fa-solid fa-chevron-down side"></i>
                        </div>
                        <div id="t1">
                            <a href="svecaneSaMason.html">Svečane torte sa masom</a>
                            <a href="svecaneSaSlagom.html">Svečane torte sa slagom</a>
                        </div>
                    </div>

                    <div class="mladenacke">
                        <div>
                            <a href="mladalackeTorte.html">Mladenačke</a>
                            <i class="fa-solid fa-chevron-down side"></i>
                        </div>
                        <div id="t2">
                            <a href="mladalackeSaMasom.html ">Mladenačke torte sa masom</a>
                            <a href="mladalackeSaSalgom.html">Mladenačke torte sa slagom</a>
                        </div>
                    </div>

                    <div class="decije">
                        <div>
                            <a href="decijeTorte.html">Dečije</a>
                            <i class="fa-solid fa-chevron-down side"></i>
                        </div>
                        <div id="t3">
                            <a href="decijeSaMasom.html">Dečije torte sa masom</a>
                            <a href="decijeSaSlagom.html">Dečije torte sa slagom</a>
                        </div>
                    </div>

                    <div id="jestiveSlike"><a href="jestiveSlike.html">Jestive slike</a></div>

                </div>
            </li>

            <li><a href="slano.html">Slano</a></li>
            <li><a href="figureZaMladence.html">Figure</a></li>
            <li><a href="presekTorti.html">Presek torti</a></li>

            <li id="ponuda">
                <a href="ponudaUkusa.html">Ponuda ukusa</a>
                <i class="fa-solid fa-chevron-down down"></i>
                <div id="pd">
                    <div><a href="ukusiKolaci.html">Kolači</a></div>
                    <div><a href="ukusiTorte.html">Torte</a></div>
                    <div><a href="ukusiSlano.html">Slano</a></div>
                </div>
            </li>

            
            <li><a href="cenovnik.html">Cenovnik</a></li>
            <li><p id="kontakt">Kontakt</p></li>

        </ul>

    </header>`)  
     
if (window.innerWidth <= 576) {
    const $menu = $("#header > ul");
let dropDown=$(".dropDown")
let PD=$("#pd")
let t1=$("#t1")
let duzinaHeadera;
let duzinaHeaderaSaTortama
let duzinaHeaderaSaUkusima
let duzinaHeaderaSaT

let visinaDropDown
let visinaPD
let visinaT
function visinaHeader(){
    $("#t1").css({
    display: "none",
    position: "",
    visibility: "",
})
$("#t2").css({
    display: "none",
    position: "",
    visibility: "",
})
$("#t3").css({
    display: "none",
    position: "",
    visibility: "",
})
$menu.css({
    display: "flex",
    position: "absolute",
    visibility: "visible"
});
duzinaHeadera = $menu[0].scrollHeight;

$(".dropDown").css({
    display: "flex",
    position: "absolute",
    visibility: "hidden",
})
visinaDropDown = dropDown[0].scrollHeight;
console.log("Visina drop Down "+visinaDropDown);

duzinaHeaderaSaTortama=duzinaHeadera+visinaDropDown

$("#pd").css({
    display: "flex",
    position: "absolute",
    visibility: "hidden",
})
visinaPD=PD[0].scrollHeight
duzinaHeaderaSaUkusima=duzinaHeadera+visinaPD

$("#t1").css({
    display: "flex",
    position: "absolute",
    visibility: "hidden",
})
visinaT=t1[0].scrollHeight
duzinaHeaderaSaT=visinaT+duzinaHeaderaSaTortama

console.log("Visina headera= "+duzinaHeadera);
console.log("Visina headera sa tortana= "+duzinaHeaderaSaTortama);
console.log("Visina headera sa ponudom= "+duzinaHeaderaSaUkusima);
console.log("Visina headera sa T= "+duzinaHeaderaSaT);

$("#t1").css({
    display: "none",
    position: "",
    visibility: "",
})
$("#pd").css({
    display: "none",
    position: "",
    visibility: "",
})
$(".dropDown").css({
    display: "none",
    position: "",
    visibility: "",
})
$menu.css({
    display: "none",
    position: "",
    visibility: "",
    maxHeight:0
});
}
visinaHeader();

$(".svecane").click(()=>{
    console.log("SVECANE");
    
})
    
    
if ($($menu).css("display") === "none") {
    console.log("bla");

    $("#torte").children("a, i").wrapAll("<div></div>");

    $("#ponuda").children("a, i").wrapAll("<div></div>");


    let toggle = false;

    $("#click").click( function() {
        
        
        if(!toggle){
       $menu.css({
                display:"flex"
            });
            setTimeout(() => {
                $menu.css({opacity:"1"});
                $menu.css({
                            maxHeight:duzinaHeadera
                         }); 
                    toggle=true;
            }, 1);

            $("#click").css({
                color:"var(--secondary1)"
            })
    } else{
        $menu.css({
                maxHeight:"0px",
                padding:"0px"
            });
        setTimeout(() => {
            $menu.css({
                display:"none",
            });
            
            toggle=false;
        }, 1000);

        $("#click").css({
                color:"var(--primary)"
        })

        ////////  ⁡⁢⁣⁣TORTE DROWP DOWN⁡⁡ ////////////
        $(".dropDown").css({
            opacity:"0",
            height:"0vw"
        })
        setTimeout(() => {
            $(".dropDown").css({
            display:"none",
            visibility: "hidden",
        })}, 1000);

        /////////  ⁡⁢⁣⁣PONUDA UKUSA DROP DOWN⁡ ///////// 

        $("#pd").css({
            opacity:"0",
            height:"0vw"
        })
        setTimeout(() => {
            $("#pd").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);

        ///////////  ⁡⁢⁣⁣TOGGLES⁡ //////////
            ponudaToggle=false;
            torteToggle=false;
    }
    });

    let torteToggle=false;
    


$("#torteDown").click(()=>{
    if(!torteToggle){
        $(".dropDown").css({
            display:"flex",
            visibility: "visible",
        })
        setTimeout(() => {
             $(".dropDown").css({
            padding: "2vw 0vw"
        })
        }, 500);
        $menu.css({
                maxHeight:duzinaHeaderaSaTortama
                // maxHeight:duzinaHeaderaSaT
            })
        setTimeout(() => {
            $(".dropDown").css({
            opacity:"1",
            height:visinaDropDown,
            // "background-color": "red"
        })
        }, 100);
        torteToggle=true

        $("#pd").css({
            opacity:"0",
            height:"0vw"
        }) 
        setTimeout(() => {
            $("#pd").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);
        ponudaToggle=false
    }
    else{
        $(".dropDown").css({
            opacity:"0",
            height:"0vw",
            padding:"0px"
        })        
        setTimeout(() => {
            $(".dropDown").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);
        torteToggle=false
    }
})

let ponudaToggle=false
$("#ponuda").click(()=>{
    if(!ponudaToggle){
        $("#pd").css({
            display:"flex",
            visibility: "visible",
        })
        $menu.css({
            maxHeight:duzinaHeaderaSaUkusima
        })
        setTimeout(() => {
            $("#pd").css({
            opacity:"1",
            height:visinaPD
        })
        }, 100);
        ponudaToggle=true


        $(".dropDown").css({
            opacity:"0",
            height:"0vw",
        })        
        setTimeout(() => {
            $(".dropDown").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);
        torteToggle=false
    }
    else{
        $("#pd").css({
            opacity:"0",
            height:"0vw"
        }) 
        setTimeout(() => {
            $("#pd").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);
        ponudaToggle=false
    }
})

///////////////   ⁡⁢⁣⁣SUBMENI⁡   /////////////////
// let svecaneToggle=false
// let mladenackeToggle=false
// let decijeToggle=false

// $(".svecane").click(()=>{
//     if(!svecaneToggle){
//         $(".svecane").css({
//             // height:"500px"
//         })
//         $("#t1").css({
//             display:"flex",
//             visibility: "visible",
//             height:visinaT
//             // height:"500px"
//         })
//         $(".dropDown").css({
//             opacity:"1",
//             // height:visinaT+visinaDropDown,
//             height:visinaT+visinaDropDown,
//         })
//         $menu.css({
//             maxHeight:duzinaHeaderaSaT
//             // height:"12px"
//         })
//         setTimeout(() => {
//             $("#t1").css({
//             opacity:"1",
//             // maxHeight:visinaT
//         })
//         }, 100);
//         svecaneToggle=true
//     }
//     else{
//         $("#t1").css({
//             opacity:"0",
//             height:"0vw"
//         }) 
//         $(".dropDown").css({
//             height:visinaDropDown
//         })
//         setTimeout(() => {
//             $("#t1").css({
//             display:"none",
//             visibility: "hidden",
//         })
//         }, 1000);
//         svecaneToggle=false
//     }
// })


// $(".mladenacke").click(()=>{
//     if(!svecaneToggle){
//         $("#t2").css({
//             display:"flex",
//             visibility: "visible",
//             // "background-color":"red"
//         })
//         $menu.css({
//             maxHeight:duzinaHeaderaSaT
//         })
//         setTimeout(() => {
//             $("#t2").css({
//             opacity:"1",
//             maxHeight:t1
//         })
//         }, 100);
//         mladenackeToggle=true
//     }
//     else{
//         $("#t2").css({
//             opacity:"0",
//             height:"0vw"
//         }) 
//         setTimeout(() => {
//             $("#t2").css({
//             display:"none",
//             visibility: "hidden",
//         })
//         }, 1000);
//         mladenackeToggle=false
//     }
// })


// $(".decije").click(()=>{
//     if(!svecaneToggle){
//         $("#t3").css({
//             display:"flex",
//             visibility: "visible",
//             // "background-color":"red"
//         })
//         $menu.css({
//             maxHeight:duznaHeaderaSaT
//         })
//         setTimeout(() => {
//             $("#t3").css({
//             opacity:"1",
//             maxHeight:t1
//         })
//         }, 100);
//         decijeToggle=true
//     }
//     else{
//         $("#t3").css({
//             opacity:"0",
//             height:"0vw"
//         }) 
//         setTimeout(() => {
//             $("#t3").css({
//             display:"none",
//             visibility: "hidden",
//         })
//         }, 1000);
//         decijeToggle=false
//     }
// })

}

}
     



$(".dropDown").mouseleave(()=>{
    $(".dropDown").css("pointer-events","none");
    setTimeout(() => {
    $(".dropDown").css("pointer-events","all");
    }, 500);
})

const sviNizovi = {
    "KO":31,
    "FM":26,
    "SM":206,
    "SS":60,
    "MM":94,
    "MS":23,
    "DM":785,
    "DS":161,
    "JS":7,
    "SL":55,
    "PT":19,
};

const presekTorti= {
    1:"Kreamasta sa orasima",
    2:"Moskva",
    3:"Nugat",
    4:"Posna ester",
    5:"Posna reforma",
    6:"Puslica",
    7:"Reforma",
    8:"Snikers",
    9:"Srneca leđa",
    10:"Švarcvald",
    11:"Tiramisu",
    12:"Boem torta",
    13:"Bueno",
    14:"Cheesecake",
    15:"Coko visnja",
    16:"Divlja ruza",
    17:"Jafa",
    18:"Kapri",
    19:"Kinderino"
}
const kolaci= {
    1:"Bakin kolac",
    2:"Bakini kolaci",
    3:"Bela bajadera",
    4:"Coko Breskvice",
    5:"Ciz kejt u casi",
    6:"Coko mus u casi",
    7:"Crna bajadera",
    8:"nig",
    9:"Kreamasta sa orasima",
    10:"Moskva",
    11:"Nugat",
    12:"Posna ester",
    13:"Posna reforma",
    14:"Puslica",
    15:"Reforma",
    16:"Snikers",
    17:"Srneca leđa",
    18:"Švarcvald",
    19:"Tiramisu",
    20:"Kapri",
    21:"Kinderino",
    22:"Kreamasta sa orasima",
    23:"Moskva",
    24:"Nugat",
    25:"Posna ester",
    26:"Posna reforma",
    27:"Puslica",
    28:"Reforma",
    29:"Snikers",
    30:"Srneca leđa",
    31:"Švarcvald",
}
const slano={
    1:"Kanapei", 
    2:"Kiflice pite", 
    3:"Kiflice proje mini Pice", 
    4:"kiflice", 
    5:"Korpa sa pecivom", 
    6:"Lisnata pogaca", 
    7:"Lux oval", 
    8:"Lux oval beli", 
    9:"Lux oval dinja", 
    10:"Mesni roštilj", 
    11:"Mesni roštilj (kobasice,mini ćevapi, belo susam)", 
    12:"Mini pice", 
    13:"Mini proje", 
    14:"Mini sendvici", 
    15:"Okrugli sendvici", 
    16:"Oval 1", 
    17:"Oval 2", 
    18:"Oval 3", 
    19:"Oval 5", 
    20:"Oval 6", 
    21:"Oval 10 posno", 
    22:"Oval suhomesnato", 
    23:"Plato beli", 
    24:"Pogaca sa 40 jufki", 
    25:"Posni oval", 
    26:"Posni rolati", 
    27:"Prazne kiflie", 
    28:"Rolati sa zdenkom", 
    29:"Rolo paprika belo sa sargarepom i mini karađorđeve", 
    30:"Rolo paprika mini karađorđeve rolovano pile", 
    31:"Rolovana paprika", 
    32:"Rolovano pile", 
    33:"20200908_183407", 
    34:"20200908_183407", 
    35:"20200908_183407", 
    36:"20200908_183407", 
    37:"20200908_183407", 
    38:"20200908_183407", 
    39:"20200908_183407", 
    40:"20200908_183407", 
    41:"20200908_183407", 
    42:"Slana torta tost rolat spanac", 
    43:"Slane korpice", 
    44:"Slane pite", 
    45:"Slane torte", 
    46:"Slani mafini sa kikirikijem", 
    47:"Slani rolati", 
    48:"Slavki kolac", 
    49:"Belo meso sa susamom", 
    50:"Brusketi", 
    51:"Ćevapi belo sa susamom", 
    52:"Daska miks", 
    53:"Daska suhomesnato", 
    54:"Grčka salata", 
    55:"Kajzerice", 
}
let redniBrojStrane=0;
let idTorte;



console.log("Kolaci broj= "+ sviNizovi["Kolaci"]);


idTorte=$(".idTorte").attr("id");
let br=0;
if(idTorte!="DM"){
    $(".strane").append(`<div class="nazad pomeraj"><</div>`)
    for(let i=0;i<sviNizovi[idTorte];i++){
        if(i%15==0){
            br++;
            $(".strane").append(`
                <p class="brojStrane">`+br+`</p>`
            )
        }
    }
    $(".strane").append(`<div class="napred pomeraj">></div>`)
}
{/* <a href="index.html"><img src="resources/images/logo.png" alt="logo" class="logo" id="logo"></a> */}



    


$("script:first").before(`
    <footer id="footer">
        <div class="col">
            <h2>Poručite telefonom</h2>
            <div id="tel">
                <button><a href="tel:+381/011-3460-136">011 3460 136</a></button>
                <button><a href="tel:+381/064-2333-272">064 2333 272</a></button>
            </div>
                <h3>Pratite nas na Instagramu</h3>
                <div class="col">
                    <div class="ig">
                        <i class="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/poslasticarnicaatanaskovic/?hl=en"></i> @poslasticarnicaatanaskovic</a>
                    </div>
                    <div class="ig">
                        <i class="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/jestive_slike_atanaskovic_s/?hl=en"></i> @jestive_slike_atanaskovic_s</a>
                    </div>
            </div>

            <div class="info">
                <i class="fa-regular fa-clock"></i>
                <div class="col">
                    <h3>Radno vreme</h3>
                    <p>Utorak - Nedelja: 8 - 20h. Ponedeljkom ne radimo.</p>
                </div>
                <i class="fa-solid fa-location-dot"></i>
                <div class="col">
                    <h3>Lokacija</h3>
                    <p>Stara ulica: Cvetanova Ćuprija 48, Veliki Mokri Lug, Beograd.</p>
                    <p>Nova ulica: Srđana Kneževića 48, Beograd, Serbia</p>
                </div>
            </div>

        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11331.932672524545!2d20.518082!3d44.760758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70b400000001%3A0x69c6d290ed9053eb!2sAtanaskovic%20S!5e0!3m2!1sen!2sus!4v1746567812497!5m2!1sen!2sus"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="footerDropDown">
                    <ul class="nav">
                        <li id="torte"><h3>Torte</h3>
                            <ul class="subMeni">
                                <li><h4>Svečane torte</h4></li>
                                <li class="ml"><a href="svecaneSaMason.html">Sa maso</a></li>
                                <li class="ml"></i><a href="svecaneSaSlagom.html">Sa šlagom</a></li>
                                <li><h4>Mladalačke torte</h4></li>
                                <li class="ml"><a href="mladalackeSaMasom.html">Sa masom</a></li>
                                <li class="ml"><a href="mladalackeSaSalgom.html">Sa šlagom</a></li>
                                <li><h4>Dečije torte</h4></li>
                                <li class="ml"><a href="decijeSaMasom.html">Sa maso</a></li>
                                <li class="ml"><a href="decijeSaSlagom.html">Sa šlagom</a></li>
                            </ul>
                        </li>

                        <li id="ukusi"><h3>Ukusi</h3>
                            <ul class="subMeni">
                                <li><a href="ukusiTorte.html" id="torta">Torte</a></li>
                                <li><a href="ukusiKolaci.html" id="kolac">Kolači</a></li>
                                <li><a href="ukusiSlano.html" id="slano">Slano</a></li>
                            </ul>
                        </li>
                        <li id="ostalo"><h3>Ostalo</h3>
                            <ul class="subMeni">
                                <li><a href="figureZaMladence.html">Figure</a></li>
                                <li><a href="kolači.html">Kolaci</a></li>
                                <li><a href="slano.html">Slano</a></li>
                                <li><a href="presekTorti.html">Presek torti</a></li>
                            </ul>
                        </li>
                    </ul> 
        </div>
    </footer>
    `)


$("#kontakt").click(()=>{
    $('html, body').animate({
    scrollTop: $('#footer').offset().top
    }, 0);
        setTimeout(() => {
            setTimeout(() => {
            $("footer>div:nth-child(1)").css("border","4px solid var(--secondary1)");
                setTimeout(() => {
                    $("footer>div:nth-child(1)").css("border","4px solid var(--secondary3)");
                }, 1000);
             }, 100);    
        }, 650);
})




let maxStrana;
maxStrana=$(".strane>p:last-of-type").text();
function strana(){
    idTorte=$(".idTorte").attr("id");

    $(".slikeWrap .slike").remove();
    $(".slikeWrap").append(`<div class="slike"></div>`)

    let i=1;

    while(i<16 && ((redniBrojStrane*15)+i)<sviNizovi[idTorte]+1){
        
        $(".slike").append(`
        <img src="resources/images/`+idTorte+`/`+idTorte+``+(redniBrojStrane*15+i)+`.webp" alt="torta" loading="lazy" class="slikaTorte" id="`+idTorte+``+(redniBrojStrane*15+i)+`">
        `)
            setTimeout(() => {
                $(".slikeWrap .slike img").css("opacity","1");
            }, 200);
         i++;   
        }
    if(redniBrojStrane<4){
        $(".t1").css("display","none")
    }
    if(redniBrojStrane>3){
        $(".t1").css("display","block")
    }

    if(redniBrojStrane>maxStrana-4)
    {
        $(".t2").css("display","none")
    }
    if(redniBrojStrane<maxStrana-3){
        $(".t2").css("display","block")
    }
    
    $("p").each(function(){
        if($(this).text()==redniBrojStrane+1){
            $(".brojStrane").css("color","var(--secondary3)")
            $(this).css('color', 'var(--secondary1)');
        }
    })


    //////////////////////////  ⁡⁢⁣⁣DECIJE MASA SREDI TACKICE ZA KLIK NA BROJ I ZA KLIK NA POMERAJ⁡   /////////////////////


console.log("Redni broj strane= "+redniBrojStrane);

}
$(".pomeraj").click(function(){
    console.log("Max strna= "+maxStrana);
    
    let s=$(this).text();
    if(s=="<")
    {
        if(redniBrojStrane != 0)
        {
            redniBrojStrane--;
        }
    }
    else if(s==">")
    {
        if(redniBrojStrane!=maxStrana-1)
        {
            redniBrojStrane++;
        }
    }
    if(redniBrojStrane>4 && redniBrojStrane<maxStrana-3)
    {
        $(".curm").text(redniBrojStrane);
        $(".cur").text(redniBrojStrane+1);
        $(".curp").text(redniBrojStrane+2);
        console.log("POMERI U DESNO");
        
    }
    strana();
})

$(".brojStrane").click(function(){
    let t=$(this).text();
    redniBrojStrane=parseInt(t);
    redniBrojStrane--;

    $(".brojStrane").css("color","var(--secondary3)")
    $(this).css("color","var(--secondary1)")

    if(redniBrojStrane<4)
    {
        $(".curm").text(4);
        $(".cur").text(5);
        $(".curp").text(6);
    }

    if(redniBrojStrane>maxStrana-3)
    {
        $(".curm").text(maxStrana-5);
        $(".cur").text(maxStrana-4);
        $(".curp").text(maxStrana-3);
    }
    strana();
    console.log("redni broj stranke na klik= "+redniBrojStrane);
    
})








let kodSlike="sm1"; // ⁡⁢⁣⁣kod kategorije i broj slike iz te kategorije⁡

$("#x").click(()=>{
    $(".view").css("opacity","0");  
    setTimeout(() => {
        $(".view").css("display","none");
    }, 500);
    $("body").css("overflow-y","auto");
})
let minSlika; // ⁡⁢⁣⁣broj najmanje slike od svih slika u toj kategoriji⁡
let maxSlika; // ⁡⁢⁣⁣broj najvece slike of svih slika u toj kategoriji⁡
let vidljiveSlike // ⁡⁢⁣⁣niz vidljivih slika na strani za neku kategoriju⁡

let brojAktivneSlike; // ⁡⁢⁣⁣broj aktivne slike⁡
let vrstaTorte; // ⁡⁢⁣⁣vrsta torte / kod⁡




$(document).on("click", ".slikaTorte", function() {
    $("body").css("overflow-y","hidden");
    $(window).scrollTop(0);

    
    $(".view").css("display","flex");  
    setTimeout(() => {
        $(".view").css("opacity","1");  
    }, 100);
    $("#velikaSlika").attr("src",$(this).attr("src"))

    kodSlike=$(this).attr("id");
    vrstaTorte=kodSlike.substring(0,2);   
    brojAktivneSlike=kodSlike.substring(2);


    

    
    
    if(vrstaTorte=="PT"){
        $("#sifra").text(presekTorti[brojAktivneSlike]);
    }
    else if(vrstaTorte=="KO"){
        $("#sifra").text(kolaci[brojAktivneSlike]);
    }    
    else if(vrstaTorte=="SL"){
        $("#sifra").text(slano[brojAktivneSlike]);
    }
    else{
        $("#sifra").text(kodSlike);
    }
    
    
    

    console.log("redniBorojSLike="+kodSlike);
    console.log("brojAktivneSlike="+brojAktivneSlike);
    console.log("vrstaTorte="+vrstaTorte);

    vidljiveSlike=$(".slike > img").filter(function() {
        return $(this).css("display") !== "none";
    });
    
       

    minSlika = $(".slike > img:first-of-type").attr("id");
    minSlika=minSlika.substring(2)

    maxSlika = vidljiveSlike.last().attr("id");
    maxSlika=maxSlika.substring(2)
    
    
});







$("#nazad").click(()=>{
    brojAktivneSlike=parseInt(brojAktivneSlike);
    maxStrana=parseInt(maxStrana);
    minSlika= parseInt(minSlika);
   
    
    

    
    if(brojAktivneSlike!=1){
    minSlika = $(".slike > img:first-of-type").attr("id");
    minSlika=minSlika.substring(2)
    

    vrstaTorte=kodSlike.substring(0,2);   
    brojAktivneSlike=kodSlike.substring(2);
    
    minSlika=parseInt(minSlika);
    
    brojAktivneSlike=parseInt(brojAktivneSlike)-1;
    kodSlike=vrstaTorte+brojAktivneSlike;
    $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+brojAktivneSlike+`.webp`)
    
     if(vrstaTorte=="PT"){
        $("#sifra").text(presekTorti[brojAktivneSlike]);
    }
    else if(vrstaTorte=="KO"){
        $("#sifra").text(kolaci[brojAktivneSlike]);
    }    
    else if(vrstaTorte=="SL"){
        $("#sifra").text(slano[brojAktivneSlike]);
    }
    else{
        $("#sifra").text(kodSlike);
    }
    }


   

    if(brojAktivneSlike==(minSlika-1) && redniBrojStrane!=0){
        redniBrojStrane--;
        strana();
    }
    
    
     console.log("Brih aktivne slike= "+brojAktivneSlike);
    console.log("Min slika= "+minSlika);
})











$("#napred").click(()=>{
    brojAktivneSlike=parseInt(brojAktivneSlike);
    redniBrojStrane=parseInt(redniBrojStrane)
    maxStrana=parseInt(maxStrana);
    maxSlika= parseInt(maxSlika);

    vidljiveSlike=$(".slike > img").filter(function() {
        return $(this).css("display") !== "none";
    });

    if ((redniBrojStrane == (maxStrana-1)) && (brojAktivneSlike == maxSlika))
    {
        console.log("PRVI IF");  
    }
    else{

   
        maxSlika = vidljiveSlike.last().attr("id");
        maxSlika=maxSlika.substring(2);
    
    
        vrstaTorte=kodSlike.substring(0,2);
        brojAktivneSlike=kodSlike.substring(2)        

        maxSlika=parseInt(maxSlika);

        brojAktivneSlike=parseInt(brojAktivneSlike)+1;
        kodSlike=vrstaTorte+brojAktivneSlike;

        $("#velikaSlika").attr("src",`resources/images/`+vrstaTorte+`/`+vrstaTorte+brojAktivneSlike+`.webp`)
        console.log("Drugi if");
        


        if(vrstaTorte=="PT"){
            $("#sifra").text(presekTorti[brojAktivneSlike]);
        }
        else if(vrstaTorte=="KO"){
            $("#sifra").text(kolaci[brojAktivneSlike]);
        }    
        else if(vrstaTorte=="SL"){
            $("#sifra").text(slano[brojAktivneSlike]);
        }
        else{
            $("#sifra").text(kodSlike);
        }

    }

    
    
    
    if((brojAktivneSlike==(maxSlika+1)) && (redniBrojStrane != (maxStrana-1))){
        redniBrojStrane++;
        strana();        
    }
 
    
    
})




window.onload = function(){
    strana();
}
})






///////////////////////////////////////////  ⁡⁢⁣⁣RESPONSIVE⁡ ////////////////
