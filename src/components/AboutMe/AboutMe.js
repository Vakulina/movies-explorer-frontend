import './AboutMe.css';
import foto from '../../images/photo_2022-01-28_01-17-08.jpg';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__line'></div>
      <div className='about-me__two-columns'>
        <div className='about-me__profile'>
          <h3 className='about-me__name'>Виктория</h3>
          <p className='about-me__caption'>Фронтенд-разработчик, 31 год</p>
          <p className='about-me__paragraf'>Я родась и живу в Таганроге, закончила Южный федеральный
            университет по специальности "информатика в экономике". После института 8 лет работала в офисе Сбера. </p>
          <p className='about-me__paragraf'> Я не люблю стоять на месте. Мне нравится учиться, знакомиться с новой информацией, применять на практике новые методы и модели. Меня вдохновляет возможность видеть результат своей работы.
            Я стремлюсь найти работу в коллективе профессиональных разработчиков. Хочу принять участие в создании полезного,
            удобного и красивого сайта или веб-приложения.</p>
          <p className='about-me__paragraf'>
            Уже около года я каждый день с удовольствием изучаю новый материал и практикую полученные навыки. 
            Помимо курсов Я.Практикум в данный момент я смотрю лекции и делаю таски в RSS School, слежу на Хабре за тенденциями 
            в мире фронтенда, узучаю документацию к React и отдельным библиотекам (redux, redux-thunk, material ui),
             решаю задачки на  
             <a href="https://www.codewars.com/users/Vakulina" target="_blank" rel="noreferrer"> codewars</a>.</p>
            <p className='about-me__paragraf'> Люблю пешие походы и отдых на природе. Загорелась идеей пройти «Через горы к морю» по северо-западному Кавказу.
          </p>
          <ul className='about-me__links-list'>
            <li className='about-me__link-item'>
              <a className='about-me__link' href="https://t.me/Vakulina_tag" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li className='about-me__link-item'>
              <a className='about-me__link' href="https://github.com/Vakulina" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img src={foto} alt="мое фото" className='about-me__foto'></img>
      </div>
      <Portfolio className='about-me__portfolio' />
    </section>
  )
}