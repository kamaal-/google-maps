import './App.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import MarkerForm from './components/MarkerForm';
import Search from "./components/Search";

// grand parent level
function App() {
    //const p = useGoogleMap();
    //console.log(p)
    const [infoPosition, setInfoPosition] = useState(null);
    const [infoFormPosition, setInfoFormPosition] = useState(null);
    const [positions, setPosition] = useState(null); // DATA
    const markerDetailsUpdated = (formData) => {
        if(positions){
            const newPosition = positions.slice();
            newPosition.push(formData);
            setPosition(newPosition);
        }else{
            setPosition([formData]);
        }
        setInfoFormPosition(null);
    }

    return (
        <div style={{position: 'relative'}}>
            {positions && <Search items={positions}/>}
            <LoadScript
                googleMapsApiKey="API"
            >
                <GoogleMap
                    onClick={(event) => {
                        // before set marker position
                        // need to set marker details

                        const position = {
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng()
                        }

                        setInfoFormPosition(position)


                    }}
                    mapContainerStyle={{ height: '100vh', width: '100%' }}
                    center={{
                        lat: 7.307897924026764,
                        lng: 80.62722884185546
                    }}
                    zoom={15}
                >
                    <div>
                        { (positions || []).map((data) => <Marker onClick={() => setInfoPosition(data) } position={data.position}/>) }
                        { infoFormPosition && <InfoWindow
                            onCloseClick={() => setInfoPosition(null)}
                            position={infoFormPosition}>
                            <div>
                                <header>
                                    <h6>Info Title</h6>
                                </header>
                                <div>
                                    <MarkerForm position={infoFormPosition} callBack={markerDetailsUpdated}/>
                                </div>
                            </div>
                        </InfoWindow> }

                        { infoPosition && <InfoWindow
                            onCloseClick={() => setInfoPosition(null)}
                            position={infoPosition.position}>
                            <div>
                                <header>
                                    <h6>{infoPosition.name}</h6>
                                </header>
                                <div>
                                    {infoPosition.type}
                                </div>
                                <div>
                                    {infoPosition.price}
                                </div>
                            </div>
                        </InfoWindow> }
                    </div>

                </GoogleMap>
            </LoadScript>
        </div>
    );
};
// Admin can POI

export default App;
// nodejs => mongodb => express => RESTFull API
// large scale
// FrontEND => redux =>
// Final => SPA