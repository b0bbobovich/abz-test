import photoCover from '../assets/images/photoCover.svg';

const UserCard = (props) => {
  const { user } = props;
  return (
    <div className='user-card'>
      <div className='user-card__wrapper'>
        <img
          className='user-card__photo'
          src={user.photo}
          onError={(e) => {
            if (e.target.src !== photoCover) e.target.src = photoCover;
          }}
          alt='user'
          loading='lazy'
        />
        <span className='user-card__name' title={user.name}>
          {user.name}
        </span>
        <div className='user-card__details'>
          <span className='user-card__job-title' title={user.position}>
            {user.position}
          </span>
          <span className='user-card__email' title={user.email}>
            {user.email}
          </span>
          <span className='user-card__phone' title={user.phone}>
            {user.phone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
