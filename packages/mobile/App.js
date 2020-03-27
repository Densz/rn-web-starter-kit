import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, DoctorCard} from '@beys/components';

const App = () => {
  return (
    <ScrollView style={{background: '#F5F5F5', padding: 10}}>
      <View style={{flexDirection: 'column', marginTop: 100}}>
        <Button>hello from react native</Button>
        <View style={{marginTop: 5}}>
          <DoctorCard
            name="Laurent Abcde"
            profession="Medecin traitant"
            address="76 avenue parmentier 75011 Paris"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
