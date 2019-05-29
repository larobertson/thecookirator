import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


const Paginator = (props) => {
  let active = props.page;
  let pageCount = props.pageCount;
  console.log(props.handlePage)
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={(e) => {
        e.preventDefault()
        props.handlePage(number)
        }
      }
      >
        {number}
      </Pagination.Item>,
    );
  };

    return (
      <div>
        <Pagination>
          {items}
        </Pagination>
      </div>
    )
}

export default Paginator;