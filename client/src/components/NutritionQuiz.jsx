
import React from 'react';
import {
  ArrowRight,
  Check,
  CircleHelp,
  HeartHandshake,
  Sparkles,
  X
} from 'lucide-react';

export const questions = [
  {
    q: 'Which food is a good source of plant protein?',
    options: ['Soft drink', 'Dal (lentils)', 'Candy', 'Butter'],
    answer: 1,
    why: 'Dal and other pulses provide plant protein and fibre.'
  },
  {
    q: 'Which plate pattern is a useful starting point for a balanced meal?',
    options: [
      'Only rice',
      'Half vegetables, with grains and protein foods',
      'Only fruit',
      'Mostly sweets'
    ],
    answer: 1,
    why: 'A mix of vegetables, grains and protein foods supports dietary variety.'
  },
  {
    q: 'Which nutrient is the body’s main source of energy?',
    options: ['Carbohydrates', 'Water', 'Minerals', 'Vitamin C'],
    answer: 0,
    why: 'Carbohydrates are an important energy source.'
  },
  {
    q: 'Which is generally a better everyday drink?',
    options: ['Sugary soda', 'Water', 'Energy drink', 'Sweetened syrup'],
    answer: 1,
    why: 'Water is a good default for hydration without added sugar.'
  },
  {
    q: 'Which food contains calcium?',
    options: ['Curd', 'Jam', 'Plain sugar', 'Soft drink'],
    answer: 0,
    why: 'Milk and curd are common sources of calcium.'
  },
  {
    q: 'What is a sensible way to eat fruit?',
    options: [
      'Avoid all fruit',
      'Eat a variety of whole fruits',
      'Only drink fruit-flavoured soda',
      'Eat fruit only once a month'
    ],
    answer: 1,
    why: 'Whole fruits provide water, fibre and a range of nutrients.'
  },
  {
    q: 'Which is a source of healthy unsaturated fats?',
    options: ['Peanuts', 'Candy', 'Sugar syrup', 'Lollipops'],
    answer: 0,
    why: 'Peanuts contain unsaturated fats, along with some protein.'
  },
  {
    q: 'Why is dietary fibre useful?',
    options: [
      'It replaces water',
      'It supports digestion',
      'It is a vitamin',
      'It makes vegetables unnecessary'
    ],
    answer: 1,
    why: 'Fibre supports healthy digestion and can help you feel full.'
  },
  {
    q: 'What is the best approach to nutrition?',
    options: [
      'One food fixes everything',
      'Avoid every carbohydrate',
      'Eat a varied, balanced diet',
      'Skip meals to be healthy'
    ],
    answer: 2,
    why: 'Overall dietary patterns matter more than a single food.'
  },
  {
    q: 'Which habit can help reduce excess added sugar?',
    options: [
      'Drink water instead of soda more often',
      'Add syrup to every drink',
      'Replace meals with sweets',
      'Avoid all vegetables'
    ],
    answer: 0,
    why: 'Choosing water more often can reduce added sugar intake.'
  }
];

export default function NutritionQuiz({
  t,
  quizOpen,
  setQuizOpen,
  qIndex,
  setQIndex,
  answers,
  setAnswers,
  quizDone,
  setQuizDone,
  resetQuiz,
  score
}) {
  return (
    <>
      <section className="quiz-section" id="quiz">
        <div className="quiz-illustration">
          <div className="quiz-sun" />

          <div className="quiz-card-illustration">
            <CircleHelp size={39} />
            <span>Quick quiz</span>
            <div className="quiz-line line-long" />
            <div className="quiz-line" />
            <div className="quiz-option">
              <Check size={14} />
            </div>
            <div className="quiz-option muted" />
            <div className="quiz-option muted" />
          </div>

          <span className="quiz-fruit fruit-one">🍋</span>
          <span className="quiz-fruit fruit-two">🍓</span>
          <span className="quiz-fruit fruit-three">🥑</span>
        </div>

        <div className="quiz-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            LEARN AS YOU GO
          </div>

          <h2>{t.quizTitle}</h2>
          <p>
            {t.quizSub} Ten quick questions, useful explanations,
            and a score at the end.
          </p>

          <div className="quiz-benefits">
            <span><Check size={15} /> 10 quick questions</span>
            <span><Check size={15} /> Instant feedback</span>
            <span><Check size={15} /> Learn as you go</span>
          </div>

          <button className="btn btn-primary" onClick={resetQuiz}>
            {t.startQuiz}
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {quizOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={e => {
            if (e.target === e.currentTarget) setQuizOpen(false);
          }}
        >
          <section
            className="quiz-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Nutrition quiz"
          >
            <button
              className="modal-close"
              onClick={() => setQuizOpen(false)}
              aria-label="Close quiz"
            >
              <X />
            </button>

            {!quizDone ? (
              <>
                <div className="modal-topline">
                  <span>QUESTION {qIndex + 1} OF {questions.length}</span>
                  <span>
                    {Math.round((qIndex / questions.length) * 100)}% complete
                  </span>
                </div>

                <div className="progress-track">
                  <div
                    style={{
                      width: `${(qIndex / questions.length) * 100}%`
                    }}
                  />
                </div>

                <h2>{questions[qIndex].q}</h2>

                <div className="answer-list">
                  {questions[qIndex].options.map((option, i) => (
                    <button
                      key={option}
                      className={
                        answers[qIndex] === i ? 'answer-selected' : ''
                      }
                      onClick={() =>
                        setAnswers(prev => ({ ...prev, [qIndex]: i }))
                      }
                    >
                      <span className="answer-letter">
                        {String.fromCharCode(65 + i)}
                      </span>

                      {option}

                      {answers[qIndex] === i && <Check size={17} />}
                    </button>
                  ))}
                </div>

                <div className="modal-footer">
                  <span>{Object.keys(answers).length} answered</span>

                  <button
                    className="btn btn-primary"
                    disabled={answers[qIndex] === undefined}
                    onClick={() => {
                      if (qIndex < questions.length - 1) {
                        setQIndex(qIndex + 1);
                      } else {
                        setQuizDone(true);
                      }
                    }}
                  >
                    {qIndex === questions.length - 1
                      ? 'See results'
                      : 'Next question'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="result-icon">
                  {score >= 7 ? '🎉' : '🌱'}
                </div>

                <span className="detail-kicker">QUIZ COMPLETE</span>
                <h2>You scored {score} out of {questions.length}</h2>

                <p className="result-message">
                  {score >= 8
                    ? 'Great work! You have a strong grasp of the basics.'
                    : score >= 5
                    ? 'Good start. Review the explanations below to strengthen your knowledge.'
                    : 'Every answer is a chance to learn. Review these key points and try again.'}
                </p>

                <div className="review-list">
                  {questions.map((q, i) => (
                    <div className="review-item" key={q.q}>
                      <span
                        className={
                          answers[i] === q.answer
                            ? 'review-correct'
                            : 'review-wrong'
                        }
                      >
                        {answers[i] === q.answer
                          ? <Check size={15} />
                          : <X size={15} />}
                      </span>

                      <div>
                        <b>{q.q}</b>
                        <p>
                          Correct answer: {q.options[q.answer]}. {q.why}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="modal-footer">
                  <button className="btn btn-outline" onClick={resetQuiz}>
                    Try again
                  </button>

                  <button
                    className="btn btn-primary"
                    onClick={() => setQuizOpen(false)}
                  >
                    Done <Check size={16} />
                  </button>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
}

