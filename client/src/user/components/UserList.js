import './UserList.css';

import UserItem from './UserItem';

const UserList = props => {
    if (props.items.length === 0) {
        return
        <div>
            <h2>No users found</h2>
        </div>
    }
    return
    <ul>
        {props.items.map(user => {
            return <UserItem key={user.id}/>
        })}
    </ul>
};

export default UserList;