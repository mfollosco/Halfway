 //import liraries
import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';


// create a component
const Chats = ({navigation}) => {

    const [data, setData] = useState([])



    const leftCustomView = () => {
        return <TouchableOpacity>
            {data.length > 0 ? <Text>Edit</Text> : <View style={{height: 20}} />}
            <Text style={styles.headingSyle}>{strings.CHATS}</Text>
        </TouchableOpacity>
    }

    const onPressRight = () => {
       navigation.navigate(navigationStrings.USERS)
    }

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View>
                <Text>Flat item</Text>

            </View>
        )
    }, [data])

    const listEmptyComponent = useCallback(() => {
        return (
            <View style={styles.listEmptyStyle}>
                <View style={{}}>
                    <Text style={styles.commStyle}>
                        {strings.TAP_ON} <Image source={imagePath.icEdit} /> <Text style={styles.commStyle}>{strings.IN_THE_TOP_RIGHT_}</Text>
                    </Text>
                </View>
                <Text style={{ ...styles.commStyle, color: colors.grey, marginTop: moderateScaleVertical(16) }}>{strings.YOU_CAN_CHAT_WITH_CONTACTS}</Text>
            </View>
        )
    }, [data])

    return (
        <WrapperContainer
            containerStyle={{ paddingHorizontal: 0 }}
        >
            <HeaderComponent
                rightPressActive={false}
                centerText={``}
                containerStyle={{ paddingHorizontal: 8 }}
                leftCustomView={leftCustomView}
                isLeftView={true}
                rightImg={imagePath.icEdit}
                onPressRight={onPressRight}
            />

            <FlatList
                data={data}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
                contentContainerStyle={{ flexGrow: 1 }}

            />


        </WrapperContainer>
    );
};

export default Chats;