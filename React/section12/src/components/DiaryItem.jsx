import { getEmotionImage } from '../util/get-emtion-image';
import './DiaryItem.css';
import Button from './Button';

const DiaryItem = () => {
  const emotionId = 4;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 컨텥츠</div>
      </div>
      <div className="button_section">
        <Button text={'수정하기'} />
      </div>
    </div>
  );
};

export default DiaryItem;
