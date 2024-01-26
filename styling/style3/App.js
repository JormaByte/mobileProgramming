import { useState } from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import SelectDropdown from 'react-native-select-dropdown';
import Styles from './styles/Styles.js';
import { RadioButton } from 'react-native-paper';

const products = [
  {name: "Google Chromecast 4k", price: 77},
  {name: "Sony WH-1000XM4", price: 299},
  {name: "JBL Flip 6", price: 79},
  {name: "Genelec 83330A", price: 899}
];

const shippingOptions = [
  {type: 'Fetch from store', price: 0},
  {type: 'DHL', price: 8},
  {type: 'UPS', price: 10},
  {type: 'Post letter', price: 4},
]

export default function App() {

  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState(products[0]);
  const [shipping, setShipping] = useState(0);

  return (
    <View style={Styles.container}>
      <SelectDropdown 
        data={products.map(product => product.name + product.price)}
        onSelect={setProduct}
      />

      <Text>Quantity</Text>
      <NumericInput/>

      <RadioButton.Group onValueChange={setShipping}
      value={shipping}>
      {shippingOptions.map((option) => (
        <RadioButton.Item value={option.type} key={option.type} label={`${option.type} - $${option.price}`}  />
      ))}
      </RadioButton.Group>

    </View>
  );
}


