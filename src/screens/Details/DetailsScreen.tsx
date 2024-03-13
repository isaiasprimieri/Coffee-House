import React, {useState} from 'react';
import {
  StatusBar,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import ImageBackgroundInfo from '../../components/ImageBackgroundInfo';
import DetailsScreenFooter from '../../components/DetailsScreenFooter/DetailsScreenFooter';
import { CoffeeList } from '../../models/CoffeeList';
import { DescriptionText, FooterInfoArea, InfoTitle, ScreenContainer, SizeOuterContainer, SizeText } from './DetailsScreen.styles';

const DetailsScreen = ({navigation, route}: any) => {
  const Coffee: CoffeeList = route.params.item
  const CoffeeQuantityText = Coffee.type === "CAPSULES" ? Coffee.quantity + ' capsulas' : Coffee.quantity + ' de grãos'

  const [fullDesc, setFullDesc] = useState(false);

  const BackHandler = () => {
    navigation.pop();
  };

  return (
    <ScreenContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between"  
        }}>
        <ImageBackgroundInfo
          coffeeItem={Coffee}
          favourite={true}
          average_rating={1}
          rating={Coffee.rating}
          BackHandler={BackHandler}
        />

        <FooterInfoArea>
        <InfoTitle>Nome</InfoTitle>
          <DescriptionText numberOfLines={3}>
            {Coffee.name}
          </DescriptionText>
        <InfoTitle>Descrição</InfoTitle>
          {fullDesc ? (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <DescriptionText>
                {Coffee.description}
              </DescriptionText>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => {
                setFullDesc(prev => !prev);
              }}>
              <DescriptionText numberOfLines={3}>
                {Coffee.description}
              </DescriptionText>
            </TouchableWithoutFeedback>
          )}
          <InfoTitle>Quantidade</InfoTitle>
          <SizeOuterContainer>
              <SizeText>{CoffeeQuantityText}</SizeText>
          </SizeOuterContainer>
        </FooterInfoArea>
        <DetailsScreenFooter
          coffeeLink={Coffee.link}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default DetailsScreen;
