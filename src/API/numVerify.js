import axios from "axios";

const API_URL = "http://apilayer.net/api/validate";
const API_KEY = "4c59bb2db2d55a6dcbe329afbb690520";

async function verifyNumber({ phoneNumber, countryCode, format = 1 }) {
  try {
    var response = await axios.get(API_URL, {
      params: {
        access_key: API_KEY,
        number: phoneNumber,
        country_code: countryCode,
        format,
      },
    });
    var { status, data } = response;
    var { valid } = data;
    if (valid) {
      return "valid";
    } else {
      return "not_valid";
    }
  } catch (err) {
    if(err == "Error: Network Error") {
      return "network_error";
    } else {
      return "not_valid";
    }
  }
}

export default verifyNumber;
