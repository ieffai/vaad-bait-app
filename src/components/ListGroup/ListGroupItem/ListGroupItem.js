import React from 'react';

const ListGroupItem = ({ children, tag: Tag, disabled, active, ...attrs }) => {
  if (attrs.href && Tag === 'li') {
    Tag = 'a';
  }
  return <Tag>{children}</Tag>;
};

export default ListGroupItem;
