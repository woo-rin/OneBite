import emontion1 from './../assets/emotion1.png';
import emontion2 from './../assets/emotion2.png';
import emontion3 from './../assets/emotion3.png';
import emontion4 from './../assets/emotion4.png';
import emontion5 from './../assets/emotion5.png';

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emontion1;
    case 2:
      return emontion2;
    case 3:
      return emontion3;
    case 4:
      return emontion4;
    case 5:
      return emontion5;
    default:
  }
}
