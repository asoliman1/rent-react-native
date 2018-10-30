import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Home from './pages/home';
import Deps from './pages/deps';
import Welcome from './pages/welcome';
import PlaceDetails from './pages/place-details';
import Vouchers from './pages/vouchers';
import VoucherDetails from './pages/voucher-details';
import Reviews from './pages/reviews';
import ReportPlace from './pages/report-place';
import Login from './pages/login';
import Signup from './pages/signup';
import ChangePass from './pages/change-pass';
import Reserve from './pages/reserve';
import Reservations from './pages/reservations';
import Profile from './pages/profile';
import About from './pages/about';
import Contact from './pages/contact';
import Conversations from './pages/conversations';
import ChatRoom from './pages/chatroom';
import AddReview from './pages/add-review';
import Places from './pages/places';
import TermsConditions from './pages/terms-conditions';
import store from '../app/redux/store'

const _store = store;

const Tabs = createMaterialTopTabNavigator({
  popular: {
    screen: Places,
    path: '/home/popular'
  },
  nearby: {
    screen: Places,
    path: '/home/nearby'
  },
  all: {
    screen: Places,
    path: 'home/all'
  }
});

const Drawer = createDrawerNavigator({
  Tabs :{screen:Tabs},
  Vouchers: Vouchers,
  Reservations: Reservations,
  Profile: Profile,
  About: About,
  Contact: Contact,
  Conversations: Conversations,
  Terms_Conditions: TermsConditions
});

const Stack = createStackNavigator({

  Welcome: {
    screen: Welcome,
    path: '/welcome',
    navigationOptions: { title: 'Welcome' }
  },
  home: {
    screen: Drawer,
    path: '/home',
    navigationOptions: { title: 'Home' }
  },
  departments: {
    screen: Deps,
    path: '/deps',
    navigationOptions: { title: 'Departments' }
  },
  place_details: {
    screen: PlaceDetails,
    path: '/place/:id',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  places: {
    screen: Places,
    path: '/places',
    navigationOptions: ({ navigation }) => ({
      title: `Places`,
    }),
  },
  voucher_details: {
    screen: VoucherDetails,
    path: '/voucher/:id',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
    }),
  },
  reviews: {
    screen: Reviews,
    path: '/reviews',
    navigationOptions: ({ navigation }) => ({
      title: `Reviews`,
    }),
  },
  report_place: {
    screen: ReportPlace,
    path: '/report-place/:id',
    navigationOptions: ({ navigation }) => ({
      title: `report ${navigation.state.params.name}`,
    }),
  },
  login: {
    screen: Login,
    path: '/login',
    navigationOptions: ({ navigation }) => ({
      title: `Login`,
    }),
  },
  signup: {
    screen: Signup,
    path: '/signup',
    navigationOptions: ({ navigation }) => ({
      title: `SignUp`,
    }),
  },
  change_password: {
    screen: ChangePass,
    path: '/change_password',
    navigationOptions: ({ navigation }) => ({
      title: `Change Password`,
    }),
  },
  reservation: {
    screen: Reserve,
    path: '/reservation/:id',
    navigationOptions: ({ navigation }) => ({
      title: `Reservations ${navigation.state.params.id}`,
    }),
  },
  reserve: {
    screen: Reserve,
    path: '/reserve/:id',
    navigationOptions: ({ navigation }) => ({
      title: `Reserve ${navigation.state.params.name}`,
    }),
  },

  chat_room: {
    screen: ChatRoom,
    path: '/chat_room',
    navigationOptions: ({ navigation }) => ({
      title: `Chat room`,
    }),
  },
  add_review: {
    screen: AddReview,
    path: '/add_review',
    navigationOptions: ({ navigation }) => ({
      title: `Add review `,
    }),
  }
}, {
    headerMode: 'float',
    headerTransitionPreset: 'uikit',
    navigationOptions: {
      gesturesEnabled: true,
    },
    initialRouteName: 'login'
  });




export default class App extends Component {
  render() {
    return (
      <Provider store={_store}>
      <View style={styles.container}>
        <Stack />
      </View>
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
