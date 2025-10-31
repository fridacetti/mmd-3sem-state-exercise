"use client";
// Importer CSS filen
import "../component-style/like-counter-exercise.css";
import { useState } from "react";

export default function LikeCounterExercise() {
  // TODO for studerende: Opret state variabler

  //set... er funktioner som vi bruger til at ændre værdien fx. 0 og false
  const [likes, setLikes] = useState(0); // 0 er antallet af likes den starter på
  const [isLiked, setIsLiked] = useState(false); //False betyder at knappen ikke er trykket
  // TODO for studerende: Implementer handleLike funktionen

  // handleLike sker når man trykker på knappen, her bruger den så if til om den er trykket eller ej og om der til tilføjes eller fjernes et like
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="exercise-container">
      <div className="post-card">
        {/* Header */}
        <div className="post-header">
          <h1 className="exercise-title">Like Counter Øvelse</h1>
          <p className="exercise-description">Få opslagets like-knap til at tælle likes</p>
        </div>

        {/* Post indhold */}
        <div className="post-content">
          <div className="post-image">
            <span className="post-image-text">🎉</span>
          </div>
          <p className="post-text">Dette er et fantastisk opslag! Klik på like-knappen nedenfor for at vise din støtte. Knappen skal skifte farve og tælleren skal opdateres.</p>
        </div>

        {/* Like sektion */}
        <div className="like-section">
          <button
            // TODO for studerende: Tilføj liked class hvis isLiked er true

            // Tilføjer klassen "liked" fra css som gør den rød hvis isLiked er true
            className={`like-button ${isLiked ? "liked" : ""}`}
            // TODO for studerende: Tilføj onClick
            onClick={handleLike}
          >
            {/* TODO for studerende: Vis det rigtige hjertet (❤️ / 🤍) i span elementet herunder  */}
            {/* Tilføjer rødt hjerte hvis isLiked er true eller så hvidt*/}
            <span className="heart-icon">{isLiked ? "❤️" : "🤍"}</span>
            {/* TODO for studerende: Vis "Liked" eller "Like" */}
            {/* Hint: Brug en ternary operator */}
            {isLiked ? "Liked" : "Like"}
          </button>

          <div className="like-count">
            {/* TODO for studerende: Vis antallet af likes */}
            Likes: {likes}
            {/* likes 0 */}
          </div>
        </div>

        {/* Hjælpe information */}
        <div className="help-section">
          <h3 className="help-title">🎯 Opgave:</h3>
          <ul className="help-list">
            <li>Importer useState fra React</li>
            <li>Opret likes state (starter på 0)</li>
            <li>Opret ex. isLiked state (starter på false)</li>
            <li>Implementer handleLike funktionen</li>
            <li>Toggle isLiked og opdater likes tælleren</li>
            <li>Se like-knappen skifte farve og tælleren opdatere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
