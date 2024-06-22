
const rates = {
    usd: { usd: 1, gbp: 2.03032, cad: 1.01941, eur: 1.41544, aud: 0.88297 },
    gbp: { usd: 0.49246, gbp: 1, cad: 0.50221, eur: 0.69714, aud: 0.43497 },
    cad: { usd: 0.98054, gbp: 1.99169, cad: 1, eur: 1.38814, aud: 0.86613 },
    eur: { usd: 0.70641, gbp: 1.43448, cad: 0.72037, eur: 1, aud: 0.62382 },
    aud: { usd: 1.13262, gbp: 2.29964, cad: 1.15498, eur: 1.60329, aud: 1 }
};

function convertCurrency(fromCurrency) {

    const value = parseFloat(document.getElementById(fromCurrency).value);
    if (isNaN(value)) return;

    for (const currency in rates[fromCurrency]) {
        if (currency !== fromCurrency) {
            document.getElementById(currency).value = (value * rates[fromCurrency][currency]);
        }
    }
}

