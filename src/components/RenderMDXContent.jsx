import React, { useMemo } from 'react';

function RenderMDXContent({ compiledContent }) {
  const ContentComponent = useMemo(() => {
    try {
      // Create a function that returns the MDX component
      const fn = new Function(
        'React',
        `${compiledContent}; return MDXContent;`
      );

      // Execute the function and get the MDXContent component
      return fn(React);
    } catch (error) {
      console.error('Error compiling MDX content:', error);
      return () => <div>Error rendering content.</div>;
    }
  }, [compiledContent]);

  return <ContentComponent />;
}

export default RenderMDXContent;
