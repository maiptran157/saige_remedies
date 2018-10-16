import React, { Component } from 'react';
import './condition_detail_container.css';
import RemedyNameContainer from './remedy_name_container';

class RemedyResultsContainer extends Component {

    render() {
        const { treatment, symptomName } = this.props;
        const remedyName = () => {
            if (!treatment) {
                return null;
            } else {
                return treatment.map((treatmentInfo, index) => {
                    console.log("treatmentInfo:", treatmentInfo);
                    const { _id, ingredients } = treatmentInfo;
                    console.log("ingredients:", ingredients);
                    let ingredientsString = "";
                    let matchRegex = / \(([^\)]+)\)/gm;
                    if (ingredients.length === 1) {
                        ingredientsString = ingredients[0].name.replace(matchRegex, "");
                    } else {
                        for (let i = 0; i < ingredients.length; i++) {
                            if (i === ingredients.length - 1) {
                                ingredientsString += `and ${ingredients[i].name.replace(matchRegex, "")}`
                            } else {
                                ingredientsString += `${ingredients[i].name.replace(matchRegex, "")} `
                            }
                        }
                    }
                    return <RemedyNameContainer
                        key={index}
                        _id={_id}
                        name={ingredientsString}
                    />
                })
            }
        }

        return (
            <div className="remedy-results-container">
                <div className="remedy-result-total-message">
                    <span className="remedy-result-total-number"> {treatment ? treatment.length : null} remedy results for {symptomName}</span>
                </div>
                <div className="remedy-results-group">
                    <div className="remedy-results">
                        {remedyName()}
                        <div className="end-of-result-message">End of results</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RemedyResultsContainer;
