// menuitems.js
import React from 'react';
import styles from './styles.module.css'; // Import CSS module styles

const MenuItems = () => {
  const menuItems = [
    { id: 3, icon: 'home.png', name: 'Dashboard' },
    { id: 7, icon: 'temperature.png', name: 'Temperature' },
    { id: 4, icon: 'PH.png', name: 'pH' },
    { id: 2, icon: 'conductivity.png', name: 'Coductivity' },
    { id: 8, icon: 'turbidity.png', name: 'Turbidity' },
    { id: 6, icon: 'standards.png', name: 'Standards' },
    { id: 1, icon: 'account.png', name: 'Account' },
    { id: 5, icon: 'setting.png', name: 'Setting' },
  ];

  return (
    <div className={styles.menu}>
      {menuItems.map(item => (
        <div key={item.id} className={styles.menuItem}>
          <img src={`/images/${item.icon}`} className={styles.icon} alt={item.name} />
          <div className={styles.name}>{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
