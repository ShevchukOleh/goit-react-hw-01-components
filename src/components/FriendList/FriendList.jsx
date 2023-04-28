import { BsFillCircleFill } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {FriendsList, FriendListItem, Status, Avatar, Name} from './FriendList.styled'

export default function FriendList({ friends }) {
    return (
        <FriendsList>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id}>
                    <Status>{isOnline}</Status>
                    <Avatar src={avatar} alt='avatar' />
                    <Name>{name}</Name>
                </FriendListItem>
            ))}
        </FriendsList>
    );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
  ),
};