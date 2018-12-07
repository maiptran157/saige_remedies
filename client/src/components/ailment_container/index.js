import React, { Component } from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSearchTerm } from '../../actions'
import woodenBackground from '../../assets/images/wood_bg.jpg';

const background = {
    backgroundImage: `url(${woodenBackground})`,
    backgroundSize: 'cover',
}

class AilmentContainer extends Component {
    render() {
        const { _id, name, categoryId } = this.props;
        return (
            <div>
                <Link to={`/conditions/${categoryId}/${_id}`} style={background} className="ailment">
                    <div className="ailment-name">{name}</div>
                </Link>
            </div>
        )
    }
}

export default connect(null, {
    userSearchTerm: userSearchTerm,
})(AilmentContainer);