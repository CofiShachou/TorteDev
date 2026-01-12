$(document).ready(()=>{
$("body").prepend(`<header id="header">

<div id="nav">
    <a href="index.html"><img src="resources/images/logo.png" alt="logo" class="logo" id="logo"></a> 
    <i class="fa-solid fa-list-ul" id="click"></i>
    </div>
        <ul>
            <li><a href="kolaci.html">Kolači</a></li>
            <li id="torte">
                <a href="torte.html">Torte</a>
                <i class="fa-solid fa-chevron-down down"></i> 

                <div class="dropDown">
                    <div class="svecane">
                        <a href="svecaneTorte.html">Svecane</a>
                        <i class="fa-solid fa-chevron-down side"></i>
                        <div id="t1">
                            <a href="svecaneSaMason.html">Svecane torte sa masom</a>
                            <a href="svecaneSaSlagom.html">Svecane torte sa slagom</a>
                        </div>
                    </div>

                    <div class="mladenacke">
                        <a href="mladalackeTorte.html">Mladenacke</a>
                        <i class="fa-solid fa-chevron-down side"></i>
                        <div id="t2">
                            <a href="mladalackeSaMasom.html ">Mladenacke torte sa masom</a>
                            <a href="mladalackeSaSalgom.html">Mladenacke torte sa slagom</a>
                        </div>
                    </div>

                    <div class="decije">
                        <a href="decijeTorte.html">Decije</a>
                        <i class="fa-solid fa-chevron-down side"></i>
                        <div id="t3">
                            <a href="decijeSaMasom.html">Decije torte sa masom</a>
                            <a href="decijeSaSlagom.html">Decije torte sa slagom</a>
                        </div>
                    </div>

                    <div><a href="jestiveSlike.html">Jestive slike</a></div>

                </div>
            </li>

            <li><a href="slano.html">Slano</a></li>
            <li><a href="figureZaMladence.html">Figure</a></li>
            <li><a href="presekTorti.html">Presek torti</a></li>

            <li id="ponuda">
                <a href="ponudaUkusa.html">Ponuda ukusa</a>
                <i class="fa-solid fa-chevron-down down"></i>
                <div id="pd">
                    <a href="ukusiKolaci.html">Kolaci</a>
                    <a href="ukusiTorte.html">Torte</a>
                    <a href="ukusiSlano.html">Slano</a>
                </div>
            </li>

            
            <li><a href="cenovnik.html">Cenovnik</a></li>
            <li><p id="kontakt">Kontakt</p></li>
            <li><a href="oAutoru.html">O autoru</a></li>
            <li><a href="resources/Poslasticarnica.zip">Zip fajl</a>

        </ul>

    </header>`)  
     
        
if (window.matchMedia("(max-width: 576px)").matches) {
    console.log("bla");

    $("#torte").children("a, i").wrapAll("<div></div>");

    $("#ponuda").children("a, i").wrapAll("<div></div>");





    
    
    
    // $("#header").prepend(`
    // <div id="nav">
    // <a href="index.html"><img src="resources/images/logo.png" alt="logo" class="logo" id="logo"></a> 
    // 
    // </div>`)
    

    let toggle = false;

function setupMobileMenu() {
    document.getElementById("click").remove();
    $("#nav").append(`<i class="fa-solid fa-list-ul" id="click"></i>`)
    
    
    const $menu = $("#header > ul");

    // Ovako delegiraš klik na #click
    $(document).off("click", "#click"); // prvo ukloni stari handler
    $(document).on("click", "#click", function() {
        if(!toggle){
        // $("#header").css("height","90vw")
       $menu.css({
                display:"flex",
            });
            setTimeout(() => {
                $menu.css({opacity:"1"});
                if(torteToggle==true && ponudaToggle==true)
                {
                    $menu.css({
                             height:"180vw"
                         });
                } else if(torteToggle==true && ponudaToggle==false){
                    $menu.css({
                             height:"130vw"
                         });
                } else if(torteToggle==false && ponudaToggle==true){
                        $menu.css({
                             height:"120vw"
                         });
                }else{
                        $menu.css({
                             height:"90vw"
                         });                    
                }


                    toggle=true;
            }, 1);

            $("#click").css({
                color:"var(--secondary1)"
            })
    } else{
        // $("#header").css("height","10vw")
        $menu.css({
                    opacity:"0",
                    height:"0vw",
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
    }
    });

    let torteToggle=false
$("#torte").click(()=>{
    if(!torteToggle){
        $(".dropDown").css({
            display:"flex",
            visibility: "visible",
        })
        if(ponudaToggle==true){
            $menu.css({
                height:"180vw"
            })
        }else{
            $menu.css({
                height:"130vw"
            })
        }
        setTimeout(() => {
            $(".dropDown").css({
            opacity:"1",
            height:"40vw",
            // padding: "10px 20px"
    
        })
        }, 100);
        torteToggle=true
    }
    else{
        $(".dropDown").css({
            opacity:"0",
            height:"0vw",
            // padding: "0px 0px"
    
        })
        if(ponudaToggle==true)
        {
            $menu.css({
                height:"120vw"
            })
        }
        else{
            $menu.css({
                height:"90vw"
            })
        }
        
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
        if(torteToggle==true){
            $menu.css({
                height:"180vw"
            })
        }else{
            $menu.css({
                height:"120vw"
            })
        }
        setTimeout(() => {
            $("#pd").css({
            opacity:"1",
            height:"30vw",
            // padding: "10px 20px"
    
        })
        }, 100);
        ponudaToggle=true
    }
    else{
        $("#pd").css({
            opacity:"0",
            height:"0vw"
        })
        if(torteToggle==true)
        {
            $menu.css({
                height:"130vw"
            })
        }
        else{
            $menu.css({
                height:"90vw"
            })
        }
         
        setTimeout(() => {
            $("#pd").css({
            display:"none",
            visibility: "hidden",
        })
        }, 1000);
        ponudaToggle=false
    }
})
}
    // Pokreni prvi put
setupMobileMenu();

// I pokreni pri resize
$(window).on("resize", () => {
    if (window.matchMedia("(max-width: 576px)").matches) {
        setupMobileMenu(); // ponovo setuje event i CSS
        // location.reload();
        
    }
});

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
            <h2>Porucite telefonom</h2>
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
                    <p>Cvetanova ćuprija 48, Veliki Mokri Lug, Beograd.</p>
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
                                <li><h4>Svecane</h4></li>
                                <li class="ml"><a href="svecaneSaMason.html">Sa maso</a></li>
                                <li class="ml"></i><a href="svecaneSaSlagom.html">Sa slagom</a></li>
                                <li><h4>Mladalacke torte</h4></li>
                                <li class="ml"><a href="mladalackeSaMasom.html">Sa masom</a></li>
                                <li class="ml"><a href="mladalackeSaSalgom.html">Sa slagom</a></li>
                                <li><h4>Decije torte</h4></li>
                                <li class="ml"><a href="decijeSaMasom.html">Sa maso</a></li>
                                <li class="ml"><a href="decijeSaSlagom.html">Sa slagom</a></li>
                            </ul>
                        </li>

                        <li id="ukusi"><h3>Ukusi</h3>
                            <ul class="subMeni">
                                <li><a href="ukusiTorte.html" id="torta">Torte</a></li>
                                <li><a href="ukusiKolaci.html" id="kolac">Kolaci</a></li>
                                <li><a href="ukusiSlano.html" id="slano">Slano</a></li>
                            </ul>
                        </li>
                        <li id="ostalo"><h3>Ostalo</h3>
                            <ul class="subMeni">
                                <li><a href="figureZaMladence.html">Figure</a></li>
                                <li><a href="kolaci.html">Kolaci</a></li>
                                <li><a href="slano.html">Slano</a></li>
                                <li><a href="presekTorti.html">Presek torti</a></li>
                                <li><a href="oAutoru.html">O autoru</a></li>
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


let greska=document.getElementById("greska")
let regIme=document.getElementById("regIme")
let regPrezime=document.getElementById("regPrezime")
let regMail=document.getElementById("regMail")

let imeReg = /^[A-Z][a-z]{1,15}$/;
let mailReg=/^[a-z0-9]{3,20}@gmail.com$/
document.getElementById("submit").onclick=function(){
    let ime=document.getElementById("ime")
    let prezime=document.getElementById("prezime")
    let mail=document.getElementById("mail")
    let radioMasa=document.getElementById("masa")
    let radioSlag=document.getElementById("slag")
    
    if(!ime.value.length || !prezime.value.length || !mail.value.length || !(radioMasa.checked || radioSlag.checked)){
        greska.textContent="Niste popunili sva polja"
    }else{
        greska.textContent=""
    }

    if(!imeReg.test(ime.value)){
        regIme.textContent=`Ime mora biti u formatu "Veliko slovo + 1-15 malih slova"`
    }else regIme.textContent=""

    if(!imeReg.test(prezime.value)){
        regPrezime.textContent=`Prezme mora biti u formatu "Veliko slovo + 1-15 malih slova"`
    }else regPrezime.textContent=""

     if(!mailReg.test(mail.value)){
        regMail.textContent="Mail mora biti u formatu 3-20 slova ili brojeva + @gmail.com"
    }else regMail.textContent=""

    if(greska.textContent=="" && regIme.textContent=="" && regPrezime.textContent=="" && regMail.textContent==""){
        document.getElementById("poslato").textContent="Porudžbina uspesno poslata"
    }else document.getElementById("poslato").textContent=""
}






///////////////////////////////////////////  ⁡⁢⁣⁣RESPONSIVE⁡ ////////////////

