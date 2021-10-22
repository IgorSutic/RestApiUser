import React, { useRef } from 'react'
import "./styles.css";

interface Props{

    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    postUser: () => void;
}

const InputUser : React.FC<Props> = ({name, setName, postUser}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className="input" onSubmit={postUser}>
            <input type="input" 
                ref={inputRef}
                value={name}
                onChange={
                    (e) => {setName(e.target.value)
                }}
                placeholder="Enter a name"
                className="input__box"
            />
             <button type="submit" className="input_submit">
                GO
            </button>
        </form>
    )
}

export default InputUser

