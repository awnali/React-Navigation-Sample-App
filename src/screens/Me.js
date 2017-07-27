import React from 'react'
import {ScrollView} from 'react-native'
import {Tile, Button, List, ListItem} from 'react-native-elements'

class Me extends React.Component {
    constructor(props){
        super();
        this.user = {
            name: 'Awn',
            email: 'awn@turnlunchon.com',
            phone: '971557954034',
            username: 'awn.ali',
            dob:'March 18',
            address: {
                city: 'Dubai',
                street: 'Media city'
            }
        }
    }
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };
    render() {
        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: 'https://scontent.fauh1-1.fna.fbcdn.net/v/t31.0-8/12273767_10153850526233159_833742572904309348_o.jpg?oh=b134cfcc60d3a80fee55adf6bfddac9b&oe=5A0C834D&dl=1'}}
                    featured
                    title={this.user.name}
                    caption={this.user.email}
                />

                <Button
                    title="Settings"
                    buttonStyle={{ marginTop: 20 }}
                    onPress={this.handleSettingsPress}
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={this.user.email}
                        hideChevron
                    />
                    <ListItem
                        title="Phone"
                        rightTitle={this.user.phone}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Username"
                        rightTitle={this.user.username}
                        hideChevron
                    />
                </List>

                <List>
                    <ListItem
                        title="Birthday"
                        rightTitle={this.user.dob}
                        hideChevron
                    />
                    <ListItem
                        title="City"
                        rightTitle={this.user.address.city}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}
export default Me;