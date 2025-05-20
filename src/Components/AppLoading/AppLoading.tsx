import React, { useEffect, useState } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap';
import "./appLoading.scss";

interface IAPPLOADING {
    isShow: boolean
}

const AppLoading: React.FC<IAPPLOADING> = (props: IAPPLOADING) => {
    const { isShow } = props;
    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [isShow]);

    return (
        <div className='custom-modal' >
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-body">
                        <div>
                            <div className="spinner-5"></div><br />
                            <h5>Loading...</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLoading
