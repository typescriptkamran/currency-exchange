# Pak Exchange CLI

Pak Exchange CLI is a simple currency exchange tool that allows you to convert between different currencies using the latest exchange rates, all from the command line.

## Installation

You don't need to install Pak Exchange CLI separately; you can use it directly with npx:

```
npx pak-exchange
```

## Usage

When you run the `npx pak-exchange` command, the tool will guide you through the currency conversion process using a series of prompts. Here's how to use it:

1. Run the command:

```
npx pak-exchange
```

2. Follow the on-screen prompts to perform the currency conversion:
   - Choose the source currency (the currency you want to convert from).
   - Choose the destination currency (the currency you want to convert to).
   - Enter the amount you want to convert.

3. Pak Exchange CLI will calculate and display the converted amount.

## Updating Exchange Rates

You can update exchange rates by modifying the `index.ts` file in the Pak Exchange CLI source code and adjusting the exchange rate values in the `CurrencyExchange` class.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Author

Muhammad Kamran

- GitHub: [GitHub Profile](https://github.com/typescriptkamran)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/typescript-kamran/)

## Repository

Find the source code for Pak Exchange CLI on GitHub: [Pak Exchange GitHub Repository](https://github.com/typescriptkamran/currency-exchange)

## Dependencies

- [axios](https://www.npmjs.com/package/axios) - Promise-based HTTP client for making requests.
- [chalk](https://www.npmjs.com/package/chalk) - Terminal string styling.
- [inquirer](https://www.npmjs.com/package/inquirer) - Interactive command-line prompts.
- [typescript](https://www.npmjs.com/package/typescript) - JavaScript superset for static typing.

## Development Dependencies

- [@types/inquirer](https://www.npmjs.com/package/@types/inquirer) - TypeScript type definitions for Inquirer.js.
- [@types/node](https://www.npmjs.com/package/@types/node) - TypeScript type definitions for Node.js.

Thank you for using Pak Exchange CLI! If you have any questions or encounter issues, please feel free to reach out.
```

This README.md file is specifically tailored for users who want to use your `npx pak-exchange` command-line tool. It provides instructions on how to use the tool, how to update exchange rates, and where to find more information about the project.