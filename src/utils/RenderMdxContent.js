import React from 'react';

function RenderMDXContent({ compiledContent }) {
  const ContentComponent = React.useMemo(() => {
    // Create a new function from compiled code string
    const fn = new Function(
      'React',
      `${compiledContent}; return MDXContent;`
    );
    return fn(React);
  }, [compiledContent]);

  return <ContentComponent />;
}
