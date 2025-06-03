import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const mediaContent = {
  modric: {
    videoId: "JBk9pwFMcb0",
    photos: [
      {
        src: "https://assets.nst.com.my/images/articles/17bittersweetmodricggasdf_1531695999.jpg",
        alt: "Luka Modrić at the 2018 World Cup",
      },
      {
        src: "https://www.si.com/.image/t_share/MTk0NTIwODAyNjYwNDU5OTA3/imago1020507839h.jpg",
        alt: "Luka Modrić at the 2022 World Cup",
      },
      {
        src: "https://pbs.twimg.com/media/GPBQMB7XwAADPwP.jpg:large",
        alt: "Luka Modrić playing for Real Madrid",
      },
      {
        src: "https://cdn.vox-cdn.com/thumbor/QABEbxoOtDZbNgcFiganS-4klho=/0x0:4307x3021/1200x800/filters:focal(1474x1366:2162x2054)/cdn.vox-cdn.com/uploads/chorus_image/image/61525177/1025901008.jpg.0.jpg",
        alt: "Luka Modrić FIFA THE BEST Award",
      },
      {
        src: "https://preview.redd.it/luka-modric-most-decorated-player-of-real-madrid-v0-vzv0p0yuxr2f1.jpeg?width=1080&crop=smart&auto=webp&s=b4fbcd964d9a1023fa527dfc32d179fccf746df3",
        alt: "Luka Modrić most decorated player of Real Madrid",
      },
      {
        src: "https://sports.uzone.id/wp-content/uploads/2024/11/modric.jpg",
        alt: "Luka Modrić Ballon d'Or",
      },
    ],
    quotes: [
      {
        text: "The team is always more important than the individual.",
        author: "Luka Modrić",
      },
      {
        text: "I strive to improve every single day.",
        author: "Luka Modrić",
      },
      {
        text: "Focus and hard work are the keys to success.",
        author: "Luka Modrić",
      },
    ],
  },

  ronaldo: {
    videoId: "mmeLCAP74KA",
    photos: [
      {
        src: "https://media.cnn.com/api/v1/images/stellar/prod/220119103641-ronaldo-siu-celebration.jpg?q=h_2780,w_4000,x_0,y_0",
        alt: "Cristiano Ronaldo celebrating a goal",
      },
      {
        src: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/02/cristiano-ronaldo-al-nassr-contrato-e1739188302718.jpg",
        alt: "Ronaldo playing for Al Nassr",
      },
      {
        src: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0827%2Fr901184_1296x729_16%2D9.jpg",
        alt: "Ronaldo at Manchester United",
      },
      {
        src: "https://i.eurosport.com/2016/11/08/1966031-41316107-2560-1440.jpg",
        alt: "Cristiano Ronaldo lifting a trophy with Portugal",
      },
      {
        src: "https://editorial.uefa.com/resources/027c-16d30c80a3e5-8717973e3fb0-1000/portugal_v_france_-_uefa_euro_2020_group_f.jpeg",
        alt: "Ronaldo celebrating a goal for Portugal",
      },
      {
        src: "https://conteudo.imguol.com.br/c/esporte/0d/2018/04/13/cristiano-ronaldo-faz-um-gol-de-bicicleta-pelo-real-madrid-contra-a-juventus-em-turim-1523647524772_v2_1920x1080.jpg",
        alt: "Ronaldo at Real Madrid",
      },
    ],
    quotes: [
      {
        text: "Your love makes me strong, your hate makes me unstoppable.",
        author: "Cristiano Ronaldo",
      },
      {
        text: "Talent without working hard is nothing.",
        author: "Cristiano Ronaldo",
      },
      {
        text: "I’m living a dream I never want to wake up from.",
        author: "Cristiano Ronaldo",
      },
    ],
  },

  kaka: {
    videoId: "xSdR7-8hBEU",
    photos: [
      {
        src: "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/f3de84a1-ebb6-4e06-97ec-0497e1d4bb3f/2022.11.24-RossoneriMondiali-Kaka-interna1.jpg",
        alt: "Kaká during his time at AC Milan",
      },
      {
        src: "https://newr7-r7-prod.web.arc-cdn.net/resizer/v2/QJW642QUBVOODOXQS6VWZOFCWE.jpg?auth=504bedc0731376831d37d260b7e83c2f7d9589e5629cb379838aaf18f6c06b60&width=1500&height=1097",
        alt: "Kaká playing for Real Madrid",
      },
      {
        src: "https://wallpapers.com/images/hd/brazil-national-football-team-neymar-and-kaka-smiling-e6qurd3as167f4os.jpg",
        alt: "Kaká with Brazil national team",
      },
      {
        src: "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/prd-league/o9pbhfm71qwa0gprdjr9.jpg",
        alt: "Kaká as Orlando City SC captain",
      },
      {
        src: "https://focus.independent.ie/thumbor/wFFIX-62XO48p669__o2Isxd7wg=/960x640/smart/prod-mh-ireland/484e677c-bc25-11ed-b5f4-0210609a3fe2",
        alt: "Kaká celebrating a goal",
      },
      {
        src: "https://pbs.twimg.com/media/D_ND4EpXYAA7oF-.jpg:large",
        alt: "Kaká with Ballon d'Or trophy in 2007",
      },
    ],
    quotes: [
      {
        text: "I belong to Jesus.",
        author: "Kaká",
      },
      {
        text: "Success is not about wealth or fame; it's about being the best version of yourself.",
        author: "Kaká",
      },
      {
        text: "Football is just part of my life, not my entire life.",
        author: "Kaká",
      },
    ],
  },
};

