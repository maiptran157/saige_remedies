import React, { Component } from 'react';
import './ailment_container.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSearchTerm } from '../../actions'
import woodenBackground from '../../assets/images/wood_bg.jpg';

const textStyle = {
    textDecoration: 'none',
    fontWeight: 'bold',
    textShadow: '2px 2px #000000',
}

const background = {
    backgroundImage: `url(${woodenBackground})`,
    backgroundSize: 'cover',
    boxShadow: '0 10px 10px #000'
}


class AilmentContainer extends Component {
    render() {
        console.log("PROPS IN INPUT BAR:", this.props);
        const { _id, name, categoryId } = this.props;
        return (
            <Link to={`/conditions/${categoryId}/${_id}`} style={background} className="ailment">
                <div style={textStyle} className="ailment-name">{name}</div>
            </Link>
        )
    }
}



function mapStateToProps(state) {
    return {
        symptomId: state.search.symptomId,
        categoryId: state.search.categoryId
    }
} 

export default connect(null, {
    userSearchTerm: userSearchTerm,
})(AilmentContainer);