import DescriptionContext from "./DescriptionContext";
import { useState } from "react";

function DescriptionProvider({ children }) {
    const [isActiveDescription, setIsActiveDescription] = useState(false);
    const [description, setDescription] = useState({});

    const handleClickImage = () => {
        setIsActiveDescription((prev) => !prev);
    };

    const changeDescription = (data) => {
        setDescription(data);
    };

    return (
        <DescriptionContext.Provider
            value={{ isActiveDescription, description, handleClickImage, changeDescription }}
        >
            {children}
        </DescriptionContext.Provider>
    );
}

export default DescriptionProvider;
