import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import './index.styl';

const CLOSE_TIMEOUT = 500;

export default function ReactSlidingPane({
    isOpen,
    title,
    subtitle,
    onRequestClose,
    onAfterOpen,
    children,
    className,
    overlayClassName,
    closeIcon,
    from = 'right',
    width
}) {
    const directionClass = `slide-pane_from_${from}`;

    return <Modal
        className={ `slide-pane ${directionClass} ${className || ''}` }
        style={{
            content: { width: width || '80%' }
        }}
        overlayClassName={ `slide-pane__overlay ${overlayClassName || ''}`}
        closeTimeoutMS={ CLOSE_TIMEOUT }
        isOpen={ isOpen }
        onAfterOpen={ onAfterOpen }
        onRequestClose={ onRequestClose }
        contentLabel={ `Modal "${title || ''}"` }>
        <div className='slide-pane__header'>
            <div className='slide-pane__close' onClick={ onRequestClose }>
              { closeIcon
                ? closeIcon
                : <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 22'>
                  <path fill='currentColor' fillRule='evenodd'
                        d='M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z' />
                </svg>
              }
            </div>
            <div className='slide-pane__title-wrapper'>
                <h2 className='slide-pane__title'>{ title }</h2>
                <div className='slide-pane__subtitle'>{ subtitle }</div>
            </div>
        </div>
        <div className='slide-pane__content'>
            { children }
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
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    from: PropTypes.oneOf(['left', 'right', 'bottom']),
    width: PropTypes.string,
    closeIcon: PropTypes.any
};
