//-------------------------//google map//-------------------------//
function initMap() {

    const myLatLng = {
        lat: 40.798054, lng: -74.064936
    };

    const infoMarker = document.getElementById('infoMarker');

    const myStyle = [{
        featureType: "all",
        elementType: "all",
        stylers: [{
            saturation: -100
        }]
    }];

    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrey']
       }
    });

    const mapType = new google.maps.StyledMapType(myStyle, {
        name:"Greyscale"
    });

    map.mapTypes.set('tehgrey', mapType);
    map.setMapTypeId('tehgrey');

    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "A R K A N A",
        icon: "assets/img/svg/marker.svg"
    });

    infoMarker.onclick = function() {
        map.setCenter(myLatLng);
    };
}

//-------------------------//tabs (native js)//-------------------------//
function openList(e, listName) {

    let tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("trending__products-page");
    for (let cont = 0; cont < tabcontent.length; cont++) {
        tabcontent[cont].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabs__button");
    for (let tab = 0; tab < tablinks.length; tab++) {
        tablinks[tab].className = tablinks[tab].className.replace(" active", "");
    }

    document.getElementById(listName).style.display = "block";
    e.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//-------------------------//document ready functions//-------------------------//
$(document).ready(function () {

    //-------------------------//svg for IE//-------------------------//
    svg4everybody();
    
    //-------------------------//swiper//-------------------------//
    const mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-nx',
            prevEl: '.swiper-button-pr'
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    //-------------------------//basket sidebar//-------------------------//
    $('#basket-trigger').on('click', function (e) {
        e.preventDefault();

        sidebarAnimate(350);
        $('.dark-bg').fadeIn(500);

    });

    $('#basket-close').on('click', function (e) {
        e.preventDefault();

        sidebarAnimate(0);
        $('.dark-bg').fadeOut(500);

    });

    function sidebarAnimate(width, duration = 500) {
        const $basket = $('.basket');
        let flag = true;

        if(flag) {
            flag = false;

            $basket.animate({ width },
                duration, function () {
                flag = true;
            });
        }
    }

    //-------------------------//sidebar checkbox//-------------------------//
    $('.basket__products-close').on('click', function (e) {
        e.preventDefault();

        const $this = $(this),
              $item = $(".basket__products-item"),
              $curItem = $this.closest($item),
              duration = 1000;

        $curItem.slideUp(duration, function () {
            $curItem.remove();
        });

        if ($item.length < 2) {
            $('.basket__products-dummy').slideDown(500);
        }
    });

    //-------------------------//slideshow (native js)//-------------------------//
    document.getElementById("trends").addEventListener("click", function (e){

        const target = e.target;

        if (target.matches(".color")) {
            (e).preventDefault();

            const parent = target.closest(".products__item");
            const slides = parent.querySelectorAll(".products__img-slide");
            const colors = parent.getElementsByClassName("color");
            let slideIndex = target.dataset.slide;

            for (let sl = 0; sl < slides.length; sl++) {
                slides[sl].style.display = "none";
            }

            for (let col = 0; col < colors.length; col++) {
                colors[col].className = colors[col].className.replace(" active", "");
            }

            slides[slideIndex].style.display = "block";
            colors[slideIndex].className += " active";
        }
    });

});