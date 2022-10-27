import React from 'react';
import {Picker} from '@react-native-picker/picker';


const Categorias = () => {
    return (
        <>
            <Picker.Item label="" value="null" enabled={false} />
            <Picker.Item
                label="Java"
                value="java"
                className="text-[#A1A1A1]"
            />
            <Picker.Item label="JavaScript" value="js" />
        </>
    )
}

export default Categorias;