import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>

        <View style={styles.profilePicContainer}>
          {/* <Image 
          style={styles.img}
          resizeMode="cover"
          source={""}
        /> */}
        </View>
      </View>
    );
  }
}

export default connect()(Profile);
