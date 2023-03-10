import React,{Component} from "react";
import './Footer.css';
import PropTypes from 'prop-types'; // ES6

class Footer extends Component
{
    render()
    {
        const {children}=this.props;
        return(
            <div className="Footer">
                <h3>{children[0]}{children[1]}</h3>
             
            </div>
        )
    }
}


export default Footer;


Footer.propTypes={ children:PropTypes.array}
Footer.defaultProps={children:["Texto #",4]}