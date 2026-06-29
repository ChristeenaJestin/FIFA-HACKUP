import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import fifacup from "../assets/fifacup.jpg";
function LandingPage() {
    const [timeLeft, setTimeLeft] = useState("");

useEffect(() => {
  const target = new Date();
  target.setHours(20, 0, 0, 0); // 8:00 PM today

  const timer = setInterval(() => {
    const now = new Date();

    let diff = target - now;

    // If it's already past 8 PM today, set target to tomorrow
    if (diff < 0) {
      target.setDate(target.getDate() + 1);
      diff = target - now;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000
    );

    setTimeLeft(
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`
    );
  }, 1000);

  return () => clearInterval(timer);
}, []);
  return (
    <div
  className="landing"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(5,8,15,.85),
        rgba(8,12,22,.92)
      ),
      url(${fifacup})
    `,
  }}
>

      <nav className="landing-nav">

        <h2>⚽ FIFA MATCH CENTER</h2>

        

        <Link to="/dashboard">
  <button className="nav-btn">
    Enter Match Center
  </button>
</Link>

      </nav>

      <section className="hero">

        <div className="badge">
          FIFA CUP 2026 • LIVE NOW
        </div>

        <h1>
          EVERY MATCH.
          <br />
          EVERY SECOND.
        </h1>

        <p>
          Real-time scores, possession battles,
          player performance and match analytics
          all in one immersive dashboard.
        </p>

        <div className="live-score">

          <span>🇧🇷 Brazil 3</span>

          <span>-</span>

          <span>1 Argentina 🇦🇷</span>

        </div>

      </section>
<section className="matches">

  <h2>TODAY ON THE PITCH</h2>

  <div className="cards">

    {/* Finished Match */}
    <div className="card">

      <h3>Portugal vs Italy</h3>

      <h1>3-2</h1>

      <small className="finished-badge">
        ✅ Finished
      </small>

    </div>

    {/* Live Match */}
    <div className="card">

      <h3>Brazil vs Argentina</h3>

      <h1>3-1</h1>

      <small className="live-badge">
        🔴 LIVE
      </small>

    </div>

    {/* Upcoming Match */}
    <div className="card">

  <h3>Germany vs France</h3>

  <h1>{timeLeft}</h1>

  <p className="countdown-text">
    Starts In
  </p>

  <small className="upcoming-badge">
    ⏳ Upcoming
  </small>

</div>

  </div>

</section>

      <section className="cta">

        <h1>
          STEP INTO THE
          <span> MATCH CENTER.</span>
        </h1>

        <p>
          Live scores, full match statistics,
          standings and player analytics.
        </p>

        <Link to="/dashboard">

          <button className="enter-btn">
            Enter Match Center →
          </button>

        </Link>

      </section>

    </div>
  );
}

export default LandingPage;