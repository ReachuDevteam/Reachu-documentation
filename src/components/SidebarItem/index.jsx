import React from 'react';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import {
  WelcomeIcon,
  ProductIcon,
  CartIcon,
  ShippingIcon,
  PaymentIcon,
  PlayIcon,
  TagIcon,
  BookIcon,
  EducationIcon,
  ShoppingBagIcon,
  TypesIcon,
  KeyIcon,
} from './sidebarIcons';

const iconsMap = {
  authentication: KeyIcon,
  guides: WelcomeIcon,
  'getting-started': PlayIcon,
  'documentation/product': ProductIcon,
  'documentation/cart': CartIcon,
  'documentation/shipping': ShippingIcon,
  'documentation/checkout': ShoppingBagIcon,
  'documentation/payment': PaymentIcon,
  'documentation/discount-codes': TagIcon,
  'documentation/types': TypesIcon,
  tutorials: EducationIcon,
  resources: BookIcon,
};

export default function SidebarItem({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.href;
  const linkClass = isActive ? 'menu__link menu__link--active' : 'menu__link';

  const Icon = iconsMap[item.docId];

  return (
    <li
      className={`theme-doc-sidebar-item-link theme-doc-sidebar-item-link-level-1 menu__list-item ${item.itemClass}`}
    >
      <Link
        to={item.href}
        className={linkClass}
        aria-current={isActive ? 'page' : undefined}
      >
        {Icon && <Icon style={{ marginRight: '8px', width: 15, height: 15 }} />}
        {item.label}
      </Link>
    </li>
  );
}
