import { useParams } from "react-router-dom";
import PlayerStatsTabs from "./PlayerStatsTabs";
import { useTranslation } from "react-i18next";

import modricImg from "./logo.png";
import ronaldoImg from "./ronaldo.png";
import kakaImg from "./kaka.png";

const trophyImages = {
  "European Cups": require("./champsleague.png"),
  "FIFA Club World Cups": require("./fifaclubworldcup.png"),
  "European Super Cups": require("./Supercopa.png"),
  "National Leagues": require("./laliga.png"),
  "Spanish Cups": require("./spaincup.png"),
  "Spanish Super Cups": require("./spainsupercup.png"),
  "Croatian League Titles": require("./hnl.png"),
  "Croatian Cups": require("./hnlkup.png"), 
  "Croatian Super Cup": require("./hnlsuperkup.png"),
  "Ballon d'Or": require("./ballondor.png"),
  "The Best FIFA Award": require("./thebest.png"),
  "UEFA Best Player": require("./thebestplayer.png"),
  "FIFA/FIFPRO World XI": require("./thebest.png"),
  "Champions League Midfielder of the Season": require("./champmotm.jpg"),
  "World Cup Golden Ball": require("./worldcupgoldenball.png"),
  "Bronze Ball at World Cup": require("./wcsilverball.png"),
  "Best Playmaker (IFFHS)": require("./trophyiffhs.png"),
  "The Best FIFA Men's Player": require("./thebest.png"),
  "UEFA Best Player in Europe": require("./thebestplayer.png"),
  "Player of the Year": require("./thebestplayer.png"),
  "Champions League Winner": require("./champsleague.png"),
  "FIFA Club World Cup Winner": require("./fifaclubworldcup.png"),
  "National League Titles": require("./laliga.png"),
  "National Cups": require("./spaincup.png"),
  "National Super Cups": require("./spainsupercup.png"),
  "Golden Boot (Europe)": require("./goldenboot.png"),
  "UEFA Super Cup Winner": require("./Supercopa.png"),
  "UEFA Nations League Winner": require("./nationsleague.png"),
  "Top Goal Scorer": require("./goldenboot.png"),
  "European Champion": require("./euro.png"),
  "FIFA Puskás Award": require("./puskas.jpg"),
  "Footballer of the Year": require("./thebestplayer.png"),
  "World Cup Winner": require("./worldcup.png"),
  "FIFA World Player of the Year": require("./thebest.png"),
  "UEFA Club Footballer of the Year": require("./champmotm.jpg"),
  "FIFA Club World Cup": require("./fifaclubworldcup.png"),
  "La Liga Title": require("./laliga.png"),
  "FIFA/FIFPro World XI": require("./thebest.png"),
  "Supercoppa Italiana": require("./superitaliana.png"),
  "Serie A Title": require("./seriea.png"),
  "Confederations Cup": require("./ConfederationsCup.png")
};

const defaultTrophyImg = require("./trophy.png");

const players = {
  modric: {
    name: "Luka Modrić",
    number: 10,
    position: "Midfielder",
    image: modricImg,
  },
  ronaldo: {
    name: "Cristiano Ronaldo",
    number: 7,
    position: "Forward",
    image: ronaldoImg,
  },
  kaka: {
    name: "Ricardo Kaká",
    number: 22,
    position: "Attacking Midfielder",
    image: kakaImg,
  },
};

const generalStats = {
  modric: [
    { label: "Matches Played", value: 836 },
    { label: "Goals", value: 89 },
    { label: "Minutes Played", value: 61452 },
    { label: "Assists", value: 140 },
  ],
  ronaldo: [
    { label: "Matches Played", value: 1261 },
    { label: "Goals", value: 936 },
    { label: "Minutes Played", value: 102900 },
    { label: "Assists", value: 257 },
  ],
  kaka: [
    { label: "Matches Played", value: 654 },
    { label: "Goals", value: 237 },
    { label: "Minutes Played", value: 45700 },
    { label: "Assists", value: 191 },
  ],
};

