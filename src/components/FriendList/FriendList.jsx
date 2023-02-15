import s from './FriendList.module.css';

const FriendList = ({friends}) => {
    return(
        <ul className={s.friendList}>
        {friends.map(({avatar,name,isOnline})=>(
            <li>
            <span className={isOnline? s.circle__true:s.circle__false}></span>  
            <img src={avatar} alt="User avatar" width="50" />  
            <p>{name}</p>
            </li>
        ))}
        {/* {friends.map(({avatar,name,isOnline})=>(
            <li className={friendList}>
            <span className={isOnline ? s.y : s.n}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
            </li>
        ))

        } */}
        </ul>
    )
}

export default FriendList;