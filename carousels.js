!function(){"use strict";$(document).ready(function(){$("div[class^='js-landing-hero-slider']").each(function(index){var number=$(this).attr("class").split(/\s+/)[0].substring("js-landing-hero-slider".length);if(1==$(this).find(".swiper-slide").length)var loopTrueFalse=!1;else var loopTrueFalse=!0;new Swiper(".js-landing-hero-slider"+number,{pagination:".js-hero-pagination"+number,paginationClickable:!0,autoplay:5e3,autoplayDisableOnInteraction:!1,speed:3e3,spaceBetween:0,keyboardControl:!0,loop:loopTrueFalse,breakpoints:{992:{autoplay:3e3,autoplayDisableOnInteraction:!0}},effect:$(".js-landing-hero-slider"+number).data("effect")||"slide"})});new Swiper(".js-sku-carousel__slider",{prevButton:".js-sku-carousel__angle-prev",nextButton:".js-sku-carousel__angle-next",slidesPerView:3,slidesPerGroup:1,spaceBetween:39,loop:!0,breakpoints:{992:{slidesPerView:2.2,slidesPerGroup:1,spaceBetween:11}}}),new Swiper(".js-instagram__slider",{prevButton:".js-instagram__angle-prev",nextButton:".js-instagram__angle-next",slidesPerView:4,slidesPerGroup:1,spaceBetween:20,loop:!0,breakpoints:{992:{slidesPerView:1.5,slidesPerGroup:1,spaceBetween:10}}});$(".accordion-promotions__button").click(function(){$(".backdrop-promotions").toggleClass("active")}),$(window).width()>991&&$(".module-container").each(function(){$(this).children().hasClass("button-banner flex-width-50p")&&$(this).css("padding","0px 20px")})})}();