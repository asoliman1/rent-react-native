import React, { Component } from 'react';
import { View, Text, Button } from 'react-native-ui-lib';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button  onPress={()=>{this.props.navigation.push('home')}} enableShadow label={'go to home'} ></Button>
            </View>
        );
    }
}

export default Welcome;