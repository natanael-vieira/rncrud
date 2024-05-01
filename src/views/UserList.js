import React from 'react'
import { View, Text, FlatList } from 'react-native'
import users from '../data/users'
import { Avatar, ListItem } from '@rneui/themed'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar tittle={user.name} rounded source={{uri: user.avatarUrl}} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}