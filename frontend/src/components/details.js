import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import CustomBtn from './buttons';

const StyledView = styled(View);
const StyledText = styled(Text);


const Header = ({ title, price })=> (
    <StyledView className="flex flex-row justify-between flex-wrap">
        <StyledText className='txt-slate800 text-2xl font-semibold w-auto'>{title}</StyledText>
    </StyledView>
);

const DatePlace = ({date, place, category}) => (
    <StyledView className="flex flex-row justify-between">
        <StyledText style={styles.text}>
            <Image source={require('../assets/Vector.png')}/> {' '}
            {date} 
        </StyledText>
        <StyledText style={styles.text}>
            <Image source={require('../assets/LocationIcon.png')} />{' '}
            {place}
        </StyledText>
        {/* lo movi para mejor visualizacion */}
        <StyledText className='text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center'>{category}</StyledText>    
    </StyledView>
)

const Description = ({description}) => (
    <StyledText className="mt-3 mb-3">
        {description}
    </StyledText>
)

const Category = ({category}) => (
    <StyledView className="flex flex-row justify-end">
        <StyledText className='text-slate-800 rounded-full bg-violet-50 w-auto px-2 text-center'>{category}</StyledText>
    </StyledView>
)

const UserContractor = ({avatar, userName, userLast, deadline, budget}) => (
    <StyledView className="mb-4">
        <StyledView className="flex flex-row">
            <StyledText className="font-bold text-red-500">Deadline:{' '}</StyledText>
            <StyledText className="font-bold">
                {deadline}
            </StyledText>
        </StyledView>
        <StyledView className="flex-row justify-between mt-4">
            <StyledView className="flex flex-row p-2">
                <Image source={{uri:avatar, width:50,height:50}} className="rounded-full text-center" />
                <StyledView className="flex text-center ml-2 mt-1">
                    <StyledText className="font-bold">{userName}{' '}{userLast}</StyledText>
                    <StyledText>Contratador</StyledText>
                </StyledView>
            </StyledView>
            <StyledView>
                <StyledView className='text-slate-800 rounded-2xl bg-violet-50 w-32 h-16 px-2 text-center p-auto pt-2'>
                    <StyledText className="text-center text-xl font-bold">${budget}</StyledText>
                    <StyledText className="text-xs text-center text-[#570E7E]">Presupuesto</StyledText>
                </StyledView>
            </StyledView> 
        </StyledView>
    </StyledView>
)

const Btn = () => (
    <StyledView className="flex flex-row mb-4 justify-around">
        <CustomBtn
            buttonColor="transparent"
            titleColor="#5D1683"
            title="CONTACTAR"
            buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#5D1683',
            borderRadius: 6,
            }}
            textStyle={{fontSize: 20}}
            onPress={() => Alert.alert('Me Clickearon.')}
        />
        <CustomBtn
            buttonColor="#5D1683"
            titleColor="#fff"
            title="APLICAR"
            buttonStyle={{
            width: '40%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#5D1683',
            borderRadius: 6,
            }}
            textStyle={{fontSize: 20}}
            onPress={() => Alert.alert('Me Clickearon.')}
        />
    </StyledView>
)

const Details = ({route}) => {    
    console.log(route.params)
    const items = route.params.value;

  return (
    <SafeAreaView className="mb-4">
    {/* cambiar nombre del archivo fakeData por la API  */}
        <ScrollView style={styles.container} className="rounded-md">
            <Header title={items.title} price={items.budget} />
            <DatePlace date={items.date} place={items.zone} category={items.categorias} /> 
            <StyledText className="mt-4">Descripción</StyledText>
            <Description description={items.description} />
            <UserContractor 
                avatar={items.userAvatar} 
                userName={items.userName} 
                userLast={items.userLastName}
                deadline={items.deadline}
                budget={items.budget}
                />
            <Btn />
            {/* <Category category={item.category} /> */}
        </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#D9C6E3',
    padding: 10,
    marginHorizontal: 10
  },
  text: {
    color: 'rgb(86, 85, 85)',
  }
  
});

export default Details;