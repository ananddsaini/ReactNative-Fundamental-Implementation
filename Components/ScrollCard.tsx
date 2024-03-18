import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View, //like div in the web
} from 'react-native';

function ScrollCard() {
    return (


        <View style={styles.boxContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.SView}>
                <View style={[styles.boxes, styles.boxColor1]}>
                    <Text>Saffron</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor2]}>
                    <Text>White</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor3]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor1]}>
                    <Text>Saffron</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor2]}>
                    <Text>White</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor3]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor1]}>
                    <Text>Saffron</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor2]}>
                    <Text>White</Text>
                </View>
                <View style={[styles.boxes, styles.boxColor3]}>
                    <Text>Green</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    boxes: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: 8,
        // shadowOffset: {
        //     width: 5,
        //     height: 5
        // },
        // shadowColor: "#EF5354",
        // shadowOpacity: 0.5,
        // shadowRadius: 4
    },
    boxContainer: {
        // flex: 1,
        flexDirection: 'row',
        // height: 320,

    },
    boxColor1: {
        backgroundColor: 'orange'
    },
    boxColor2: {
        backgroundColor: 'olive',
    },
    boxColor3: {
        backgroundColor: 'burlywood'
    },
    SView: {
        // width: '100%',
        // height: 120,
        // margin: 10,
        // flex: 1,
        // flexDirection: 'row',
        backgroundColor:'blue'
    }



});
export default ScrollCard;