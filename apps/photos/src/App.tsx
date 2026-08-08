export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1>Hello World — Photos</h1>
      <p>photos.pascaleetetienne.ca</p>
      <p style={{ opacity: 0.6 }}>Upload and display wedding photos</p>
    </main>
  );
}
