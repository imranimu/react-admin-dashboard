import React from 'react';

import { CMedia, CImg, CCardTitle, CCardText } from '@coreui/react';

const ProductMedia = ({ image, title, description, right, status }) => {
    return (
        <>
            <CMedia className="ProductItemWrap">
                <div className="ItemLeft">
                    <CImg
                        object="true"
                        src={image}
                        className="rounded mr-2 mb-2"
                        style={{ width: 100, height: 'auto' }}
                    />
                </div>
                <div className="ItemContent">
                    <CCardTitle>{title}</CCardTitle>
                    <CCardText className="d-block">{description}</CCardText>
                </div>

                <div className="align-self-center media-right"><h4 className="h4">{right}</h4></div>
            </CMedia>
        </>
    );
};

export default ProductMedia;