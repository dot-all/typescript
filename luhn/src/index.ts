import * as readline from 'readline';

enum CardTypes {
    Visa = "VISA",
    MasterCard = "MASTERCARD",
    Unknown = "UNKNOWN CARD TYPE",
}

interface IsValidResult {
    isValid: boolean;
    cardType: string;
}

export class CreditCardValidator {
    private static visaRegex = /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/; // Visa: 13, 16, 19
    private static masterCardRegex = /^(?:5[1-5][0-9]{14}|2(?:2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/; // MasterCard: 16

    public static getCardType(cardNumber: string): string {
        if (this.visaRegex.test(cardNumber) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
            return CardTypes.Visa;
        } else if (this.masterCardRegex.test(cardNumber) && cardNumber.length === 16) {
            return CardTypes.MasterCard;
        } else {
            return CardTypes.Unknown;
        }
    }

    public static isValidCardNumber(cardNumber: string): IsValidResult {
        // Remove all spaces from the string
        cardNumber = cardNumber.replace(/ /g, '');

        // Check that the string contains only digits
        if (!/^[0-9]*$/.test(cardNumber)) {
            return { isValid: false, cardType: CardTypes.Unknown };
        }

        const cardType = this.getCardType(cardNumber);

        if (cardType === CardTypes.Unknown) return { isValid: false, cardType: cardType }

        let sum = 0;
        let shouldDouble = false;

        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(cardNumber.charAt(i), 10);
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return { isValid: (sum % 10) === 0, cardType: cardType };
    }
}

class CreditCardApp {
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    private async askQuestion(question: string): Promise<string> {
        return new Promise<string>(resolve => {
            this.rl.question(question, answer => {
                resolve(answer.trim());
            });
        });
    }

    public async run() {
        let continueApp = true;

        while (continueApp) {
            try {
                const cardNumber = await this.askQuestion('Enter a credit card number: ');

                const { isValid, cardType } = CreditCardValidator.isValidCardNumber(cardNumber);
                console.log(`The card number ${cardNumber} is ${isValid ? 'valid' : 'invalid'} (${cardType}).`);

                const response = await this.askQuestion('Would you like to try another card number? (yes/no): ');

                if (response.toLowerCase() !== 'yes') {
                    continueApp = false;
                }
            } catch (error) {
                console.error('Error:', error);

                const response = await this.askQuestion('Would you like to try another card number? (yes/no): ');

                if (response.toLowerCase() !== 'yes') {
                    continueApp = false;
                }
            }
        }

        this.rl.close();
        console.log('Thanks for using the application.');
    }
}

const app = new CreditCardApp();
app.run();
