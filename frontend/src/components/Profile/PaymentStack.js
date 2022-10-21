import React, { useState } from 'react';
import {
    View,
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Paystack } from 'react-native-paystack-webview';


const MakePayment = ({budget, setPayment, name, id}) => {      
   return(
    <Paystack
        paystackKey="pk_test_3c554f57b3a27709a065a79de4449f51f0bb6094"
        amount={budget.toString()}
        channels={["card", "ussd"]}
        currency="ZAR"
        billingEmail="raphael@something.com"
        activityIndicatorColor="green"
        onCancel={(cancel) => {
            // console.log("Cancelado", cancel)
            setPayment(false);
        }}
        onSuccess={(res) => {
            // console.log("Success", res, "nombre beneficiario",name,"id beneficiario", id)
            setPayment(false)
        }}
        autoStart={true}
        />
   )
    
}

const PaymentBtn = ({name, id, inputTitle, placeHolder, value, dNone}) => {
    const [amountOfBudget, setAmountOfBudget] = useState(0);
    const [payment, setPayment ] = useState(false);


    return (
        <View className="w-[100%] justify-center">
            {dNone != true ?
            <View>
                <Text className="mx-8 my-2 self-start text-[16px] font-medium">{inputTitle}</Text>
                <TextInput
                    onChangeText={setAmountOfBudget}
                    value={amountOfBudget}
                    keyboardType='numeric'
                    placeholder={placeHolder}
                    className="mb-8 bg-[#DFD8E2] rounded-xl w-[90%] h-[39px] pl-3 mx-auto"
                />
            </View> : null
            }
            {payment != false ? 
            <MakePayment 
                budget={amountOfBudget || value} 
                setPayment={setPayment}
                name={name}
                id={id}    
                /> : null }
            <TouchableOpacity
                className="w-[90%] py-2 border bg-dark-purple rounded-xl mb-20 mx-auto"
                onPress={() => setPayment(true)}
            >
                <Text className="text-center text-white">                    
                        "INGRESAR DINERO"
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default PaymentBtn;
