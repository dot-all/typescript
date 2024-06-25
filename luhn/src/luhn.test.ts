import { CreditCardValidator } from './index'; // Ajusta la ruta según la ubicación de tu archivo

describe('CreditCardValidator', () => {
  describe('getCardType', () => {
    it('should return VISA for a valid Visa card number', () => {
      const cardNumber = '4111111111111111';
      const cardType = CreditCardValidator.getCardType(cardNumber);
      expect(cardType).toBe('VISA');
    });

    it('should return MASTERCARD for a valid MasterCard number', () => {
      const cardNumber = '5555555555554444';
      const cardType = CreditCardValidator.getCardType(cardNumber);
      expect(cardType).toBe('MASTERCARD');
    });

    it('should return UNKNOWN CARD TYPE for an invalid card number', () => {
      const cardNumber = '1234567890123456';
      const cardType = CreditCardValidator.getCardType(cardNumber);
      expect(cardType).toBe('UNKNOWN CARD TYPE');
    });
  });

  describe('isValidCardNumber', () => {
    it('should return valid and VISA for a valid Visa card number', () => {
      const cardNumber = '4111111111111111';
      const { isValid, cardType } = CreditCardValidator.isValidCardNumber(cardNumber);
      expect(isValid).toBe(true);
      expect(cardType).toBe('VISA');
    });

    it('should return valid and MASTERCARD for a valid MasterCard number', () => {
      const cardNumber = '5555555555554444';
      const { isValid, cardType } = CreditCardValidator.isValidCardNumber(cardNumber);
      expect(isValid).toBe(true);
      expect(cardType).toBe('MASTERCARD');
    });
  });
});
