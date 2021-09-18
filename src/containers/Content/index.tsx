import React from "react";
// import { Ma } from 'react-router-dom';

interface Props {
    match: any,
    history: any,
    location: any,
}

const Content: React.FC<Props> = ({ match, history, location }) => {
    return <div>
        {console.log(match)!}
        {console.log(history)!}
        {console.log(location)!}
    </div>
}

export default Content;
