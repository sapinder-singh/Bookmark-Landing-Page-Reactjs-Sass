import React from 'react';
import styles from './Cta.module.scss';

export default function Cta({ children, bg, size, ...rest }) {
  const getModClassNames = () => {
    const bgClassName = styles['button--bg-' + (bg || 'default')];
    const sizeClassName = styles['button--size-' + (size || 'default')];

    return [bgClassName, sizeClassName].join(' ');
  };

  const getNodeText = node => {
    if (['string', 'number'].includes(typeof node)) return node;

    if (node instanceof Array) return node.map(getNodeText).join('');

    if (typeof node === 'object' && node)
      return getNodeText(node.props.children);
  };

  return (
    <button
      className={`${styles.button} ${getModClassNames()}`}
      data-text={getNodeText(children)}
      {...rest}>
      {children}
    </button>
  );
}
