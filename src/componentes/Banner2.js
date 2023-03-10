import React, {Component} from 'react';
import './Banner2.css';

class Banner2 extends Component
{
    render()
    {
        const {texto,numero}=this.props;
        return(
            <div className='Banner2'>
                {texto}{numero}

            </div>
        )
    }
}

export default Banner2;