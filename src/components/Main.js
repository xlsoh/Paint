import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <Link to='/paint' style={{ float: 'right' }}>
        그림그리기
      </Link>
      <div>홈</div>
      <Link to='/rooms'>내 그림판</Link>
      <a href='/paint'>
        {/* <img
          src='https://ifh.cc/g/7fYP9u.png'
          width='100px'
          height='100px'
          style={{ float: 'right' }}
        ></img> */}
      </a>
    </>
  );
}

export default Main;
