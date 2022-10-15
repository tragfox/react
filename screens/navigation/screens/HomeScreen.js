import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLOURS, Items } from '../../components/database/Database'
import { auth } from '../../../firebase'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

useEffect(() => {
 const unsubscribe = navigation.addListener('focus',()=>{
  getDataFromDB()
 });

 return unsubscribe;
}, [navigation])

// get data from DB
const getDataFromDB = () => {
  let productList = [];
  let accessoryList = [];
  for (let index = 0; index < Items.length; index++) {
    if (Items[index].category == 'product') {
      productList.push(Items[index]);
    } else if (Items[index].category == 'accessory') {
      accessoryList.push(Items[index]);
    }
  }

  setProducts(productList);
  setAccessory(accessoryList);
};

//create an product reusable card

const ProductCard = ({data}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Productinfo', {productID: data.id})}
      style={{
        width: '48%',
        marginVertical: 14,
      }}>
      <View
        style={{
          width: '100%',
          height: 100,
          borderRadius: 10,
          backgroundColor: COLOURS.backgroundDark,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        {data.isOff ? (
          <View
            style={{
              position: 'absolute',
              width: '20%',
              height: '24%',
              backgroundColor: COLOURS.green,
              top: 0,
              left: 0,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.white,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              {data.offPercentage}%
            </Text>
          </View>
        ) : null}
        <Image
          source={data.productImage}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          color: COLOURS.black,
          fontWeight: '600',
          marginBottom: 2,
        }}>
        {data.productName}
      </Text>
      {data.category == 'accessory' ? (
        data.isAvailable ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.green,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.green,
              }}>
              Available
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="circle"
              style={{
                fontSize: 12,
                marginRight: 6,
                color: COLOURS.red,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.red,
              }}>
              Unavailable
            </Text>
          </View>
        )
      ) : null}
      <Text>&#8377; {data.productPrice}</Text>
    </TouchableOpacity>
  );
};
  return (
    <View 
    style={{
      width:'100%',
      height:'100%',
      backgroundColor: COLOURS.white,
    }}>
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"></StatusBar>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            FRUIT SHOP 
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Luôn Tươi Sạch là thương hiệu dẫn đầu khu vực Miền Bắc về hoạt động
            bán buôn và bán lẻ Hoa Quả Nhập Khẩu. Luôn Tươi Sạch cam kết về
            nguồn gốc xuất xứ chính hãng, giá rẻ nhất thị trường, đảm bảo vệ
            sinh an toàn thực phẩm và hoa quả lúc nào cũng tươi ngon tới tay
            người tiêu dùng. Luôn Tươi Sạch với thâm niên hoạt động hơn 10 năm,
            là thương hiệu bán lẻ hoa quả nhập khẩu từ các nước như Mỹ, New
            Zealand, Úc,… Đội ngũ Ban lãnh đạo luôn đặt lợi ích sức khỏe và
            quyền lợi được sử dụng những loại trái cây sạch, an toàn mà giá rẻ
            đến cho người tiêu dùng. Tại Hà Nội Luôn Tươi Sạch có 8 cửa hàng với
            nhiều loại trái cây phong phú như lê, táo, cam, cherry, kiwi,…u
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Products
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.blue,
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
   
   button: {
    alignItems: 'center',
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
    marginLeft:80
    
  },
  buttonText: {
    
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})