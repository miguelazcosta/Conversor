const convertButton = document.getElementById('convert')
const convFrom = document.getElementById('pre-currency')
const convTo = document.getElementById('aft-currency')


function convertValues(){
    const convValue = document.getElementById('input').value
    const value1 = document.getElementById('pre-convertion')
    const value2 = document.getElementById('aft-convertion')

    if(convFrom.value == 'real'){
        let dollarTd = 0.19
        let euroTd = 0.17
        let libraTd = 0.14
        let bitcoinTd = 0.0000023

        if (convTo.value == 'dolar') {
            let converted = convValue * dollarTd
            value2.textContent = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(converted)
        }
        if (convTo.value == 'euro') {
            let converted = convValue * euroTd
            value2.textContent = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(converted)
        }
        if (convTo.value == 'libra') {
            let converted = convValue / libraTd
            value2.textContent = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(converted)
        }
        if (convTo.value == 'bitcoin') {
            let converted = convValue / bitcoinTd
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(converted)
        }
        if (convTo.value == 'real') {
            let converted = convValue
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(converted)
        }
        value1.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(convValue)
    }
    if(convFrom.value == 'dolar'){
        let real = 5.35
        let euroTd = 0.89
        let libraTd = 0.75
        let bitcoinTd = 0.000012

        if (convTo.value == 'real') {
            let converted = convValue * real
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(converted)
        }
        if (convTo.value == 'euro') {
            let converted = convValue * euroTd
            value2.textContent = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(converted)
        }
        if (convTo.value == 'libra') {
            let converted = convValue * libraTd
            value2.textContent = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(converted)
        }
        if (convTo.value == 'dolar') {
            let converted = convValue
            value2.textContent = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(converted)
        }
        if (convTo.value == 'bitcoin') {
            let converted = convValue * bitcoinTd
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(converted)
        }
        value1.textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(convValue)
    }
    if(convFrom.value == 'euro'){
        let real = 5.97
        let dolar = 1.12
        let libraTd = 0.84
        let bitcoinTd = 0.000014

        if (convTo.value == 'real') {
            let converted = convValue * real
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(converted)
        }
        if (convTo.value == 'dolar') {
            let converted = convValue * dolar
            value2.textContent = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(converted)
        }
        if (convTo.value == 'libra') {
            let converted = convValue * libraTd
            value2.textContent = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(converted)
        }
        if (convTo.value == 'euro') {
            let converted = convValue
            value2.textContent = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(converted)
        }
        if (convTo.value == 'bitcoin') {
            let converted = convValue * bitcoinTd
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(converted)
        }
        value1.textContent = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(convValue)
    }
    if(convFrom.value == 'libra'){
        let real = 7.15
        let dolar = 1.33
        let euro = 1.19
        let bitcoinTd = 0.000016

        if (convTo.value == 'real') {
            let converted = convValue * real
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(converted)
        }
        if (convTo.value == 'dolar') {
            let converted = convValue * dolar
            value2.textContent = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(converted)
        }
        if (convTo.value == 'euro') {
            let converted = convValue * euro
            value2.textContent = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(converted)
        }
        if (convTo.value == 'libra') {
            let converted = convValue
            value2.textContent = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(converted)
        }
        if (convTo.value == 'bitcoin') {
            let converted = convValue * bitcoinTd
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(converted)
        }
        value1.textContent = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(convValue)
    }
    if(convFrom.value == 'bitcoin'){
        let real = 435079
        let dolar = 81308
        let euro = 72899
        let libra = 61044

        if (convTo.value == 'real') {
            let converted = convValue * real
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(converted)
        }
        if (convTo.value == 'dolar') {
            let converted = convValue * dolar
            value2.textContent = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(converted)
        }
        if (convTo.value == 'euro') {
            let converted = convValue * euro
            value2.textContent = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(converted)
        }
        if (convTo.value == 'bitcoin') {
            let converted = convValue
            value2.textContent = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BTC',
                minimumFractionDigits: 8,
                maximumFractionDigits: 8
            }).format(converted)
        }
        if (convTo.value == 'libra') {
            let converted = convValue * libra
            value2.textContent = new Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: 'GBP'
            }).format(converted)
        }
        value1.textContent = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BTC'
        }).format(convValue)
        
    }
}


function changeCurrency1(){
    let currencyName = document.getElementById('currency-name1')
    let currencyImg = document.getElementById('currency-img1')

    if(convFrom.value == 'dolar'){
        currencyName.innerHTML = 'Dólar'
        currencyImg.setAttribute('src', './assets/dollar.png')
    }
    if(convFrom.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.setAttribute('src', './assets/euro.png')
    }
    if(convFrom.value == 'libra'){
        currencyName.innerHTML = 'Libras'
        currencyImg.setAttribute('src', './assets/libra.png')
    }
    if(convFrom.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.setAttribute('src', './assets/bitcoin.png')
    }
    if(convFrom.value == 'real'){
        currencyName.innerHTML = 'Real'
        currencyImg.setAttribute('src', './assets/real.png')
    }
}


function changeCurrency2() {
    let currencyName = document.getElementById('currency-name2')
    let currencyImg = document.getElementById('currency-img2')

    if(convTo.value == 'dolar'){
        currencyName.innerHTML = 'Dólar'
        currencyImg.setAttribute('src', './assets/dollar.png')
    }
    if(convTo.value == 'euro'){
        currencyName.innerHTML = 'Euro'
        currencyImg.setAttribute('src', './assets/euro.png')
    }
    if(convTo.value == 'libra'){
        currencyName.innerHTML = 'Libras'
        currencyImg.setAttribute('src', './assets/libra.png')
    }
    if(convTo.value == 'bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.setAttribute('src', './assets/bitcoin.png')
    }
    if(convTo.value == 'real'){
        currencyName.innerHTML = 'Real'
        currencyImg.setAttribute('src', './assets/real.png')
    }
}
convertButton.addEventListener('click', changeCurrency1)
convertButton.addEventListener('click', changeCurrency2)
convertButton.addEventListener('click', convertValues)
