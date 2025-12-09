import React, { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const apiUrl = "https://movies2cbackend-production.up.railway.app/api/auth/create"; // Το σωστό endpoint για sign up

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        // Το αίτημα έφτασε στον server, αλλά απέτυχε (π.χ. 400 Bad Request, 500 Internal Server Error)
        let errorMsg = `Αποτυχία εγγραφής (${response.status} ${response.statusText}). Ελέγξτε τα στοιχεία.`;
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
      console.log("Signup success:", data);

      // Redirect στη σελίδα login μετά την επιτυχή εγγραφή
      window.location.href = "/login";
    } catch (err) {
      console.error("Signup network error:", err);
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
      <h1 style={{ fontSize: "40px" }}>Εγγραφή (Sign Up)</h1>

      <form
        onSubmit={handleSignUp}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          margin: "30px auto",
        }}
      >
        <input
          type="text"
          placeholder="Όνομα Χρήστη"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", margin: "10px 0" }}
          required
        />
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
          Εγγραφή
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}