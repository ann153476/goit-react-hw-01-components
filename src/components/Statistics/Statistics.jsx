import s from './Statistics.module.css';

const Statistics = ({stats}) => {
    return(
    <section className={s.Statistics}>
        <h2>Upload stats</h2>
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

export default Statistics;