import React from 'react';

// ==============================================

export default function Link ({ href, children }) {

  return (
    <a href={href}>{children}</a>
  );
};
