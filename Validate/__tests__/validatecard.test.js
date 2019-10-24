describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    });

    it('Empty Card Number',() =>{
      const luhn_validate= require('../validatecard');
      expect(luhn_validate()).toBeFalsy();
    });

    it('InValid Card Number',() =>{
      const luhn_validate= require('../validatecard');
      
      expect(luhn_validate("543454545454535453")).toBeFalsy();
    });

  it('Valid Card Number',() =>{
    const luhn_validate= require('../validatecard');
    expect(luhn_validate("4545676789890002")).toBeTruthy();
  });
})

