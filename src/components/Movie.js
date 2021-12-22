import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './Movie.module.css';
function Movie({id, coverImage, title, summary, genres}) {
    return (
        <div className={styles.movie}>
            <img className={styles.movie__img} src={coverImage}/>
            <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p className={styles.movie__year}>{summary}</p>
            <ul className={styles.movie__genres}>
              {genres.map((genre, index) => <li key={index.toString()}>{genre}</li>)}
              
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;