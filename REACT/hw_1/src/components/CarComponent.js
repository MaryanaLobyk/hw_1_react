import React, {Component} from 'react';
import './carStyle.css'

class CarComponent extends Component {
    render() {
        let {item, cls} = this.props;
        return (
            <div className={cls}>
                {item.producer} - {item.year} - {item.power}
            </div>
        );
    }
}

export default CarComponent;