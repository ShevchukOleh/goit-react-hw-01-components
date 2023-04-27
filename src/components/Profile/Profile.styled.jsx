import styled from '@emotion/styled';

export const Card = styled.div`
    width: 360px;
    padding-top: 15px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 50px;
`;

export const UserName = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Avatar = styled.img`
    display: flex;
    margin: 0 auto;
    width: 320px;
    height: 320px;
`;

export const Name = styled.p`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.27;
`;

export const Info = styled.p`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    color: #8794a2;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    background-color: #f3f6f9;
    width: 100%;
    height: 120px;

`;

export const StatsItem = styled.li`
    width: 120px;
    border: 1px solid #e8ecf2;
    padding-top: 40px;
`;

export const StatsInfo = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const StatsInfoQuantity = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-weight: 700;
`;