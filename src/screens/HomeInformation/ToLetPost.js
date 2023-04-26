import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import Input from '../../components/Input'
import { StyleSheet } from 'react-native'
import Text from '../../components/text/text'
import SelectDropdown from 'react-native-select-dropdown'
import { CheckBox } from 'react-native-elements';


const genderOptions = ['Male', 'Female']


export default function ToLetPost() {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([
        { label: 'Attached Bathroom', checked: false },
        { label: 'Available Bus Seat', checked: false },
        { label: 'Attached Balcony', checked: false },
        { label: 'Gas Line', checked: false },
        { label: 'Roof Access', checked: false },
        { label: 'Supply Water', checked: false },
        { label: 'Fridge Available', checked: false }
    ]);
    const [selectedItem, setSelectedItem] = useState(null);
    const places = ['Sonapur', 'Maijdee', 'Housing', 'Chowrasta', 'White Hall', 'Bus Terminal', 'Masterpara', 'Super Market', 'Hospital Road'];
    const batches = ['12th Batch', '13th Batch', '14th Batch', '15th Batch', '16th Batch', '17th Batch'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectItem = (batch) => {
        setSelectedItem(batch);
        setIsOpen(false);
    };

    const handleCheckboxChange = (index) => {
        const newOptions = [...options];
        newOptions[index].checked = !newOptions[index].checked;
        setOptions(newOptions);
    };
    const [gender, setGender] = useState(null)
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")

    const navigation = useNavigation()
    return (
        <View>
            <Button
                title='Back'
                customStyles={{ width: 80, borderRadius: 5, padding: 5 }}
                onPress={() => navigation.goBack()} />
            <View>
                <Input
                    placeholder='Full Name'
                    onChangeText={(text) => setName(text)}
                    required
                />
                <Input
                    placeholder='Phone Number'
                    keyboardType='numeric'
                    onChangeText={(text) => setContact(text)}
                />

                <Text preset='base' style={{ marginLeft: '15%', paddingTop: 20 }}>ToLet seat for:</Text>

                {
                    genderOptions.map((option) => {
                        const selected = option == gender;
                        return (
                            <Pressable
                                onPress={() => setGender(option)}
                                key={option}
                                style={styles.radioSelect}
                            >
                                <View style={[styles.outerRadio, selected && styles.selectedOuter]}>
                                    <View style={[styles.innerRadio, selected && styles.selectedInner]}></View>
                                </View>
                                <Text style={{ marginLeft: 10 }}>{option}</Text>
                            </Pressable>
                        )
                    })
                }
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '15%' }}>
                    <View>
                        <TouchableOpacity onPress={toggleDropdown}>
                            <Text style={styles.batchDrp}>{selectedItem || 'Preferred Batch'}</Text>
                        </TouchableOpacity>
                        {isOpen && (
                            <View>
                                {batches.map((batch, index) => (
                                    <TouchableOpacity key={index} onPress={() => handleSelectItem(batch)}>
                                        <Text style={{ marginLeft: '15%', paddingTop: 10 }}>{batch}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                    <View style={styles.viewContainer}>
                        <SelectDropdown
                            data={places}
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index);
                            }}
                            defaultButtonText={'Location'}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                return item;
                            }}
                            buttonStyle={styles.dropdown1BtnStyle}
                            buttonTextStyle={styles.dropdown1BtnTxtStyle}
                            renderDropdownIcon={isOpened => {
                                return <View name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                            }}
                            dropdownIconPosition={'right'}
                            dropdownStyle={styles.dropdown1DropdownStyle}
                            rowStyle={styles.dropdown1RowStyle}
                            rowTextStyle={styles.dropdown1RowTxtStyle}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <Text style={styles.question}>Select one or more options:</Text>
                    {options.map((option, index) => (
                        <CheckBox
                            key={index}
                            title={option.label}
                            checked={option.checked}
                            containerStyle={{ width: '40%', flexDirection:'column',  }}
                            onPress={() => handleCheckboxChange(index)}
                        />
                    ))}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    radioSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: '15%'
    },
    outerRadio: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#cfcfcf',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerRadio: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        borderWidth: 1,
        borderColor: '#cfcfcf'
    },
    selectedOuter: {
        borderColor: 'orange'
    },
    selectedInner: {
        borderColor: 'orange',
        backgroundColor: 'orange'
    },
    batchDrp: {
        marginTop: 20,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#ccff99',
        borderColor: 'green',
        width: '100%',
        padding: 5,
    },
    dropdown1BtnStyle: {
        marginLeft: 10,
        width: '95%',
        height: 30,
        backgroundColor: '#ccff99',
        borderWidth: 1,
        borderColor: 'green',
        marginVertical: 20
    },
    dropdown1BtnTxtStyle: { textAlign: 'center', padding: 5 },
    dropdown1DropdownStyle: { backgroundColor: 'black', height: 100 },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    container: {
        padding: 30,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5, 
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
});