import PropTypes from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children, className }) => {
  const containerClasses = `${className || ''} ${styles.container}`;
  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
