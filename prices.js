/*price*/
/*
$(function() {
  $("#curr").on("change",function() {
    var curr   = this.value;
    var prefix = curr=="usd"; // or ["usd","yen",...].indexOf(curr); for more
    var sign   = curr=="usd"?"$":"€";
    $(".price").each(function(){
      $(this).text(
        (prefix?sign:"")   +
        $(this).data(curr) +
        (prefix?"":sign)
      );  
    })
  }).change();
});*/

var 
    selector = document.getElementById("currencySelector");
var
    currencyElements = document.getElementsByClassName("currencyss");
var 
    usdChangeRate = {
      AUD: 0.76, // 1AUD = 0.76 USD
      EUR: 1.17, // 1EUR = 1.17 USD
      GBP: 1.38,
      USD: 1
    };

selector.onchange = function () {
    var 
        toCurrency = selector.value.toUpperCase();
  
    for (var i=0,l=currencyElements.length; i<l; ++i) {
        var 
            el = currencyElements[i];
        var 
            fromCurrency = el.getAttribute("data-currencyName").toUpperCase();
      
      if (fromCurrency in usdChangeRate) {
          var 
              // currency change to usd
              fromCurrencyToUsdAmount = parseFloat(el.innerHTML) * usdChangeRate[fromCurrency];
              console.log(parseInt(el.innerHTML,10) + fromCurrency + "=" + fromCurrencyToUsdAmount + "USD");
          var 
              // change to currency unit selected
              toCurrenyAmount = fromCurrencyToUsdAmount / usdChangeRate[toCurrency];
        
          el.innerHTML = toCurrenyAmount.toFixed(1).toLocaleString().replace(/(\d)(?=(\d{4})+(?:\.\d+)?$)/g, "$1,") + "<span>" + toCurrency.toUpperCase() + "</span>";
          el.setAttribute("data-currencyName",toCurrency);
      }
    }
};




$(function () {
    $('#currencySelector').change(function () {
        localStorage.setItem('todoData', this.value);
    });
    if (localStorage.getItem('todoData')) {

        $('#currencySelector').val(localStorage.getItem('todoData')).trigger('change');
    }
});




