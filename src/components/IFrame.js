import React from "react";

const IFrame = ({link}) => {

    console.log("Link-->",link);
    var url = "https://codesandbox.io/embed/"+link+"?fontsize=14&hidenavigation=1&theme=dark&hidedevtools=1";

    return(
        <div>
            <iframe src={url}
            style={{width: '100%', height: '700px', border: '0', borderRadius: '4px', overflow: 'hidden'}}
            title="pyrwv69w6j"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
            <br></br>
        </div>
    );
}

export default IFrame;