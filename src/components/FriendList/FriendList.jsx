import PropTypes from "prop-types";
import styles from './FriendList.module.css'

export const FriendList = ({friends}) => {
    return (<ul className={styles.friendList}>
        {friends.map((friend) => (<li className={styles.item} key={friend.id}>
           <span
        className={styles.status}
        style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
      >
        {friend.isOnline}
      </span>
            <img  src={friend.avatar} alt="User avatar" width="48" />
            <p >{friend.name }</p>
        </li>))}
</ul>)
}




FriendList.propType = {
    friend: PropTypes.shape({
        
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired
}