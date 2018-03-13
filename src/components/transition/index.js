import React from 'react';
import './styles.css';
import { CSSTransition } from 'react-transition-group';

export default ({ children, ...props }) => {
    return (
        <CSSTransition
            {...props}
            timeout={1000}
            classNames="fade"
            appear
            mountOnEnter
        >
            <div>
                { children }
            </div>
        </CSSTransition>
    )
}
