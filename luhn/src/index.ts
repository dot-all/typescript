import * as readline from 'readline';


enum cardTypes {
    Visa = "VISA",
    MasterCard = "MASTERCARD",
    Unknown = "UNKNOWN CARD TYPE",
}

function getCardType(cardNumber: string): string {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?(?:[0-9]{3})?$/; // Visa: 13, 16, 19
    const masterCardRegex = /^(?:5[1-5][0-9]{14}|2(?:2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/; // MasterCard: 16

    if (visaRegex.test(cardNumber) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
        return cardTypes.Visa;
    } else if (masterCardRegex.test(cardNumber) && cardNumber.length === 16) {
        return cardTypes.MasterCard;
    } else {
        return cardTypes.Unknown;
    }
}

interface IsValidResult {
    isValid: boolean;
    cardType: string;
}

function isValidCardNumber(cardNumber: string): IsValidResult {
    // Remove all spaces from the string
    cardNumber = cardNumber.replace(/ /g,'');
  
    // Check that the string contains only digits
    if (!/^[0-9]*$/.test(cardNumber)) {
        return { isValid: false, cardType: cardTypes.Unknown };
    }

    const cardType = getCardType(cardNumber);

    if (cardType === cardTypes.Unknown) return { isValid: false, cardType: cardType }

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

    return { isValid:  (sum % 10) === 0, cardType: cardType };
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let continueApp = true;

    while (continueApp) {
        try {
            const cardNumber = await new Promise<string>(resolve => {
                rl.question('Enter a credit card number: ', answer => {
                    resolve(answer);
                });
            });

            const { isValid, cardType } = isValidCardNumber(cardNumber);
            console.log(isValid);
            console.log(cardType)
            // const cardType = getCardType(cardNumber);
            
            console.log(`The card number ${cardNumber} is ${isValid ? 'valid' : 'invalid'} (${cardType}).`);

            // Ask the user if they want to continue
            const response = await new Promise<string>(resolve => {
                rl.question('Would you like to try another card number? (yes/no): ', answer => {
                    resolve(answer.trim().toLowerCase());
                });
            });

            if (response !== 'yes') {
                continueApp = false;
            }
        } catch (error) {
            console.error('Error:', error);

            // Ask the user if they want to continue after an error
            const response = await new Promise<string>(resolve => {
                rl.question('Would you like to try another card number? (yes/no): ', answer => {
                    resolve(answer.trim().toLowerCase());
                });
            });

            if (response !== 'yes') {
                continueApp = false;
            }
        }
    }

    rl.close();
    console.log('Thanks for using the application.');
}

main();