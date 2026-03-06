// app/redirect-to-login/page.jsx
import { redirect } from "next/navigation";

export default function RedirectToLoginPage() {
    // Server-side redirect immediately
    redirect("/frontend/login/");

    // Optional: fallback UI if the redirect is somehow delayed
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <p>Redirecting to login…</p>
        </div>
    );
}