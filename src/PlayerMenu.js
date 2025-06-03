import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PlayerMenu.css";
import modricImage from "./logo.png";
import ronaldoImage from "./ronaldo.png";
import kakaImage from "./kaka.png";

export default function PlayerSelection() {
  const { t } = useTranslation();

  const ronaldoAudioRef = useRef(null);
  const modricAudioRef = useRef(null);
  const kakaAudioRef = useRef(null);
  const [ronaldoPlaying, setRonaldoPlaying] = useState(false);
  const [modricPlaying, setModricPlaying] = useState(false);
  const [kakaPlaying, setKakaPlaying] = useState(false);

  const playRonaldoSound = () => {
    if (ronaldoPlaying) return;

    if (!ronaldoAudioRef.current) {
      ronaldoAudioRef.current = new Audio("/ronaldo-sound.mp3");
    }

    setRonaldoPlaying(true);
    ronaldoAudioRef.current.play();
    ronaldoAudioRef.current.onended = () => setRonaldoPlaying(false);
  };

  const playModricSound = () => {
    if (modricPlaying) return;

    if (!modricAudioRef.current) {
      modricAudioRef.current = new Audio("/modric-sound.mp3");
    }

    setModricPlaying(true);
    modricAudioRef.current.play();
    modricAudioRef.current.onended = () => setModricPlaying(false);
  };

  const playKakaSound = () => {
    if (kakaPlaying) return;

    if (!kakaAudioRef.current) {
      kakaAudioRef.current = new Audio("/kaka-sound.mp3");
    }

    setKakaPlaying(true);
    kakaAudioRef.current.play();
    kakaAudioRef.current.onended = () => setKakaPlaying(false);
  };

  return (
    <div className="player-selection-container">
      <h1>{t("selectPlayer")}</h1>
      <div className="player-card-grid">
        <Link
          to="/player/modric"
          className="player-card"
          onMouseEnter={playModricSound}
        >
          <img src={modricImage} alt={t("players.modric")} />
          <h2>{t("players.modric")}</h2>
        </Link>

        <Link
          to="/player/ronaldo"
          className="player-card"
          onMouseEnter={playRonaldoSound}
        >
          <img src={ronaldoImage} alt={t("players.ronaldo")} />
          <h2>{t("players.ronaldo")}</h2>
        </Link>

        <Link
          to="/player/kaka"
          className="player-card"
          onMouseEnter={playKakaSound}
        >
          <img src={kakaImage} alt={t("players.kaka")} />
          <h2>{t("players.kaka")}</h2>
        </Link>
      </div>
    </div>
  );
}
