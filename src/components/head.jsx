import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) {
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default Head;
