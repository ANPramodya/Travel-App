import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, cs } from '../../constants/theme';

function ProfileStatus() {
    return (
        <View style={styles.container} >
            <View style={[styles.statContainer]}>
                <Text style={styles.statNumber}>12K</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={[styles.statContainer, styles.divider]}>
                <Text style={styles.statNumber}>12K</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>

            <View style={styles.statContainer}>
                <Text style={styles.statNumber}>12K</Text>
                <Text style={styles.stat}>Followers</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        ...cs.sectionContainer,
        ...cs.rowBetween,
        marginHorizontal: 16,
        borderRadius: 16,
        marginTop: -40,
    },
    divider: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: colors.lightGray,
    },
    stat:{
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: colors.light,
        marginTop: 6,
    },
    statContainer:{
        ...cs.center,
        flex: 1,
    },
    statNumber:{
        fontsize: 24,
        fontWeight: '800',
        color: colors.white,
    },
})
export default ProfileStatus;