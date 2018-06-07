import React from 'react';
import { Button, View, Text, YellowBox } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


/****************** Login Stack ******************/
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Custom Fleet',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,
      height: 0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  componentDidMount() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <View style={{ marginBottom: 20 }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Primarystack')}
        />
        </View>
        <Button
          title="Go to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title="Go to ForgottenPassword"
          onPress={() => this.props.navigation.navigate('ForgottenPassword')}
        />

      </View>
    );
  }
}

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Signup Screen</Text>
      </View>
    );
  }
}
class ForgottenPasswordScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Forgotten Password Screen</Text>
      </View>
    );
  }
}


const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
    ForgottenPassword: ForgottenPasswordScreen
  },
  {
    initialRouteName: 'Login'
  }
);

/****************** End Login Stack ******************/
/****************** CF Stack ******************/
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Custom Fleet Home'
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ flex: 2, backgroundColor: 'red' }}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate('Loginstack')}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Button
                style={{ flex: 1 }}
                title="Go to healthcheck"
                onPress={() => this.props.navigation.navigate('healthcheck')}
              />
            </View>
            <View>
              <Button
                style={{ flex: 1 }}
                title="Go to screen2"
                onPress={() => this.props.navigation.navigate('screen2')}
              />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Button
                style={{ flex: 1 }}
                title="Go to screen3"
                onPress={() => this.props.navigation.navigate('screen3')}
              />
            </View>
            <View>
              <Button
                style={{ flex: 1 }}
                title="Go to screen4"
                onPress={() => this.props.navigation.navigate('screen4')}
              />
            </View>
          </View>
        </View>
    </View>
    );
  }
}
class Healthcheck extends React.Component {
  static navigationOptions = {
    title: 'Healthcheck'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Healthcheck Screen</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}
class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen2'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen2</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}
class Screen3 extends React.Component {
  static navigationOptions = {
    title: 'Screen3'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen3</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}
class Screen4 extends React.Component {
  static navigationOptions = {
    title: 'Screen4'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Screen4</Text>
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.navigate('home')}
        />
      </View>
    );
  }
}

const CFStack = createStackNavigator(
  {
    home: HomeScreen,
    healthcheck: Healthcheck,
    screen2: Screen2,
    screen3: Screen3,
    screen4: Screen4
  },
  {
    initialRouteName: 'home'
  }
);

/****************** End CF Stack ******************/

const MyApp = createStackNavigator(
  {
    Loginstack: {
      screen: LoginStack,
    },
    Primarystack: {
      screen: CFStack,
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Loginstack',
  }
);
export default MyApp;
