import user from './Profile/user.json';
import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

export default function App() {
  return (
    <div style={{ padding:20}}>
      <Profile
        key={user.tag}
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics
        key={data.id}
        title="Upload stats"
        stats={data}
      />
    </div>
  );
};
