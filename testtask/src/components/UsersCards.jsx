import UserCard from './UserCard';

const UsersCards = (props) => {
  const { users } = props;

  return (
    <div className='users-cards'>
      {users && users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UsersCards;
