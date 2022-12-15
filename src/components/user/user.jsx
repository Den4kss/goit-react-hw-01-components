
import css from "./user.module.css"
import PropTypes from "prop-types";
export const Profile = ({avatar, username, tag, location, stats}) => {
    return (<div className={css.profile}>
        <div className={css.description}>
             <img
          src={avatar}
          alt="foto"
          className={css.avatar}
          width="200px"
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
   <li className={css.rating}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
     </li>
    <li className={css.rating}>
      <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views }</span>
    </li>
    <li className={css.rating}>
     <span className={css.label}>Likes</span>
     <span className={css.quantity}>{stats.likes }</span>
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


