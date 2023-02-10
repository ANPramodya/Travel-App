import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {Entypo, Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { colors } from '../../constants/theme';
import { cs } from '../../constants/constStyles';
import Icon from '../shared/Icon';
import { traveler } from '../../data';

function ProfileHeader() {
    return (
        <LinearGradient colors={[colors.darkGradient, colors.lightGradient]} start={[0,0]} end={[1,1]}>
            <View style={styles.container}>
                <View style={cs.rowBetween}>
                    <Icon icon='ArrowLeft'/>
                    <Entypo name="dots-three-vertical" size={20} color={colors.black}/>
                </View>

                <View style={styles.imageContainer}>
                    <View>
                        <View style={styles.check}>
                            <Ionicons name='md-checkmark' size={18} color={colors.primary}/>
                        </View>
                        <Image source={traveler.picture} style={{borderRadius: 32, height: 100, width: 100}}/>
                    </View>
                </View>

                <View style={[cs.center, {marginVertical: 12}]}>
                    <Text style={cs.title}>{traveler.username}</Text>
                    <Text style={[cs.subTitle, {marginTop: 8}]}>traveler/blogger</Text>

                    <TouchableOpacity style={styles.follow}>
                        <Entypo name='plus' size={20} color="rgba(255,255,255,0.6)"/>
                        <Text style={styles.followText}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    check:{
        ...cs.center,
        backgroundColor: colors.white,
        borderRadius: 100,
        width: 32,
        height: 32,
        shadowColor: colors.black,
        shadowOffset: {height: 3, width: 1},
        position: 'absolute',
        shadowOpacity: 0.3,
        zIndex: 1,
        right: -16,
        bottom: 16,
    },
    container: {
        marginHorizontal: 32,
        paddingTop: 32,
        paddingBottom: 72,
    },
    imageContainer:{
        ...cs.center,
        marginTop: 16,
        shadowColor: colors.black,
        shadowOffset: {height: 3,
        width: 1},
        shadowOpacity: 0.5,

    },
    follow: {
        ...cs.button,
        ...cs.rowCenter,
        paddingHorizontal: 24,
        paddingVertical: 8, 
        marginTop: 16,
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 2,

    },
    followText:{
        fontSize: 16,
        color: colors.white,
        fontWeight: '600',
        marginLeft: 4,
    },
})

export default ProfileHeader;