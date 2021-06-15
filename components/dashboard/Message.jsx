import React from 'react';

import { CMedia, CImg, CButton} from '@coreui/react';

const MessageMedia = ({ avatar, name, date, text, status}) => {
    return (
        <>
            <CMedia className="m-2">

                <CMedia className="mr-2">
                    <CImg
                        object="true"
                        src={avatar}
                        className="rounded-circle"
                        style={{ width: 40, height: 40 }}
                    />
                </CMedia>

                <CMedia>
                    <div>                        
                        <CMedia tag="h6" className="m-0">
                            {name}
                        </CMedia>

                        <p className="text-muted m-0">
                            <small>{date}</small>
                        </p>
                    </div>
                </CMedia>

                <CMedia className="align-self-center media-right">
                    <CButton
                        color="link"
                        className={`text-capitalize text-danger`}
                    >
                        {status}
                    </CButton>
                </CMedia>
            </CMedia>

            <CMedia>
                <p className="text-muted">{text}</p>
            </CMedia>
        </>
    );
};

export default MessageMedia;