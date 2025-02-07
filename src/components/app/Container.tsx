import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  args?: any;
}

const Container: React.FC<ContainerProps> = ({ children, args }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Container;