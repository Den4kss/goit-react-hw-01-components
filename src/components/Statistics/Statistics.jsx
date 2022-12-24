import PropTypes from "prop-types";
import styles from './Statistics.module.css'

function makeBgColor() {
  const color = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + color;
}
export const Statistics = ({ title, statistics }) => { 
    
  return (<section className={ styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={ styles.statList}>{statistics.map((statistic) => (<li className={ styles.item} key={statistic.id}  style={{ backgroundColor: makeBgColor() }}>
          <span className={styles.label}>{ statistic.label}</span>
      <span className={ styles.percentage}>{ statistic.percentage}%</span>
    </li>))}
  </ul>
</section>)
}


Statistics.proPropTypes = {
    title: PropTypes.string,
    stat: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
}