const honours = {
  modric: [
  { title: "European Cups", count: 6 },
  { title: "FIFA Club World Cups", count: 6 },
  { title: "European Super Cups", count: 5 },
  { title: "National Leagues", count: 4 },
  { title: "Spanish Cups", count: 2 },
  { title: "Spanish Super Cups", count: 5 },
  { title: "Croatian League Titles", count: 3 },
  { title: "Croatian Cups", count: 2 },
  { title: "Croatian Super Cup", count: 1 },
  { title: "Ballon d'Or", count: 1 },
  { title: "The Best FIFA Award", count: 1 },
  { title: "UEFA Best Player", count: 1 },
  { title: "World Cup Golden Ball", count: 1 },
  { title: "Bronze Ball at World Cup", count: 1 },
  { title: "FIFA/FIFPRO World XI", count: 6 },
  { title: "Champions League Midfielder of the Season", count: 2 },
  ],
  ronaldo: [
    { title: "Ballon d'Or", count: 5 },
    { title: "The Best FIFA Men's Player", count: 3 },
    { title: "UEFA Best Player in Europe", count: 4 },
    { title: "Golden Boot (Europe)", count: 4 },
    { title: "Footballer of the Year", count: 13 },
    { title: "FIFA Puskás Award", count: 1 },
    { title: "Top Goal Scorer", count: 22 },
    { title: "Player of the Year", count: 9 },
    { title: "European Champion", count: 1 },
    { title: "Champions League Winner", count: 5 },
    { title: "FIFA Club World Cup Winner", count: 4 },
    { title: "National League Titles", count: 7 },
    { title: "National Cups", count: 5 },
    { title: "National Super Cups", count: 7 },
    { title: "UEFA Super Cup Winner", count: 3 },
    { title: "UEFA Nations League Winner", count: 1 },
  ],
  kaka: [
    { title: "Ballon d'Or", count: 1 },
    { title: "FIFA World Player of the Year", count: 1 },
    { title: "UEFA Club Footballer of the Year", count: 1 },
    { title: "Champions League Winner", count: 1 },
    { title: "FIFA Club World Cup", count: 1 },
    { title: "La Liga Title", count: 1 },
    { title: "Serie A Title", count: 1 },
    { title: "Supercoppa Italiana", count: 1 },
    { title: "Confederations Cup", count: 2 },
    { title: "World Cup Winner", count: 1 },
    { title: "FIFA/FIFPro World XI", count: 3 },
  ]
};

const personalDetails = {
  modric: {
    "Full Name": "Luka Modrić",
    "Date of Birth": "September 9, 1985",
    Nationality: "Croatian",
    Height: "1.72 m",
    Weight: "66.2 kg",
    Position: "Midfielder",
    Club: "Real Madrid",
    "Jersey Number": 10,
  },
  ronaldo: {
    "Full Name": "Cristiano Ronaldo dos Santos Aveiro",
    "Date of Birth": "February 5, 1985",
    Nationality: "Portuguese",
    Height: "1.87 m",
    Weight: "80 kg",
    Position: "Forward",
    Club: "Al-Nassr",
    "Jersey Number": 7,
  },
  kaka: {
    "Full Name": "Ricardo Izecson dos Santos Leite",
    "Date of Birth": "April 22, 1982",
    Nationality: "Brazilian",
    Height: "1.86 m",
    Weight: "79 kg",
    Position: "Attacking Midfielder",
    Club: "Retired (Last club: Orlando City)",
    "Jersey Number": 22,
  },
};


export default function PlayerProfile() {
  const { playerId } = useParams();
  const { t } = useTranslation();

  const player = players[playerId];

  if (!player) return <div>{t("playerNotFound")}</div>;

  const stats = generalStats[playerId];
  const details = personalDetails[playerId];
  const playerHonours = honours[playerId];

  return (
    <div id="top" className="container">
      <div className="header">
        <img src={player.image} alt={player.name} className="player-img" />
        <div className="player-info">
          <h1>
            <span className="number">{player.number}</span> {player.name}
          </h1>
          <h2>{t(player.position)}</h2>
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="value">{s.value}</div>
                <div className="label">{t(s.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 id="details">{t("personalDetails")}</h2>
      <div className="personal-details-grid">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="detail-card">
            <div className="detail-label">{t(key)}</div>
            <div className="detail-value">{t(value)}</div>
          </div>
        ))}
      </div>

      <h2 id="honours">{t("honours")}</h2>
      <div className="honours">
        {playerHonours.map((honour, i) => (
          <div className="honour-card" key={i}>
            <img
              src={trophyImages[honour.title] || defaultTrophyImg}
              alt={honour.title}
              className="trophy-img"
            />
            <div className="count">{honour.count}</div>
            <div className="desc">{t(honour.title)}</div>
          </div>
        ))}
      </div>

      <h2 id="stats">{t("competitionStats")}</h2>
      <PlayerStatsTabs />
    </div>
  );
}
