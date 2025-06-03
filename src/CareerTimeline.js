import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const timelineEvents = {
  modric: [
    {
      date: "2003–2008",
      icon: "📍",
      title: "GNK Dinamo Zagreb",
      description:
        "Luka Modrić began his professional career at Dinamo Zagreb as a promising young midfielder. During this period, he won multiple Croatian league titles and cups, quickly establishing himself as a key player. His impressive performances soon attracted interest from major European clubs.",
    },
    {
      date: "2005",
      icon: "➡️",
      title: "Loan to Zrinjski Mostar",
      description:
        "To gain valuable playing time and experience, Modrić was loaned to Bosnian club Zrinjski Mostar, where he demonstrated his potential and matured as a player.",
    },
    {
      date: "2006–2007",
      icon: "➡️",
      title: "Loan to Inter Zaprešić",
      description:
        "Following his spell at Zrinjski, Modrić spent another season on loan at Croatian side Inter Zaprešić, further honing his technique and tactical understanding.",
    },
    {
      date: "2008–2012",
      icon: "🇬🇧",
      title: "Tottenham Hotspur",
      description:
        "Modrić’s move to Tottenham marked his entry into one of the world's most competitive leagues – the English Premier League. At Spurs, he developed a reputation as a world-class midfielder, known for his exceptional ball control, vision, and precise passing. He quickly became a vital figure in the team.",
    },
    {
      date: "2010",
      icon: "🏆",
      title: "EFL Cup Victory",
      description:
        "Modrić helped Tottenham secure the EFL Cup (League Cup), one of his first major trophies abroad.",
    },
    {
      date: "2012–Present",
      icon: "🇪🇸",
      title: "Real Madrid",
      description:
        "Joining Real Madrid propelled Modrić into the elite echelon of world football. He has since won multiple UEFA Champions League titles, La Liga championships, and FIFA Club World Cups, becoming the team captain and a symbol of the club’s sustained success.",
    },
    {
      date: "2014",
      icon: "🏆",
      title: "First Champions League Title with Real Madrid",
      description:
        "A key player in Real Madrid’s historic ‘La Décima’ – their 10th UEFA Champions League title.",
    },
    {
      date: "2018",
      icon: "🌍",
      title: "FIFA World Cup Russia 2018",
      description:
        "Modrić captained Croatia to their best-ever World Cup finish – the final – securing a silver medal. His outstanding performances earned him the Golden Ball as the tournament’s best player.",
    },
    {
      date: "2018",
      icon: "🏆",
      title: "Ballon d’Or Winner",
      description:
        "Recognized for his extraordinary performances for both club and country, Modrić won the prestigious Ballon d’Or, becoming the first Croatian to receive this honor.",
    },
    {
      date: "2019",
      icon: "🏆",
      title: "FIFA Best Men's Player Award",
      description:
        "Awarded FIFA’s Best Men’s Player for 2018, cementing his status as one of the world’s top footballers.",
    },
    {
      date: "2022",
      icon: "🌍",
      title: "FIFA World Cup Qatar 2022",
      description:
        "Led Croatia once again to a strong World Cup performance, demonstrating his leadership and enduring quality in the twilight of his career.",
    },
    {
      date: "2023",
      icon: "⚽",
      title: "Continuing Success at Real Madrid",
      description:
        "Remains a key player for Real Madrid, consistently contributing with top-class performances and helping the club pursue more titles.",
    },
  ],

  ronaldo: [
    {
      date: "2002–2003",
      icon: "⚽",
      title: "Sporting CP Debut",
      description:
        "Cristiano Ronaldo began his professional career at Sporting CP in Portugal, showcasing his speed and technical skills.",
    },
    {
      date: "2003–2009",
      icon: "🇬🇧",
      title: "Manchester United",
      description:
        "Ronaldo signed for Manchester United and developed into one of the best players in the world, winning 3 Premier League titles and a Champions League.",
    },
    {
      date: "2009–2018",
      icon: "🇪🇸",
      title: "Real Madrid",
      description:
        "A historic move where he broke goal-scoring records, won 4 Champions Leagues, and established himself as a club legend.",
    },
    {
      date: "2018–2021",
      icon: "🇮🇹",
      title: "Juventus",
      description:
        "Continued his winning ways in Italy with back-to-back Serie A titles.",
    },
    {
      date: "2021–2022",
      icon: "🔁",
      title: "Return to Manchester United",
      description:
        "Made a highly anticipated return to Old Trafford, continuing to score consistently.",
    },
    {
      date: "2023–Present",
      icon: "🌍",
      title: "Al Nassr (Saudi Arabia)",
      description:
        "Continues his football journey as a global ambassador for the sport.",
    },
  ],
  kaka: [
    {
      date: "2001–2003",
      icon: "⚽",
      title: "São Paulo FC",
      description:
        "Kaká began his professional career in Brazil with São Paulo FC. He quickly drew attention for his technical skills and creativity on the field.",
    },
    {
      date: "2003–2009",
      icon: "🇮🇹",
      title: "AC Milan",
      description:
        "His transfer to AC Milan marked the beginning of his European career. Kaká became one of the best players in the world, winning Serie A and the UEFA Champions League. In 2007, he was awarded the Ballon d'Or.",
    },
    {
      date: "2007",
      icon: "🏆",
      title: "Ballon d'Or",
      description:
        "Kaká won the prestigious Ballon d'Or, beating out both Lionel Messi and Cristiano Ronaldo to be named the best footballer in the world.",
    },
    {
      date: "2009–2013",
      icon: "🇪🇸",
      title: "Real Madrid",
      description:
        "Joining Real Madrid as one of the famed Galácticos, Kaká experienced highs and lows, including injuries. Still, he helped the club win trophies such as La Liga and the Copa del Rey.",
    },
    {
      date: "2013–2014",
      icon: "🔁",
      title: "Return to AC Milan",
      description:
        "Kaká returned to AC Milan for a brief but emotional stint. While the team struggled competitively, his presence brought experience and leadership.",
    },
    {
      date: "2014–2017",
      icon: "🇺🇸",
      title: "Orlando City SC",
      description:
        "Kaká moved to Major League Soccer, becoming the first-ever captain of Orlando City. He played a vital role in growing the sport’s popularity in the United States.",
    },
    {
      date: "2017",
      icon: "🎬",
      title: "Retirement",
      description:
        "Kaká officially retired from professional football, leaving behind a legacy as one of the most beloved and respected players of his generation.",
    },
  ],
};

