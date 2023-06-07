import PropTypes from 'prop-types';
import { Button, BtnWrapper } from './FeedbackOptions.styled';
import { getRandomColor } from '../getRandomColor';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
            style={{ backgroundColor: getRandomColor() }}
          >
            {option}
          </Button>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
