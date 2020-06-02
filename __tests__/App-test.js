import numVerify from 'numVerify';

it('phone number is valid', async () => {
  var valid = await numVerify({phoneNumber: '01151073476', countryCode: 'EG'});
  expect(valid).toBe('valid');
});

it('phone number is not valid', async () => {
  var valid = await numVerify({
    phoneNumber: '011510734761',
    countryCode: 'EG',
  });
  expect(valid).toBe('not_valid');
});
