import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => {
    return(
        <table className={s.transactions}>
            <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            {transactions.map(({id,type,amount,currency})=>(
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.protoType = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };

export default TransactionHistory;