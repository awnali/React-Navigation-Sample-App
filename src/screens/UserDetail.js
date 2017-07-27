import React from 'react'
import {ScrollView} from 'react-native'
import {List, ListItem, Tile} from 'react-native-elements'
class UserDetail extends React.Component {
    render (){
        const {name, email, phone,username, address} = this.props.navigation.state.params;
        return(
            <ScrollView>
                <Tile
                    imageSrc={{uri: "https://randomuser.me/api/portraits/men/" + Math.floor(Math.random() * (20 - 1 + 1)) + 1+".jpg"}}
                    featured
                    title={name}
                    caption={email}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={username}
                        hideChevron
                    />
                </List>

                <List>

                    <ListItem
                        title="Street"
                        rightTitle={address.street}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={address.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}
export default UserDetail;