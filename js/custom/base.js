
// $("#header").load("base.html"); 
$("#header" ).append( `
<div class="main-header-area" id="stickyHeader" style="height: 60px;">
<div class="classy-nav-container breakpoint-off">
    <!-- Classy Menu -->
    <nav class="classy-navbar justify-content-between" id="southNav">

        <!-- Logo -->
        <a class="nav-brand logo" href="index.html"><img src="img/logo/logo.png" alt=""></a>

        <!-- Navbar Toggler -->
        <div class="classy-navbar-toggler">
            <span class="navbarToggler"><span></span><span></span><span></span></span>
        </div>

        <!-- Menu -->
        <div class="classy-menu">

            <!-- close btn -->
            <div class="classycloseIcon">
                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
            </div>

            <!-- Nav Start -->
            <div class="classynav">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="#">Dự án</a>
                        <ul class="dropdown">
                            <li><a href="the-grand-villas.html">The Grand Villas</a></li>
                            <li><a href="the-grand-villas.html">The Suite</a></li>
                            <li><a href="the-grand-villas.html">The Valencia</a></li>
                            <li><a href="the-grand-villas.html">River Park 1</a></li>
                            <li><a href="the-grand-villas.html">The Elite</a></li>
                            <li><a href="the-stella.html">The Stella</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Thư viện</a></li>
                    <li><a href="#">Phân khu</a>
                        <div class="megamenu">
                            <ul class="dropdown">
                                <li class="title">Headline 1</li>
                                <li><a href="#">Mega Menu Item 1</a></li>
                                <li><a href="#">Mega Menu Item 2</a></li>
                                <li><a href="#">Mega Menu Item 3</a></li>
                                <li><a href="#">Mega Menu Item 4</a></li>
                                <li><a href="#">Mega Menu Item 5</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="./templates/lienhe.html">Liên hệ</a></li>
                </ul>
            </div>
            <!-- Nav End -->
        </div>
    </nav>
</div>
</div>
` );
$( document ).ready(function() {
    // window.scrollTo(0, 10000);
   
      $("#btnClick").on("click",()=>{
        var element = document.getElementById('abc123');
        const offset = 45;
const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = element.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

window.scrollTo({
  top: offsetPosition,
  behavior: 'smooth'
});
        // document.getElementById('abc123').scrollIntoView();
      })
});
