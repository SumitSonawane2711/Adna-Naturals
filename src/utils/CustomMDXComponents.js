import React from 'react';

// Example: Custom styling for MDX elements
export const h1 = (props) => (
  <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '1em' }} {...props} />
);

export const h2 = (props) => (
  <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '0.75em' }} {...props} />
);

export const h3 = (props) => (
  <h3 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '0.5em' }} {...props} />
);

export const p = (props) => (
  <p style={{ fontSize: '1em', lineHeight: '1.6', marginBottom: '1em' }} {...props} />
);

export const ul = (props) => (
  <ul style={{ paddingLeft: '1.5em', marginBottom: '1em' }} {...props} />
);

export const ol = (props) => (
  <ol style={{ paddingLeft: '1.5em', marginBottom: '1em' }} {...props} />
);

export const li = (props) => (
  <li style={{ marginBottom: '0.5em' }} {...props} />
);

export const a = (props) => (
  <a style={{ color: '#1e90ff', textDecoration: 'underline' }} {...props} />
);

export const strong = (props) => (
  <strong style={{ fontWeight: 'bold' }} {...props} />
);
