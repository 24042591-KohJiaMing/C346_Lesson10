import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Button, Image} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
          <Text style={styles.textStyle}>{item.key}</Text>
          <Image source={{uri: item.pic}} style={styles.image} />
        </TouchableOpacity>
    );
  };

  return (
      <View style={{flex: 1}}>
        <View style={{padding: 20, marginTop: 20}}>
          <Button title="Add New Pokemon"/>
        </View>
        <View style={{borderWidth: 1, flex: 1}}>
          <SectionList contentContainerStyle={{padding: 10}}
                       sections={datasource}
                       renderItem={renderItem}
                       renderSectionHeader={({section: {title, bgcolor}}) => (
                           <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>
                             {title}
                           </Text>
                       )}
          />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const datasource = [
  {
    data:[
      {key: 'Charmander', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png"},
      {key: 'Charmeleon', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5-2x.png"},
      {key: 'Charizard', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png"},
    ],
    title: <Text><FontAwesome5 name="fire-alt" size={20} color="black" />FIRE</Text>,
    bgcolor:"coral",
  },
  {
    data:[
      {key: 'Squirtle', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png"},
      {key: 'Wartortle', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_8-2x.png"},
      {key: 'Blastoise', pic: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9-2x.png"},
    ],
    title:"WATER",
    bgcolor:"skyblue",
  }
];


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 17,
    margin: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 20,
    backgroundColor: 'aliceblue',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
  },
  image: {
    width: 220,
    height: 300,
  }
});
