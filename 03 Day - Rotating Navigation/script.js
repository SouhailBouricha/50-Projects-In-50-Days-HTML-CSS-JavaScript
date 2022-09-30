const opena = document.querySelector(".menu");
const closea = document.querySelector(".close");
const con = document.querySelector(".container");
const nav = document.querySelector("nav");
opena.addEventListener("click",() =>{
    con.classList.add("active");
    nav.classList.add("active");
});
closea.addEventListener("click",() =>{
    con.classList.remove("active");
    nav.classList.remove("active");
});




























// /******/ (() => { // webpackBootstrap
// /******/ 	"use strict";
// /******/ 	var __webpack_modules__ = ({

// /***/ "./src/contact.js":
// /*!************************!*\
//   !*** ./src/contact.js ***!
//   \************************/
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateContact": () => (/* binding */ CreateContact)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_mamabear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/mamabear.png */ "./src/img/mamabear.png");
//     /* harmony import */ var _img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/papabear.jpeg */ "./src/img/papabear.jpeg");
//     /* harmony import */ var _img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/babybear.jpeg */ "./src/img/babybear.jpeg");
    
    
    
    
    
    
//     function CreateContact(){
    
//         const first_contact = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)("Contact Us",_img_bee_svg__WEBPACK_IMPORTED_MODULE_2__);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(first_contact);
    
//         const conform1 = createblock("Mama Bear","Chef","555-555-5554","totallyRealEmail@notFake.com",_img_mamabear_png__WEBPACK_IMPORTED_MODULE_3__);
//         const conform2 = createblock("Papa Bear","Manager","555-555-5555","perfectlyRealEmail@notFake.com",_img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_4__);
//         const conform3 = createblock("Baby Bear","Waiter","555-555-5556","totallyRealEmail@notFake.com",_img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_5__);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform1);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform3);
//     }
    
//     function createblock(nameText,workText,numberText,emailText,pic2){
//         const contactform = document.createElement('div');
//         contactform.classList.add('contactform');
    
//         const contactInside = document.createElement('div');
//         contactInside.classList.add('contactInside');
    
//         contactform.appendChild(contactInside);
    
//         const info = document.createElement('div');
//         info.classList.add('info');
    
//         const name = document.createElement('p');
//         name.classList.add('name');
//         name.innerText = nameText;
    
//         const work = document.createElement('p');
//         work.classList.add('work');
//         work.innerText = workText;
    
//         const number = document.createElement('p');
//         number.classList.add('number');
//         number.innerText = numberText;
    
//         const email = document.createElement('p');
//         email.classList.add('email');
//         email.innerText = emailText;
    
//         info.appendChild(name);
//         info.appendChild(work);
//         info.appendChild(number);
//         info.appendChild(email);
    
//         contactInside.appendChild(info);
    
//         const imgcontatc = document.createElement('div');
//         imgcontatc.classList.add('imgcontatc');
    
//         const img999 = new Image();
//         img999.src = pic2;
//         img999.classList.add("imgcontatcpic");
    
//         imgcontatc.appendChild(img999);
    
//         contactInside.appendChild(imgcontatc);
    
//         return contactform;
//     }
    
    
//     /***/ }),
    
//     /***/ "./src/home.js":
//     /*!*********************!*\
//       !*** ./src/home.js ***!
//       \*********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateHome": () => (/* binding */ CreateHome)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/honeycomb.svg */ "./src/img/honeycomb.svg");
    
    
    
    
    
    
//     function CreateHome(){
//         console.log(_index__WEBPACK_IMPORTED_MODULE_0__.content,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const head = document.createElement("div");
//         head.classList.add("head");
    
//         const img1 = new Image();
//         img1.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img1.classList.add("bee");
    
//         const headInfo = document.createElement("h1");
//         headInfo.classList.add("headInfo");
//         headInfo.innerText = "Beary's Breakfast Bar";
    
//         const img2 = new Image();
//         img2.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img2.classList.add("bee1");
    
//         head.appendChild(img1);
//         head.appendChild(headInfo);
//         head.appendChild(img2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(head);
    
//         const desc = document.createElement("div");
//         desc.classList.add("desc");
    
//         const hony = new Image();
//         hony.src = _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__;
//         hony.classList.add("hony");
    
//         const insideDesc = document.createElement("div");
//         insideDesc.classList.add("insideDesc");
    
//         const para = document.createElement("p");
//         para.classList.add("para");
//         para.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    
//         const customer = document.createElement("p");
//         customer.classList.add("customer");
//         customer.innerText = "Goldilocks";
    
//         const img3 = new Image();
//         img3.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img3.classList.add("bee2");
    
//         insideDesc.appendChild(para);
//         insideDesc.appendChild(customer);
//         insideDesc.appendChild(img3);
    
//         desc.appendChild(hony);
//         desc.appendChild(insideDesc);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(desc);
    
//         const hours = document.createElement("div");
//         hours.classList.add("hours");
    
//         const hoursInside = document.createElement("div");
//         hoursInside.classList.add("hoursInside");
    
//         const img4 = new Image();
//         img4.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img4.classList.add("bee3");
    
//         const hoursDes = document.createElement("p");
//         hoursDes.classList.add("hoursDes");
//         hoursDes.innerText = "Hours";
    
//         const listHours = document.createElement("ul");
//         listHours.classList.add("listHours");
    
//         const Sunday = document.createElement("li");
//         Sunday.classList.add("hour");
//         Sunday.innerText = "Sunday: 8am - 8pm";
    
//         const Monday = document.createElement("li");
//         Monday.classList.add("hour");
//         Monday.innerText = "Monday: 6am - 6pm";
    
