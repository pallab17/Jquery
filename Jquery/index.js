// alert("workinh");

// jodi amra jquery aar js r cdn link ta head section e include kori(css r link  r porer line e )
// tahole high chances ache je query load howar somoye js access niye nite chailo
// tate amra aar change ei korte parbona the web app using jquery
// soln ta ki then ?
// $(document).ready(function(){
//     $("h1").css("color", "red");
// }
// ) // etate ki hocche---> amra check korchi jokhun ei jquery libary ta add hocche tokhuni ei amra
// change korchi h1 tag r color ta
//jate js document take age access korar chestaye
// jquery take load ei korte dilo na
// but amra erom $(document).ready function use korbo na
// alternate soln hocche amra script link cdn gulo add korbo html file e
// before  sesh r body tag jate we can ignore writing jquery ready fn

//$("h1").css("color", "red");

// selecting elements with jquery
//$("selector");
//  document.querySelector("h1");   // select korchi ekta h1 element using query selector
//  document.querySelectorAll("h1");   // select korchi sob kota h1 element using query selector all
//  $("h1");  // select korchi h1 element using jquery
// jquery ke short e dollar sign diye lekha jaye $
// jokhun amra jquery diye element select korchi tokhun sob kota element ei target hocche with that selector naam
// mane  $("h1"); ei code ta sob kota element with h1 tag ke target korche

// css ke target korar jonno using jquery
// dot css property use korte hobe
//  $("selector/element").css("what property i want to change","what value/details i want to change in that property");
// e.g.  $("h1").css("color","green");
//$("h1").css("color","red");
// ekhane h1 elemnt ke target korchi ebong tar color property ke change korte chaichi
// value/details == color r rong red oita change korte chaichi color property under e

//$("h1").css("color","green");

// eibar ekhane ekta case ache
// jodi ami element tar details/informatio/data dekhte  chai using jquery
// then $("h1").css("color"); ei code ta likhle i will get the data about the elemennt i am searching
// ei code tate h1 element r color take dekhte chai jeta dekhte pabo writing this code
// ebar if i wanna see this details in console then console.log likhe ei code ta likhe debo
// console.log($("h1").css("color"));
//$("element/selctor").css("kon property i wanna get"); -->syntax
//console.log($("h1").css("font-size"));

//but js filee  e css r code lekha ta bhalo practice noye
// tai amra  css file e css code likhe ekhane js file
// css code attach kore debo to a element using addClass function using
// jquery

//$("h1").addClass("bt");

// // element theke class remove korbo in jquery using removeClass fn
// $("h1").removeClass("bt");

// ebar ekta r beshi class attach korbo to a element using j query
// ager code tai use korbo i.e. ekta class attach korar code ta
// but code tate amra bracket tar modhe ekta class likhe space diye aar ekta
// class r naam lijhe debo

//$("h1").addClass("bt bm");

// check korbo ekta element e class attached ache kina using hasClass fn

//$("h1").hasClass("bt");
// $("element").hasClass("class tar naam jeta attched ache kina check korchi");

// to manipulate/replace/update text using jquery
// method ---1 sudhu text tai change korbe
//$("h1").text("bye");

// method ---2 text r sathe sathe text r style tao change korbe
//$("button").html("<em>hey</em>");
// jquery or $ target kore sob kota kota element kei jeta amra target box e likhchi

// getter and setter for attributes using attr method in jquery
//console.log($("img").attr("src"));
// ager code tate amra attribute r mal mosla r naam ta jante chaichi using console.log

// next line r code ta anchor tag r attribute href r mal mosla takei change kore debe
// age index.html file e mal mosla === github.com chilo akhun amra setake change korchi to google.com
//$("a").attr("href","https://www.google.com/");

// $("a").attr("class");

// class is also an html attribute
// tai amra h1 tag e bt class attach korchi
// $("h1").attr("class"); ei code ta h1 r sathe koto guno class attched sei class gunor naam amader debe

// $("element r naam").attr("class");
// ei code ta diye amra ekta element e ki ki class attached ache chaile dekhte pabo

// adding event listener to h1 tag
// $("h1").click(function() {
//     $("h1").css("color" , "purple");
// });

