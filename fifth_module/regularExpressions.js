function checkIsPhoneNumber(phoneNumber) {
  if (typeof phoneNumber !== 'string') {
    throw new Error('Invalid argument');
  }
  return /\+\d{2}\(\d{3}\)\d{3}(-\d{2}){2}/.test(phoneNumber)
}

checkIsPhoneNumber('+28(090)496-77-90')

function checkIsSite(site) {
  if (typeof site !== 'string') {
    throw new Error('Invalid argument');
  }
  return /^https/.test(site)
}

checkIsPhoneNumber('+28(090)496-77-90')

