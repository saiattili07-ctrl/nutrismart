
import { ArrowRight, Search, Clock3, Apple } from "lucide-react";

export default function MealExplorer({
  t,
  mealType,
  setMealType,
  foodType,
  setFoodType,
  budget,
  setBudget,
  search,
  setSearch,
  showMeals,
  setShowMeals,
  filteredMeals
}) {
  return (
    <section className="section meals-section" id="meals">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            YOUR EVERYDAY FOOD GUIDE
          </div>
          <h2>{t.mealHeading}</h2>
          <p>{t.mealSub}</p>
        </div>

        <button
          className="text-link"
          onClick={() => {
            setMealType("All meals");
            setFoodType("All");
            setBudget("Flexible budget");
            setShowMeals(true);
          }}
        >
          {t.all} <ArrowRight size={16} />
        </button>
      </div>

      <div className="meal-controls">
        <div className="meal-tabs">
          {["All meals", "Breakfast", "Lunch", "Dinner", "Snacks"].map(
            (x) => (
              <button
                key={x}
                className={mealType === x ? "active" : ""}
                onClick={() => {
                  setMealType(x);
                  setShowMeals(true);
                }}
              >
                {x === "All meals" ? t.all : t[x.toLowerCase()]}
              </button>
            )
          )}
        </div>

        <label className="search-box">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowMeals(true);
            }}
            placeholder="Search meals..."
          />
        </label>
      </div>

      <div className="meal-filters">
        <span>Preference</span>

        {["Vegetarian", "Non-vegetarian", "All"].map((x) => (
          <button
            key={x}
            className={foodType === x ? "selected" : ""}
            onClick={() => {
              setFoodType(x);
              setShowMeals(true);
            }}
          >
            {x === "All"
              ? "All"
              : x === "Vegetarian"
                ? t.vegetarian
                : t.nonveg}
          </button>
        ))}

        <span className="filter-divider" />
        <span>Budget</span>

        {["Everyday budget", "Flexible budget"].map((x) => (
          <button
            key={x}
            className={budget === x ? "selected" : ""}
            onClick={() => {
              setBudget(x);
              setShowMeals(true);
            }}
          >
            {x === "Everyday budget" ? t.budget : t.flexible}
          </button>
        ))}
      </div>

      <div className="meal-grid">
        {(showMeals ? filteredMeals : filteredMeals.slice(0, 4)).map(
          (m, i) => (
            <article className="meal-card" key={m.name}>
              <div className={`meal-visual visual-${i % 5}`}>
                <span className="meal-emoji">{m.emoji}</span>
                <span className="meal-category">{m.category}</span>

                <button
                  className="heart-btn"
                  aria-label="Save meal"
                  onClick={(e) =>
                    e.currentTarget.classList.toggle("saved")
                  }
                >
                  <Apple size={17} />
                </button>
              </div>

              <div className="meal-card-body">
                <div className="meal-meta">
                  <span>
                    <Clock3 size={13} />
                    {m.time}
                  </span>
                  <span className="dot-separator">·</span>
                  <span>{m.type}</span>
                </div>

                <h3>{m.name}</h3>
                <p>{m.desc}</p>

                <div className="tag-row">
                  {m.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        )}
      </div>

      {filteredMeals.length === 0 && (
        <div className="empty-state">
          No matching meals. Try a different filter.
        </div>
      )}

      {!showMeals && (
        <button
          className="btn btn-outline load-more"
          onClick={() => setShowMeals(true)}
        >
          Explore all meal ideas <ArrowRight size={16} />
        </button>
      )}
    </section>
  );
}
