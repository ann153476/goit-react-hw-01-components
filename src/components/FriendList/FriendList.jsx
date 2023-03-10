import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import  FriendListItem  from './FriendListItem/FrendListItem';

const FriendList = ({friends}) => {
    return(
        <ul className={s.friendList}>
        {friends.map(({avatar, name, isOnline, id})=>(
           <FriendListItem key={id}
           avatar={avatar}
           name={name}
           isOnline={isOnline}
           />
        ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  };

export default FriendList;

            