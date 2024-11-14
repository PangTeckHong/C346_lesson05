import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList } from 'react-native';

const datasource = [
    {
        data:[{key: 'a'}, {key: 'e'}, {key: 'i'}, {key: 'o'}],
        title:"Vowels"
    },
    {
        data:[{key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'f'}, {key: 'g'}, {key: 'h'},
            {key: 'j'}, {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'p'},
            {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'}, {key: 'u'}, {key: 'v'}, {key: 'w'}, {key: 'x'},
            {key: 'y'}, {key: 'z'}],
        title:"Consonants"
    }
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
}

const renderSection = ({section}) => {
    const backgroundColor = section.title === "Vowels" ? 'skyblue' : 'khaki'; // Blue for Vowels, Yellow for Consonants

    return (
        <Text style={[styles.headerText, {backgroundColor}]}>
            {section.title}
        </Text>
    )
}

function App() {
    return (
        <View style={{margin:10}}>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSection}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default App;


