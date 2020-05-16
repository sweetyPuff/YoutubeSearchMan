import React, {useState, useCallback} from 'react';
import Pagination from 'react-bootstrap/Pagination';

export default (props) => {
    const [data, setData] = useState(props.data);
    const handleClick = useCallback((event) => {
        const newData = data;
        newData.page = parseInt(event.target.id);
        setData(newData);
        props.onClickFunction(props.path, data)
    }, [data, props])

    const active = props.activePage;
    const totalPage = props.totalPage;
    const items = [];
    let startNum = (active-2) <= 0 ? 1:(active-2);
    let endNum = startNum+4;
    if (endNum > totalPage)
        endNum = totalPage;
    if (endNum-startNum < 4)
        startNum = endNum-4;
    if (startNum <= 0)
        startNum = 1;
    for (let number = startNum; number <= endNum; number++) {
        items.push(
            <Pagination.Item key={number} id={number} active={number === active} onClick={handleClick}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="page_change">
            {startNum >= 2 && <Pagination.Item id={1} onClick={handleClick}>1</Pagination.Item>}
            {startNum >= 3 && <Pagination.Ellipsis />}
            <Pagination>{items}</Pagination>
            {endNum !== totalPage && <Pagination.Ellipsis />}
            {endNum !== totalPage && <Pagination.Item id={totalPage} onClick={handleClick}>{totalPage}</Pagination.Item>}
        </div>
    )
}