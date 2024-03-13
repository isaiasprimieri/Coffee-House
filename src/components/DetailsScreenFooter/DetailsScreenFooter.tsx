import {Image, Linking} from 'react-native';
import React from 'react';
import { ButtonText, PayButton, Container } from './DetailsScreenFooter.styles';

interface DetailsScreenFooterProps {
  coffeeLink: string;
}

const DetailsScreenFooter: React.FC<DetailsScreenFooterProps> = ({
  coffeeLink,
}) => {

  const coffeeLinkPressHandler = () => {
    Linking.openURL(coffeeLink).catch(() => {
      console.error('Não foi possivel abrir o link');
    });
  };

  return (
    <Container>
      <PayButton
        onPress={() => coffeeLinkPressHandler()}>
        <ButtonText>Abrir Loja</ButtonText>
      </PayButton>
    </Container>
  );
};

export default DetailsScreenFooter;
