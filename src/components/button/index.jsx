import PropTypes from 'prop-types';

export default function Button({ textColor, bgColor, text }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      className="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
