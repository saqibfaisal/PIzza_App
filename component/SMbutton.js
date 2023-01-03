import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
function SMButton(props) {
    const {onPress, label, color, loader, bgcolor} = props;
    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          disabled={loader}
          style={{backgroundColor: `${bgcolor}`, padding: 10, borderRadius: 30}}>
              <View style={{flexDirection:'row',position:'relative',left:100,alignItems:"center"}}>
              <Text
            style={{
              color: `${color}`,
              fontWeight: '700',
              fontSize: 20,
            //   paddingRight:5
            }}
           >
            {label}
          </Text>
          <ActivityIndicator animating={loader} color={color} size='small'/>
              </View>
        </TouchableOpacity>
      </>
    );
  }
  
  export default SMButton;