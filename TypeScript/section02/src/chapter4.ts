//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: 'woo',
  nickname: 'dlqk',
  birth: '2009-10-28',
  bio: 'hello',
  location: 'busan',
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitrdState: 'us',
  UnitedKingdom: 'uk',
};

type countryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UNitedKingdom: 826,
};
