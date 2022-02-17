function checkIsPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new Error('Invalid argument');
  }
  return /\+\d{1,2}\(\d{3}\)\d{3}(-\d{2}){2}/.test(phoneNumber)
}

checkIsPhoneNumber('+28(090)496-77-90')

// function checkIsSite(site) {
//   if (typeof site !== 'string') {
//     throw new Error('Invalid argument');
//   }
//   return /^https?\:/\/(\w+\.?)+$/igm/.test(site)
// }

checkIsSite('http://test.dev')

// /^https?\:(\w+\.?)+$/igm.test('http://test.dev')

function checkIsValidPassword (string) {
  let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/;
  return passwordPattern.test(string);
}

// function addThousandsSeparators(value) {
//   if (typeof value === 'string') {
//       return value.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
//   } else {
//       return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
//   }
// }

// function getAllUrlsFromText(text) {
//   try {
//       let res = text
//           .match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
//       return res || []
//   } catch(error) {
//       return error
//   }
// }