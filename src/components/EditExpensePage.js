import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return(
        <div>
        This is EditExpensePage fetching id: {props.match.params.id}
        </div>
    );
    
}

export default EditExpensePage;