


$(function () {
    $('#currencySelector').change(function () {
        localStorage.setItem('todoData', this.value);
    });
    if (localStorage.getItem('todoData')) {

        $('#currencySelector').val(localStorage.getItem('todoData')).trigger('change');
    }
});




 function updateSymbol(e){
        var selected = $(".currency-selector option:selected");
        $(".currency-symbol").text(selected.data("symbol"))
        $(".currency-amount").prop("placeholder", selected.data("placeholder"))
        $('.currency-addon-fixed').text(selected.text())
        }
        $(".currency-selector").on("change", updateSymbol)
        updateSymbol()



 function changeCurrency()
{
    $.getJSON("https://openexchangerates.org/api/latest.json?app_id=2339143d97cf4826a4e3fa0d38d291de",
    function(data){
  
  var currency = $('.currency-selector').val();
  var useramount =150;
  var useramount2 =100;
  var useramount3 =200;
    if (currency == "USD") {
        $('#inlineFormInputGroup').val(data.rates.USD * useramount);
        $('#inlineFormInputGroup2').val(data.rates.USD * useramount2);
        $('#inlineFormInputGroup3').val(data.rates.USD * useramount3);
        }
        else if (currency=="AUD") {
        $('#inlineFormInputGroup').val(data.rates.AUD * useramount);
        $('#inlineFormInputGroup2').val(data.rates.AUD * useramount2);
        $('#inlineFormInputGroup3').val(data.rates.AUD * useramount3);
        }
        else if (currency=="GBP") {
        $('#inlineFormInputGroup').val(data.rates.GBP * useramount);
        $('#inlineFormInputGroup2').val(data.rates.GBP * useramount2);
        $('#inlineFormInputGroup3').val(data.rates.GBP * useramount3);

        }
        else if (currency="EUR") {
        $('#inlineFormInputGroup').val(data.rates.EUR * useramount);
        $('#inlineFormInputGroup2').val(data.rates.EUR * useramount2);
        $('#inlineFormInputGroup3').val(data.rates.EUR * useramount3);
        }
   });
}