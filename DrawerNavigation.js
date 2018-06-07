import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';


class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="open drawer"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications'
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="open drawer"
        />
      </View>
    );
  }
}


const MyApp = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default MyApp;
