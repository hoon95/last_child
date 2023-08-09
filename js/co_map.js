/* co_map */
let co_mapContainer = $('.co_map .map_area'),
    co_country = co_mapContainer.find('.main_map .country'),
    co_mapBtn = $('.co_map .map_btn'),
    co_cityBtn = co_mapContainer.find('>svg').not('.main_map').find('>g').not('.inner_map'),
    co_tabletBtnContainer = $('.tablet_btns'),
    co_tablet_btn = co_tabletBtnContainer.find('li');



$(window).resize(function(){
  let windowW = $(this).innerWidth();

  if(windowW > 768){
    // console.log('pc');
    co_country.click(function(){
      showCountry($(this));
    });
    co_mapBtn.click(function(){
      co_mapContainer.find('>svg').hide();
      $('.main_map').show();
    });
  } else{
    // console.log('tablet');
    co_tablet_btn.click(function(){
      showCountry($(this));
    });
    co_mapBtn.click(function(){
      // co_mapContainer.find('>svg').hide();
      co_tabletBtnContainer.addClass('active');
    });
    co_tabletBtnContainer.click(function(){
      co_tabletBtnContainer.removeClass('active');

    });

  }
});
$(window).trigger('resize');

function showCountry(target){
  co_mapContainer.find('>svg').hide();
  let countryName = target.attr('data-country');
  console.log(countryName);
  co_mapContainer.find(countryName).fadeIn();
}




/* co_map info_box */
$.getJSON('./data/country.json',initList);
let allData= [];
let countryfilter = [];
let cityfilter = [];
let co_infoBox = $('.co_map .info_box .container');

function initList(data){
  allData = data.country;
  // addCountry();
}


function addCountry(country, city){
  let listHTML = '';

  console.log(allData);
  countryfilter = allData.filter(it => it.countryName == country);
  console.log(countryfilter);
  cityfilter = countryfilter[0].city.filter(ct => ct.cityName == city);
  console.log(cityfilter);
  
  $.each(cityfilter[0].store, (i, item)=>{
    console.log(item)
    
    listHTML+=`
    <li class="info">
      <span>${item.type}</span>
      <h3 class="h3">${item.storeName}</h3>
      <p class="h4_2">${item.address}</p>
      <p>Tel : ${item.phone}</p>
    </li>
    `
    console.log(co_infoBox.find('ul'));
    co_infoBox.html(listHTML);

  });
}



co_cityBtn.click(function(){
  let countryName = $(this).parent('svg').attr('data-country');
  let cityName = $(this).attr('data-city'); 
  addCountry(countryName,cityName);

  $('.co_map .info_box').css({opacity:1});
  $('.co_map .info_box .inner_info').slideToggle();
});

$('.co_map .close_btn').click(function(){
  $('.co_map .info_box').css({opacity:0});
  $('.co_map .info_box .inner_info').slideToggle();
})

