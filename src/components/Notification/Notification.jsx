import PropTypes from 'prop-types';
import { Warning } from './Notification.styled';

const Notification = ({ message }) => {
  return <Warning>{message}</Warning>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
