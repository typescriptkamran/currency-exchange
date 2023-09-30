import inquirer from "inquirer";
import chalk from "chalk";
class CurrencyExchange {
    rates = {
        USD: 1,
        PKR: 289.37,
        GBP: 0.82,
        EUR: 0.94,
        INR: 82.18,
    };
    constructor() { }
    setExchangeRate(currency, rate) {
        if (currency === "USD") {
            throw new Error(`Cannot update the exchange rate for USD.`);
        }
        if (currency in this.rates) {
            this.rates.USD = rate;
        }
        else {
            throw new Error(`Currency ${currency} is not supported.`);
        }
    }
    updateExchangeRates(newRates) {
        // Ensure the USD rate remains fixed
        newRates.USD = 1;
        this.rates = { ...this.rates, ...newRates };
    }
    convert(fromCurrency, toCurrency, amount) {
        if (!(fromCurrency in this.rates) || !(toCurrency in this.rates)) {
            throw new Error("Invalid currencies.");
        }
        const fromRate = this.rates[fromCurrency];
        const toRate = this.rates[toCurrency];
        if (fromRate === 0 || toRate === 0) {
            throw new Error(`Exchange rate not set for ${fromCurrency} or ${toCurrency}.`);
        }
        return (amount / fromRate) * toRate;
    }
}
console.log(`************************Currency exchange************************`);
async function main() {
    const currencyExchange = new CurrencyExchange();
    const currencies = Object.keys(currencyExchange["rates"]);
    const fromCurrencyAnswer = await inquirer.prompt({
        type: "list",
        name: "fromCurrency",
        message: "Choose the source currency:",
        choices: currencies,
    });
    const { fromCurrency } = fromCurrencyAnswer;
    // Remove the chosen source currency from the list of destination currencies
    const toCurrencyChoices = currencies.filter((currency) => currency !== fromCurrency);
    const toCurrencyAnswer = await inquirer.prompt({
        type: "list",
        name: "toCurrency",
        message: "Choose the destination currency:",
        choices: toCurrencyChoices,
    });
    const { toCurrency } = toCurrencyAnswer;
    const amountAnswer = await inquirer.prompt({
        type: "input",
        name: "amount",
        message: "Enter the amount to convert:",
        validate: (input) => {
            const amount = parseFloat(input);
            return !isNaN(amount) || "Please enter a valid number.";
        },
    });
    const { amount } = amountAnswer;
    try {
        const convertedAmount = currencyExchange.convert(fromCurrency, toCurrency, parseFloat(amount));
        console.log(chalk.green(`Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`));
    }
    catch (error) {
        console.error(chalk.red(`Error: ${error.message}`));
    }
}
main();
