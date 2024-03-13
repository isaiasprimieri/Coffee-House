import styled from 'styled-components/native';

const FONTFAMILY = {
    poppins_semibold: 'Poppins Semibold',
    poppins_regular: 'Poppins Regular',
    poppins_medium: 'Poppins Medium'
};

export const ScreenContainer = styled.View`
    flex: 1;
    background-color: #0C0F14;
`;

export const FooterInfoArea = styled.View`
    padding: 20px;
`;

export const InfoTitle = styled.Text`
    font-family: ${FONTFAMILY.poppins_semibold};
    font-size: 16px;
    color: #FFFFFF;
    margin-bottom: 10px;
`;

export const DescriptionText = styled.Text`
    letter-spacing: 0.5;
    font-family: ${FONTFAMILY.poppins_regular};
    font-size: 14px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;

export const SizeOuterContainer = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
`;

export const SizeBox = styled.View`
    flex: 1;
    background-color: #141921;
    align-items: center;
    justify-content: center;
    height: 24px;
    border-radius: 10px;
    border-width: 2;
`;

export const SizeText = styled.Text`
    font-family: ${FONTFAMILY.poppins_medium};
`;



