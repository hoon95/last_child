/* CO_MAP SECTION2 */
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

    //나라이름을 클릭하면
    co_country.click(function(){
      //해당 나라의 지도 보이기
      showCountry($(this));
    });

    //링크를 클릭하면
    co_mapBtn.click(function(){
      //모든 지도를 숨기고
      co_mapContainer.find('>svg').hide();
      //세계지도 나타내기
      $('.main_map').show();
    });
  } else{
    // console.log('tablet');

    //태블릿 전용 탭 요소를 클릭하면
    co_tablet_btn.click(function(){
      //해당 지도 나타내기
      showCountry($(this));
    });

    //링크를 클릭하면
    co_mapBtn.click(function(){
      //태블릿 전용 탭이 나타남
      co_tabletBtnContainer.addClass('active');
    });
    //다른 부분을 클릭하면
    co_tabletBtnContainer.click(function(){
      //탭이 사라짐
      co_tabletBtnContainer.removeClass('active');
    });
  }
});
$(window).trigger('resize');


function showCountry(target){
  //모든 지도를 숨기고
  co_mapContainer.find('>svg').hide();
  //target의 data-country에 담겨있는 클래스를 가져와
  let countryName = target.attr('data-country');
  //해당하는 나라의 지도록 나타내기
  co_mapContainer.find(countryName).fadeIn();
}




/* co_map info_box */
$.getJSON('./data/country.json',initList);
let allData= [];
let countryfilter = [];
let cityfilter = [];
let co_infoBox = $('.co_map .info_box .container');


//json 데이터를 allData변수에 배열 형식으로 담기
function initList(data){
  allData = data.country;
}



function addCountry(country, city){
  let listHTML = '';

  //json데이터 중 나라이름과 일치하는 정보를 countryfilter변수에 배열형식으로 담기
  countryfilter = allData.filter(it => it.countryName == country);

  //countryfilter 중 도시이름과 일치하는 정보를 cityfilter변수에 배열형식으로 담기
  cityfilter = countryfilter[0].city.filter(ct => ct.cityName == city);

  //해당하는 도시 정보 중 store를
  $.each(cityfilter[0].store, (i, item)=>{
    //각각 listHTML에 추가하고
    listHTML+=`
    <li class="info">
      <span>${item.type}</span>
      <h3 class="h3">${item.storeName}</h3>
      <p class="h4_2">${item.address}</p>
      <p>Tel : ${item.phone}</p>
    </li>
    `
  });
  //한번에 html형식으로 밀어넣기
  co_infoBox.html(listHTML);
}


//도시를 클릭하면
co_cityBtn.click(function(){
  //클릭한 부모의 나라이름과
  let countryName = $(this).parent('svg').attr('data-country');
  //클릭한 도시이름을 받고
  let cityName = $(this).attr('data-city');
  //함수 addCountry에 넘겨 li태그 생성
  addCountry(countryName,cityName);

  //정보박스가 보이도록
  $('.co_map .info_box').css({opacity:1});
  $('.co_map .info_box .inner_info').slideToggle();
});

//정보박스의 닫기버튼을 클릭하면
$('.co_map .close_btn').click(function(){
  //정보박스가 사라지도록
  $('.co_map .info_box').css({opacity:0});
  $('.co_map .info_box .inner_info').slideToggle();
});

/* // CO_MAP SECTION2 */