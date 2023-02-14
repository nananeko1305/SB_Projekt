import React from "react";

const HomePage = () => {
    return (
        <>
            <div className={`d-flex row bg-info`}>
                <div className={`d-flex col-2 bg-primary justify-content-center align-items-center`}>
                    <span>
                        Col1
                    </span>
                </div>
                <div className={`d-flex col-8 bg-secondary justify-content-center`}>
                    <span className={`h1`}>
                        SB PROJEKT
                    </span>
                </div>
                <div className={`d-flex col-2 bg-success justify-content-center align-items-center`}>
                    <span>
                        Col3
                    </span>
                </div>
            </div>
        </>
    );
}

export default HomePage;