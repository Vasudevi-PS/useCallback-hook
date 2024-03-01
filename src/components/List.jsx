
import React, { useEffect, useState } from "react";
function List({ getItems }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
        console.log("updating Items");
    }, [getItems])
    return <div>
        {items.map((item, index) => <div key={index}>{item}</div>)}
    </div>
}
export default List;