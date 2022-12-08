import img404 from '../../assets/icon-404.png';
import { PageWarpper, NotFoundImg, NotFoundTxt } from './NotFoundStyle';
import MButton from '../../components/button/MButton';
import MWhiteButton from '../../components/button/MWhiteButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <PageWarpper>
      <NotFoundImg src={img404} />
      <NotFoundTxt>페이지를 찾을 수 없습니다.</NotFoundTxt>
      <NotFoundTxt>
        페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
        <br /> 웹 주소가 올바른지 확인해 주세요.
      </NotFoundTxt>
      <MButton
        wd="47%"
        maxWd="200px"
        value="메인으로"
        marginR="6%"
        onClick={() => navigate('/')}
      />
      <MWhiteButton
        wd="47%"
        maxWd="200px"
        value="이전 페이지"
        onClick={() => navigate(-1)}
      />
    </PageWarpper>
  );
}
