import {NavigationContainer} from '@react-navigation/native';
import PublicNavigation from './public';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <PublicNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
