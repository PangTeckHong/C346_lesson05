import React from "react";
import { StyleSheet, Text, View, SectionList, Button, Image, TouchableOpacity } from 'react-native';

const pokemonData = [
  {
    title: 'WATER',
    data: [
      {name: 'Blastoise', cardNumber: '9', element: 'Water',},
      {name: 'Poliwag', cardNumber: '60', element: 'Water',},
    ],
  },
  {
    title: 'FIRE',
    data: [
      {name: 'Charmander', cardNumber: '4', element: 'Fire',},
      {name: 'Charizard', cardNumber: '6', element: 'Fire',},
    ],
  },
  {
    title: 'ELECTRIC',
    data: [
      {name: 'Pikachu', cardNumber: '25', element: 'Fire',},
      {name: 'Raichu', cardNumber: '26', element: 'Fire',},
    ],
  },
  {
    title: 'GRASS',
    data: [
      {name: 'Ivysaur', cardNumber: '2', element: 'Fire',},
      {name: 'Venusaur', cardNumber: '3', element: 'Fire',},
    ],
  },
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image
            source={{uri: `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.cardNumber}-2x.png`}}
            style={styles.cardImage}  // Adding the image styling here
        />
      </TouchableOpacity>
  );
};

const renderSection = ({ section }) => {
  // Set the background color based on the section title
  let backgroundColor;
  let textColor;
  if (section.title === 'WATER') {
    backgroundColor = 'skyblue';
    textColor = "#894DEB";  // Blue for Water
  } else if (section.title === 'ELECTRIC') {
    backgroundColor = 'yellow';
    textColor = "#EBA44D";  // Yellow for Electric
  } else if (section.title === 'FIRE') {
    backgroundColor = '#F88E03';
    textColor = "red";  // Red for Fire
  }else if (section.title === 'GRASS') {
    backgroundColor = '#3FE000';
    textColor = "green";  // Red for Fire
  } else {
    backgroundColor = 'gray';  // Default color if no match
  }

  return (
      <View style={[styles.headerContainer, { backgroundColor }]}>
        <Text style={[styles.headerText, { color: textColor }]}>
          {section.title}
        </Text>
      </View>
  );
};

function App() {
  return (
      <View style={styles.container}>
        <Button title="Add Card" />
        <SectionList
            sections={pokemonData}
            renderItem={renderItem}
            renderSectionHeader={renderSection}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    margin: 20,
    backgroundColor:'#E5E0F6'
  },
  opacityStyle: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  cardImage: {
    width: '170', // Set the width of the image
    height: '240', // Set the height of the image
    marginLeft: 10,  // Added margin for spacing between the text and image
  },
  headerContainer: {
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
    flex: 1
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
