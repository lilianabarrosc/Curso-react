import React from 'react';

const ErrorFallback = ({ error }) => (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
);

ErrorFallback.displayName = 'ErrorFallback';

export default ErrorFallback;