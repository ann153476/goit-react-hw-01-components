import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({stats,title}) => {
    return(
    <section className={s.Statistics}>
        {title && <h2>{title}</h2>}
        <ul>
        {stats.map(({id,label,percentage})=>(
            <li key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
            </li>
        ))}
        </ul>
    </section>
        
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
    title: PropTypes.string,
  };

export default Statistics;