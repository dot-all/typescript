import { CreditCardValidator } from './index'; // Ajusta la ruta según la ubicación de tu archivo

describe('CreditCardValidator', () => {
  describe('getCardType', () => {
    it('should return VISA for a valid Visa card number', () => {
      const cardNumber = '4111111111111111';
      const cardType = CreditCardValidator.getCardType(cardNumber);
      expect(cardType).toBe('VISA');
    });
  });

});
