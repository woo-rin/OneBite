/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  tag: 'admin';
  name: string;
  kickcount: number;
};
type Member = {
  tag: 'member';
  name: string;
  point: number;
};
type Guest = {
  tag: 'guest';
  name: string;
  visitCount: number;
};
type user = Admin | Member | Guest;

function login(user: user) {
  if (user.tag === 'admin') {
    console.log(`${user.name}님 현재까지 ${user.kickcount}명 강퇴했습니다`);
  } else if (user.tag === 'member') {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다`);
  }
}

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: 'loading';
};

type FailedTask = {
  state: 'failed';
  error: {
    message: string;
  };
};

type successTask = {
  state: 'success';
  response: {
    data: string;
  };
};
type AsyncTask = LoadingTask | FailedTask | successTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'loading': {
      console.log('로딩중');
      break;
    }
    case 'failed': {
      console.log(`에러발생: ${task.error.message}`);
      break;
    }
    case 'success': {
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}

const loading = {
  state: 'loading',
};
const failed = {
  state: 'failed',
  error: {
    message: '오류 발생원인 ~~~~~',
  },
};
const success = {
  state: 'success',
  response: {
    data: 'data는 ~~~~~',
  },
};
``;
