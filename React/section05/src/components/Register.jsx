import { useState } from 'react';

const Register = () => {
  const [name, Setname] = useState('이름');
  const [birth, SetBirth] = useState('');
  const [country, SetCountry] = useState('');
  const [dio, SetBio] = useState('');
  const onChangeName = (e) => {
    Setname(e.taget.value);
  };
  const onChangeBirth = (e) => {
    SetBirth(e.taget.value);
  };
  const onChangeCounntry = (e) => {
    SetCountry(e.taget.value);
  };
  const onChangeBio = (e) => {
    SetBio(e.taget.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={'이름'} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCounntry}>
          <option>국가</option>
          <option value={'KR'}>한국</option>
          <option value={'US'}>미국</option>
          <option value={'UK'}>영국</option>
        </select>
      </div>
      <div>
        <textarea value={dio} onChange={SetBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
