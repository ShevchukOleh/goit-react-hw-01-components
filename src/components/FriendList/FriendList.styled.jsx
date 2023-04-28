import styled from "@emotion/styled";

export const FriendsList = styled.ul`
    list-style: none ;
    margin-top: 50px;
    
`;
export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    width: 200px;
    height: 60px;
    background-color: white;
    margin-bottom: 10px;
    gap: 10px;
    padding: 5px 15px;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const Status = styled.span``;
export const Avatar = styled.img`
    height: 50px;
`;
export const Name = styled.p``;

