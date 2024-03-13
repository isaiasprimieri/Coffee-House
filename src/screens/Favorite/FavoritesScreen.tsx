import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../theme/theme';
import HeaderBar from '../../components/HeaderBar';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import { CoffeeList, FavoriteListData } from '../../models/CoffeeList';
import { ScreenTitle } from './FavoritesScreen.styles';
import NewCoffeeCard from '../../components/CoffeeCard/NewCoffeeCard';

const FavoritesScreen = ({navigation}: any) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
     
        <View
          style={[styles.ScrollViewInnerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Favoritos" />
            {
              FavoriteListData.length > 0 ? (
                <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                  <>
                      <ScreenTitle>
                          Aqui você econtra seus cafés favoritos
                      </ScreenTitle>
                  </>
                }
                showsHorizontalScrollIndicator={false}
                data={FavoriteListData}
                keyExtractor={(item: CoffeeList) => item._id}
                columnWrapperStyle={{ 
                  gap: 20,
                }}
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
              ) : (
                <EmptyListAnimation title={'Sem Favoritos'} />

              )
            }
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
});

export default FavoritesScreen;
