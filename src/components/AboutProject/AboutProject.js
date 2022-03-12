import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__stages'>
        <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
        <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className='about-project__weeks'>
        <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
        <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__backend'>
          <p className='about-project__backend_subtitle'>1 неделя</p>
          <p className='about-project__backend_text'>Back-end</p>
        </div>
        <div className='about-project__frontend'>
          <p className='about-project__frontend_subtitle'>4 недели</p>
          <p className='about-project__frontend_text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}