//now ami jodi ebar click kori sob kota button e and click korar por h1 r color jate change hoye
// using queryselector tahole for loop lagbe aar duto line queryselectorall fn ta likhte hobe jeta sombhob na
// now ami jodi ebar click kori sob kota button e and click korar por h1 r color jate change hoye
// using j query

// $("button").click(function(){
//     $("h1").css("color","purple");
// })

// now ebar jodi ami ekta input box create kori html file e aar input file box tate
// je key ta tipchi seta jodi ami dekhte chai then kepress fn take use korbo using jquery

// $("input").keypress(function(event){
//     console.log(event.key);

// })

//ebar jodi ami whole page/website e kono ekta key press korle
// kon key ta click/press/tipechi dekhte chai then document take target korbo
// $(document).keypress(function(event){
//     console.log(event.key);

// })

// ebar jodi ami whole page/website e kono ekta key press korle
// // h1 r text r jayega te sei key ta dekhate chaichi
// $(document).keypress(function(event){
//    $("h1").text(event.key);

// })

// adding event listener using on fn instead of click and keypress function
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// })
// $("h1").on("blur",function(){
//     $("h1").css("color","");
// })


//          adding elements using j query


// before fn ta element r age  bosabe je xyz element take amra bosate chaichi
// eg   <button>new</button> <h1> hello</h1>
// ekhane new button ta gota/whole hello button tag  r age bosbe
//--h1 tag r baire
//$("h1").before("<button>Nooooh</button>");

// after fn ta element r pore  bosabe je xyz element take amra bosate chaichi
// eg    <h1> hello</h1> <button>new</button>
// ekhane new button ta gota/whole hello button tag  r pore bosbe 
//--h1 tag r baire
//$("h1").after("<button>Nooooh</button>");

// prepend fn ta element r content r age  bosabe je xyz element take amra bosate chaichi
// eg    <h1>  <button>new</button> hello</h1> 
// ekhane new button ta h1 tag r content r age bosche--h1 tag r bhetore
//$("h1").prepend("<button>Nooooh</button>");

// prepend fn ta element r content r pore  bosabe je xyz element take amra bosate chaichi
// eg    <h1> hello <button>new</button></h1>  
// ekhane new button ta h1 tag r content r pore bosche--h1 tag r bhetore
//$("h1").append("<button>Nooooh</button>");


// remove elements using  jquery


// $("button").remove(); // this will remove all the buttons in the page


//    animations using j query

// $("button").on("click",function(){
//     $("h1").hide();   // h1 ke hide kore debe 
// })
// $("button").on("click",function(){
//     $("h1").show();   // h1 ke show korbe
// })
// $("button").on("click",function(){
//     $("h1").toggle();  // button click korle ekbar h1 hide hobe ekbar show hobe
// })
// $("button").on("click",function(){
//     $("h1").fadeOut();   // h1 tag ta hide hobe but opacity wise mane blur hoye hide hobe
// })
// $("button").on("click",function(){
//     $("h1").fadeIn();  // h1 tag ta show hobe opacity wise mane non blur hoye show hobe
// })
// $("button").on("click",function(){
//     $("h1").slideUp();  // h1 ta slide hoye hide hobe
// })
// $("button").on("click",function(){
//     $("h1").slideDown(); // h1 ta slide hoye show korbe
// })
// $("button").on("click",function(){
//     $("h1").slideToggle(); // button click korle ekbar h1 hide hobe ekbar show hobe in a sliding manner
// })

// $("button").on("click",function(){
//     $("h1").animate({opacity:0.5}); // dot animate  fn ta amader nijer css add korte help korbe
//     // ccurly braces {} r bhetore amra css likhte parbo 
//     //imp point hocche sudhu numeric values allowed in the right side i.e. color = red not allowed right sidee e only numbers allowed i.e. 1,2,...
// })
// $("button").on("click",function(){
//     $("h1").slideUp().slideDown().animate({opacity:0.5});  //automatically h1 tar opor 3 te fn apply hobe continuosly
//     // prothome hide hobe tarpor show hobe both in a sliding manner tarpor blue hobe 50%
// })


