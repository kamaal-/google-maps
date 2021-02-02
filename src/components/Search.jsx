import React, { useState } from 'react';
import Autocomplete from "react-autocomplete";

const Search = ({items}) => {
    const [value, setValue] = useState('')
    return (
        <div style={{
            position: 'absolute',
            right: '10px',
            top: '70px',
            backgroundColor: '#fff',
            minWidth: '300px',
            minHeight: '46px',
            padding: '10px',
            boxShadow: 'rgba(0,0,0,0.2) 0px 2px 5px',
            zIndex: '99'}}>

            <Autocomplete

                items={items}
                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.name}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.position.lat}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.name}
                    </div>
                }
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSelect={(val) => setValue(val)}
            />
        </div>
    );
};

export default Search;
