function checkIsPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new Error('Invalid argument');
  }
  return /\+\d{2}\(\d{3}\)\d{3}(-\d{2}){2}/.test(phoneNumber)
}

checkIsPhoneNumber('+28(090)496-77-90')

function checkIsEmail(email) {
  if (typeof email !== 'string') {
    throw new Error('Invalid argument');
  }
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)
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

function checkIpv4IsValid(ipv4String) {
  if (typeof ipv4String !== 'string') {
    throw new Error('Invalid argument');
  }
  let pattern = /^(([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}([01]?\d\d?|2[0-4]\d|25[0-5])$/;
  return pattern.test(ipv4String);
}

checkIpv4IsValid('127.255.255.255')
checkIpv4IsValid('0.0.0.0')