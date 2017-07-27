import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import {List, ListItem} from 'react-native-elements'
import axios from 'axios'

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users:[]
        }
    }
    componentWillMount(){
        let self = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(res){
                self.setState({
                    users:res.data.concat(res.data)
                });
            });
    }
    userDetail (user){
        this.props.navigation.navigate('Details', user);
    }
    render (){
        return (
                <ScrollView>
                    <List>
                        {this.state.users.map((user) => (
                            <ListItem
                                key={user.id + Math.random()}
                                title={user.name}
                                subtitle={user.email}
                                onPress={() => this.userDetail(user)}
                            />
                        ))}
                    </List>
                </ScrollView>
        )
    }
}

export default Users;