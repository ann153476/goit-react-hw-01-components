import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <li>
      <span className={isOnline? s.circle__true:s.circle__false}></span>  
      <img src={avatar} alt="User avatar" width="50" />  
      <p>{name}</p>
      </li>
    );
  };
//////////////////////////
  FriendListItem.propTypes = {
    friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  };

export default FriendListItem;