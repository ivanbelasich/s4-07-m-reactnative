import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';


const StyledView = styled(View);
const StyledText = styled(Text);

// borrar fakeData despues
const fakeData = [
    {
        id:1,
        title:"Foldsack No. 1",
        price:109.95,
        description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:2,
        title:"Mens Casual Premium Slim Fit T-Shirts ",
        price:22.3,
        description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category:"men's clothing",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:3,
        title:"Mens Cotton Jacket",
        price:55.99,
        description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category:"men's clothing",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:4,
        title:"Mens Casual Slim Fit",
        price:15.99,
        description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category:"men's clothing",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:5,
        title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price:695,
        description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category:"jewelery",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:6,
        title:"Solid Gold Petite Micropave ",
        price:168,
        description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category:"jewelery",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:7,
        title:"White Gold Plated Princess",
        price:9.99,
        description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category:"jewelery",
        date: '23-09-2022',
        location: 'Buenos Aires'
    },
    {
        id:8,
        title:"Pierced Owl Rose Gold Plated Stainless Steel Double",
        price:10.99,
        description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category:"jewelery",
        date: '23-09-2022',
        location: 'Buenos Aires'   
    },
    {
        id:9,
        title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price:64,
        description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category:"electronics",
        date: '23-09-2022',
        location: 'Buenos Aires'
        
    },
    {
        id:10,
        title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price:109,
        description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category:"electronics",
        date: '23-09-2022',
        location: 'Buenos Aires'
    } 
];

const Header = ({ title, price })=> (
    <StyledView className="flex flex-row justify-between flex-wrap">
        <StyledText className='txt-slate800 text-xl w-auto'>{title}</StyledText>
        <StyledText className='text-2xl font-semibold w-auto'>
            <Image source={require("../../assets/MoneyIcon.png")} />{' '} 
            {price}
        </StyledText>
    </StyledView>
);

const DatePlace = ({date, place, category}) => (
    <StyledView className="flex flex-row justify-between">
        <StyledText style={styles.text}>
            <Image source={require('../../assets/Vector.png')}/> {' '}
            {date} 
        </StyledText>
        <StyledText style={styles.text}>
            <Image source={require('../../assets/LocationIcon.png')} />{' '}
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

const Details = () => {    
    const renderItem = ({ item }) => ( 
            <View style={styles.container} className="rounded-md">
                <Header title={item.title} price={item.price} />
                <DatePlace date={item.date} place={item.location} category={item.category} /> 
                <Description description={item.description} />
                {/* <Category category={item.category} /> */}
            </View>
    );

  return (
    <SafeAreaView>
    {/* cambiar nombre del archivo fakeData por la API  */}
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />    
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