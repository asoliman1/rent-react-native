import React, { Component } from 'react';
import { ActivityIndicator,StyleSheet,ScrollView,Alert,View } from 'react-native';
import { TextInput,Button } from 'react-native-ui-lib';
import { connect } from 'react-redux'
import { login } from '../redux/actions/user';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:'',password:''}
    }

    componentWillReceiveProps(e){
        if(e.state.action.type==='LOGIN_SUCCESS'){
            this.props.navigation.replace('places')
        }
       
    }

    onChangeText(field,text){
        this.setState({[field]:text})
    }

    render() {
        return (
            <View style={styles.container}>
              <ScrollView
          contentContainerStyle={styles.container}
        >
          <TextInput
            text80
            containerStyle={{marginBottom:10}}
            floatingPlaceholder
            placeholder="Email"
            helperText="a@a.com"
            value={this.state.email}
            onChangeText={(e)=>this.onChangeText('email',e)}
          />


          <TextInput
            text70
            containerStyle={{marginBottom:10}}
            floatingPlaceholder
            placeholder="Password"
            helperText="12345678..."
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(e)=>this.onChangeText('password',e)}
            
          />
         
          {this.props.state.login_loading?
            <ActivityIndicator size="large" color="#0000ff"  />:
            <Button
              label={'Login'}
              size={Button.sizes.large}
              style={{marginBottom: 10}}
              enableShadow
              animateLayout
              borderRadius={5}
              ref={element => (this.button_7 = element)}
              onPress={() => this.props.login(this.state.email,this.state.password)}
            />}

          </ScrollView>
                 
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {state:state.authReducer};
}

export default connect(mapStateToProps, { login })(Login);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 25,
    },
 
  });
  