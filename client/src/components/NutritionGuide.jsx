
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NutritionGuide({ t, nutrients, activeNutrient, setActiveNutrient }) {
  const selectedNutrient = nutrients[activeNutrient];

  return (
    <section className="guide-section" id="guide">
      <div className="guide-intro">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          THE BASICS, MADE SIMPLE
        </div>

        <h2>{t.guideTitle}</h2>
        <p>{t.guideSub}</p>

        <div className="plate-guide">
          <div className="guide-half">
            <span>½</span>
            <b>Vegetables<br />& fruit</b>
            <small>Colour & fibre</small>
          </div>

          <div className="guide-quarter">
            <span>¼</span>
            <b>Grains</b>
            <small>Energy</small>
          </div>

          <div className="guide-quarter guide-protein">
            <span>¼</span>
            <b>Protein</b>
            <small>Growth & repair</small>
          </div>

          <div className="guide-plate-center">🥗</div>
        </div>

        <p className="guide-caption">
          A flexible visual guide, not a strict rule for every meal.
        </p>
      </div>

      <div className="nutrient-side">
        <div className="nutrient-list">
          {nutrients.map((n, i) => (
            <button
              key={n.name}
              className={
                'nutrient-card ' +
                (activeNutrient === i ? 'nutrient-active' : '')
              }
              onClick={() => setActiveNutrient(i)}
            >
              <span className={'nutrient-icon ' + n.color}>
                {n.emoji}
              </span>

              <span className="nutrient-text">
                <b>{n.name}</b>
                <small>{n.short}</small>
              </span>

              <ArrowRight size={17} />
            </button>
          ))}
        </div>

        <article className="nutrient-detail">
          <div className={'detail-emoji ' + selectedNutrient.color}>
            {selectedNutrient.emoji}
          </div>

          <span className="detail-kicker">NUTRIENT SPOTLIGHT</span>
          <h3>{selectedNutrient.name}</h3>
          <p>{selectedNutrient.function}</p>

          <div className="food-sources">
            <b>Common food sources</b>
            <span>{selectedNutrient.foods}</span>
          </div>

          <div className="detail-pagination">
            {nutrients.map((n, i) => (
              <button
                key={n.name}
                aria-label={n.name}
                className={activeNutrient === i ? 'on' : ''}
                onClick={() => setActiveNutrient(i)}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
