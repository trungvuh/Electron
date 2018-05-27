function httpGet(theUrl){
    var xmlHttp = null
    xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", theUrl, false)
    xmlHttp.send(null)
    return xmlHttp.responseText
}

function currencyConverter(currency_from, currency_to){
    var yql_base_url = "https://query.yahooapis.com/v1/public/yql"
    var yql_query = 'select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("' + currency_from+currency_to+'")'
    var yql_query_url = yql_base_url + "?q=" + yql_query + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    var http_response = httpGet(yql_query_url)
    var http_response_json = JSON.parse(http_response)
    return http_response_json.query.results.rate.Rate
}

function usdfunc(){
    //alert('usd funct')
    var currency_from = "USD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("USD").value

    var rate = currencyConverter(currency_from, "GBP")
    gbValue = rate * baseValue
    document.getElementById("GBP").value = gbValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function gbpfunc(){
    //alert('gbp funct')
    var currency_from = "GBP" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("GBP").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function audfunc(){
    //alert('aud funct')
    var currency_from = "AUD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("AUD").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function cadfunc(){
    //alert('cad funct')
    var currency_from = "CAD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("CAD").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function eurfunc(){
    //alert('eur funct')
    var currency_from = "EUR" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("EUR").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function jpyfunc(){
    //alert('jpy funct')
    var currency_from = "JPY" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("JPY").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue
}