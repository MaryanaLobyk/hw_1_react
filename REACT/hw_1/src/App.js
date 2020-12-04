import React, {Component} from 'react';
import {cars} from "./database/carsDB";
import CarComponent from "./components/CarComponent";


class App extends Component {
  render() {
    return (
        <div>
            {
                cars.map((car, index) => {

                    let cls = index%2 ? 'even' : 'odd'
                     return (<CarComponent
                        item={car}
                        key={index}
                        cls={cls}/>)
                })
            }
        </div>
    );
  }
}

export default App;