export default function HighlightsMedia() {
  const { t } = useTranslation();
  const { playerId } = useParams();
  const content = mediaContent[playerId];

  const [currentIndex, setCurrentIndex] = useState(null);

  const showImage = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);
  const nextImage = () =>
    setCurrentIndex((currentIndex + 1) % content.photos.length);
  const prevImage = () =>
    setCurrentIndex(
      (currentIndex - 1 + content.photos.length) % content.photos.length
    );

  const selectedImage = currentIndex !== null ? content.photos[currentIndex] : null;

  const playerNames = {
    modric: t("players.modric"),
    ronaldo: t("players.ronaldo"),
    kaka: t("players.kaka"),
  };

  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "40px auto",
        padding: "0 20px",
        paddingTop: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "#222" }}>
        {t("highlights.title", { player: playerNames[playerId] })}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: 50,
          lineHeight: 1.6,
        }}
      >
        {t("highlights.description", { player: playerNames[playerId] })}
      </p>

      {/* Video */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#0077b6", marginBottom: 20 }}>
          🎥 {t("highlights.videoHighlights")}
        </h2>
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
            title={`${playerNames[playerId]} Video`}
            src={`https://www.youtube.com/embed/${content.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </section>

      {/* Photos */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontSize: "1.8rem", color: "#0077b6", marginBottom: 20 }}>
          📸 {t("highlights.iconicPhotos")}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {content.photos.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              onClick={() => showImage(i)}
              style={{
                width: "100%",
                borderRadius: 12,
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                objectFit: "cover",
                aspectRatio: "4 / 3",
                cursor: "pointer",
              }}
              loading="lazy"
            />
          ))}
        </div>

        {selectedImage && (
          <div
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              cursor: "default",
            }}
          >
            <div
              style={{ position: "relative", textAlign: "center", padding: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  marginTop: 12,
                  fontStyle: "italic",
                }}
              >
                {selectedImage.alt}
              </p>

              {/* Arrows */}
              <button
                onClick={prevImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 20,
                  transform: "translateY(-50%)",
                  fontSize: 50,
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 20,
                  transform: "translateY(-50%)",
                  fontSize: 50,
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ›
              </button>
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  fontSize: 24,
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Quotes */}
      <section>
        <h2 style={{ fontSize: "1.8rem", color: "#0077b6", marginBottom: 20 }}>
          🎙️ {t("highlights.quotesAndSayings")}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            fontStyle: "italic",
            color: "#444",
            fontSize: "1.1rem",
          }}
        >
          {content.quotes.map(({ text, author }, i) => (
            <blockquote
              key={i}
              style={{
                borderLeft: "5px solid #00b4d8",
                paddingLeft: 15,
                backgroundColor: "#f0f8ff",
                borderRadius: 8,
                boxShadow: "2px 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <p style={{ margin: 0, lineHeight: 1.4 }}>"{t(text)}"</p>
              <footer
                style={{
                  marginTop: 8,
                  textAlign: "right",
                  fontWeight: "600",
                  color: "#0077b6",
                }}
              >
                — {author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
