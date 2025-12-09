import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = "https://movies2cbackend-production.up.railway.app/api/auth/login"; // Το σωστό endpoint για login

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Το αίτημα έφτασε στον server, αλλά απέτυχε (π.χ. 401 Unauthorized, 400 Bad Request)
        let errorMsg = `Αποτυχία σύνδεσης (${response.status} ${response.statusText}). Ελέγξτε τα στοιχεία.`;
        try {
          // Προσπάθεια ανάγνωσης του σφάλματος από το σώμα της απάντησης (αν είναι JSON)
          const errorData = await response.json();
          errorMsg = errorData.message || errorMsg;
        } catch (e) {
          // Αγνοούμε το σφάλμα αν η απάντηση δεν είναι JSON
          console.error("Failed to parse error response body:", e);
        }
        setError(errorMsg);
        return;
      }

      const data = await response.json();
      console.log("Login success:", data);

      // Handle successful login (e.g., store token, redirect)
      window.location.href = "/";
    } catch (err) {
      console.error("Login network error:", err);
      // Το σφάλμα εδώ υποδηλώνει πρόβλημα σύνδεσης (π.χ. server down, λάθος πρωτόκολλο URL)
      setError("Αδύνατη σύνδεση με τον server. Ελέγξτε τη σύνδεσή σας ή δοκιμάστε αργότερα.");
    }
  };

  return (
    <div
      style={{
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        marginTop: "100px",
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>Σύνδεση (Login)</h1>

      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "30px auto",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", margin: "10px 0" }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px 0" }}
          required
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#ff4757",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Σύνδεση
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
