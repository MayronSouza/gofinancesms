import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
} from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://avatars.githubusercontent.com/u/41699484?v=4' }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Mayron Souza</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
};

export { Dashboard };