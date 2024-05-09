import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { Avatar, ListItem, Button, Icon } from '@rneui/themed'
import UsersContext from '../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o Usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

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
                <ListItem.Chevron />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}