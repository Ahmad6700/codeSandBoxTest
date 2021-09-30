import React from "react";

const IFrame = ({sandboxid}) => {

    var url = "https://codesandbox.io/embed/"+sandboxid+"?fontsize=14&hidenavigation=1&initialpath=%2Fcomponent.js&module=%2Fcomponent.js&theme=dark&hidedevtools=1";
    return(
        <div>
            <iframe src={url}
            style={{width: '100%', height: '700px', border: '0', borderRadius: '4px', overflow: 'hidden'}}
            title="pyrwv69w6j"
            sandbox="allow-same-origin allow-scripts"
            ></iframe>
            <br></br>
        </div>
    );
}

export default IFrame;