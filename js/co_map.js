/* co_map */
let co_mapContainer = $('.co_map .map_area'),
    co_country = co_mapContainer.find('.main_map .country');


co_country.click(function(){
  co_mapContainer.find('.main_map > g').hide();
  let countryName = $(this).attr('data-country');
  console.log(countryName);
  co_mapContainer.find(countryName).css({
    opacity: 1,
    pointerEvents: 'all'
  });
});