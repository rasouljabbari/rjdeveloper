const lang = document.querySelector('html').getAttribute('lang')

export const emptyErrorHandling = (e) => {
  let value = e.target.value
  let required = e.target.getAttribute('data-required')
  if (required === 'true') {
    if (!value) {
      if (lang === 'fa') {
        return 'این فیلد نمیتواند خالی باشد'
      } else {
        return 'This field cannot be empty'
      }
    }
  }
}

// used when form submitted
export const emptySubmitErrorHandling = (e) => {
  let value = e.value
  let required = e.getAttribute('data-required')
  if (required === 'true') {
    if (!value) {
      if (lang === 'fa') {
        return 'این فیلد نمیتواند خالی باشد'
      } else {
        return 'This field cannot be empty'
      }
    }
  }
}

// ✅ check if errors object keys is empty return false else return true
export const isEmptyErrorObject = (obj) => {
  for (var key in obj) {
    if (obj[key] !== null && obj[key] != '') return true
  }
  return false
}

export const justNumber = (number) => {
  let numRegex = /^[0-9]+$/g
  if (!numRegex.test(number)) {
    if (lang === 'fa') {
      return 'لطفا فقط عدد وارد کنید'
    } else {
      return 'Please just enter a number'
    }
  }
  return false
}

export const maxLengthHandler = (e) => {
  let value = e.target.value
  let name = e.target.name
  let maxLength = e.target.getAttribute('data-maxlength')
  if (parseInt(maxLength) > 0) {
    if (parseInt(value.length) > parseInt(maxLength)) {
      if (lang === 'fa') {
        return ` نمیتواند بیشتر از ${maxLength} باشد `
      } else {
        return ` The ${name} field could not be more than ${maxLength} `
      }
    }
  }
  return false
}

export const dataRegex = (e) => {
  let value = e.target.value
  let data_regex = e.target.getAttribute('data-regex')
  let maxLength = e.target.getAttribute('data-maxlength')
  let required = e.target.getAttribute('data-required')

  if (data_regex === 'mobile') {
    return mobileRegex(value, maxLength, required)
  }
  if (data_regex === 'email') {
    return emailRegex(value, required)
  }
}

export const dataSubmitRegex = (e) => {
  let value = e?.value
  let name = e?.name
  let maxLength = e?.getAttribute('data-maxlength')
  let required = e?.getAttribute('data-required')
  if (name === 'mobile') {
    return mobileRegex(value, maxLength, required)
  }
  if (name === 'email') {
    return emailRegex(value, required)
  }
  if (name === 'individual_identification_code') {
    return identificationRegex(value, required)
  }
}

function mobileRegex(value, maxLength, required) {
  let numRegex = /^(\+98|0)9\d{9}$/
  if (required === 'true' && parseInt(value.length) === 0) {
    if (lang === 'fa') {
      return 'شماره موبایل نمی تواند خالی باشد'
    } else {
      return 'Mobile number can not be empty'
    }
  } else if (parseInt(value.length) > 0) {
    if (!numRegex.test(value)) {
      if (lang === 'fa') {
        return 'شماره موبایل وارد شده معتبر نمی باشد'
      } else {
        return 'The entered mobile number is not valid'
      }
    }
  }
}

function emailRegex(value, required) {
  let emailRgx =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/

  if (required === 'true' && parseInt(value.length) === 0) {
    if (lang === 'fa') {
      return 'ایمیل نمی تواند خالی باشد'
    } else {
      return 'Email field can not be empty'
    }
  } else if (parseInt(value.length) > 0 && emailRgx.test(value) === false) {
    if (lang === 'fa') {
      return 'ایمیل وارد شده معتبر نمی باشد'
    } else {
      return 'The entered email is not valid'
    }
  } else {
    return false
  }
}

function identificationRegex(value, required) {
  if (required === 'true' && parseInt(value.length) === 0) {
    if (lang === 'fa') {
      return 'فیلد کد ملی نمی تواند خالی باشد'
    } else {
      return 'Identification code can not be empty'
    }
  } else {
    if (value.length < 8 || parseInt(value, 10) === 0) {
      if (lang === 'fa') {
        return 'کد ملی نامعتبر می باشد'
      } else {
        return 'Invalid national code'
      }
    }
    value = ('0000' + value).substr(value.length + 4 - 10)
    if (parseInt(value.substr(3, 6), 10) === 0) {
      if (lang === 'fa') {
        return 'کد ملی نامعتبر می باشد'
      } else {
        return 'Invalid national code'
      }
    }
    let c = parseInt(value.substr(9, 1), 10)
    let s = 0
    for (let i = 0; i < 9; i++) s += parseInt(value.substr(i, 1), 10) * (10 - i)
    s = s % 11
    if ((s < 2 && c === s) || (s >= 2 && c === 11 - s) === false) {
      if (lang === 'fa') {
        return 'کد ملی نامعتبر می باشد'
      } else {
        return 'Invalid national code'
      }
    }
  }
}
