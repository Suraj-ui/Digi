import React, { useState } from 'react';
import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import UserProfile from './UserProfile';


const Ham = () => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const user = {
    name: 'User Name',
    detail: 'User Designation',
  };

  const handleProfileIconPress = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsProfileModalVisible(false);
  };

  return (
    <View>
      {/* Render your hamburger icon here */}
      <TouchableOpacity onPress={handleProfileIconPress}>
      <Text style={styles.hamburgerIcon}>☰</Text>
      </TouchableOpacity>
      <UserProfile
        isVisible={isProfileModalVisible}
        user={user}
        onClose={handleProfileIconPress}
        onLogout={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    hamburgerIcon: {
      color:'#fff',
      fontSize: 30,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    userName: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    userDetail: {
      fontSize: 16,
      marginBottom: 20,
    },
    logoutButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    logoutButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default Ham;
