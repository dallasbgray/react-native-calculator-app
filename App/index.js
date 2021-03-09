import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Dimensions } from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './util/calculator';
//import RNShake from 'react-native-shake';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#202020',
        backgroundColor: '#000000',
        justifyContent: 'flex-end',
    },
    value: {
        color: '#fff',
        fontSize: 100,
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
    },
    containerPortrait: {
        // flexDirection: 'column',
    },
    containerLandscape: {
        // flexDirection: 'row',
    },
    // rowPortrait: {
    //     flexDirection: 'column',
    // },
    // rowLandscape: {
    //     flexDirection: 'row',
    // },
});

export default class App extends React.Component {
    //not using because errors were received with the constructor
    //    state = initialState;

    constructor() {
        super();

        this.state = {
            currentValue: '0',
            displayedValue: null,
            operator: null,
            previousValue: null,
            orientation: null,
        };

        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            if (dim.height > dim.width) {
                console.log("orientation: Portrait");
            } else {
                console.log("orientation: Landscape");
            }
            return dim.height >= dim.width;
        };

        const isLandscape = () => {
            const dim = Dimensions.get('screen');
            if (dim.height > dim.width) {
                console.log("orientation: Portrait");
            } else {
                console.log("orientation: Landscape");
            }
            return dim.width >= dim.height;
        };

        //state or setState here?
        this.State = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    }

    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
    }




    // _onLayout(e) {
    //     console.log("Screen Orientation Changed...")
    //     this.setState({
    //         screenWidth: Dimensions.get('window').width,
    //         screenHeight: Dimensions.get('window').height,
    //     })
    // }


    // only method for unused strategy
    // DetectOrientation = () => {
    //     if (this.state.Width_Layout > this.state.Height_Layout) {

    //         // code that executes when on landscape mode

    //         this.setState({
    //             OrientationStatus: 'Landscape Mode'
    //         });
    //     }
    //     else {

    //         //  code that executes when on portrait mode

    //         this.setState({
    //             OrientationStatus: 'Portrait Mode'
    //         });
    //     }
    // }




    render() {
        if (this.state.orientation === 'portrait') {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <SafeAreaView style={styles.containerPortrait}>
                        <Text style={styles.value}>
                            {parseFloat(this.state.currentValue).toLocaleString()}
                        </Text>

                        <Row>
                            <Button
                                text="C"
                                theme="secondary"
                                onPress={() => this.handleTap('clear')}
                            />
                            <Button
                                text="+/-"
                                theme="secondary"
                                onPress={() => this.handleTap('posneg')}
                            />
                            <Button
                                text="%"
                                theme="secondary"
                                onPress={() => this.handleTap('percentage')}
                            />
                            <Button
                                text="/"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '/')}
                            />
                        </Row>

                        <Row>
                            <Button text="7" onPress={() => this.handleTap('number', 7)} />
                            <Button text="8" onPress={() => this.handleTap('number', 8)} />
                            <Button text="9" onPress={() => this.handleTap('number', 9)} />
                            <Button
                                text="x"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '*')}
                            />
                        </Row>

                        <Row>
                            <Button text="4" onPress={() => this.handleTap('number', 4)} />
                            <Button text="5" onPress={() => this.handleTap('number', 5)} />
                            <Button text="6" onPress={() => this.handleTap('number', 6)} />
                            <Button
                                text="-"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '-')}
                            />
                        </Row>

                        <Row>
                            <Button text="1" onPress={() => this.handleTap('number', 1)} />
                            <Button text="2" onPress={() => this.handleTap('number', 2)} />
                            <Button text="3" onPress={() => this.handleTap('number', 3)} />
                            <Button
                                text="+"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '+')}
                            />
                        </Row>

                        <Row>
                            <Button
                                text="0"
                                size="double"
                                onPress={() => this.handleTap('number', 0)}
                            />
                            <Button text="." onPress={() => this.handleTap('number', '.')} />
                            <Button
                                text="="
                                theme="accent"
                                onPress={() => this.handleTap('equal')}
                            />
                        </Row>
                    </SafeAreaView>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <StatusBar barStyle="light-content" />
                    <SafeAreaView style={styles.containerLandscape}>
                        <Text style={styles.value}>
                            {parseFloat(this.state.currentValue).toLocaleString()}
                        </Text>

                        <Row>
                            <Button
                                text="C"
                                theme="secondary"
                                onPress={() => this.handleTap('clear')}
                            />
                            <Button
                                text="+/-"
                                theme="secondary"
                                onPress={() => this.handleTap('posneg')}
                            />
                            <Button
                                text="%"
                                theme="secondary"
                                onPress={() => this.handleTap('percentage')}
                            />
                            <Button
                                text="/"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '/')}
                            />
                        </Row>

                        <Row>
                            <Button text="7" onPress={() => this.handleTap('number', 7)} />
                            <Button text="8" onPress={() => this.handleTap('number', 8)} />
                            <Button text="9" onPress={() => this.handleTap('number', 9)} />
                            <Button
                                text="x"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '*')}
                            />
                        </Row>

                        <Row>
                            <Button text="4" onPress={() => this.handleTap('number', 4)} />
                            <Button text="5" onPress={() => this.handleTap('number', 5)} />
                            <Button text="6" onPress={() => this.handleTap('number', 6)} />
                            <Button
                                text="-"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '-')}
                            />
                        </Row>

                        <Row>
                            <Button text="1" onPress={() => this.handleTap('number', 1)} />
                            <Button text="2" onPress={() => this.handleTap('number', 2)} />
                            <Button text="3" onPress={() => this.handleTap('number', 3)} />
                            <Button
                                text="+"
                                theme="accent"
                                operator={this.state.operator}
                                onPress={() => this.handleTap('operator', '+')}
                            />
                        </Row>

                        <Row>
                            <Button
                                text="0"
                                size="double"
                                onPress={() => this.handleTap('number', 0)}
                            />
                            <Button text="." onPress={() => this.handleTap('number', '.')} />
                            <Button
                                text="="
                                theme="accent"
                                onPress={() => this.handleTap('equal')}
                            />
                        </Row>
                    </SafeAreaView>
                </View>
            );
        }
    }
}