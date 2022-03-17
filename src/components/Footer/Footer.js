import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__paragraf'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__line'></div>
        <div className='footer__two-columns'>
        <p class="footer__copiright">©&nbsp;2022</p>
        <nav className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Vakulina" target="_blank" rel="noreferrer">Github</a>
          <a className="footer__link" href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        </nav>
        </div>
      </div>
    </footer>
  )
}