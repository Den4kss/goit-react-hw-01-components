import { Profile } from './user/user.jsx'
import user from "./user/user.json"
import { Statistics } from "./Statistics/Statistics.jsx"
import statistics from './Statistics/Statistics.json';
import friends from './FriendList/FriendList.json'
import { FriendList } from './FriendList/FriendList.jsx'
import transactions from './TransactionHistory/transactions.json'
import{Transactions} from './TransactionHistory/transactions.jsx'

export const App = () => {
  return (
    <div>
     <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        key={statistics.id}
       statistics={statistics}
      />
      <FriendList
         friends={friends}
      />
      <Transactions
        items={transactions}
      />
    </div>
  );
};
