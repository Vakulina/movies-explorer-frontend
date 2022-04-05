import './Promo.css';
import logo from '../../images/text__COLOR_landing-logo.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo_container'>
        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <img src={logo} alt="логотип лендинга" className="promo__logo" />
      </div>
    </section>
  );
}
