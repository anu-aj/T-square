import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
        </header>
    )
}

Header.defaultProps={
    title: 'Task Tracker',
}

Header.propTypes={
    title: PropTypes.string.isRequired,
    onAdd: PropTypes.func,
    showAdd:  PropTypes.func,
}


export default Header
