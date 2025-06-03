import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const playerData = {
  modric: {
    name: "Luka Modrić",
    fifaRatings: [
      { year: "FIFA 13", rating: 86, image: "/fifa13.png" },
      { year: "FIFA 16", rating: 87, image: "/fifa16.png" },
      { year: "FIFA 18", rating: 89, image: "/fifa18.png" },
      { year: "FIFA 20", rating: 90, image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/ratings/fifa20-grid-tile-partial-rating-modric.png" },
      { year: "FIFA 23", rating: 88, image: "https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-23/common/santander/f23-ratings-la-liga-luka-modric-16x9.png.adapt.crop16x9.652w.png" },
    ],
    gameVideos: [
      { title: "Modric Evolution in FIFA", url: "https://www.youtube.com/embed/uojNz3YziXs" },
    ],
  },
  ronaldo: {
    name: "Cristiano Ronaldo",
    fifaRatings: [
      { year: "FIFA 10", rating: 93, image: "/fifa10.png" },
      { year: "FIFA 13", rating: 92, image: "/fifa13ron.png" },
      { year: "FIFA 16", rating: 93, image: "/fifa16ron.png" },
      { year: "FIFA 18", rating: 94, image: "/fifa18ron.png" },
      { year: "FIFA 23", rating: 90, image: "/fifa23.png" },
    ],
    gameVideos: [
      { title: "Cristiano Ronaldo FIFA Evolution", url: "https://www.youtube.com/embed/zHb84R4FIiU" },
    ],
  },
  kaka: {
    name: "Ricardo Kaká",
    fifaRatings: [
      { year: "FIFA 09", rating: 89, image: "/fifa09.png" },
      { year: "FIFA 10", rating: 86, image: "/fifa10.jfif" },
      { year: "FIFA 11", rating: 86, image: "/fifa11.png" },
      { year: "FIFA 14", rating: 82, image: "/fifa14.png" },
      { year: "FIFA 18", rating: 80, image: "/fifa18kaka2.png" },
    ],
    gameVideos: [
      { title: "Kaká Evolution in FIFA", url: "https://www.youtube.com/embed/8Z8StVXA6PU" },
    ],
  },
};

export default function PlayerInGames() {
  const { playerId } = useParams();
  const { t } = useTranslation();
  const player = playerData[playerId];

  if (!player) {
    return <p style={{ padding: "40px", fontSize: "1.2rem" }}>{t("playerInGames.playerNotFound")}</p>;
  }

  return (
    <main style={{ maxWidth: 1000, margin: "40px auto", padding: "0 20px", paddingTop: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#222", marginBottom: 10 }}>
        {t("playerInGames.title", { playerName: player.name })}
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: 40, lineHeight: 1.6 }}>
        {t(`playerInGames.description.${playerId}`)}
      </p>

      {/* Ratings Section */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#0077b6", marginBottom: 20 }}>
          {t("playerInGames.ratingsTitle")}
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {player.fifaRatings.map(({ year, rating, image }, i) => (
            <div key={i} style={{ textAlign: "center", width: 140 }}>
              <img
                src={image}
                alt={`${year} card`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  maxHeight: "150px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: 8,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <p style={{ marginTop: 8, fontWeight: 500 }}>{year} – {rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Evolution */}
      <section style={{ marginBottom: 50 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#0077b6", marginBottom: 20 }}>
          {t("playerInGames.visualEvolutionTitle")}
        </h2>
        <div style={{ display: "grid", gap: 30 }}>
          {player.gameVideos.map(({ title, url }, i) => (
            <div key={i}>
              <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: 10 }}>{title}</h3>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: 12,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                <iframe
                  title={title}
                  src={url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
