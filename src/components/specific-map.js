import React from "react"
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const mapCenter = { lat: 43.616931, lng: -116.201875 };

const snazzyMapStyles = [
    {
        "featureType": "landscape",
        "stylers": [{ "saturation": -100 }, { "lightness": 60 }]
    }, {
        "featureType": "road.local",
        "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }]
    }, {
        "featureType": "transit",
        "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }]
    }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, {
        "featureType": "water",
        "stylers": [{ "visibility": "on" }, { "lightness": 30 }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#ef8c25" }, { "lightness": 40 }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{ "visibility": "off" }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{ "color": "#b6c54c" }, { "lightness": 40 }, { "saturation": -40 }]
    }, {}];

const StyledAddress = ({ children }) => <g.Address fontStyle='normal'>{children}</g.Address>;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={mapCenter}
        defaultOptions={{ styles: snazzyMapStyles }}
    >
        <Marker
            position={mapCenter}
            onClick={props.onToggleOpen}
            labelAnchor={new google.maps.Point(65, 125)}
            labelStyle={{
                textAlign: "center",
                padding: "0.75em",
                backgroundColor: 'white',
                fontSize: '0.75rem',
                borderRadius: '3px',
                border: '1px solid gainsboro',
            }}>
            <div>
                {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>
                        <StyledAddress><strong>Idaho Building</strong></StyledAddress>
                        <StyledAddress>
                            280 North 8th Street, Suite #118</StyledAddress>
                        <StyledAddress>
                            Boise, ID 83702
                        </StyledAddress>
                        <a href="https://www.google.com/maps/dir//280+N+8th+St,+Boise,+ID+83702/@43.6169187,-116.2020557,20z/data=!4m8!4m7!1m0!1m5!1m1!1s0x54aef8e38170803d:0xa94fa462f5031011!2m2!1d-116.2018726!2d43.6169343"
                           target='_blank'>Get Directions</a>
                    </div>
                </InfoWindow>}
            </div>
        </Marker>
    </GoogleMap>
));

export default class SpecificMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: true }
    }

    toggleOpen = () => {
        this.setState((prevState) => {
            console.log(prevState)
            return { isOpen: !prevState.isOpen }
        })
    }

    render() {
        return (<MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"
            loadingElement={<div style={{ height: `100%` }}/>}
            containerElement={<div style={{ height: `400px` }}/>}
            mapElement={<div style={{ height: `100%` }}/>}
            onToggleOpen={this.toggleOpen}
            isOpen={this.state.isOpen}
        />);
    }
}
