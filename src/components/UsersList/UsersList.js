import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Loader, Card, List } from 'semantic-ui-react';

import { getUsers } from '../../actions';
import { SectionTitle } from '..';
import './UsersList.scss';

const UsersList = ({users, getUsers}) => {

    useEffect(() => {
            getUsers().catch((err) => console.log("TODO - handle error"));
    }, [getUsers])

    const renderUsersList = () => {
        if(users.length === 0){
            return <Loader active inline />
        }
        return (
            <List divided relaxed>
                {users.map((user) => 
                    <List.Item key={user._id}>
                    <List.Icon name='user' size='large' verticalAlign='middle' />
                    <List.Content>
                        <List.Header>{user.firstName} {user.lastName}</List.Header>
                        <List.Description>Created: {new Date(user.createdAt).toLocaleString()}</List.Description>
                    </List.Content>
                    </List.Item>
                )}
            </List>
        )
    }

    return (
        <div className='users-list'>
            <Card>
            <Card.Content>
                <SectionTitle text='Users List' iconName='users' />
                {renderUsersList()}
            </Card.Content>
            </Card>
        </div>
    )
};

const mapStateToProps = ({users}) => {
    return {users};
}

export default connect(mapStateToProps, {getUsers})(UsersList);