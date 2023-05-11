export const DarkLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
        height: "100%",
      }}
    >
      <h3>Dark-layout</h3>
      <div>{children}</div>
    </div>
  );
};
