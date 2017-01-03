import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.styl';

const CLOSE_TIMEOUT = 500;

export default function ReactSlidingPane(props) {
    return <Modal
        className={ 'slide-pane ' + (props.className || '') }
        overlayClassName='slide-pane__overlay'
        closeTimeoutMS={ CLOSE_TIMEOUT }
        isOpen={ props.isOpen }
        onAfterOpen={ props.onAfterOpen }
        onRequestClose={ props.onRequestClose }
        contentLabel={ `Modal "${props.title}"` }>
            <div className='slide-pane__header'>
                <div className='slide-pane__close' onClick={ props.onRequestClose }>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 22'><path fill='currentColor' fillRule='evenodd' d='M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z'/></svg>
                </div>
                <div className='slide-pane__title-wrapper'>
                    <h2 className='slide-pane__title'>{ props.title }</h2>
                    <div className='slide-pane__subtitle'>{ props.subtitle }</div>
                </div>
            </div>
            <div className='slide-pane__content'>
                {/* Render pane content only when pane is visible, hide after close animation */}
                <ReactCSSTransitionGroup
                    transitionName='content-appear'
                    transitionEnter={ false }
                    transitionLeaveTimeout={ CLOSE_TIMEOUT }>
                    {
                        props.isOpen
                            ? props.children
                            : null
                    }
                </ReactCSSTransitionGroup>
            </div>
    </Modal>;
}

ReactSlidingPane.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.any,
    subtitle: PropTypes.any,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func,
    children: PropTypes.any.isRequired,
    className: PropTypes.string
};
