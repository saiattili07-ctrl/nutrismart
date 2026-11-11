
import { Utensils, Clock3, HeartHandshake } from "lucide-react";

export default function QuickStats() {
  return (
    <section className="quick-stats">
      <div>
        <span className="stat-icon">
          <Utensils size={19} />
        </span>
        <span>
          <b>Everyday foods</b>
          <small>Familiar ingredients</small>
        </span>
      </div>

      <div>
        <span className="stat-icon">
          <Clock3 size={19} />
        </span>
        <span>
          <b>Simple ideas</b>
          <small>Practical meal options</small>
        </span>
      </div>

      <div>
        <span className="stat-icon">
          <HeartHandshake size={19} />
        </span>
        <span>
          <b>Better choices</b>
          <small>Small steps that add up</small>
        </span>
      </div>
    </section>
  );
}
