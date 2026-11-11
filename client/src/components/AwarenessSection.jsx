
import {
  ArrowRight,
  CircleHelp,
  HeartHandshake,
  Sparkles
} from "lucide-react";

// Original awareness tips data
export const tips = [
  {
    type: "Tip",
    title: "Make half your plate vegetables",
    body: "Add different colours and types of vegetables when available. Fresh, frozen or cooked options can all count."
  },
  {
    type: "Myth vs fact",
    title: "“Carbohydrates are always bad.”",
    body: "Myth. Foods such as rice, roti, oats and millets can fit into a balanced diet. Portion size and food variety matter."
  },
  {
    type: "Tip",
    title: "Choose water more often",
    body: "Keep water handy and make it your everyday drink. Sweet drinks can add a lot of sugar without making you feel full."
  },
  {
    type: "Myth vs fact",
    title: "“Healthy eating must be expensive.”",
    body: "Myth. Seasonal vegetables, pulses, eggs where suitable, and locally available grains can be budget-friendly choices."
  },
  {
    type: "Tip",
    title: "Try to include protein",
    body: "Dal, beans, chickpeas, curd, eggs, paneer or other suitable protein foods can help make meals more satisfying."
  },
  {
    type: "Tip",
    title: "Build habits, not food rules",
    body: "Aim for variety and consistency. No single food is perfect, and one meal does not define your overall diet."
  }
];

export default function AwarenessSection({
  t,
  tipFilter,
  setTipFilter,
  jump
}) {
  const filteredTips = tips.filter(
    (x) => tipFilter === "All" || x.type === tipFilter
  );

  return (
    <section className="awareness-section section" id="awareness">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            SMALL CHANGES, REAL IMPACT
          </div>

          <h2>{t.tipsTitle}</h2>
          <p>{t.tipsSub}</p>
        </div>

        <div className="tip-filter">
          {["All", "Tip", "Myth vs fact"].map((x) => (
            <button
              key={x}
              className={tipFilter === x ? "active" : ""}
              onClick={() => setTipFilter(x)}
            >
              {x}
            </button>
          ))}
        </div>
      </div>

      <div className="tips-grid">
        {filteredTips.map((x, i) => (
          <article className="tip-card" key={x.title}>
            <div className="tip-top">
              <span className={`tip-icon tip-${i % 4}`}>
                {x.type === "Tip" ? (
                  <Sparkles size={19} />
                ) : (
                  <CircleHelp size={19} />
                )}
              </span>

              <span className="tip-type">{x.type}</span>
              <span className="tip-number">0{i + 1}</span>
            </div>

            <h3>{x.title}</h3>
            <p>{x.body}</p>
          </article>
        ))}
      </div>

      <div className="community-banner">
        <div className="community-icon">
          <HeartHandshake size={25} />
        </div>

        <div>
          <b>Share what you learn</b>
          <p>
            Use these tips to start a nutrition conversation with your
            family, classmates or community.
          </p>
        </div>

        <button className="btn btn-light" onClick={() => jump("guide")}>
          Explore the guide <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
