import React from 'react';

const ListGroup = ({ children, tag: Tag, ...attrs }) => {
  return <Tag {...attrs}>{children}</Tag>;
};

export default ListGroup;
