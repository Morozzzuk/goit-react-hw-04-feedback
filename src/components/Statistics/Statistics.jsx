import PropTypes from 'prop-types';
import { StatList, StatDescr } from './Statistics.styled';
import { getRandomColor } from '../getRandomColor';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatList style={{ backgroundColor: getRandomColor() }}>
      <li>
        <StatDescr>Good: {good}</StatDescr>
      </li>
      <li>
        <StatDescr>Neutral: {neutral}</StatDescr>
      </li>
      <li>
        <StatDescr>Bad: {bad}</StatDescr>
      </li>
      <li>
        <StatDescr>Total: {total}</StatDescr>
      </li>
      <li>
        <StatDescr>Positive feedback: {positivePercentage}%</StatDescr>
      </li>
    </StatList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