//         const Tuesday = document.createElement("li");
//         Tuesday.classList.add("hour");
//         Tuesday.innerText = "Tuesday: 6am - 6pm";
    
//         const Wednesday = document.createElement("li");
//         Wednesday.classList.add("hour");
//         Wednesday.innerText = "Wednesday: 6am - 6pm";
    
//         const Thursday = document.createElement("li");
//         Thursday.classList.add("hour");
//         Thursday.innerText = "Thursday: 6am - 10pm";
    
//         const Friday = document.createElement("li");
//         Friday.classList.add("hour");
//         Friday.innerText = "Friday: 6am - 10pm";
    
//         const Saturday = document.createElement("li");
//         Saturday.classList.add("hour");
//         Saturday.innerText = "Saturday: 8am - 10pm";
    
//         const img5 = new Image();
//         img5.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img5.classList.add("bee4");
    
//         listHours.appendChild(Sunday);
//         listHours.appendChild(Monday);
//         listHours.appendChild(Tuesday);
//         listHours.appendChild(Wednesday);
//         listHours.appendChild(Thursday);
//         listHours.appendChild(Friday);
//         listHours.appendChild(Saturday);
    
//         hoursInside.appendChild(img4);
//         hoursInside.appendChild(hoursDes);
//         hoursInside.appendChild(listHours);
//         hoursInside.appendChild(img5);
//         hours.appendChild(hoursInside);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(hours);
    
//         const adr = document.createElement("div");
//         adr.classList.add("adreess");
//         adr.classList.add("desc");
    
//         const insideDesc2 = document.createElement("div");
//         insideDesc2.classList.add("insideDesc");
    
//         const customer2 = document.createElement("p");
//         customer2.classList.add("customer");
//         customer2.innerText = "Location";
    
//         const para2 = document.createElement("p");
//         para2.classList.add("para");
//         para2.classList.add("ala");
//         para2.innerText = "123 Forest Drive, Forestville, Maine";
    
//         const img6 = new Image();
//         img6.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img6.classList.add("bee2");
    
//         insideDesc2.appendChild(customer2);
//         insideDesc2.appendChild(para2);
//         insideDesc2.appendChild(img6);
    
//         adr.appendChild(insideDesc2);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(adr);
//     }
    
//     {/* <div class="desc adreess">
//       <div class="insideDesc ">
//         <p class="customer">Location</p>
//         <p class="para ala">123 Forest Drive, Forestville, Maine</p>
//         <img src="./img/bee.svg" class="bee2" />
//       </div>
//     </div>  */}
    
//     /***/ }),
    
//     /***/ "./src/index.js":
//     /*!**********************!*\
//       !*** ./src/index.js ***!
//       \**********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "content": () => (/* binding */ content)
//     /* harmony export */ });
//     /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
//     /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//     /* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
    
    
    
    
//     const content = document.querySelector("#content");
    
//     const active = { btn: "home" , img : "hepic1"};
//     (0,_home__WEBPACK_IMPORTED_MODULE_0__.CreateHome)();
//     document.querySelector(".hepic2").style.display = "none";
//     document.querySelector(".hepic3").style.display = "none";
    
//     const menu = document.querySelector(".menu");
//     const contact = document.querySelector(".contact");
//     const home = document.querySelector(".home");
    
//     menu.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_menu__WEBPACK_IMPORTED_MODULE_1__.CreateMenu)();
//         notColor(active);
//         active.btn = "menu";
//         active.img = "hepic2";
//         colors(active);
//     });
    
//     contact.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_contact__WEBPACK_IMPORTED_MODULE_2__.CreateContact)();
//         notColor(active);
//         active.btn = "contact";
//         active.img = "hepic3";
//         colors(active);
//     });
    
//     home.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_home__WEBPACK_IMPORTED_MODULE_0__.CreateHome)();
//         notColor(active);
//         active.btn = "home";
//         active.img = "hepic1";
//         colors(active);
//     });
    
//     function colors(nowObj){
//         document.querySelector(`.${nowObj.btn}`).style.backgroundColor = "#ECA43B";
//         document.querySelector(`.${nowObj.img}`).style.display = "block";
//     }
//     function notColor(nowObj){
//         document.querySelector(`.${nowObj.btn}`).style.backgroundColor = "#FFDE73";
//         document.querySelector(`.${nowObj.img}`).style.display = "none";
//     }
    
//     /***/ }),
    
//     /***/ "./src/menu.js":
//     /*!*********************!*\
//       !*** ./src/menu.js ***!
//       \*********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateMenu": () => (/* binding */ CreateMenu),
//     /* harmony export */   "createMenu": () => (/* binding */ createMenu)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/honeycomb.svg */ "./src/img/honeycomb.svg");
//     /* harmony import */ var _img_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/honeyTea.jpg */ "./src/img/honeyTea.jpg");
//     /* harmony import */ var _img_bearyTea_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bearyTea.jpg */ "./src/img/bearyTea.jpg");
//     /* harmony import */ var _img_toast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/toast.jpg */ "./src/img/toast.jpg");
//     /* harmony import */ var _img_fruit_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/fruit.jpg */ "./src/img/fruit.jpg");
//     /* harmony import */ var _img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pancakes.jpg */ "./src/img/pancakes.jpg");
//     /* harmony import */ var _img_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/frenchToast.jpg */ "./src/img/frenchToast.jpg");
//     /* harmony import */ var _img_veggieSandwich_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/veggieSandwich.jpg */ "./src/img/veggieSandwich.jpg");
//     /* harmony import */ var _img_blt_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/blt.jpg */ "./src/img/blt.jpg");
//     /* harmony import */ var _img_lox_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/lox.jpg */ "./src/img/lox.jpg");
//     /* harmony import */ var _img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/honeyComb.jpg */ "./src/img/honeyComb.jpg");
//     /* harmony import */ var _img_porridge_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/porridge.jpg */ "./src/img/porridge.jpg");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     function CreateMenu(){
//         const headmenu = document.createElement('div');
//         headmenu.classList.add('head');
    
