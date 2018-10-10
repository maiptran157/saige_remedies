import React from 'react';
import './category_container.scss';
import { Link } from 'react-router-dom';
// import allergies from '../../assets/images/category/allergies.png';
// import circulatory_problems from '../../assets/images/category/circulatory_problems.png';
// import skin_problems from '../../assets/images/category/skin_problems.png';
// import digestive_disorders from '../../assets/images/category/digestive_disorders.png';
// import nerve_and_stress_related_problems from '../../assets/images/category/nerve_&_stress_related_problems.png';
// import respiratory_tract_problems from '../../assets/images/category/respiratory_tract_problems.png';
// import musculoskeletal_problems from '../../assets/images/category/musculoskeletal_problems.png';
// import reproductive_and_menstrual_problems from '../../assets/images/category/reproductive_&_menstrual_problems.png';
// import infants_and_children from '../../assets/images/category/infants_&_children.png';
// import elderly from '../../assets/images/category/elderly.png';
// import urinary_and_fungal_infections from '../../assets/images/category/urinary_&_fungal_infections.png';
import all from '../../assets/images/category/all.png';

const textStyle = {
    textDecoration: 'none'
}

export default props => {
    return (
        <div className="category-box">
            <Link to={`/conditions/${props.name}`} className="category-img">
                <img src={all} alt="" />
            </Link>
            <div className="category-name">{props.name}</div>
        </div>
    )
}