import React from "react";
import ContentLoader from 'react-content-loader'

function TodoLoader () {
    const Loader = () => (
        <ContentLoader 
            viewBox="0 0 380 70"
            backgroundColor={'#82eb4d'}
            foregroundColor={'#b3f194'}
        >
            <rect x="10" y="17" rx="4" ry="4" width="300" height="20" />
            <rect x="10" y="50" rx="3" ry="3" width="250" height="15" />
        </ContentLoader>
        )
    return (
        <Loader/>
    );   
}

export { TodoLoader };