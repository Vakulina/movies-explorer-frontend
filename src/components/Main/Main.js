import './Main.css';
import Promo from '../Promo/Promo'
import Header from '../Header/Header';

export default function Main() {
  return (
<>
<Header isLogin={false}/>
<Promo/>
</>
  );
}
