function addCommas(number) {
    return new Intl.NumberFormat().format(number);
  }
  
  module.exports = addCommas;
  
  
