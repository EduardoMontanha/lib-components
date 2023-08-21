import { useState } from "react";

const Input = () => {
    const [value, setValue] = useState("");

    return(
        <label>
            <input type="text" onChange={e => setValue(e.target.value)} value={value} />
        </label>
    );
}

export default Input;