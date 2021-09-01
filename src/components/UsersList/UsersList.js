import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Loader, Card, List } from 'semantic-ui-react';

import { getUsers } from '../../actions';
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
            <div className='users-list'>
                <Card>
                    <Card.Content>
                        <List divided relaxed>
                            <List.Item>
                            <List.Icon name='user' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header >Yuval Atia</List.Header>
                                <List.Description>Created: </List.Description>
                            </List.Content>
                            </List.Item>
                            <List.Item>
                            <List.Icon name='user' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header >Yuval Atia</List.Header>
                                <List.Description>Created: </List.Description>
                            </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                </Card>
                
                <p>{users.length}</p>
            </div>
        )
    }

    return renderUsersList();
};

const mapStateToProps = ({users}) => {
    return {users};
}

export default connect(mapStateToProps, {getUsers})(UsersList);