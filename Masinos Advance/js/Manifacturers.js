function getCountry(brand) {

  var countries = {
	  'germany': 'Europe',
	  'france': 'Europe',
	  'italy':'Europe',
	  'ussr':'USSR',
	  'czech':'Europe',
	  'japan': 'Asia'	  
  }

  if(brand == "audi" || brand == 'bmw' || brand == 'vw') {
    return countries.germany;
  } else if (brand == 'citroen') {
    return countries.france;
  } else if(brand == 'fiat') {
    return countries.italy;
  } else if(brand == 'lada') {
    return countries.ussr;
  } else if(brand == 'mazda') {
    return countries.japan;
  } else if(brand == 'skoda') {
    return countries.czech;
  }
}