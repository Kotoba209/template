export function isPhoneNumber(value) {
  return /^1[0-9]{10}$/.test(value) || /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value);
}

export function isEmail(value) {
  // eslint-disable-next-line no-useless-escape
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value);
}
