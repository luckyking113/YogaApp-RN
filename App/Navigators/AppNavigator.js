import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from '../Containers/HomeScreen/HomeScreen'
import ActScreen from '../Containers/ActScreen/ActScreen'
import BusinessScreen from '../Containers/BusinessScreen/BusinessScreen'
import StudyScreen from '../Containers/StudyScreen/StudyScreen'
import ManageScreen from '../Containers/ManageScreen/ManageScreen'
import Colors from '../Theme/Colors'

import {STRINGS} from '../Config'

import AgentMission from '../Containers/ManageScreen/Workbench/AgentMission'
import PersonalEducation from '../Containers/ManageScreen/Workbench/PersonalEducation'
import ScanCode from '../Containers/ManageScreen/Workbench/ScanCode'
import YogaHeadline from '../Containers/ManageScreen/Workbench/YogaHeadline'
import Configuration from '../Containers/ManageScreen/Workbench/Configuration'
import ExperienceManagement from '../Containers/ManageScreen/Workbench/ExperienceManagement'


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        // tabBarIcon: ({ focused, tintColor }) => {
        //   const iconName = `ios-information-circle${focused ? '' : '-outline'}`
        //   return <Icon name={iconName} size={25} color={tintColor} />
        // },
        title: STRINGS.Home,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-home" size={25} color={tintColor} />
        },
      },
    },
    Act: {
      screen: ActScreen,
      navigationOptions: {
        title: STRINGS.Action,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-alarm" size={25} color={tintColor} />
        },
      },
    },
    Business: {
      screen: BusinessScreen,
      navigationOptions: {
        title: STRINGS.Business,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-pricetag" size={25} color={tintColor} />
        },
      },
    },
    Study: {
      screen: StudyScreen,
      navigationOptions: {
        title: STRINGS.Study,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-laptop" size={25} color={tintColor} />
        },
      },
    },
    Manage: {
      screen: createStackNavigator(
        {
          HomeScreen: {
            screen: ManageScreen,
            navigationOptions: ({ navigation }) => ({
              title: STRINGS.Manage, // Title to appear in status bar
            }),
          },
          AgentMission: {
            screen: AgentMission,
            navigationOptions: ({ navigation }) => ({
              title: navigation.getParam('Title', STRINGS.AgentMission), // Title to appear in status bar
            }),
          },
          PersonalEducation: {
            screen: PersonalEducation,
            navigationOptions: ({ navigation }) => ({
              title: navigation.getParam('Title', STRINGS.AgentMission), // Title to appear in status bar
            }),
          },
          ScanCode: {
            screen: ScanCode,
            navigationOptions: ({ navigation }) => ({
              title: STRINGS.ScanCode, // Title to appear in status bar
            }),
          },
          YogaHeadline: {
            screen: YogaHeadline,
            navigationOptions: ({ navigation }) => ({
              title: STRINGS.YogaHeadline, // Title to appear in status bar
            }),
          },
          Configuration: {
            screen: Configuration,
            navigationOptions: ({ navigation }) => ({
              title: STRINGS.Configuration, // Title to appear in status bar
            }),
          },
          ExperienceManagement: {
            screen: ExperienceManagement,
            navigationOptions: ({ navigation }) => ({
              title: STRINGS.ExperienceManagement, // Title to appear in status bar
            }),
          },
        },
        {
          defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: Colors.white,
          },
        }
      ),
      navigationOptions: {
        title: STRINGS.Manage,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-business" size={25} color={tintColor} />
        },
      },
    },
  },
  {
    tabBarOptions: { activeTintColor: Colors.primary },
  }
)

const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: TabNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
