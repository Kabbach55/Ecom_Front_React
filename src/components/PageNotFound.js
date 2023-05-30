import React from "react";

export default function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops! Page Not Found</h1>
      <p style={styles.message}>The requested page could not be found.</p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  message: {
    fontSize: "18px",
    color: "#888888",
  },
};
