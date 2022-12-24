import PropTypes from "prop-types";
import styles from './transactions.module.css'
export const Transactions = ({ items }) => {
    return (<table className={styles.transactionHistory}>
  <thead className={styles.cap}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>{items.map((item)=><tr className={styles.transaction} key={item.id}>
      <td>{ item.type}</td>
      <td>{item.amount }</td>
      <td>{ item.currency}</td>
    </tr>)}
    
    
  </tbody>
</table>)}



Transactions.prototype = {
  items: PropTypes.object.isRequired,
};