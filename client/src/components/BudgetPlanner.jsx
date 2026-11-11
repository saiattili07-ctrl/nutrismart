
import {
  Calculator,
  Sparkles,
  Save,
  RefreshCw
} from "lucide-react";

import KitchenMatcher from "./KitchenMatcher";
import GroceryCalculator from "./GroceryCalculator";

export default function BudgetPlanner({
  period,
  setPeriod,
  planBudget,
  setPlanBudget,
  people,
  setPeople,
  planPreference,
  setPlanPreference,
  goal,
  setGoal,
  createPlan,
  plan,
  planCost,
  notice,
  setNotice,

  // Kitchen Matcher props
  kitchenItems,
  kitchen,
  setKitchen,
  kitchenMatches,

  // Grocery Calculator props
  groceryItems,
  groceryChecks,
  setGroceryChecks,
  priceEdits,
  setPriceEdits,
  priceList,
  groceryTotal,
  exportGroceries
}) {
  return (
    <section className="section planner-section" id="planner">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            EAT WELL WITHOUT OVERSPENDING
          </div>

          <h2>Your budget. Your meal plan.</h2>

          <p>
            Build a practical Indian meal plan around your budget,
            household size, and food preference.
          </p>
        </div>

        <span className="planner-pill">
          <Calculator size={15} /> Smart planner
        </span>
      </div>

      <div className="planner-layout">
        <form
          className="planner-form"
          onSubmit={(e) => {
            e.preventDefault();
            createPlan();
          }}
        >
          <div className="planner-form-head">
            <span className="planner-icon">
              <Calculator size={20} />
            </span>

            <div>
              <h3>Personalize your plan</h3>
              <p>Prices are estimates and can vary by location.</p>
            </div>
          </div>

          <div className="form-grid">
            <label>
              Budget period
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="1">Daily</option>
                <option value="7">Weekly (7 days)</option>
                <option value="30">Monthly (30 days)</option>
              </select>
            </label>

            <label>
              Total budget (₹)
              <input
                type="number"
                min="1"
                value={planBudget}
                onChange={(e) => setPlanBudget(e.target.value)}
                required
              />
            </label>

            <label>
              People
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              >
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
              </select>
            </label>

            <label>
              Food preference
              <select
                value={planPreference}
                onChange={(e) => setPlanPreference(e.target.value)}
              >
                <option>Vegetarian</option>
                <option>Vegetarian + eggs</option>
                <option>Non-vegetarian</option>
                <option>All</option>
              </select>
            </label>

            <label className="form-wide">
              Main goal
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option>Balanced everyday diet</option>
                <option>Affordable protein-rich meals</option>
                <option>Weight management</option>
                <option>Healthy family meals</option>
              </select>
            </label>
          </div>

          <div className="budget-summary">
            <span>Approx. budget per person/day</span>
            <b>
              ₹
              {Math.round(
                (Number(planBudget) || 0) /
                  (Math.max(1, Number(period)) *
                    Math.max(1, Number(people)))
              )}
            </b>
          </div>

          <button
            className="btn btn-primary planner-submit"
            type="submit"
          >
            <Sparkles size={16} /> Generate meal plan
          </button>

          {notice && (
            <p
              className={
                "planner-notice " +
                (plan && planCost > Number(planBudget) ? "warning" : "")
              }
            >
              {notice}
            </p>
          )}
        </form>

        <div className="planner-result">
          <div className="result-heading">
            <div>
              <span className="detail-kicker">YOUR PLAN</span>
              <h3>
                {plan
                  ? `${plan.days}-day meal plan`
                  : "Your plan will appear here"}
              </h3>
            </div>

            <span className="result-emoji">🥗</span>
          </div>

          {plan ? (
            <>
              <div className="cost-stats">
                <div>
                  <small>Budget</small>
                  <b>₹{plan.budget.toLocaleString("en-IN")}</b>
                </div>

                <div>
                  <small>Estimated meals</small>
                  <b>₹{planCost.toLocaleString("en-IN")}</b>
                </div>

                <div>
                  <small>People</small>
                  <b>{plan.people}</b>
                </div>
              </div>

              <div className="plan-day-list">
                {Array.from({ length: plan.days }, (_, d) => (
                  <div className="plan-day" key={d}>
                    <b>Day {d + 1}</b>

                    <div>
                      {plan.meals
                        .filter((m) => m.day === d + 1)
                        .map((m) => (
                          <div className="plan-meal" key={m.category}>
                            <span>{m.emoji}</span>

                            <div>
                              <small>{m.category}</small>
                              <strong>{m.name}</strong>
                            </div>

                            <b>₹{m.householdCost}</b>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="planner-actions">
                <button
                  className="btn btn-outline"
                  onClick={createPlan}
                >
                  <RefreshCw size={15} /> Regenerate
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => {
                    localStorage.setItem(
                      "nutrismart-plan",
                      JSON.stringify(plan)
                    );
                    setNotice("Your plan is saved on this device.");
                  }}
                >
                  <Save size={15} /> Save plan
                </button>
              </div>

              <p className="small-disclaimer">
                Cost is an illustrative estimate based on sample meal
                prices, not a guaranteed market quote. Check total
                before using the plan.
              </p>
            </>
          ) : (
            <div className="empty-planner">
              <span>🍲</span>

              <p>
                Choose a period, set your budget and preferences,
                then generate a meal plan with estimated costs.
              </p>

              <div>
                <span>✓ Daily, weekly or monthly</span>
                <span>✓ Household-size aware</span>
                <span>✓ Indian meal options</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Kitchen Matcher and Grocery Calculator */}

      <div className="planner-lower-grid">
        <KitchenMatcher
          kitchenItems={kitchenItems}
          kitchen={kitchen}
          setKitchen={setKitchen}
          kitchenMatches={kitchenMatches}
        />

        <GroceryCalculator
          plan={plan}
          groceryItems={groceryItems}
          groceryChecks={groceryChecks}
          setGroceryChecks={setGroceryChecks}
          priceEdits={priceEdits}
          setPriceEdits={setPriceEdits}
          priceList={priceList}
          groceryTotal={groceryTotal}
          exportGroceries={exportGroceries}
        />
      </div>

      <p className="nutrition-disclaimer">
        Nutrition education only. Meal plans are general suggestions,
        not medical diets. People with allergies or medical dietary
        needs should verify every ingredient and consult a qualified
        professional.
      </p>
    </section>
  );
}
