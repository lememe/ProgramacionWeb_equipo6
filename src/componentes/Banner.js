import React, {Component} from 'react';
import './Banner.css';

class Banner extends Component
{
    render()
    {
        const {texto,numero}=this.props;
        return(
            <div className='Banner'>
                {texto}{numero}

            </div>
        )
    }
}

export default Banner;