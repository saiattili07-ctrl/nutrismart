
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Leaf,
  Sprout
} from "lucide-react";

export default function Hero({ t, jump }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          {t.eyebrow}
        </div>

        <h1>
          {t.title}
          <br />
          <em>{t.titleAccent}</em>
        </h1>

        <p className="hero-sub">{t.subtitle}</p>

        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() => jump("meals")}
          >
            {t.explore}
            <ArrowRight size={17} />
          </button>

          <button
            className="btn btn-ghost"
            onClick={() => jump("guide")}
          >
            <BookOpen size={17} />
            {t.learn}
          </button>
        </div>

        <div className="hero-proof">
          <div className="avatar-stack">
            <span>🥦</span>
            <span>🍊</span>
            <span>🥑</span>
          </div>

          <p>
            <strong>Simple. Local. Balanced.</strong>
            <br />
            Nutrition that fits real life.
          </p>
        </div>
      </div>

      <div className="hero-art">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />

        <div className="hero-label label-top">
          <span>✦</span> GOOD FOOD, GOOD MOOD
        </div>

        <div className="plate">
          <div className="plate-food veg-food">
            <span>🥦</span>
            <span>🥕</span>
            <span>🥒</span>
            <span>🍅</span>
          </div>

          <div className="plate-food grain-food">
            <span>🍚</span>
            <span>🫓</span>
          </div>

          <div className="plate-food protein-food">
            <span>🫘</span>
            <span>🧀</span>
          </div>

          <div className="plate-food fruit-food">
            <span>🍊</span>
            <span>🍓</span>
          </div>

          <div className="plate-center">
            <Leaf size={27} />
            <span>
              Eat a
              <br />
              rainbow
            </span>
          </div>
        </div>

        <div className="floating-note note-left">
          <span className="note-icon green">
            <Sprout size={18} />
          </span>
          <span>
            <b>More colour</b>
            <small>More variety</small>
          </span>
        </div>

        <div className="floating-note note-right">
          <span className="note-icon orange">
            <HeartHandshake size={18} />
          </span>
          <span>
            <b>Balanced plate</b>
            <small>Better habits</small>
          </span>
        </div>

        <div className="art-caption">
          A little balance goes a long way <span>↗</span>
        </div>
      </div>
    </section>
  );
}
