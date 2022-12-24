
import styles  from "./user.module.css"
import PropTypes from "prop-types";
export const Profile = ({avatar, username, tag, location, stats}) => {
    return (<div className={styles.profile}>
        <div className={styles.description}>
             <img
          src={avatar}
          alt="foto"
          className={styles.avatar}
          width="200px"
        />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
   <li className={styles.rating}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
     </li>
    <li className={styles.rating}>
      <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views }</span>
    </li>
    <li className={styles.rating}>
     <span className={styles.label}>Likes</span>
     <span className={styles.quantity}>{stats.likes }</span>
    </li>
  </ul>
    </div>)
}

Profile.prototype = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};


