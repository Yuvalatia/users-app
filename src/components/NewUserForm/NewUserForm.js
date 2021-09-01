import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Card, Button, Form } from 'semantic-ui-react';

import { createUser } from '../../actions';
import { SectionTitle } from '..';
import './NewUserForm.scss';

const NewUserForm = ({createUser}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [createUserForm, setCreateUserForm] = useState({firstName: '', lastName: ''});

    const formSubmitHandler = async () => {
        if(!createUserForm.firstName || !createUserForm.lastName){
            return;
        }

        setIsLoading(true);
        try{
            await createUser(createUserForm);
            setIsLoading(false);
        }catch(err){
            console.log(err);
            setIsLoading(false);
        }
        
    }

    return (
        <div className='new-user-form'>
            <SectionTitle text='Create new user' iconName='add user'/>
            <Card>
                <Card.Content>
                    <Form>
                        <Form.Input
                            icon='pencil alternate'
                            iconPosition='left'
                            label='First Name'
                            placeholder='First Name'
                            name='firstName'
                            value={createUserForm.firstName}
                            onChange={(e) => setCreateUserForm({...createUserForm, firstName: e.target.value})}
                            disabled={isLoading}
                        />
                        <Form.Input
                            icon='pencil alternate'
                            iconPosition='left'
                            label='Last Name'
                            placeholder='Last Name'
                            name='lastName'
                            value={createUserForm.lastName}
                            onChange={(e) => setCreateUserForm({...createUserForm, lastName: e.target.value})}
                            disabled={isLoading}
                        />
                        <Button content='Create User' secondary fluid onClick={() => formSubmitHandler()} loading={isLoading}/>
                    </Form> 
                </Card.Content>
            </Card>
        </div>
    )
};

export default connect(null,{createUser})(NewUserForm);