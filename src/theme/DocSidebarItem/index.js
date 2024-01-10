import React from 'react';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
//import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';
import SidebarItem from '../../components/SidebarItem';

export default function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case 'category':
      return <DocSidebarItemCategory item={item} {...props} />;
    case 'html':
      return <DocSidebarItemHtml item={item} {...props} />;
    case 'link':
    default:
      return <SidebarItem item={item} {...props} />;
  }
}
