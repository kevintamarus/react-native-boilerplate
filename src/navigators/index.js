import { createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import Home from '../screens/Home';

const AppNav = createSwitchNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNav);
