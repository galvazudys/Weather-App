import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const temps = cityData
            .list
            .map(weather => weather.main.temp);
        const pressure = cityData
            .list
            .map(weather => weather.main.pressure);

        const humidity = cityData
            .list
            .map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={cityData.city.name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart color="red" data={temps} units="C"/>
                </td>
                <td>
                    <Chart color="green" data={pressure} units="hPa"/>
                </td>
                <td>
                    <Chart color="black" data ={humidity} units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Tempeture (K)</th>
                            <th>Pressure(hPa)</th>
                            <th>Humidity(%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this
                            .props
                            .weather
                            .map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = ({weather}) => { // replace state with {weather}
    return {weather}; //{weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);