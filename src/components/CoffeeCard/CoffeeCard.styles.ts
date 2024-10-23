import { styled } from "styled-components/native";

export const CardRatingContainer = styled.View`
  flex-direction: row;
  background-color: #00000080;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-horizontal: 15px;
  position: absolute;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  top: 0;
  right: 0;
`;

export const CardRatingText = styled.Text`
  font-family: "Poppins-Medium";
  color: #ffffff;
  line-height: 22px;
  font-size: 14px;
`;

export const CardTitle = styled.Text`
  font-family: "Poppins-Medium";
  color: #ffffff;
  font-size: 16px;
`;

export const CardSubtitle = styled.Text`
  font-family: "Poppins-Light";
  color: #ffffff;
  font-size: 10px;
`;

export const CardFooterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 15px;
`;

export const CardPriceCurrency = styled.Text`
  font-family: "Poppins-SemiBold";
  color: #ffa500;
  font-size: 18px;
`;

export const CardPrice = styled.Text`
  color: #ffffff;
`;

export const QuantityTitle = styled.Text`
  font-family: "Poppins-Medium";
  color: #ffffff;
  font-size: 12px;
`;

export const SocialImageView = styled.TouchableOpacity`
  background: #d17842;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;
