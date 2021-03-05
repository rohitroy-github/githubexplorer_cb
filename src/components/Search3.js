import React from 'react';

class Search3 extends React.Component {
    handleKeyDown = e => {
        if(e.keyCode === 13){
        const value = e.target.value;

        alert('The value of the input is ${value}');
    }
};
    
    render() {
             return(
            <div>
                 <input onKeyDown={} type="text" name="username" placeholder="Enter username"/>;
             </div>
             );
    }  
}

export default Search2;