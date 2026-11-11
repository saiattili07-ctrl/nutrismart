
import { ChefHat } from "lucide-react";

export default function KitchenMatcher({
  kitchenItems,
  kitchen,
  setKitchen,
  kitchenMatches
}) {
  return (
    <article className="kitchen-panel">
      <div className="mini-panel-title">
        <span className="planner-icon">
          <ChefHat size={19} />
        </span>

        <div>
          <h3>What's in my kitchen?</h3>
          <p>
            Select ingredients you already have to discover meal ideas.
          </p>
        </div>
      </div>

      <div className="ingredient-chips">
        {kitchenItems.map((item) => (
          <button
            key={item}
            className={
              kitchen.includes(item)
                ? "ingredient-chip chosen"
                : "ingredient-chip"
            }
            onClick={() =>
              setKitchen((prev) =>
                prev.includes(item)
                  ? prev.filter((x) => x !== item)
                  : [...prev, item]
              )
            }
          >
            {kitchen.includes(item) ? "✓ " : ""}
            {item}
          </button>
        ))}
      </div>

      <div className="kitchen-results">
        <b>{kitchenMatches.length} recipe ideas</b>

        <div className="kitchen-meals">
          {kitchenMatches.slice(0, 5).map((meal) => (
            <span key={meal.name}>
              {meal.emoji} {meal.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
