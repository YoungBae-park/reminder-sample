import React from 'react';
import useGoogleSheet from './libs/googlesheet';

const App = () => {

    const [data] = useGoogleSheet('#gid=0');
    const languageList = ['아이디','설명'];

    return (
        <div>
            {data.map((row) => {
                return (<div>아이디: {row[languageList[0]]}, 설명: {row[languageList[1]]}</div>);
            })}
        </div>
    )

}

export default App;