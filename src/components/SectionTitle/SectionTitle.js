import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

import './SectionTitle.scss';

const SectionTitle = ({text, iconName}) => {
    return (
        <Header as='h2'>
            <Icon name={iconName} />
            <Header.Content>{text}</Header.Content>
        </Header>
    );
};

export default SectionTitle;