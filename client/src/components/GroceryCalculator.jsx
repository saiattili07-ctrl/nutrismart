
import { Download, ShoppingBasket } from "lucide-react";

export default function GroceryCalculator({
  plan,
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
    <article className="grocery-panel">
      <div className="mini-panel-title">
        <span className="planner-icon">
          <ShoppingBasket size={19} />
        </span>

        <div>
          <h3>Grocery cost calculator</h3>
          <p>
            Generate a plan first. Adjust sample unit prices or mark
            items as already at home.
          </p>
        </div>
      </div>

      {plan ? (
        <>
          <div className="grocery-list">
            {groceryItems.map((item) => (
              <div
                className={
                  "grocery-row " +
                  (item.checked ? "grocery-checked" : "")
                }
                key={item.name}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) =>
                      setGroceryChecks((v) => ({
                        ...v,
                        [item.name]: e.target.checked
                      }))
                    }
                  />

                  <span>
                    <b>{item.name}</b>
                    <small>Est. qty: {item.quantity}</small>
                  </span>
                </label>

                <div className="grocery-price">
                  <span>₹</span>
                  <input
                    aria-label={"Price for " + item.name}
                    type="number"
                    min="0"
                    value={
                      priceEdits[item.name] ??
                      priceList[item.name] ??
                      50
                    }
                    onChange={(e) =>
                      setPriceEdits((v) => ({
                        ...v,
                        [item.name]: e.target.value
                      }))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grocery-total">
            <span>Estimated items not already at home</span>
            <b>
              ₹{Math.round(groceryTotal).toLocaleString("en-IN")}
            </b>
          </div>

          <button
            className="btn btn-outline export-btn"
            onClick={exportGroceries}
          >
            <Download size={15} />
            Download grocery CSV
          </button>
        </>
      ) : (
        <div className="grocery-empty">
          Your consolidated ingredient list and editable price estimates
          will appear after you generate a meal plan.
        </div>
      )}
    </article>
  );
}
