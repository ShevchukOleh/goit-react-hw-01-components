import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
    background-color: white;
    border-radius: 5px;
    width: 600px;
`;

export const Title = styled.h2`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
`;

export const StatList = styled.ul`
    list-style: none;
    display: flex;
`;
export const StatListItem = styled.li`
    display: grid;
    width: 120px;
    height: 60px;
    border: 1px solid #e8ecf2;
    padding: 20px;
`;
export const Label = styled.span`
    display: flex;
    justify-content: center;
    color: white;
`;
export const Percentage = styled.span`
    display: flex;
    justify-content: center;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.27;
    color: white;
`;