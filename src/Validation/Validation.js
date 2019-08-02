import React from 'react';

const Validation=( props ) => {
 
    let ValidationMessage=null;
    if(props.InputLength<=5)
    {
        ValidationMessage=(<div>
            <p>Text too short</p>
        </div>);
    }
    else if(props.InputLength>11)
    {
        ValidationMessage=(<div>
            <p>Text long enough</p>
        </div>);
    }
return(

    <div className="Validation">
       {ValidationMessage}
    </div>
)

};
export default Validation;
