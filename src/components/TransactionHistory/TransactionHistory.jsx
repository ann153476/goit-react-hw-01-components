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
            <tr id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;