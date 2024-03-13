import React from 'react';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { CoffeeList } from '../../models/CoffeeList';
import { CarouselContainer, CarouselTitleContainer, SeeMoreText } from './Carousel.styles';
import { CoffeeTitle } from '../../screens/Home/HomeScreen.styles';
import NewCoffeeCard from '../CoffeeCard/NewCoffeeCard';

interface CoffeeCarouselProps {
  navigation: any;
  coffeeList: CoffeeList[];
  title: string;
}

const CoffeeCarousel: React.FC<CoffeeCarouselProps> = ({
    navigation,
    coffeeList,
    title
}) => {
  return (
    <CarouselContainer>
        <CarouselTitleContainer onPress={() => {
                navigation.push('Coffees', {
                  item: coffeeList,
                })
              }}>
              <CoffeeTitle>{title}</CoffeeTitle>

              <SeeMoreText>
                Ver mais
              </SeeMoreText>
            </CarouselTitleContainer>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={coffeeList}
              keyExtractor={(item: CoffeeList) => item._id}
              contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                paddingHorizontal: 30,
              }}
              renderItem={({ item }: { item: CoffeeList }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log('Pressed')
                      navigation.push('Details', {
                        item: item,
                      });
                    }}>
                    <NewCoffeeCard
                      coffeeItem={item}
                    />
                  </TouchableOpacity>
                );
              }}
            />
    </CarouselContainer>
  );
};

export default CoffeeCarousel;