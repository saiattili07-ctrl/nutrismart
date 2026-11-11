import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickStats from "./components/QuickStats";
import MealExplorer from "./components/MealExplorer";
import BudgetPlanner from "./components/BudgetPlanner";
import NutritionGuide from "./components/NutritionGuide";
import NutritionQuiz, { questions } from "./components/NutritionQuiz";
import AwarenessSection from "./components/AwarenessSection";
import Footer from "./components/Footer";

import {
  copy,
  meals,
  extraMeals,
  allMeals,
  kitchenItems,
  priceList,
  nutrients
} from "./data/nutritionData";


import "./styles.css";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  const [mealType, setMealType] = useState("All meals");
  const [foodType, setFoodType] = useState("Vegetarian");
  const [budget, setBudget] = useState("Everyday budget");
  const [showMeals, setShowMeals] = useState(false);

  const [activeNutrient, setActiveNutrient] = useState(0);
  const [quizOpen, setQuizOpen] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizDone, setQuizDone] = useState(false);
  const [tipFilter, setTipFilter] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const [period, setPeriod] = useState("7");
  const [planBudget, setPlanBudget] = useState("700");
  const [people, setPeople] = useState("1");
  const [planPreference, setPlanPreference] = useState("Vegetarian");
  const [goal, setGoal] = useState("Balanced everyday diet");

  const [plan, setPlan] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nutrismart-plan") || "null");
    } catch {
      return null;
    }
  });

  const [kitchen, setKitchen] = useState(["rice", "dal", "tomato"]);
  const [groceryChecks, setGroceryChecks] = useState({});
  const [priceEdits, setPriceEdits] = useState({});
  const [notice, setNotice] = useState("");

  const filteredMeals = useMemo(
    () =>
      allMeals.filter(
        (m) =>
          (mealType === "All meals" || m.category === mealType) &&
          (foodType === "All" || m.type === foodType) &&
          (budget === "Flexible budget" || m.budget === "Everyday budget") &&
          m.name.toLowerCase().includes(search.toLowerCase())
      ),
    [mealType, foodType, budget, search]
  );

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const resetQuiz = () => {
    setQIndex(0);
    setAnswers({});
    setQuizDone(false);
    setQuizOpen(true);
  };

  const score = questions.reduce(
    (n, q, i) => n + (answers[i] === q.answer ? 1 : 0),
    0
  );

  const createPlan = () => {
    const days = Number(period);
    const total = Number(planBudget);
    const household = Number(people);

    if (!Number.isFinite(total) || total <= 0) {
      setNotice("Enter a valid budget greater than ₹0.");
      return;
    }

    const pool = allMeals.filter((m) =>
      planPreference === "All"
        ? true
        : planPreference === "Vegetarian + eggs"
          ? m.type === "Vegetarian" || m.name.toLowerCase().includes("egg")
          : m.type === planPreference
    );

    const categories = ["Breakfast", "Lunch", "Snacks", "Dinner"];
    const chosen = [];
    let estimated = 0;

    for (let d = 0; d < days; d++) {
      const daily = [];

      for (let c = 0; c < categories.length; c++) {
        const category = categories[c];
        const sorted = pool
          .filter((m) => m.category === category)
          .sort((a, b) => (a.cost || 25) - (b.cost || 25));

        if (!sorted.length) continue;

        const idx = (d * 3 + c * 5) % sorted.length;
        let meal = sorted[idx];
        const unit = Math.max(1, meal.cost || 25) * household;

        if (
          estimated + unit > total &&
          sorted.some((x) => estimated + (x.cost || 25) * household <= total)
        ) {
          meal = sorted.find(
            (x) => estimated + (x.cost || 25) * household <= total
          );
        }

        daily.push({
          ...meal,
          day: d + 1,
          servingCost: meal.cost || 25,
          householdCost: (meal.cost || 25) * household
        });

        estimated += (meal.cost || 25) * household;
      }

      chosen.push(...daily);
    }

    const next = {
      days,
      people: household,
      budget: total,
      preference: planPreference,
      goal,
      meals: chosen,
      estimated,
      createdAt: new Date().toISOString()
    };

    setPlan(next);
    localStorage.setItem("nutrismart-plan", JSON.stringify(next));
    setGroceryChecks({});
    setNotice(
      estimated <= total
        ? "Plan generated. Estimated food cost is within your budget."
        : "This plan exceeds the entered budget. Replace meals with lower-cost options or increase the budget."
    );
  };

  const planCost = plan?.estimated || 0;

  const groceryItems = useMemo(() => {
    if (!plan) return [];

    const counts = {};
    plan.meals.forEach((m) =>
      (m.ingredients || []).forEach((item) => {
        counts[item] =
          (counts[item] || 0) + Math.max(1, plan.people) * 0.25;
      })
    );

    return Object.entries(counts).map(([name, quantity]) => ({
      name,
      quantity: Math.ceil(quantity * 10) / 10,
      price: Number(priceEdits[name] ?? priceList[name] ?? 50),
      checked: !!groceryChecks[name]
    }));
  }, [plan, priceEdits, groceryChecks]);

  const groceryTotal = groceryItems
    .filter((x) => !x.checked)
    .reduce((sum, x) => sum + x.quantity * x.price, 0);

  const exportGroceries = () => {
    const rows = [
      ["Item", "Estimated quantity", "Price per unit (₹)", "Estimated total (₹)"],
      ...groceryItems.map((x) => [
        x.name,
        x.quantity,
        x.price,
        Math.round(x.quantity * x.price)
      ])
    ];

    const csv = rows
      .map((row) =>
        row
          .map((v) => '"' + String(v).replaceAll('"', '""') + '"')
          .join(",")
      )
      .join("\n");

    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8;" })
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "nutrismart-grocery-list.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const kitchenMatches = allMeals
    .filter(
      (m) =>
        (m.ingredients || []).some((i) =>
          kitchen.some((k) => i.toLowerCase().includes(k.toLowerCase()))
        ) &&
        (planPreference === "All" ||
          m.type === planPreference ||
          (planPreference === "Vegetarian + eggs" &&
            m.name.toLowerCase().includes("egg")))
    )
    .slice(0, 8);

  return (
    <div className="app-shell">
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        jump={jump}
      />

      <main>
        <Hero t={t} jump={jump} />
        <QuickStats />

        <MealExplorer
          t={t}
          mealType={mealType}
          setMealType={setMealType}
          foodType={foodType}
          setFoodType={setFoodType}
          budget={budget}
          setBudget={setBudget}
          search={search}
          setSearch={setSearch}
          showMeals={showMeals}
          setShowMeals={setShowMeals}
          filteredMeals={filteredMeals}
        />

        <BudgetPlanner
          period={period}
          setPeriod={setPeriod}
          planBudget={planBudget}
          setPlanBudget={setPlanBudget}
          people={people}
          setPeople={setPeople}
          planPreference={planPreference}
          setPlanPreference={setPlanPreference}
          goal={goal}
          setGoal={setGoal}
          createPlan={createPlan}
          plan={plan}
          planCost={planCost}
          notice={notice}
          setNotice={setNotice}
          kitchenItems={kitchenItems}
          kitchen={kitchen}
          setKitchen={setKitchen}
          kitchenMatches={kitchenMatches}
          groceryItems={groceryItems}
          groceryChecks={groceryChecks}
          setGroceryChecks={setGroceryChecks}
          priceEdits={priceEdits}
          setPriceEdits={setPriceEdits}
          priceList={priceList}
          groceryTotal={groceryTotal}
          exportGroceries={exportGroceries}
        />

        <NutritionGuide
          t={t}
          nutrients={nutrients}
          activeNutrient={activeNutrient}
          setActiveNutrient={setActiveNutrient}
        />

        <NutritionQuiz
          t={t}
          quizOpen={quizOpen}
          setQuizOpen={setQuizOpen}
          qIndex={qIndex}
          setQIndex={setQIndex}
          answers={answers}
          setAnswers={setAnswers}
          quizDone={quizDone}
          setQuizDone={setQuizDone}
          resetQuiz={resetQuiz}
          score={score}
        />

        <AwarenessSection
          t={t}
          tipFilter={tipFilter}
          setTipFilter={setTipFilter}
          jump={jump}
        />
      </main>

      <Footer t={t} />
    </div>
  );
}
