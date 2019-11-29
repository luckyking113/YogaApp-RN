import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import ExampleScreen from 'App/Containers/Example/ExampleScreen';
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen';
import Header from '../Components/HeaderComponent';

//Home screen
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import BookingScreen from '../Containers/BookingScreen/BookingScreen';
import AssignedScreen from '../Containers/AssignedScreen/AssignedScreen';
import MemberScreen from '../Containers/MemberScreen/MemberScreen';
import VisitorScreen from '../Containers/VisitorScreen/VisitorScreen';
import HomeHeaderComponent from '../Components/HomeHeader/HomeHeaderComponent';
import StatisticalScreen from '../Containers/StatisticalScreen/StatisticalScreen';
import MonthlySailScreen from '../Containers/MonthlySailScreen/MonthlySailScreen';
import AppointmentScreen from '../Containers/AppointmentScreen/AppointmentScreen';

//Tab2
import ActScreen from '../Containers/ActScreen/ActScreen';
import BusinessScreen from '../Containers/BusinessScreen/BusinessScreen';
import StudyScreen from '../Containers/StudyScreen/StudyScreen';
import TeachingScreen from '../Containers/TeachingScreen/TeachingScreen';
import ManagementScreen from '../Containers/ManagementScreen/ManagementScreen';
import OperateGuideScreen from '../Containers/OperateGuideScreen/OperateGuideScreen';
import SuggestionScreen from '../Containers/SuggestionScreen/SuggestionScreen';
import WarmWinterScreen from '../Containers/WarmWinterScreen/WarmWinterScreen';

import ManageScreen from '../Containers/ManageScreen/ManageScreen';
import Colors from '../Theme/Colors';

import {STRINGS} from '../Config';

import AgentMission from '../Containers/ManageScreen/Workbench/AgentMission';
import PersonalEducation from '../Containers/ManageScreen/Workbench/PersonalEducation';
import ScanCode from '../Containers/ManageScreen/Workbench/ScanCode';
import YogaHeadline from '../Containers/ManageScreen/Workbench/YogaHeadline';
import Configuration from '../Containers/ManageScreen/Workbench/Configuration';
import ExperienceManagement from '../Containers/ManageScreen/Workbench/ExperienceManagement';


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: createStackNavigator({
        // screen:HomeScreen,
        // navigationOptions: ({ navigation }) => ({
        //   title: STRINGS.ExperienceManagement, // Title to appear in status bar
        // }),
        HomeScreen: {
          screen: HomeScreen,
          navigationOptions: ({ navigation }) => ({
            header: (<HomeHeaderComponent />),            
          }),
        },
        BookingScreen:{
          screen: BookingScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Booking Screen', // Title to appear in status bar
          }),
        },
        AssignedScreen:{
          screen: AssignedScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'Assigned Screen', // Title to appear in status bar
          }),
        },
        MemberScreen:{
          screen: MemberScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'MemberScreen Screen', // Title to appear in status bar
          }),
        },
        VisitorScreen:{
          screen: VisitorScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'VisitorScreen Screen', // Title to appear in status bar
          }),
        },
        StatisticalScreen:{
          screen: StatisticalScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'StatisticalScreen Screen', // Title to appear in status bar
          }),
        },
        MonthlySailScreen:{
          screen: MonthlySailScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'MonthlySailScreen Screen', // Title to appear in status bar
          }),
        },
        AppointmentScreen:{
          screen: AppointmentScreen,
          navigationOptions: ({ navigation }) => ({
            title: 'AppointmentScreen Screen', // Title to appear in status bar
          }),
        },

      }),
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
      // screen: ActScreen,
      screen: createStackNavigator({
        ActScreen:{
          screen: ActScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Action,
            header: (<Header title={STRINGS.Action}/>),
            // headerTitleStyle: { 
            //   textAlign:"center", 
            //   flex:1, 
            // },       
          })
        }
      },
      {
        initialRouteName: 'ActScreen',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {          
          headerStyle: {
            backgroundColor: '#79ECB3',            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',                      
          }          
        },
      }),
      navigationOptions: {
        title: STRINGS.Action,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-alarm" size={25} color={tintColor} />
        },
      },
    },        
    Business: {
      // screen: ActScreen,
      screen: createStackNavigator({
        Business:{
          screen: BusinessScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Business,
            header: (<Header title={STRINGS.Business}/>),             
          })
        }
      },
      {
        initialRouteName: 'Business',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {          
          headerStyle: {
            backgroundColor: '#79ECB3',            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',                      
          }          
        },
      }),
      navigationOptions: {
        title: STRINGS.Business,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="ios-pricetag" size={25} color={tintColor} />
        },
      },
    },
    // Study: {
    //   screen: StudyScreen,
    //   navigationOptions: {
    //     title: STRINGS.Study,
    //     tabBarIcon: ({ focused, tintColor }) => {
    //       return <Icon name="ios-laptop" size={25} color={tintColor} />
    //     },
    //   },
    // },
    Study: {
      // screen: ActScreen,
      screen: createStackNavigator({
        Study:{
          screen: createMaterialTopTabNavigator({
            Teaching: {
              screen:TeachingScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.Teaching}</Text>               
                    </View>
                  )                  
                },
              },
            },
            Management: {
              screen:ManagementScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.Management}</Text>               
                    </View>
                  )                  
                },
              },
            },
            OperateGuide: {
              screen:OperateGuideScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.OperateGuide}</Text>               
                    </View>
                  )                  
                },
              },
            },
            Suggestion: {
              screen:SuggestionScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.Suggestion}</Text>               
                    </View>
                  )                  
                },
              },
            },            
            WarmWinter: {
              screen:WarmWinterScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.WarmWinter}</Text>               
                    </View>
                  )                  
                },
              },
            },            
          },
          {
            tabBarOptions: {  
              activeTintColor: 'red',
              inactiveTintColor:'red',
              showIcon: true,  
              showLabel:false,  
              style: {  
                  backgroundColor:'white'  
              },
              tabStyle: {
              },   
              iconStyle: {
                width: 60,
                height: 30,
                padding:0       //Padding 0 here
              },              
            },
          }),
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Study,
            header: (<Header title={STRINGS.Study}/>),             
          })
        }
      },
      {
        initialRouteName: 'Study',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {          
          headerStyle: {
            backgroundColor: '#79ECB3',            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',                      
          }          
        },
      }),
      navigationOptions: {
        title: STRINGS.Business,
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
              backgroundColor: '#79ECB3',
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
