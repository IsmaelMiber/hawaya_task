const validData = {
  phoneNumber: '01151073476',
  countryCode: 'EG',
};
function verifyNumber({phoneNumber, countryCode}) {
  return new Promise((resolve, reject) => {
    if (
      phoneNumber == validData.phoneNumber &&
      countryCode == validData.countryCode
    ) {
      resolve('valid');
    } else {
      resolve('not_valid');
    }
  });
}

export default verifyNumber;
