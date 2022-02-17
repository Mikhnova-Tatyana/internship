function checkIsPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new Error('Invalid argument');
  }
  return /\+\d{1,2}\(\d{3}\)\d{3}(-\d{2}){2}/.test(phoneNumber)
}

checkIsPhoneNumber('+28(090)496-77-90')

function checkIsEmail(email) {
  if (typeof email !== 'string') {
    throw new Error('Invalid argument');
  }
  return 
}

checkIsEmail('kapitoshka@gmail.com')


function checkIsSite(site) {
  if (typeof site !== 'string') {
    throw new Error('Invalid argument');
  }
  return /^https?\:\/\/(\w+\.?)+$/.test(site)
}

checkIsSite('http://test.dev')


function checkIsValidPassword (password) {
  if (typeof password !== 'string') {
    throw new Error('Invalid argument');
  }
  return /^[a-zA-Z0-9_]{6,25}$/.test(password);
}

checkIsValidPassword('tyYB_6')

