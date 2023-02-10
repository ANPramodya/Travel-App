import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../../constants/theme';
import { cs } from '../../constants/constStyles';
import { traveler } from '../../data';
import icons from '../../constants/icons';

function Location() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image source={icons.Location} style={styles.iconContainer} />
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.location}>{traveler.location}</Text>
                <Text style={styles.distance}>{traveler.distance}Km away</Text>
            </View>
            <Entypo name='chevron-right' size={20} color={colors.darkGray}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        ...cs.rowCenter,
        backgroundColor: colors.light,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    container2:{
        width: 75,
        height: 75,    
    },
    distance: {
        ...cs.smallText,
        color: colors.darkGray,
        margint: 4,
        textTransform: 'uppercase',
    },
    iconContainer:{
        resizeMode: 'center',
        flex:1,
        width: 40,
        backgroundColor: '#e1e1e1',
        marginVertical:17,
        marginLeft: 20,
        borderRadius: 30,
        borderColor: '#e5e5e5',
        borderWidth: 7,
    },
    location:{
        fontSize: 18,
        color: colors.black,
        fontWeight: '500',
    },
})
export default Location;