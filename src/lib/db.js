import firebase from 'firebase'

const colName = 'users'

const db = () => firebase.firestore().collection(colName)

const add = (user) => {
  return db().add({
    email: user.email,
    nickName: user.nickName,
    name: user.name,
    birth: user.birth,
    phone: user.phone,
    address: user.address
  })
}

const err = (error) => {
  switch(error.code){
    case "auth/email-already-in-use":
      alert('이미 사용중인 이메일 입니다.')
      break
    case "auth/invalid-email":
      alert('유효하지 않은 메일입니다')
      break
    case "auth/operation-not-allowed":
      alert('이메일 가입이 중지되었습니다.')
      break
    case "auth/weak-password":
      alert("비밀번호를 6자리 이상 필요합니다")
      break
  }
}

export { add, err, }