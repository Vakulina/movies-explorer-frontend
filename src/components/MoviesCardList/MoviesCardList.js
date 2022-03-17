import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useResize from '../useResize/useResize';
//временно создадим массив из одинаковых карточек, пока не получаем данных с сервера
export default function MoviesCardList({ typeList }) {
  let width = useResize();
  const changeCountItems = (width) => {
    if (width > 768) {
      return 12;
    }
    else if ((width <= 768) && (width > 320)) {
      return 8;
    }
    else if (width <= 320) {
      return 5
    }
  }

  return (
    <section className='listMovies'>
      {[...Array(changeCountItems(width))].map((item, index) => {
        return <MoviesCard key={index} typeList={typeList} />
      })
      }
    </section>
  )
}