export default function CareerTimeline() {
  const { playerId } = useParams();
  const { t } = useTranslation();

  const playerTitles = {
    modric: "Luka Modrić",
    ronaldo: "Cristiano Ronaldo",
    kaka: "Kaká",
  };

  const playerName = playerTitles[playerId] || "";

  // Prevodi naslov i opis s interpolacijom imena igrača
  const timelineTitle = t("timelineTitle", { name: playerName });
  const timelineIntro = t("timelineIntro", { name: playerName });

  // Mapa događaja za prikaz
  const events = timelineEvents[playerId] || [];

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 20px",
        paddingTop: "40px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#222" }}>
        {timelineTitle}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          marginBottom: 40,
          lineHeight: 1.6,
        }}
      >
        {timelineIntro}
      </p>

      <section>
        {events.map(({ date, icon, title, description }, i) => (
          <article
            key={i}
            style={{
              display: "flex",
              gap: 20,
              marginBottom: 40,
              borderLeft: "4px solid #0077b6",
              paddingLeft: 20,
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: "#0077b6",
                minWidth: 50,
                textAlign: "center",
                userSelect: "none",
              }}
            >
              {icon}
            </div>
            <div>
              {/* Prijevod naslova i opisa */}
              <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#023e8a" }}>
                {t(title)}
              </h3>
              <time
                style={{
                  fontWeight: "600",
                  color: "#0077b6",
                  fontSize: "1rem",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {date}
              </time>
              <p style={{ fontSize: "1rem", color: "#333", lineHeight: 1.5 }}>
                {t(description)}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
