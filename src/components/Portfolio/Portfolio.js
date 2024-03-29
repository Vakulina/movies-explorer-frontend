
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/" target="_blank" rel="noreferrer">
            Статичный сайт
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/" target="_blank" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link' href="https://github.com/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </>
  )
}