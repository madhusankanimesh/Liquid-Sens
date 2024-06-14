// MenuComponent.jsx
import React from 'react';
import styles from './styles.module.css'; // Import CSS module styles

const MenuComponent = () => {
  // Define menu items data (you can customize this as needed)
  const menuItems = [
    { id: 1, icon: 'icon1.svg', name: 'Item 1' },
    { id: 2, icon: 'icon2.svg', name: 'Item 2' },
    { id: 3, icon: 'icon3.svg', name: 'Item 3' },
    { id: 4, icon: 'icon4.svg', name: 'Item 4' },
    { id: 5, icon: 'icon5.svg', name: 'Item 5' },
    { id: 6, icon: 'icon6.svg', name: 'Item 6' },
    { id: 7, icon: 'icon7.svg', name: 'Item 7' },
    { id: 8, icon: 'icon8.svg', name: 'Item 8' },
  ];

  return (
    <div className={styles.menu}>
      {menuItems.map(item => (
        <div key={item.id} className={styles.menuItem}>
          <img src={require(`./icons/${item.icon}`).default} className={styles.icon} alt="Icon" />
          <div className={styles.name}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
