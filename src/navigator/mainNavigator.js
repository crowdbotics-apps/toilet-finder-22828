import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile176321Navigator from '../features/UserProfile176321/navigator';
import Maps176302Navigator from '../features/Maps176302/navigator';
import Settings176280Navigator from '../features/Settings176280/navigator';
import Settings176265Navigator from '../features/Settings176265/navigator';
import NotificationList176264Navigator from '../features/NotificationList176264/navigator';
import Maps176263Navigator from '../features/Maps176263/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile176321: { screen: UserProfile176321Navigator },
Maps176302: { screen: Maps176302Navigator },
Settings176280: { screen: Settings176280Navigator },
Settings176265: { screen: Settings176265Navigator },
NotificationList176264: { screen: NotificationList176264Navigator },
Maps176263: { screen: Maps176263Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