//         const img7 = new Image();
//         img7.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img7.classList.add("bee");
    
//         const headInfomenu = document.createElement("h1");
//         headInfomenu.classList.add("headInfo");
//         headInfomenu.innerText = "Menu";
    
//         const img8 = new Image();
//         img8.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img8.classList.add("bee1");
    
//         headmenu.appendChild(img7);
//         headmenu.appendChild(headInfomenu);
//         headmenu.appendChild(img8);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(headmenu);
    
//         const menu1 = createMenu("Beverages",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
//         const menu2 = createMenu("Sides",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
//         const menu3 = createMenu("Main Dishes",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu1);
        
//         const first_product = createProduct("Honey Tea","A warm, sweet tea made with the highest quality honey and a bit oflemon to start your day off right!","$2",_img_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_3__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const seconde_product = createProduct("Beary Tea","A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.","$3",_img_bearyTea_jpg__WEBPACK_IMPORTED_MODULE_4__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const terth_product = createProduct("Toast and Jam","A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.","$1",_img_toast_jpg__WEBPACK_IMPORTED_MODULE_5__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const forth_product = createProduct("Fresh Fruit","A small bowl of fresh fruit, whatever we find at the market for the day.","$3",_img_fruit_jpg__WEBPACK_IMPORTED_MODULE_6__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const fifth_product = createProduct("Pancakes","A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.","$4",_img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_7__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const sixte_product = createProduct("French Toast","Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.","$5",_img_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_8__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const siventh_product = createProduct("Beary Veggie Sandwich","Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.","$8",_img_veggieSandwich_jpg__WEBPACK_IMPORTED_MODULE_9__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const ieth_product = createProduct("veggieSandwich","Interested in the Beary Veggie Sandwich but also love bacon? Say no more.","$6",_img_blt_jpg__WEBPACK_IMPORTED_MODULE_10__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const nineth_product = createProduct("Bagel and Low","Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.","$8",_img_lox_jpg__WEBPACK_IMPORTED_MODULE_11__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const tineth_product = createProduct("Honeycomb","Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.","$6",_img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const eleven_product = createProduct("Beary Bowl","Get a big ole bowl of our berries! Side of honey is $1 extra.","$7",_img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const towelve_product = createProduct("The Beary Best Porridge","Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.","$5",_img_porridge_jpg__WEBPACK_IMPORTED_MODULE_13__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
        
        
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(first_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(seconde_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(terth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(forth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu3);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(fifth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(sixte_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(siventh_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(ieth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nineth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(tineth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(eleven_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(towelve_product);
//     }
//     function createProduct(ProductNameText,ProductparaText,priceLabelText,mainImg,beesr){
//         const product = document.createElement('div');
//         product.classList.add('product');
    
//         const insideProduct = document.createElement('div');
//         insideProduct.classList.add('insideProduct');
        
//         product.appendChild(insideProduct);
        
//         const ProductName = document.createElement("p");
//         ProductName.classList.add("ProductName");
//         ProductName.innerText = ProductNameText;
        
//         const Productpara = document.createElement("p");
//         Productpara.classList.add("Productpara");
//         Productpara.innerText = ProductparaText;
        
//         const price = document.createElement('div');
//         price.classList.add('price');
        
//         const priceLabel = document.createElement('div');
//         priceLabel.classList.add('priceLabel');
//         priceLabel.innerText = priceLabelText;
     
//         const imgwrapper = document.createElement('div');
//         imgwrapper.classList.add('imgwrapper');
    
//         price.appendChild(priceLabel);
//         price.appendChild(imgwrapper);
    
//         const img10 = new Image();
//         img10.src = mainImg;
//         img10.classList.add("productImg");
    
//         imgwrapper.appendChild(img10);
    
//         const img11 = new Image();
//         img11.src = beesr;
//         img11.classList.add("beex");
//         img11.classList.add("bee");
    
//         insideProduct.appendChild(ProductName);
//         insideProduct.appendChild(Productpara);
//         insideProduct.appendChild(price);
//         insideProduct.appendChild(img11);
//         return product;
//     }
//     function createMenu(headInfomenu1Text,honeycombsr){
//         const headmenu1 = document.createElement('div');
//         headmenu1.classList.add('head');
//         headmenu1.classList.add('new');
    
//         const headInfomenu1 = document.createElement("h1");
//         headInfomenu1.classList.add("headInfo");
//         headInfomenu1.innerText = headInfomenu1Text;
    
//         const img9 = new Image();
//         img9.src = honeycombsr;
//         img9.classList.add("bee1");
    
//         headmenu1.appendChild(headInfomenu1);
//         headmenu1.appendChild(img9);
    
//         return headmenu1;
//     }
    
//     /***/ }),
    
//     /***/ "./src/img/babybear.jpeg":
//     /*!*******************************!*\
//       !*** ./src/img/babybear.jpeg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "39337ca0124e9a4d663d.jpeg";
    
//     /***/ }),
    
//     /***/ "./src/img/bearyTea.jpg":
//     /*!******************************!*\
//       !*** ./src/img/bearyTea.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "8239c872463812a9ceb3.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/bee.svg":
//     /*!*************************!*\
//       !*** ./src/img/bee.svg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "5759589f026baa86e75a.svg";
    
//     /***/ }),
    
//     /***/ "./src/img/blt.jpg":
//     /*!*************************!*\
//       !*** ./src/img/blt.jpg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "5fe5d82d52fc6176b49e.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/frenchToast.jpg":
//     /*!*********************************!*\
//       !*** ./src/img/frenchToast.jpg ***!
//       \*********************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "d6998c28606e8f61d918.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/fruit.jpg":
//     /*!***************************!*\
//       !*** ./src/img/fruit.jpg ***!
//       \***************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "55adf94046e281ceb254.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeyComb.jpg":
//     /*!*******************************!*\
//       !*** ./src/img/honeyComb.jpg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "3f65de06ee02acba6620.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeyTea.jpg":
//     /*!******************************!*\
//       !*** ./src/img/honeyTea.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "25d67ed4fcda8007b0d7.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeycomb.svg":
//     /*!*******************************!*\
//       !*** ./src/img/honeycomb.svg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "9f6b40b263827ecffca7.svg";
    
//     /***/ }),
    
//     /***/ "./src/img/lox.jpg":
//     /*!*************************!*\
//       !*** ./src/img/lox.jpg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "7c00486269a7d03b2e9b.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/mamabear.png":
//     /*!******************************!*\
//       !*** ./src/img/mamabear.png ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "56c8195f994a40bdf4cb.png";
    
//     /***/ }),
    
//     /***/ "./src/img/pancakes.jpg":
//     /*!******************************!*\
//       !*** ./src/img/pancakes.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "9a9b952ed8ce7e1e9fde.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/papabear.jpeg":
//     /*!*******************************!*\
//       !*** ./src/img/papabear.jpeg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "0fbfbd8a7052bc48e4c7.jpeg";
    
//     /***/ }),
    
//     /***/ "./src/img/porridge.jpg":
//     /*!******************************!*\
//       !*** ./src/img/porridge.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "ff1b81624373d9652bac.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/toast.jpg":
//     /*!***************************!*\
//       !*** ./src/img/toast.jpg ***!
//       \***************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "46b097a90b2e46667597.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/veggieSandwich.jpg":
//     /*!************************************!*\
//       !*** ./src/img/veggieSandwich.jpg ***!
//       \************************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "363043f450e131d9e3b0.jpg";
    
//     /***/ })
    
//     /******/ 	});
//     /************************************************************************/
//     /******/ 	// The module cache
//     /******/ 	var __webpack_module_cache__ = {};
//     /******/ 	
//     /******/ 	// The require function
//     /******/ 	function __webpack_require__(moduleId) {
//     /******/ 		// Check if module is in cache
//     /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
//     /******/ 		if (cachedModule !== undefined) {
//     /******/ 			return cachedModule.exports;
//     /******/ 		}
//     /******/ 		// Create a new module (and put it into the cache)
//     /******/ 		var module = __webpack_module_cache__[moduleId] = {
//     /******/ 			// no module.id needed
//     /******/ 			// no module.loaded needed
//     /******/ 			exports: {}
//     /******/ 		};
//     /******/ 	
//     /******/ 		// Execute the module function
//     /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
//     /******/ 	
//     /******/ 		// Return the exports of the module
//     /******/ 		return module.exports;
//     /******/ 	}
//     /******/ 	
//     /************************************************************************/
//     /******/ 	/* webpack/runtime/define property getters */
//     /******/ 	(() => {
//     /******/ 		// define getter functions for harmony exports
//     /******/ 		__webpack_require__.d = (exports, definition) => {
//     /******/ 			for(var key in definition) {
//     /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
//     /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
//     /******/ 				}
//     /******/ 			}
//     /******/ 		};
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/global */
//     /******/ 	(() => {
//     /******/ 		__webpack_require__.g = (function() {
//     /******/ 			if (typeof globalThis === 'object') return globalThis;
//     /******/ 			try {
//     /******/ 				return this || new Function('return this')();
//     /******/ 			} catch (e) {
//     /******/ 				if (typeof window === 'object') return window;
//     /******/ 			}
//     /******/ 		})();
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
//     /******/ 	(() => {
//     /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/make namespace object */
//     /******/ 	(() => {
//     /******/ 		// define __esModule on exports
//     /******/ 		__webpack_require__.r = (exports) => {
//     /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
//     /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//     /******/ 			}
//     /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
//     /******/ 		};
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/publicPath */
//     /******/ 	(() => {
//     /******/ 		var scriptUrl;
//     /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
//     /******/ 		var document = __webpack_require__.g.document;
//     /******/ 		if (!scriptUrl && document) {
//     /******/ 			if (document.currentScript)
//     /******/ 				scriptUrl = document.currentScript.src
//     /******/ 			if (!scriptUrl) {
//     /******/ 				var scripts = document.getElementsByTagName("script");
//     /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
//     /******/ 			}
//     /******/ 		}
//     /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
//     /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
//     /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
//     /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
//     /******/ 		__webpack_require__.p = scriptUrl;
//     /******/ 	})();
//     /******/ 	
//     /************************************************************************/
//     /******/ 	
//     /******/ 	// startup
//     /******/ 	// Load entry module and return exports
//     /******/ 	// This entry module is referenced by other modules so it can't be inlined
//     /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
//     /******/ 	
//     /******/ })()
//     ;


// /******/ (() => { // webpackBootstrap
// /******/ 	"use strict";
// /******/ 	var __webpack_modules__ = ({

// /***/ "./src/contact.js":
// /*!************************!*\
//   !*** ./src/contact.js ***!
//   \************************/
// /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateContact": () => (/* binding */ CreateContact)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_mamabear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/mamabear.png */ "./src/img/mamabear.png");
//     /* harmony import */ var _img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/papabear.jpeg */ "./src/img/papabear.jpeg");
//     /* harmony import */ var _img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/babybear.jpeg */ "./src/img/babybear.jpeg");
    
    
    
    
    
    
//     function CreateContact(){
    
//         const first_contact = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)("Contact Us",_img_bee_svg__WEBPACK_IMPORTED_MODULE_2__);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(first_contact);
    
//         const conform1 = createblock("Mama Bear","Chef","555-555-5554","totallyRealEmail@notFake.com",_img_mamabear_png__WEBPACK_IMPORTED_MODULE_3__);
//         const conform2 = createblock("Papa Bear","Manager","555-555-5555","perfectlyRealEmail@notFake.com",_img_papabear_jpeg__WEBPACK_IMPORTED_MODULE_4__);
//         const conform3 = createblock("Baby Bear","Waiter","555-555-5556","totallyRealEmail@notFake.com",_img_babybear_jpeg__WEBPACK_IMPORTED_MODULE_5__);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform1);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(conform3);
//     }
    
//     function createblock(nameText,workText,numberText,emailText,pic2){
//         const contactform = document.createElement('div');
//         contactform.classList.add('contactform');
    
//         const contactInside = document.createElement('div');
//         contactInside.classList.add('contactInside');
    
//         contactform.appendChild(contactInside);
    
//         const info = document.createElement('div');
//         info.classList.add('info');
    
//         const name = document.createElement('p');
//         name.classList.add('name');
//         name.innerText = nameText;
    
//         const work = document.createElement('p');
//         work.classList.add('work');
//         work.innerText = workText;
    
//         const number = document.createElement('p');
//         number.classList.add('number');
//         number.innerText = numberText;
    
//         const email = document.createElement('p');
//         email.classList.add('email');
//         email.innerText = emailText;
    
//         info.appendChild(name);
//         info.appendChild(work);
//         info.appendChild(number);
//         info.appendChild(email);
    
//         contactInside.appendChild(info);
    
//         const imgcontatc = document.createElement('div');
//         imgcontatc.classList.add('imgcontatc');
    
//         const img999 = new Image();
//         img999.src = pic2;
//         img999.classList.add("imgcontatcpic");
    
//         imgcontatc.appendChild(img999);
    
//         contactInside.appendChild(imgcontatc);
    
//         return contactform;
//     }
    
    
//     /***/ }),
    
//     /***/ "./src/home.js":
//     /*!*********************!*\
//       !*** ./src/home.js ***!
//       \*********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateHome": () => (/* binding */ CreateHome)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/honeycomb.svg */ "./src/img/honeycomb.svg");
    
    
    
    
    
    
//     function CreateHome(){
//         console.log(_index__WEBPACK_IMPORTED_MODULE_0__.content,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const head = document.createElement("div");
//         head.classList.add("head");
    
//         const img1 = new Image();
//         img1.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img1.classList.add("bee");
    
//         const headInfo = document.createElement("h1");
//         headInfo.classList.add("headInfo");
//         headInfo.innerText = "Beary's Breakfast Bar";
    
//         const img2 = new Image();
//         img2.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img2.classList.add("bee1");
    
//         head.appendChild(img1);
//         head.appendChild(headInfo);
//         head.appendChild(img2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(head);
    
//         const desc = document.createElement("div");
//         desc.classList.add("desc");
    
//         const hony = new Image();
//         hony.src = _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__;
//         hony.classList.add("hony");
    
//         const insideDesc = document.createElement("div");
//         insideDesc.classList.add("insideDesc");
    
//         const para = document.createElement("p");
//         para.classList.add("para");
//         para.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    
//         const customer = document.createElement("p");
//         customer.classList.add("customer");
//         customer.innerText = "Goldilocks";
    
//         const img3 = new Image();
//         img3.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img3.classList.add("bee2");
    
//         insideDesc.appendChild(para);
//         insideDesc.appendChild(customer);
//         insideDesc.appendChild(img3);
    
//         desc.appendChild(hony);
//         desc.appendChild(insideDesc);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(desc);
    
//         const hours = document.createElement("div");
//         hours.classList.add("hours");
    
//         const hoursInside = document.createElement("div");
//         hoursInside.classList.add("hoursInside");
    
//         const img4 = new Image();
//         img4.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img4.classList.add("bee3");
    
//         const hoursDes = document.createElement("p");
//         hoursDes.classList.add("hoursDes");
//         hoursDes.innerText = "Hours";
    
//         const listHours = document.createElement("ul");
//         listHours.classList.add("listHours");
    
//         const Sunday = document.createElement("li");
//         Sunday.classList.add("hour");
//         Sunday.innerText = "Sunday: 8am - 8pm";
    
//         const Monday = document.createElement("li");
//         Monday.classList.add("hour");
//         Monday.innerText = "Monday: 6am - 6pm";
    
//         const Tuesday = document.createElement("li");
//         Tuesday.classList.add("hour");
//         Tuesday.innerText = "Tuesday: 6am - 6pm";
    
//         const Wednesday = document.createElement("li");
//         Wednesday.classList.add("hour");
//         Wednesday.innerText = "Wednesday: 6am - 6pm";
    
//         const Thursday = document.createElement("li");
//         Thursday.classList.add("hour");
//         Thursday.innerText = "Thursday: 6am - 10pm";
    
//         const Friday = document.createElement("li");
//         Friday.classList.add("hour");
//         Friday.innerText = "Friday: 6am - 10pm";
    
//         const Saturday = document.createElement("li");
//         Saturday.classList.add("hour");
//         Saturday.innerText = "Saturday: 8am - 10pm";
    
//         const img5 = new Image();
//         img5.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img5.classList.add("bee4");
    
//         listHours.appendChild(Sunday);
//         listHours.appendChild(Monday);
//         listHours.appendChild(Tuesday);
//         listHours.appendChild(Wednesday);
//         listHours.appendChild(Thursday);
//         listHours.appendChild(Friday);
//         listHours.appendChild(Saturday);
    
//         hoursInside.appendChild(img4);
//         hoursInside.appendChild(hoursDes);
//         hoursInside.appendChild(listHours);
//         hoursInside.appendChild(img5);
//         hours.appendChild(hoursInside);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(hours);
    
//         const adr = document.createElement("div");
//         adr.classList.add("adreess");
//         adr.classList.add("desc");
    
//         const insideDesc2 = document.createElement("div");
//         insideDesc2.classList.add("insideDesc");
    
//         const customer2 = document.createElement("p");
//         customer2.classList.add("customer");
//         customer2.innerText = "Location";
    
//         const para2 = document.createElement("p");
//         para2.classList.add("para");
//         para2.classList.add("ala");
//         para2.innerText = "123 Forest Drive, Forestville, Maine";
    
//         const img6 = new Image();
//         img6.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img6.classList.add("bee2");
    
//         insideDesc2.appendChild(customer2);
//         insideDesc2.appendChild(para2);
//         insideDesc2.appendChild(img6);
    
//         adr.appendChild(insideDesc2);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(adr);
//     }
    
//     {/* <div class="desc adreess">
//       <div class="insideDesc ">
//         <p class="customer">Location</p>
//         <p class="para ala">123 Forest Drive, Forestville, Maine</p>
//         <img src="./img/bee.svg" class="bee2" />
//       </div>
//     </div>  */}
    
//     /***/ }),
    
//     /***/ "./src/index.js":
//     /*!**********************!*\
//       !*** ./src/index.js ***!
//       \**********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "content": () => (/* binding */ content)
//     /* harmony export */ });
//     /* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
//     /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
//     /* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
    
    
    
    
//     const content = document.querySelector("#content");
    
//     const active = { btn: "home" , img : "hepic1"};
//     (0,_home__WEBPACK_IMPORTED_MODULE_0__.CreateHome)();
//     document.querySelector(".hepic2").style.display = "none";
//     document.querySelector(".hepic3").style.display = "none";
    
//     const menu = document.querySelector(".menu");
//     const contact = document.querySelector(".contact");
//     const home = document.querySelector(".home");
    
//     menu.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_menu__WEBPACK_IMPORTED_MODULE_1__.CreateMenu)();
//         notColor(active);
//         active.btn = "menu";
//         active.img = "hepic2";
//         colors(active);
//     });
    
//     contact.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_contact__WEBPACK_IMPORTED_MODULE_2__.CreateContact)();
//         notColor(active);
//         active.btn = "contact";
//         active.img = "hepic3";
//         colors(active);
//     });
    
//     home.addEventListener("click",() =>{
//         content.innerHTML = "";
//         (0,_home__WEBPACK_IMPORTED_MODULE_0__.CreateHome)();
//         notColor(active);
//         active.btn = "home";
//         active.img = "hepic1";
//         colors(active);
//     });
    
//     function colors(nowObj){
//         document.querySelector(`.${nowObj.btn}`).style.backgroundColor = "#ECA43B";
//         document.querySelector(`.${nowObj.img}`).style.display = "block";
//     }
//     function notColor(nowObj){
//         document.querySelector(`.${nowObj.btn}`).style.backgroundColor = "#FFDE73";
//         document.querySelector(`.${nowObj.img}`).style.display = "none";
//     }
    
//     /***/ }),
    
//     /***/ "./src/menu.js":
//     /*!*********************!*\
//       !*** ./src/menu.js ***!
//       \*********************/
//     /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    
//     __webpack_require__.r(__webpack_exports__);
//     /* harmony export */ __webpack_require__.d(__webpack_exports__, {
//     /* harmony export */   "CreateMenu": () => (/* binding */ CreateMenu),
//     /* harmony export */   "createMenu": () => (/* binding */ createMenu)
//     /* harmony export */ });
//     /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
//     /* harmony import */ var _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bee.svg */ "./src/img/bee.svg");
//     /* harmony import */ var _img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/honeycomb.svg */ "./src/img/honeycomb.svg");
//     /* harmony import */ var _img_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/honeyTea.jpg */ "./src/img/honeyTea.jpg");
//     /* harmony import */ var _img_bearyTea_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bearyTea.jpg */ "./src/img/bearyTea.jpg");
//     /* harmony import */ var _img_toast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/toast.jpg */ "./src/img/toast.jpg");
//     /* harmony import */ var _img_fruit_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/fruit.jpg */ "./src/img/fruit.jpg");
//     /* harmony import */ var _img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/pancakes.jpg */ "./src/img/pancakes.jpg");
//     /* harmony import */ var _img_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/frenchToast.jpg */ "./src/img/frenchToast.jpg");
//     /* harmony import */ var _img_veggieSandwich_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/veggieSandwich.jpg */ "./src/img/veggieSandwich.jpg");
//     /* harmony import */ var _img_blt_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/blt.jpg */ "./src/img/blt.jpg");
//     /* harmony import */ var _img_lox_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/lox.jpg */ "./src/img/lox.jpg");
//     /* harmony import */ var _img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/honeyComb.jpg */ "./src/img/honeyComb.jpg");
//     /* harmony import */ var _img_porridge_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/porridge.jpg */ "./src/img/porridge.jpg");
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     function CreateMenu(){
//         const headmenu = document.createElement('div');
//         headmenu.classList.add('head');
    
//         const img7 = new Image();
//         img7.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img7.classList.add("bee");
    
//         const headInfomenu = document.createElement("h1");
//         headInfomenu.classList.add("headInfo");
//         headInfomenu.innerText = "Menu";
    
//         const img8 = new Image();
//         img8.src = _img_bee_svg__WEBPACK_IMPORTED_MODULE_1__;
//         img8.classList.add("bee1");
    
//         headmenu.appendChild(img7);
//         headmenu.appendChild(headInfomenu);
//         headmenu.appendChild(img8);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(headmenu);
    
//         const menu1 = createMenu("Beverages",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
//         const menu2 = createMenu("Sides",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
//         const menu3 = createMenu("Main Dishes",_img_honeycomb_svg__WEBPACK_IMPORTED_MODULE_2__);
    
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu1);
        
//         const first_product = createProduct("Honey Tea","A warm, sweet tea made with the highest quality honey and a bit oflemon to start your day off right!","$2",_img_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_3__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const seconde_product = createProduct("Beary Tea","A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.","$3",_img_bearyTea_jpg__WEBPACK_IMPORTED_MODULE_4__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const terth_product = createProduct("Toast and Jam","A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.","$1",_img_toast_jpg__WEBPACK_IMPORTED_MODULE_5__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const forth_product = createProduct("Fresh Fruit","A small bowl of fresh fruit, whatever we find at the market for the day.","$3",_img_fruit_jpg__WEBPACK_IMPORTED_MODULE_6__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const fifth_product = createProduct("Pancakes","A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.","$4",_img_pancakes_jpg__WEBPACK_IMPORTED_MODULE_7__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const sixte_product = createProduct("French Toast","Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.","$5",_img_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_8__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const siventh_product = createProduct("Beary Veggie Sandwich","Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.","$8",_img_veggieSandwich_jpg__WEBPACK_IMPORTED_MODULE_9__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const ieth_product = createProduct("veggieSandwich","Interested in the Beary Veggie Sandwich but also love bacon? Say no more.","$6",_img_blt_jpg__WEBPACK_IMPORTED_MODULE_10__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const nineth_product = createProduct("Bagel and Low","Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.","$8",_img_lox_jpg__WEBPACK_IMPORTED_MODULE_11__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const tineth_product = createProduct("Honeycomb","Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.","$6",_img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const eleven_product = createProduct("Beary Bowl","Get a big ole bowl of our berries! Side of honey is $1 extra.","$7",_img_honeyComb_jpg__WEBPACK_IMPORTED_MODULE_12__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
//         const towelve_product = createProduct("The Beary Best Porridge","Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.","$5",_img_porridge_jpg__WEBPACK_IMPORTED_MODULE_13__,_img_bee_svg__WEBPACK_IMPORTED_MODULE_1__);
        
        
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(first_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(seconde_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu2);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(terth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(forth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menu3);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(fifth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(sixte_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(siventh_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(ieth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(nineth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(tineth_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(eleven_product);
//         _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(towelve_product);
//     }
//     function createProduct(ProductNameText,ProductparaText,priceLabelText,mainImg,beesr){
//         const product = document.createElement('div');
//         product.classList.add('product');
    
//         const insideProduct = document.createElement('div');
//         insideProduct.classList.add('insideProduct');
        
//         product.appendChild(insideProduct);
        
//         const ProductName = document.createElement("p");
//         ProductName.classList.add("ProductName");
//         ProductName.innerText = ProductNameText;
        
//         const Productpara = document.createElement("p");
//         Productpara.classList.add("Productpara");
//         Productpara.innerText = ProductparaText;
        
//         const price = document.createElement('div');
//         price.classList.add('price');
        
//         const priceLabel = document.createElement('div');
//         priceLabel.classList.add('priceLabel');
//         priceLabel.innerText = priceLabelText;
     
//         const imgwrapper = document.createElement('div');
//         imgwrapper.classList.add('imgwrapper');
    
//         price.appendChild(priceLabel);
//         price.appendChild(imgwrapper);
    
//         const img10 = new Image();
//         img10.src = mainImg;
//         img10.classList.add("productImg");
    
//         imgwrapper.appendChild(img10);
    
//         const img11 = new Image();
//         img11.src = beesr;
//         img11.classList.add("beex");
//         img11.classList.add("bee");
    
//         insideProduct.appendChild(ProductName);
//         insideProduct.appendChild(Productpara);
//         insideProduct.appendChild(price);
//         insideProduct.appendChild(img11);
//         return product;
//     }
//     function createMenu(headInfomenu1Text,honeycombsr){
//         const headmenu1 = document.createElement('div');
//         headmenu1.classList.add('head');
//         headmenu1.classList.add('new');
    
//         const headInfomenu1 = document.createElement("h1");
//         headInfomenu1.classList.add("headInfo");
//         headInfomenu1.innerText = headInfomenu1Text;
    
//         const img9 = new Image();
//         img9.src = honeycombsr;
//         img9.classList.add("bee1");
    
//         headmenu1.appendChild(headInfomenu1);
//         headmenu1.appendChild(img9);
    
//         return headmenu1;
//     }
    
//     /***/ }),
    
//     /***/ "./src/img/babybear.jpeg":
//     /*!*******************************!*\
//       !*** ./src/img/babybear.jpeg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "39337ca0124e9a4d663d.jpeg";
    
//     /***/ }),
    
//     /***/ "./src/img/bearyTea.jpg":
//     /*!******************************!*\
//       !*** ./src/img/bearyTea.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "8239c872463812a9ceb3.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/bee.svg":
//     /*!*************************!*\
//       !*** ./src/img/bee.svg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "5759589f026baa86e75a.svg";
    
//     /***/ }),
    
//     /***/ "./src/img/blt.jpg":
//     /*!*************************!*\
//       !*** ./src/img/blt.jpg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "5fe5d82d52fc6176b49e.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/frenchToast.jpg":
//     /*!*********************************!*\
//       !*** ./src/img/frenchToast.jpg ***!
//       \*********************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "d6998c28606e8f61d918.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/fruit.jpg":
//     /*!***************************!*\
//       !*** ./src/img/fruit.jpg ***!
//       \***************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "55adf94046e281ceb254.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeyComb.jpg":
//     /*!*******************************!*\
//       !*** ./src/img/honeyComb.jpg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "3f65de06ee02acba6620.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeyTea.jpg":
//     /*!******************************!*\
//       !*** ./src/img/honeyTea.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "25d67ed4fcda8007b0d7.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/honeycomb.svg":
//     /*!*******************************!*\
//       !*** ./src/img/honeycomb.svg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "9f6b40b263827ecffca7.svg";
    
//     /***/ }),
    
//     /***/ "./src/img/lox.jpg":
//     /*!*************************!*\
//       !*** ./src/img/lox.jpg ***!
//       \*************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "7c00486269a7d03b2e9b.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/mamabear.png":
//     /*!******************************!*\
//       !*** ./src/img/mamabear.png ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "56c8195f994a40bdf4cb.png";
    
//     /***/ }),
    
//     /***/ "./src/img/pancakes.jpg":
//     /*!******************************!*\
//       !*** ./src/img/pancakes.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "9a9b952ed8ce7e1e9fde.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/papabear.jpeg":
//     /*!*******************************!*\
//       !*** ./src/img/papabear.jpeg ***!
//       \*******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "0fbfbd8a7052bc48e4c7.jpeg";
    
//     /***/ }),
    
//     /***/ "./src/img/porridge.jpg":
//     /*!******************************!*\
//       !*** ./src/img/porridge.jpg ***!
//       \******************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "ff1b81624373d9652bac.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/toast.jpg":
//     /*!***************************!*\
//       !*** ./src/img/toast.jpg ***!
//       \***************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "46b097a90b2e46667597.jpg";
    
//     /***/ }),
    
//     /***/ "./src/img/veggieSandwich.jpg":
//     /*!************************************!*\
//       !*** ./src/img/veggieSandwich.jpg ***!
//       \************************************/
//     /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
    
//     module.exports = __webpack_require__.p + "363043f450e131d9e3b0.jpg";
    
//     /***/ })
    
//     /******/ 	});
//     /************************************************************************/
//     /******/ 	// The module cache
//     /******/ 	var __webpack_module_cache__ = {};
//     /******/ 	
//     /******/ 	// The require function
//     /******/ 	function __webpack_require__(moduleId) {
//     /******/ 		// Check if module is in cache
//     /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
//     /******/ 		if (cachedModule !== undefined) {
//     /******/ 			return cachedModule.exports;
//     /******/ 		}
//     /******/ 		// Create a new module (and put it into the cache)
//     /******/ 		var module = __webpack_module_cache__[moduleId] = {
//     /******/ 			// no module.id needed
//     /******/ 			// no module.loaded needed
//     /******/ 			exports: {}
//     /******/ 		};
//     /******/ 	
//     /******/ 		// Execute the module function
//     /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
//     /******/ 	
//     /******/ 		// Return the exports of the module
//     /******/ 		return module.exports;
//     /******/ 	}
//     /******/ 	
//     /************************************************************************/
//     /******/ 	/* webpack/runtime/define property getters */
//     /******/ 	(() => {
//     /******/ 		// define getter functions for harmony exports
//     /******/ 		__webpack_require__.d = (exports, definition) => {
//     /******/ 			for(var key in definition) {
//     /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
//     /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
//     /******/ 				}
//     /******/ 			}
//     /******/ 		};
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/global */
//     /******/ 	(() => {
//     /******/ 		__webpack_require__.g = (function() {
//     /******/ 			if (typeof globalThis === 'object') return globalThis;
//     /******/ 			try {
//     /******/ 				return this || new Function('return this')();
//     /******/ 			} catch (e) {
//     /******/ 				if (typeof window === 'object') return window;
//     /******/ 			}
//     /******/ 		})();
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
//     /******/ 	(() => {
//     /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/make namespace object */
//     /******/ 	(() => {
//     /******/ 		// define __esModule on exports
//     /******/ 		__webpack_require__.r = (exports) => {
//     /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
//     /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//     /******/ 			}
//     /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
//     /******/ 		};
//     /******/ 	})();
//     /******/ 	
//     /******/ 	/* webpack/runtime/publicPath */
//     /******/ 	(() => {
//     /******/ 		var scriptUrl;
//     /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
//     /******/ 		var document = __webpack_require__.g.document;
//     /******/ 		if (!scriptUrl && document) {
//     /******/ 			if (document.currentScript)
//     /******/ 				scriptUrl = document.currentScript.src
//     /******/ 			if (!scriptUrl) {
//     /******/ 				var scripts = document.getElementsByTagName("script");
//     /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
//     /******/ 			}
//     /******/ 		}
//     /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
//     /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
//     /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
//     /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
//     /******/ 		__webpack_require__.p = scriptUrl;
//     /******/ 	})();
//     /******/ 	
//     /************************************************************************/
//     /******/ 	
//     /******/ 	// startup
//     /******/ 	// Load entry module and return exports
//     /******/ 	// This entry module is referenced by other modules so it can't be inlined
//     /******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
//     /******/ 	
//     /******/ })()
//     ;
