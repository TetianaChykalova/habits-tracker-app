import React from 'react';
import styled from 'styled-components'
import MyHabitsDesktop from "./MyHabitsDesktop/MyHabitsDesktop";
import MyHabitsMobile from "./MyHabitsMobile/MyHabitsMobile";

const DesktopComponent = styled.div`
  @media only screen and (max-width: 992px) {
  display: none;
}
`;
const MobileComponent = styled.div`
  @media only screen and (min-width: 993px) {
  display: none;
}
`;

function MyHabits(props) {
    return (
        <>
            <DesktopComponent>
                <MyHabitsDesktop/>
            </DesktopComponent>
            <MobileComponent>
                <MyHabitsMobile/>
            </MobileComponent>
        </>
    );
}

export default MyHabits;