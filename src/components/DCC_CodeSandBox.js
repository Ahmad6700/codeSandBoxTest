/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react';
import axios from 'axios';

//run npm install codesandbox to use it
import { getParameters } from "codesandbox/lib/api/define";
import IFrame from './IFrame';


const DCC_CodeSandBox = (props) => {

    let sandBoxIds = [];
    const [wait, setWait] = useState(false);
    const [frame, setFrame] = useState(false);
    const [frameIds, setFrameIds] = useState([]);

    let dataArray = props.data;

    let indexCode = `

        import React from 'react';
        import ReactDOM from 'react-dom';

        import Component from "./component";
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.11/tailwind.min.css";
        document.head.appendChild(link);

        ReactDOM.render(
            <Component />,
        document.getElementById("root")
        );
    
    `;
    
    const html = '<div id="root"></div>';
    const getSandBoxId = async () => {
        setWait(true);
        for (let i = 0; i < dataArray.length; i++) {
            const parameters = getParameters({
                files: {
                    "package.json": {
                        content: {
                            dependencies: {
                            react: "latest",
                            "react-dom": "latest",
                            "pure-react-carousel": "latest",
                            "react-scripts": "2.0.3",
                            
                            }
                        }
                    },
                    "component.js": {
                        content: dataArray[i].Code,
                    },
                    "index.js": {
                        content: indexCode
                    },
                    "index.html": {
                        content: html
                    }
                }
            });
            
            const url = `https://codesandbox.io/api/v1/sandboxes/define?json=1`;
            await axios({
                method: "post",
                url: url,    
                data:{
                    "parameters" : parameters
                }
            })
            .then((res)=>{
                if(!sandBoxIds.includes(res.data.sandbox_id)){
                    sandBoxIds.push(res.data.sandbox_id);
                }
            })
            .catch(error => console.error(error));
        }
        setWait(false);
        setFrameIds(sandBoxIds);
        setFrame(true);
    }

    return(
        <div style={{display: 'flex', justifyContent: 'Center', flexDirection: 'column', padding: '10px'}}>
            <button style={{width: '150px', marginBottom: '10px'}} onClick={()=>getSandBoxId()} >Get Components</button>
            {wait && <p>Extracting and Building ....</p>}
            {frame &&
                (frameIds.map((val, index)=>{
                    return <IFrame sandboxid={val} key={index} />
                }))
            }
        </div>
    );
}

export default DCC_CodeSandBox;