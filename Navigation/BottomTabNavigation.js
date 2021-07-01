import * as React from "react";
import {Text,View} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RFValue} from "react-native-responsive-fontsize";
import FeedScreen from '../Screen/FeedScreen';
import PostScreen from '../Screen/PostScreen';

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab= createMaterialBottomTabNavigator();

const BottomTabNavigator = () =>
{
    return(
        <Tab.Navigator 
            barStyle={styles.bar}
            screenOptions={({route})=>
            ({
                tabBarIcon:({focused, color, size})=>
                {
                    let iconName;
                    if(route.name==="FeedScreen")
                    {
                        iconName= focused ? "home": "home-outline"
                    }
                    else if(rounte.name==="PostScreen")
                    {
                        iconName =focused ? "add-circle" :"add-circle-outline"
                    }
                    return(
                            <Ionicons
                                name= {iconName}
                                size= {RFValue(25)}
                                color={color}
                            />
                        )
                }
              
            })}
            activeColor={"white"}
            inactiveColor={"gray"}
            >
            <Tab.Screen name="FeedScreen" component={FeedScreen}/>
            <Tab.Screen name="PostScreen" component={PostScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;