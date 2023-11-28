export const emailValidator=(email)=> {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email can't be empty."
  if (!re.test(email)) return 'Ooops! We need a valid email address.'
  return ''
}
export const nameValidator=(name)=> {
  if (!name) return "Name can't be empty."
  return ''
}

export const passwordValidator=(password)=>{
  if (!password) return "Password can't be empty."
  if (password.length < 6) return 'Password must be at least 6 characters long.'
  return ''
}