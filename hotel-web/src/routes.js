import { createStackNavigator } from 'react-navigation';
import SingIn from './pages/singIn';
import SingUp from './pages/singUp';
import Main from './pages/main';

const Routes = createStackNavigator({
  SingIn,
  SingUp,
  Main
});

export default Routes;