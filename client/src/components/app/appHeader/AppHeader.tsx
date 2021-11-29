import React, { FC } from "react";

import HeaderContainer from "../../../containers/header/HeaderContainer";
import MenuContainer from "../../../containers/menu/MenuContainer";

const AppHeader: FC = () => (
  <>
    <HeaderContainer />
    <MenuContainer />
  </>
);

export default AppHeader;
