import React from 'react';
import { Text,StyleSheet, Image, View } from 'react-native';

import { colors, cs } from '../../constants/theme';
import { travelPhotos } from '../../data';

function ProfilePhotos() {
    return (
        <View style={[cs.sectionContainer, {marginTop: 8, backgroundColor: colors.white}]}>
            <Text style={cs.sectionTitle}> My Photos</Text>

            <View style={styles.photoContainer}>
                {travelPhotos.map((photo, index) => {
                    return(
                        <Image source={photo} key={index} style={[styles.photo, {
                            marginRight: (index+1)%3===0? 0:12,
                        }]}/>
                    )
                })}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    photoContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    photo: {
        width: '30%',
        height: 100,
        marginBottom: 12,
        borderRadius: 8,

    }
})
export default ProfilePhotos;