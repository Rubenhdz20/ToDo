import React from "react";
import { createPortal } from 'react-dom'

function Modal({children}) {
    return createPortal(
        <div className="flex flex-wrap justify-center content-center fixed inset-x-0 inset-y-0 bg-[#000000b9]">
            {children}
        </div>,
        document.getElementById('modal')
    )
};

export default Modal;