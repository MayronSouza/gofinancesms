import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 18px 24px;
  padding-bottom: ${RFValue(42)}px;
`;

const Header = styled.View``;

const Title = styled.Text``;

const Icon = styled(Feather)``;

const Content = styled.View``;

const Amount = styled.Text``;

const LastTransaction = styled.Text``;


export {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
}