// enum 타입
// 여러가지 깂들에 각각 이름을 부여해 열서해두고 사용하는 타입 ts only

enum Role {
  ADIMN = 11, // 숫자형 인웜
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'woo',
  role: Role.ADIMN, // 0 <-admin
  Language: Language.korean,
};
const user2 = {
  name: 'rin',
  role: Role.USER, // 1<- romal
};
const user3 = {
  name: 'lee',
  role: Role.GUEST, // <- guest
};
console.log(user1, user2, user3);
