import PropTypes from "prop-types";
import css from './transactions.module.css'
export const Transactions = ({ items }) => {
    return (<table className={css.transactionHistory}>
  <thead className={css.cap}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>{items.map((item)=><tr className={css.transaction}>
      <td>{ item.type}</td>
      <td>{item.amount }</td>
      <td>{ item.currency}</td>
    </tr>)}
    
    
  </tbody>
</table>)}



Transactions.prototype = {
  items: PropTypes.object.isRequired,
};