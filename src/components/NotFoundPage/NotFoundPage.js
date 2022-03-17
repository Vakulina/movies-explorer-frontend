import "./NotFoundPage.css";
import { useNavigate, useLocation } from "react-router-dom";


export default function NotFoundPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const hasPreviousState = location.key !== "default";

  const handleBack = () => {
    if (hasPreviousState) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__subtitle">Страница не найдена</p>
      <button type="not-found-page__button" onClick={handleBack}>
      Назад
    </button>
    </div>
  );
}