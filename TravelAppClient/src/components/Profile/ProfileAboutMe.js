import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { colors, cs } from '../../constants/theme';
import { traveler } from '../../data';

function ProfileAboutMe(props) {
    return (
        <View style={styles.container}>
            <Text style={cs.sectionTitle}>ABOUT ME</Text>        
            <Text style={styles.about}>{traveler.aboutMe}</Text>        
        </View>
    );
}
const styles = StyleSheet.create({
    about:{
        fontSize: 15,
        fontWeight: '500',
        color: colors.darkGray,
        lineHeight: 22,
        textAlign: 'justify'
    },
    container:{
        margin: 32,
    },
})
export default ProfileAboutMe;