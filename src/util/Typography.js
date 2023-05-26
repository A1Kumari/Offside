import React from 'react';

const HeadingExtraBold = ({ children, classes, styles }) => {
    return (
        <React.Fragment>
            <h1 className={`display-1 text fs-1 fw-bold mb-1 mb-md-2 ${classes && classes.join(" ")}`} style={styles}>{children}</h1>
        </React.Fragment>
    );
};

const HeadingBold = ({ children, classes, styles }) => {
    return (
        <React.Fragment>
            <h1 className={`display-4 text fs-2 fw-bold mb-1 mb-md-2 ${classes && classes.join(" ")}`} style={styles}>{children}</h1>
        </React.Fragment>
    );
};

const HeadingRegular = ({ children, classes, styles }) => {
    return (
        <React.Fragment>
            <h1 className={`display-4 text-2 fs-5 heading-regular mb-1 mb-md-2 ${classes && classes.join(" ")}`} style={styles}>{children}</h1>
        </React.Fragment>
    );
};

const Typography = {
    HeadingExtraBold,
    HeadingBold,
    HeadingRegular
};

export default Typography;