class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!------------------------------header-section--starting-------------------------------->
        <header>
        <!----------Want to visit us store------>
        <div class="want-to-visit postion-cnt">
          <a href="">Want to visit us in Store? Find Your nearest!</a>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <!------------logo-nav-bar------------->
        <div class="logo-nav-cnt">
          <div class="logo-nav-cnt2">
              <i class="fa-solid fa-magnifying-glass" style="color: #F06E91;"></i>
          </div>
          <div class="logo-nav-cnt2">
           <a href="/Home/Home.html"> 
           <img src="https://lazyjacks.co.uk/cdn/shop/files/easter.png?v=1709212972&width=375" alt="Logo" />
           </a>
          </div>
          <div class="logo-nav-cnt2" >
              <ul>
              <li class="nav-item dropdown" >
                  <a class="nav-link dropdown-toggle" style="color: #F06E91;" href="" role="button" data-toggle="dropdown" aria-expanded="false">
                      United Kingdom | GBP £
                  </a>
                  <div class="dropdown-menu" >
                    <a class="dropdown-item" href="#" > <form class="form-inline" style="overflow: scroll; height: 200px; width: auto;">
                      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="border: 2px solid  #F06E91;"></a>
                      <a class="dropdown-item" href="#">Australia</a>
                      <a class="dropdown-item" href="#">France</a>
                      <a class="dropdown-item" href="#">Germany</a>
                      <a class="dropdown-item" href="#">United Kingdom </a>
                      <a class="dropdown-item" href="#">Argentina</a>
                      <a class="dropdown-item" href="#">Australia</a>
                      <a class="dropdown-item" href="#">Brazil</a>
                      <a class="dropdown-item" href="#">Chile</a>
                      <a class="dropdown-item" href="#">Colombia</a>
                      <a class="dropdown-item" href="#">Croatia</a>
                      <a class="dropdown-item" href="#">France</a>
                      <a class="dropdown-item" href="#">Ireland</a>
                      <a class="dropdown-item" href="#">Isle of Man</a>
                  </div>
                </li>
                <li><i class="fa-regular fa-user" style="color: #F06E91;"></i></li>
                <li><i class="fa-solid fa-bag-shopping" style="color: #F06E91;"></i>
                </li>
              </ul>
          </div>
        </div>
        <!-------------nav bar-list------------>
         <div class="lazy-nav-list">
         <ul class="drop-list-row-cont">  
          <li class="list-item-dp"><a href="/Signat-swetshirt/signat.html">Signature SweatShirts</a></li>
  <!-----------First DropList--------------->
          <li class="nav-item dropdown list-item-dp"> 
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Ladies 
            </a>
            <ul class="dropdown-menu"> 
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Clothing
                </a>
                <ul class="dropdown-menu">
                 <li> <a class="dropdown-item" href="/L-Clothing/All-Ladies/all-ladies.html">All Ladies</a></li> 
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Tops/ladies-tops.html">Ladies Tops</a></li>
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Bottoms/laddies-bottoms.html">Ladies Bottoms</a></li>
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Dresses/ladies-dresses.html">Laddies Dresses</a></li>
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Sweetshirts/ladies-sweetshirts.html">Ladies SweatShirts</a></li>
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Coats/ladies-coats.html">Ladies Coats</a></li>
                  <li><a class="dropdown-item" href="/L-Clothing/Ladies-Accessories/ladies-accessories.html">Ladies Accessories</a></li>
                </ul>
              </li>
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Collections
                </a>
                <ul class="dropdown-menu">
                 <li> <a class="dropdown-item" href="/L_Collection/Beach-Assential/beach-assential.html">Beach Essential For All The Family</a></li>
                  <li><a class="dropdown-item" href="/L_Collection/Strite-Shop/strite-shop.html">The Scripe Shop</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-----------Second DropList--------------->
          <li class="nav-item dropdown list-item-dp"> 
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Mens
            </a>
            <ul class="dropdown-menu"> 
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Clothing
                </a>
                <ul class="dropdown-menu">
                 <li> <a class="dropdown-item" href="/M-Clothing/All-mens/all-mens.html">All Mens</a></li>
                  <li><a class="dropdown-item" href="/M-Clothing/Mens-Tops/mens-tops.html">Mens Tops</a></li>
                  <li><a class="dropdown-item" href="/M-Clothing/Mens-Bottoms/mens-bottoms.html">Mens Bottom</a></li>
                  <li><a class="dropdown-item" href="/M-Clothing/Mens-Sweatshirts/mens-sweatsirts.html">Mens SweatShirts</a></li>
                  <li><a class="dropdown-item" href="/M-Clothing/Mens-Coats/mens-coats.html">Mens Coats</a></li>
                  <li><a class="dropdown-item" href="/M-Clothing/Mens-Accessories/mens-accessories.html">Mens Accessories</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-----------Third DropList--------------->
          <li class="nav-item dropdown list-item-dp"> 
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Childrens
            </a>
            <ul class="dropdown-menu"> 
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Girls Clothing
                </a>
                <ul class="dropdown-menu">
  
                  <li> <a class="dropdown-item" href="/C-GirlsClothing/All-Girls/all-girls.html">All Girls</a></li>
                  <li><a class="dropdown-item" href="/C-GirlsClothing/Girls-Tops/girls-tops.html">Girls Tops</a></li>
                  <li><a class="dropdown-item" href="/C-GirlsClothing/Girls-Sweatshirts/girls-sweatshirts.html">Girls SweatShirts</a></li>
                  <li><a class="dropdown-item" href="/C-GirlsClothing/Girls-Bottoms/girls-bottoms.html">Girls Bottoms</a></li>
                  <li><a class="dropdown-item" href="/C-GirlsClothing/Girls-Dresses/girls-dresses.html">Girls Dresses</a></li>
                  <li><a class="dropdown-item" href="/C-GirlsClothing/Girls-Accessories/girls-accessories.html">Girls Accessories</a></li> 
                </ul>
              </li>
              <li class="nav-item dropend">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Boys Clothing 
                </a>
                <ul class="dropdown-menu">
                  <li> <a class="dropdown-item" href="/C-BoysClothing/All-Boys/all-boys.html">All Boys</a></li>
                  <li><a class="dropdown-item" href="/C-BoysClothing/Boys-Tops/boys-tops.html">Boys Tops</a></li>
                  <li><a class="dropdown-item" href="/C-BoysClothing/Boys-Sweatshirts/boys-sweatshirts.html">Boys SweatShirts</a></li>
                  <li><a class="dropdown-item" href="/C-BoysClothing/Boys-Bottoms/boys-bottoms.html">Boys Bottoms</a></li>
                  <li><a class="dropdown-item" href="/C-BoysClothing/Boys-Accessories/boys-accessories.html">Boys Accessories</a></li> 
                </ul>
              </li>
              
            </ul>
          </li>
  
          <!-----------Fourth DropList--------------->
  
          <li class="nav-item dropdown list-item-dp"> 
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Outlet
            </a>
            <ul class="dropdown-menu"> 
                 <li> <a class="dropdown-item" href="/Outlet/Ladies/ladies.html">Ladies</a></li>
                  <li><a class="dropdown-item" href="/Outlet/Mens/mens.html">Mens</a></li>
                  <li><a class="dropdown-item" href="/Outlet/Childrens/childrens.html">Childrens</a></li>
            </ul>
          </li>
  
          <!-----------Fiveth DropList--------------->
  
          <li class="nav-item dropdown list-item-dp"> 
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Give the gift of lazy jocks
            </a>
            <ul class="dropdown-menu"> 
                 <li> <a class="dropdown-item" href="/Give-the-Gift-Vocher/E-Gift-Vocher/e-gift-vocher.html">E_GiftVochers</a></li>   
            </ul>
          </li>
          <!-----------Sixth DropList--------------->
    <li class="list-item-dp"><a href="/Our-Journal/our-journal.html">Our Journal</a></li>
        </ul>
         </div>
        <!------------Shop Our-outlet-------------->
        <div class="want-to-visit free-uk-delivery">
          <a href="">FREE UK DELIVERY ON ORDERS OVER £70 </a>
        </div>
         <!-----------Free Uk Delivery------------->
        <div class="want-to-visit shop-our-outlet" style="background-color: #B3DDCA; border: none;">
          <a href="">Shop our Outlet For Style At A Steal </a>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </header>
      <!------------------------------header-section--ending-------------------------------->
  `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-------------footer-section--------------->
      <footer > 
      <div class="footer-cnt">
        <div class="footer-sub-cnt">
          <div class="footer-cnt1">
            <ul>
              <li> <a href="" style="font-weight: bold;"> About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href=""> Our Story</a></li>
              <li><a href=""> Our Journal</a></li>
              <li><a href=""> Visit Our Stores</a></li>
              <li><a href=""> Our Waterproof Coats</a></li>
            </ul>
          </div>
          <div class="footer-cnt1">
            <ul>
              <li> <a href=""style="font-weight: bold;">Customer Services</a></li>
              <li><a href="">My Account</a></li>
              <li><a href=""> FAQs</a></li>
              <li><a href=""> Delivery</a></li>
              <li><a href=""> Returns</a></li>
              <li><a href=""> Size Guide</a></li>
              <li><a href=""> Wholesale</a></li>

            </ul>
          </div>
          <div class="footer-cnt1">
            <ul>
              <li> <a href="" style="font-weight: bold;">Terms</a></li>
              <li><a href="">Terms & Condition</a></li>
              <li><a href=""> Privacy Policy</a></li>
              <li><a href=""> Cookie Policy</a></li>
              <li><a href=""> Promotions</a></li>
              <li><a href=""> Competitions</a></li>
              <li><a href=""> Gift Cards</a></li>

            </ul>
          </div>
        </div>
        <div class="foot-text-search-main  ">
          <div class="foot-text-search mb-5">
            <p>Subscribe to our emails for exclusive discounts and offers</p>
            <div class="input-foot-cnt ">
            <input type="text"  class="foot-drop" id="" placeholder="Email">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          </div>
          <div class="foot-text-search ">
            <i class="fa-brands fa-facebook ml-5 "></i>
            <i class="fa-brands fa-instagram ml-5 "></i>
          </div>
        </div>
        <div class="foot-text-search-main">
          <div class="foot-text-search">
            <p>Country/region</p>
            <!----------dropup----------->
            <div class="nav-item dropup mb-5" style="border: 1px solid white;">
              
                <a class="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-expanded="false">
                    United Kingdom | GBP £
                </a>
                <div class="dropdown-menu" style="background-color: #B3DDCA; overflow: scroll; height: 200px; width: auto;">
                  <a class="dropdown-item" href="#"> <form class="form-inline">
                    <input class="form-control foot-drop mr-sm-2"  type="search" placeholder="Search" aria-label="Search" style="background-color: #B3DDCA; border: 2px solid white;"></a>
                  <a class="dropdown-item" href="#">Australia</a>
                  <a class="dropdown-item" href="#">France</a>
                  <a class="dropdown-item" href="#">Germany</a>
                  <a class="dropdown-item" href="#">United Kingdom </a>
                  <a class="dropdown-item" href="#">Argentina</a>
                  <a class="dropdown-item" href="#">Australia</a>
                  <a class="dropdown-item" href="#">Brazil</a>
                  <a class="dropdown-item" href="#">Chile</a>
                  <a class="dropdown-item" href="#">Colombia</a>
                  <a class="dropdown-item" href="#">Croatia</a>
                  <a class="dropdown-item" href="#">France</a>
                  <a class="dropdown-item" href="#">Ireland</a>
                  <a class="dropdown-item" href="#">Isle of Man</a>

                </div>
            </div>
            <p>© 2024, <a href="">Lazy Jacks</a> <a href="">Powered by Shopify</a></p> 
                   </div>
          <div class="foot-text-search ">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4kkj_LY2vki9Pna3gK26uVgDdeUsxzmyRdwl_6OUQnpzYTkbM" alt="img" style="border: 1px solid black;">
            <img src="https://t3.gstatic.com/images?q=tbn:ANd9GcQof98akuRluAFvk0M2SbQmd7Oh_pVZh7SFZMN2TkN4P5k0Cqzp" alt="">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSzKgyqLD31r1EiEPH74Pz1gsCyZXGQjhP7z0RYXVmG286ZfoHh" alt="img">
            <img src="https://t3.gstatic.com/images?q=tbn:ANd9GcT_FgXIJoXprH9cGF-386C6c24Z3-4F3cklxwMhDcbT_C60MykL" alt="img">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTO4PKevH_QTaV2g61KLqdv2j7R_EdjopflraE5Gzk9rtCIPy_k" alt="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqHnrnc28Q2cnGt7XhUTJKp1DL0IJ5DTzRG79Dlbo4tMcKYja" alt="img">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTpydSJMf0huLQKLKizttVJ04tN639q16Qgs4iGWdSVHAOYYqpy" alt="img">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGVsCbfwQQ8QDcNo9hYeD7ufv51e1em3m5c_qE0XBkx36aeI-S" alt="img">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT" alt="img">
          </div>
        </div>

      </div>
    </footer>
      `;
  }
}
class SpecialBootstrapLinks extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
      integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
      crossorigin="anonymous"
    ></script>
    <link
      rel="icon"
      type="image/x-icon"
      href="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTLBtrpJvZkU155j-ufsHyuZl0mLn8xX09ftbbg3gECOhVV48jq"
    />
    <link rel="stylesheet" href="/Home/Home.css" />
    `;
  }
}
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
customElements.define("bootstrap-links", SpecialBootstrapLinks);
