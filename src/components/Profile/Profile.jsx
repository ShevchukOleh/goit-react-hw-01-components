import PropTypes from 'prop-types';
import {Card, UserName, Avatar, Name, Info, Stats, StatsItem, StatsInfo, StatsInfoQuantity} from './Profile.styled'

export default function Profile({avatar, username, tag, location, stats}) {
    return (
        <Card>
            <UserName>
                <Avatar src={avatar} alt='User avatar'/>
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
            </UserName>
            <Stats>
                <StatsItem>
                    <StatsInfo>Followers</StatsInfo>
                    <StatsInfoQuantity>{stats.followers}</StatsInfoQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsInfo>Views</StatsInfo>
                    <StatsInfoQuantity>{stats.views}</StatsInfoQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsInfo>Likes</StatsInfo>
                    <StatsInfoQuantity>{stats.likes}</StatsInfoQuantity>
                </StatsItem>
            </Stats>
        </Card>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};