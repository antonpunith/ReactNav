import React from 'react';
import { Button, View, Text, TouchableHighlight, YellowBox, StyleSheet } from 'react-native';
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
const styles = StyleSheet.create({
  homeMain: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  tabsWrap: {
    flex: 1,
    height: 100,
  },
  buttonWrap: {
    flex: 1,
    flexDirection: 'row'

  },
  buttonNav: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#bada55',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Custom Fleet Home'
  }
  componentDidMount() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.homeMain}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Login"
            onPress={() => this.props.navigation.navigate('Loginstack')}
          />
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabsWrap}>
            <View style={styles.buttonWrap}>
                <TouchableHighlight
                  style={styles.buttonNav}
                  onPress={() => this.props.navigation.navigate('screen3')}
                >
                  <Text>screen3</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.buttonNav}
                  onPress={() => this.props.navigation.navigate('screen4')}
                >
                <Text>screen4</Text>
                </TouchableHighlight>
            </View>
          </View>
          <View style={styles.tabsWrap}>
            <View style={styles.buttonWrap}>
                <TouchableHighlight
                  style={styles.buttonNav}
                  onPress={() => this.props.navigation.navigate('screen3')}
                >
                  <Text>screen3</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.buttonNav}
                  onPress={() => this.props.navigation.navigate('screen4')}
                >
                <Text>screen4</Text>
                </TouchableHighlight>
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
