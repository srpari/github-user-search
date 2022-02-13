import React, { useState, useContext, useEffect } from 'react'
import Context from '../../context/Context';
import NotFound from '../pages/NotFound';


export default function Search() {


    const [text, setText] = useState(localStorage.getItem('textValue') || '');
    const [searchType, setSearchType] = useState('org');
    const [chkInput, setChkInput] = useState(false);

    const gc = useContext(Context);

    useEffect(() => {
        localStorage.setItem('textValue', text);
    }, [text]);

    const onChange = e => {
        e.preventDefault();
        // setText(inputRef.current.value)
        setText(e.target.value);
        setChkInput(false);
        gc.userClear();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            gc.userClear();
            setChkInput(true);
            return;
        }
        gc.searchUsers(searchType, text);
        // setText('');
    }

    const onClick = (e) => {
        setSearchType(e.target.value);
        gc.userClear();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>

                <fieldset><legend>Search Type </legend>
                    <div className="searchFor">
                        <input id="org" name="searchType" type="radio" value="org" onClick={onClick} defaultChecked />
                        <label htmlFor="org">Organizations</label>
                    </div>
                    <div className="searchFor">
                        <input id="user" name="searchType" type="radio" value="user" onClick={onClick} />
                        <label htmlFor="user">Users</label>
                    </div>

                </fieldset>
                <div className="searchFor">
                    {chkInput && <span className='alert'>Please enter something !</span>}
                </div>

                <div className="searchFor">
                    <input type="text" name="text" placeholder="Enter here..." value={text} onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark" />
                </div>
            </form>
            {gc.users.length > 0 && <button className="btn btn-block" onClick={gc.userClear}>Clear</button>}
            {gc.error && <NotFound type={searchType} />}
        </div>
    )
}
