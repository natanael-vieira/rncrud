import React from 'react'
import { View, Text, FlatList } from 'react-native'
import users from '../data/users'
import { Avatar, ListItem, Button, Icon } from '@rneui/themed'

export default props => {

    function getUserItem({ item: user }) {
        return (
            <ListItem 
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}>
                <Button 
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                      }}
                      type="clear"
                      icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button 
                    onPress={() => {confirmUserDeletion(user)}}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
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