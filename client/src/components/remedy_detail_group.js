import React from 'react';
import './remedy_detail_container.css';

const RemedyDetailGroup = (props) => {
    return (
        <div className="condition-detail-group">
            <h3 className="condition-detail-header">
                <span>Lorem Ipsum</span>
            </h3>
            <div className="condition-detail-description">
                <p className="detail-paragraph">
                    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
                    sodales dolor varius ultrices. Sed vulputate fringilla arcu vel elementum.

                    2. Pellentesque efficitur molestie orci, vitae vulputate massa egestas at. Cras pharetra efficitur pharetra.
                    Praesent pellentesque lacus sit amet arcu varius euismod.

                    3. Duis suscipit lorem nec orci gravida, eget euismod massa rhoncus. Etiam vel diam sodales, venenatis turpis vulputate, faucibus nibh.
                    Fusce turpis orci, commodo ut est et, ornare sagittis justo.

                    4. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce at semper metus, nec
                    vehicula magna.</p>
            </div>
        </div>
    )
}

export default RemedyDetailGroup;
