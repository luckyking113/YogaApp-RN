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
import LoginScreen from 'App/Containers/LoginScreen/LoginScreen';
import TabHeader from '../Components/TabHeaderComponent';
import RegisterHeader from '../Components/RegisterHeader';
import HeaderWithBackBtn from '../Components/HeaderWithBackBtn';
import HeaderWithBtnRTxt from '../Components/HeaderWithBtnRTxt';

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
import HighClassScreen from '../Containers/HighClassScreen/HighClassScreen';
import GeneralClassScreen from '../Containers/GeneralClassScreen/GeneralClassScreen';

//Tab2
import ActScreen from '../Containers/ActScreen/ActScreen';
import SystemNotificationScreen from '../Containers/SystemNotificationScreen/SystemNotificationScreen';
import NoClassDaysScreen from '../Containers/NoClassDaysScreen/NoClassDaysScreen';
import GenerateCardScreen from '../Containers/GenerateCardScreen/GenerateCardScreen';

//Tab3
import BusinessScreen from '../Containers/BusinessScreen/BusinessScreen';
import WishingWallScreen from '../Containers/WishingWallScreen/WishingWallScreen';
import StudyScreen from '../Containers/StudyScreen/StudyScreen';
import TeachingScreen from '../Containers/TeachingScreen/TeachingScreen';
import ManagementScreen from '../Containers/ManagementScreen/ManagementScreen';
import OperateGuideScreen from '../Containers/OperateGuideScreen/OperateGuideScreen';
import SuggestionScreen from '../Containers/SuggestionScreen/SuggestionScreen';
import WarmWinterScreen from '../Containers/WarmWinterScreen/WarmWinterScreen';
import RegisterLession from '../Containers/RegisterLession/RegisterLession';

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
        // HomeScreen: {
        //   screen: HomeScreen,
        //   navigationOptions: ({ navigation }) => ({
        //     header: (<HomeHeaderComponent />),     
        //   }),
        // },
        HomeScreen: {
          screen: createStackNavigator({
            HomeScreen: {
              screen: HomeScreen,
              navigationOptions: ({ navigation }) => ({
                header: (<HomeHeaderComponent />),       
              }),
            },
            RegisterLession: {
              screen: RegisterLession,
              navigationOptions: ({ navigation }) => ({
                header: (<RegisterHeader title={STRINGS.RegisterDetail} navigation = {navigation} />),
              }),
            },
          }),
          navigationOptions: ({ navigation }) => ({
            header: null,
            initialRouteName: 'HomeScreen',
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
            header: (<HeaderWithBtnRTxt title={STRINGS.Member} navigation = {navigation} RText={STRINGS.Manage} />),
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
            header: (<RegisterHeader title={STRINGS.StatisticalSpecification} navigation = {navigation} />),
          }),
        },
        MonthlySailScreen:{
          screen: MonthlySailScreen,
          navigationOptions: ({ navigation }) => ({
            header: (<HeaderWithBtnRTxt title={STRINGS.CardSailAnylizing} navigation = {navigation} RText={STRINGS.Filter} />),
          }),
        },
        AppointmentScreen:{
          // screen: AppointmentScreen,
          screen:createMaterialTopTabNavigator({
            AppointmentScreen:{
              screen:AppointmentScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.AppointmentTab1}</Text>               
                    </View>
                  )
                },
              },
            },
            HighClassScreen:{
              screen:HighClassScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.AppointmentTab2}</Text>               
                    </View>
                  )                  
                },
              },
            },
            GeneralClassScreen:{
              screen:GeneralClassScreen,
              navigationOptions: {                
                tabBarIcon: ({ focused, tintColor }) => {
                  tintColor = '#79ECB3'
                  return (                    
                    <View>
                      {/* <Text style={{color:focused? '#878686':'79ECB3'}}>{STRINGS.Teaching}</Text>  */}
                      <Text style={{color:focused? tintColor:'#787878'}}>{STRINGS.AppointmentTab3}</Text>               
                    </View>
                  )                  
                },
              },
            }
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
            header: (<HeaderWithBtnRTxt title={STRINGS.AgentMission} navigation = {navigation} RText={STRINGS.AgentMissionHeaderRight} />),
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
            header: (<TabHeader title={STRINGS.Action}/>),
            // headerTitleStyle: { 
            //   textAlign:"center", 
            //   flex:1, 
            // },       
          })
        },
        SystemNotificationScreen:{
          screen: SystemNotificationScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Action,
            header: (<HeaderWithBackBtn title={STRINGS.SystemNotification} navigation = {navigation} />),  
            // headerTitleStyle: { 
            //   textAlign:"center", 
            //   flex:1, 
            // },       
          })
        },
        NoClassDaysScreen:{
          screen: NoClassDaysScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Action,
            header: (<HeaderWithBackBtn title={STRINGS.NoClassDays} navigation = {navigation} />),  
            // headerTitleStyle: { 
            //   textAlign:"center", 
            //   flex:1, 
            // },       
          }),
        },
        GenerateCardScreen:{
          screen: GenerateCardScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Action,
            header: (<HeaderWithBackBtn title={STRINGS.GenerateCard} navigation = {navigation} />),  
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
            header: (<TabHeader title={STRINGS.Business}/>),             
          })
        },
        WishingWall:{
          screen: WishingWallScreen,
          navigationOptions: ({ navigation }) => ({
            title: STRINGS.Business,
            header: (<HeaderWithBtnRTxt title={STRINGS.CardSailAnylizing} navigation = {navigation} RText={STRINGS.Filter} />),          
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
            header: (<TabHeader title={STRINGS.Study}/>),             
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
              header: (<TabHeader title={STRINGS.Manage}/>), 
            }),
          },
          AgentMission: {
            screen: AgentMission,
            navigationOptions: ({ navigation }) => ({
              title: navigation.getParam('Title', STRINGS.AgentMission), // Title to appear in status bar  
              // header: (<TabHeader title={STRINGS.AgentMission}/>)         
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
    tabBarOptions: { activeTintColor: '#79ECB3' },
  }
)

const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    // MainScreen: SplashScreen,
    MainScreen:TabNavigator,
    LoginScreen: LoginScreen,
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    HomeNavigator: TabNavigator,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'HomeNavigator',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
