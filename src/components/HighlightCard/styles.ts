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

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

const Content = styled.View``;

const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;


export {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
}