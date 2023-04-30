import PropTypes from 'prop-types';
import {StatisticsCard, Title, StatList, StatListItem, Label, Percentage} from './Statistics.styled'
import color from './getRandomHexColor';

export default function Statistics({ stats, title }) {
  return (
    <StatisticsCard>
        {title && <Title>{title}</Title>}
        <StatList>
            {stats.map(({id, label, percentage}) => (
                <StatListItem key={id} style={{ backgroundColor: color() }}>
                    <Label>{ label }</Label>
                    <Percentage>{percentage}</Percentage>
                </StatListItem>
            ))}  
        </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};