export default function Lights({ children, ...props }) {

  // work in progress
  
  const { position = [0, 0, 0] } = props;
  return (
    <>
      <pointLight {...props} />
      <pointLight {...props} />
      {children}
      <pointLight {...props} />
      <pointLight {...props} />
    </>
  );
}
