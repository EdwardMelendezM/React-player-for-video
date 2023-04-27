interface ContainerProps {
  children: React.ReactNode | undefined
}

const Container: React.ComponentType<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Container;