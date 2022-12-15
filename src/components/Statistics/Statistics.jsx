import PropTypes from "prop-types";
import css from './Statistics.module.css'

function makeBgColor() {
  const color = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + color;
}
export const Statistics = ({ title, statistics }) => { 
    
  return (<section className={ css.statistics}>
        <h2 className={css.title}>{ title}</h2>

    <ul className={ css.statList}>{statistics.map((statistic) => (<li className={ css.item} key={statistic.id}  style={{ backgroundColor: makeBgColor() }}>
          <span className={css.label}>{ statistic.label}</span>
      <span className={ css.percentage}>{ statistic.percentage}%</span>
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

