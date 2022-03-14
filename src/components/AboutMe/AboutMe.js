import './AboutMe.css';
import foto from '../../images/foto.jpg';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__line'></div>
      <div className='about-me__two-columns'>
      <div className='about-me__profile'>
        <h3 className='about-me__name'>Виталий</h3>
        <p className='about-me__caption'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__paragraf'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <ul className='about-me__links-list'>
          <li className='about-me__link-item'>
            <a className='about-me__link' href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
          </li>
          <li className='about-me__link-item'>
            <a className='about-me__link' href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
      <img src={foto} alt="мое фото" className='about-me__foto'></img>
      </div>
      <Portfolio className='about-me__portfolio' />
    </section>
  )
}