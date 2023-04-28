import PropTypes from 'prop-types';
import {TransactionHistoryTable, TableHead, TableHeadList, TableHeadListItem, TableBody, TableBodyList, TableBodyItem} from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
    return (
        <TransactionHistoryTable>
            <TableHead>
                <TableHeadList>
                    <TableHeadListItem>Type</TableHeadListItem>
                    <TableHeadListItem>Amount</TableHeadListItem>
                    <TableHeadListItem>Currency</TableHeadListItem>
                </TableHeadList>
            </TableHead>
            {items.map(({ id, type, amount, currency, i }) => (
                <TableBody key={id}>
                    <TableBodyList>
                        <TableBodyItem>{type}</TableBodyItem>
                        <TableBodyItem>{amount}</TableBodyItem>
                        <TableBodyItem>{currency}</TableBodyItem>
                    </TableBodyList>
                </TableBody>
            ))}
        </TransactionHistoryTable>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),
  ),
};