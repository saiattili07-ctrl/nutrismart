
// NutriSmart data

export const copy = {
  en: {
    eyebrow: 'SMALL CHOICES. BETTER HEALTH.',
    title: 'Eat well, feel',
    titleAccent: 'your best.',
    subtitle: 'Simple nutrition guidance for everyday life. Discover balanced meals, learn what your body needs, and build healthier habits one plate at a time.',
    explore: 'Explore meal ideas',
    learn: 'Learn about nutrition',
    today: 'A healthier plate starts here',
    todaySub: 'A simple guide to building a balanced meal',
    food: 'Food suggestions',
    balanced: 'Balanced diet',
    quiz: 'Nutrition quiz',
    awareness: 'Awareness corner',
    popular: 'Good food. Real life.',
    popularSub: 'Affordable, familiar ingredients can make nourishing meals.',
    all: 'All meals',
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snacks: 'Snacks',
    vegetarian: 'Vegetarian',
    nonveg: 'Non-vegetarian',
    budget: 'Everyday budget',
    flexible: 'Flexible budget',
    mealHeading: 'Find your next meal',
    mealSub: 'Choose a few preferences to get practical meal ideas.',
    meal: 'Meal',
    budgetLabel: 'Budget',
    preference: 'Food preference',
    suggest: 'Show meal ideas',
    guideTitle: 'Understand your plate',
    guideSub: 'Your body needs a mix of nutrients. Tap a card to learn more.',
    quizTitle: 'A little knowledge goes a long way',
    quizSub: 'Test what you know about everyday nutrition.',
    startQuiz: 'Start the quiz',
    tipsTitle: 'Nutrition, without the confusion',
    tipsSub: 'Practical tips and common myths, explained simply.',
    english: 'English',
    telugu: 'తెలుగు',
    footer: 'Better habits begin with the next meal.'
  },
  te: {
    eyebrow: 'చిన్న మార్పులు. మెరుగైన ఆరోగ్యం.',
    title: 'ఆరోగ్యంగా తినండి,',
    titleAccent: 'ఆనందంగా ఉండండి.',
    subtitle: 'రోజువారీ జీవితానికి సరళమైన పోషకాహార సూచనలు. సమతుల్య ఆహారం గురించి తెలుసుకోండి, ఆరోగ్యకరమైన అలవాట్లను పెంచుకోండి.',
    explore: 'ఆహార సూచనలు చూడండి',
    learn: 'పోషకాహారం తెలుసుకోండి',
    today: 'ఆరోగ్యకరమైన ప్లేట్ ఇక్కడ మొదలు',
    todaySub: 'సమతుల్య భోజనం తయారు చేసుకునే సరళమైన మార్గం',
    food: 'ఆహార సూచనలు',
    balanced: 'సమతుల్య ఆహారం',
    quiz: 'పోషకాహార క్విజ్',
    awareness: 'అవగాహన విభాగం',
    all: 'అన్ని భోజనాలు',
    breakfast: 'ఉదయం',
    lunch: 'మధ్యాహ్నం',
    dinner: 'రాత్రి',
    snacks: 'స్నాక్స్',
    vegetarian: 'శాకాహారం',
    nonveg: 'మాంసాహారం',
    budget: 'రోజువారీ బడ్జెట్',
    flexible: 'సౌకర్యవంతమైన బడ్జెట్',
    mealHeading: 'మీ తదుపరి భోజనాన్ని ఎంచుకోండి',
    mealSub: 'మీకు నచ్చిన ఎంపికలతో ఆహార సూచనలు పొందండి.',
    meal: 'భోజనం',
    budgetLabel: 'బడ్జెట్',
    preference: 'ఆహార రకం',
    suggest: 'ఆహార సూచనలు చూపించు',
    guideTitle: 'మీ ప్లేట్‌ను అర్థం చేసుకోండి',
    guideSub: 'శరీరానికి వివిధ పోషకాలు అవసరం. మరింత తెలుసుకోవడానికి కార్డును ఎంచుకోండి.',
    quizTitle: 'కొద్దిపాటి జ్ఞానం ఎంతో ఉపయోగం',
    quizSub: 'రోజువారీ పోషకాహారంపై మీ అవగాహనను పరీక్షించండి.',
    startQuiz: 'క్విజ్ ప్రారంభించండి',
    tipsTitle: 'సరళమైన పోషకాహార సమాచారం',
    tipsSub: 'ఆరోగ్య సూచనలు, ఆహార అపోహలు మరియు నిజాలు.',
    english: 'English',
    telugu: 'తెలుగు',
    footer: 'మంచి అలవాట్లు తదుపరి భోజనంతో మొదలవుతాయి.'
  }
};

export const meals = [
  {name:'Idli + sambar',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Steamed idlis with protein- and fibre-rich lentil sambar.',tags:['Fibre','Protein'],emoji:'🥣'},
  {name:'Vegetable upma',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Semolina cooked with vegetables, peas and simple spices.',tags:['Energy','Vegetables'],emoji:'🥘'},
  {name:'Egg dosa + chutney',category:'Breakfast',type:'Non-vegetarian',budget:'Flexible budget',time:'15 min',desc:'A crisp dosa with egg for extra protein.',tags:['Protein','Energy'],emoji:'🍳'},
  {name:'Rice, dal + vegetable curry',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'30 min',desc:'A familiar balanced meal with grains, pulses and vegetables.',tags:['Balanced','Fibre'],emoji:'🍛'},
  {name:'Roti, chana masala + salad',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'30 min',desc:'Whole-wheat roti with chickpeas and fresh vegetables.',tags:['Protein','Fibre'],emoji:'🫓'},
  {name:'Rice, fish + greens',category:'Lunch',type:'Non-vegetarian',budget:'Flexible budget',time:'35 min',desc:'Rice served with fish and a side of leafy greens.',tags:['Protein','Healthy fats'],emoji:'🐟'},
  {name:'Roti + paneer bhurji',category:'Dinner',type:'Vegetarian',budget:'Flexible budget',time:'25 min',desc:'Roti with crumbled paneer and sautéed vegetables.',tags:['Protein','Calcium'],emoji:'🥗'},
  {name:'Vegetable khichdi + curd',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Comforting rice-and-lentil khichdi with curd on the side.',tags:['Protein','Easy to digest'],emoji:'🍲'},
  {name:'Roasted chana + fruit',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'5 min',desc:'A convenient snack with fibre and plant protein.',tags:['Fibre','Protein'],emoji:'🍎'},
  {name:'Yogurt, banana + nuts',category:'Snacks',type:'Vegetarian',budget:'Flexible budget',time:'5 min',desc:'A quick snack with calcium, energy and some healthy fats.',tags:['Calcium','Energy'],emoji:'🥜'}
];

export const extraMeals = [
  {name:'Pesarattu + ginger chutney',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Green gram dosa with a simple chutney.',tags:['Protein','Fibre'],emoji:'🥞',cost:25,ingredients:['green gram','ginger','rice']},
  {name:'Poha with peanuts',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Flattened rice with peanuts and vegetables.',tags:['Quick','Energy'],emoji:'🥜',cost:20,ingredients:['poha','peanuts','onion']},
  {name:'Oats banana bowl',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'10 min',desc:'Oats, banana and milk for a quick breakfast.',tags:['Fibre','Quick'],emoji:'🥣',cost:28,ingredients:['oats','banana','milk']},
  {name:'Vegetable dosa',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Dosa with vegetables and chutney.',tags:['Vegetables','Energy'],emoji:'🥞',cost:22,ingredients:['dosa batter','carrot','onion']},
  {name:'Boiled eggs + fruit',category:'Breakfast',type:'Non-vegetarian',budget:'Everyday budget',time:'10 min',desc:'Eggs with a seasonal fruit.',tags:['Protein','Quick'],emoji:'🥚',cost:30,ingredients:['eggs','seasonal fruit']},
  {name:'Ragi porridge',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'10 min',desc:'Simple ragi porridge with milk or water.',tags:['Calcium','Fibre'],emoji:'🥛',cost:18,ingredients:['ragi flour','milk']},
  {name:'Vegetable sandwich',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'12 min',desc:'Whole-wheat bread with vegetables.',tags:['Quick','Vegetables'],emoji:'🥪',cost:30,ingredients:['bread','tomato','cucumber']},
  {name:'Idli + peanut chutney',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Steamed idli served with peanut chutney.',tags:['Energy','Protein'],emoji:'🥣',cost:22,ingredients:['idli batter','peanuts']},
  {name:'Curd rice + cucumber',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Rice and curd with cucumber on the side.',tags:['Calcium','Simple'],emoji:'🍚',cost:25,ingredients:['rice','curd','cucumber']},
  {name:'Tomato pappu + rice',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'30 min',desc:'Tomato dal with rice and seasonal vegetables.',tags:['Protein','Fibre'],emoji:'🍛',cost:28,ingredients:['toor dal','tomato','rice']},
  {name:'Chickpea sundal bowl',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Chickpeas with onion, lemon and spices.',tags:['Protein','Fibre'],emoji:'🫘',cost:27,ingredients:['chickpeas','onion','lemon']},
  {name:'Vegetable pulao + curd',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'30 min',desc:'Rice cooked with vegetables and spices.',tags:['Vegetables','Balanced'],emoji:'🍚',cost:35,ingredients:['rice','mixed vegetables','curd']},
  {name:'Sambar rice',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Rice and lentil sambar with vegetables.',tags:['Protein','Fibre'],emoji:'🍲',cost:28,ingredients:['rice','toor dal','vegetables']},
  {name:'Roti + moong dal',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Whole-wheat roti with yellow moong dal.',tags:['Protein','Fibre'],emoji:'🫓',cost:30,ingredients:['atta','moong dal']},
  {name:'Egg curry + rice',category:'Lunch',type:'Non-vegetarian',budget:'Everyday budget',time:'30 min',desc:'Egg curry served with rice.',tags:['Protein','Energy'],emoji:'🍛',cost:38,ingredients:['eggs','rice','onion']},
  {name:'Chicken rice bowl',category:'Lunch',type:'Non-vegetarian',budget:'Flexible budget',time:'35 min',desc:'Home-cooked chicken with rice and vegetables.',tags:['Protein','Balanced'],emoji:'🍗',cost:65,ingredients:['chicken','rice','vegetables']},
  {name:'Rajma rice',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'35 min',desc:'Kidney beans with rice and a vegetable side.',tags:['Protein','Fibre'],emoji:'🍛',cost:35,ingredients:['rajma','rice','tomato']},
  {name:'Lemon rice + peanuts',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Lemon-flavoured rice with peanuts.',tags:['Quick','Energy'],emoji:'🍋',cost:22,ingredients:['rice','lemon','peanuts']},
  {name:'Millet upma',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Millets cooked with seasonal vegetables.',tags:['Fibre','Vegetables'],emoji:'🥘',cost:30,ingredients:['millets','carrot','peas']},
  {name:'Fish curry + rice',category:'Lunch',type:'Non-vegetarian',budget:'Flexible budget',time:'35 min',desc:'Fish curry with rice and greens.',tags:['Protein','Variety'],emoji:'🐟',cost:75,ingredients:['fish','rice','greens']},
  {name:'Vegetable dalia',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Broken wheat and vegetables in one pot.',tags:['Fibre','Simple'],emoji:'🥣',cost:25,ingredients:['dalia','vegetables']},
  {name:'Roti + mixed veg curry',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Roti with a seasonal mixed vegetable curry.',tags:['Vegetables','Fibre'],emoji:'🫓',cost:28,ingredients:['atta','seasonal vegetables']},
  {name:'Moong dal khichdi',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Rice and moong dal cooked together.',tags:['Protein','Simple'],emoji:'🍲',cost:24,ingredients:['rice','moong dal']},
  {name:'Paneer vegetable wrap',category:'Dinner',type:'Vegetarian',budget:'Flexible budget',time:'20 min',desc:'Paneer and vegetables wrapped in roti.',tags:['Protein','Vegetables'],emoji:'🌯',cost:48,ingredients:['paneer','atta','vegetables']},
  {name:'Besan chilla',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Chickpea-flour pancakes with vegetables.',tags:['Protein','Quick'],emoji:'🥞',cost:22,ingredients:['besan','onion','tomato']},
  {name:'Vegetable soup + toast',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Seasonal vegetable soup with whole-wheat toast.',tags:['Vegetables','Quick'],emoji:'🍵',cost:32,ingredients:['vegetables','bread']},
  {name:'Egg bhurji + roti',category:'Dinner',type:'Non-vegetarian',budget:'Everyday budget',time:'20 min',desc:'Scrambled eggs with vegetables and roti.',tags:['Protein','Quick'],emoji:'🍳',cost:35,ingredients:['eggs','atta','onion']},
  {name:'Chana salad',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'10 min',desc:'Chickpeas with cucumber, tomato and lemon.',tags:['Protein','Fibre'],emoji:'🥗',cost:20,ingredients:['chickpeas','cucumber','tomato']},
  {name:'Seasonal fruit bowl',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'5 min',desc:'A bowl of locally available seasonal fruit.',tags:['Fibre','Variety'],emoji:'🍉',cost:25,ingredients:['seasonal fruit']},
  {name:'Roasted peanuts',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'2 min',desc:'A small portion of roasted peanuts.',tags:['Healthy fats','Protein'],emoji:'🥜',cost:10,ingredients:['peanuts']},
  {name:'Buttermilk + roasted chana',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'5 min',desc:'Buttermilk with roasted chickpeas.',tags:['Protein','Hydration'],emoji:'🥛',cost:18,ingredients:['curd','roasted chana']},
  {name:'Sprouts chaat',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'10 min',desc:'Sprouts with tomato, onion and lemon.',tags:['Protein','Fibre'],emoji:'🌱',cost:18,ingredients:['sprouts','tomato','lemon']},
  {name:'Banana + peanuts',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'2 min',desc:'Banana with a small serving of peanuts.',tags:['Energy','Healthy fats'],emoji:'🍌',cost:15,ingredients:['banana','peanuts']},
  {name:'Corn chaat',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'10 min',desc:'Corn with lemon and spices.',tags:['Fibre','Quick'],emoji:'🌽',cost:22,ingredients:['corn','lemon']},
  {name:'Curd + seasonal fruit',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'5 min',desc:'Plain curd with chopped seasonal fruit.',tags:['Calcium','Fibre'],emoji:'🥣',cost:22,ingredients:['curd','seasonal fruit']},
  {name:'Boiled sweet potato',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Sweet potato with lemon and mild spices.',tags:['Fibre','Energy'],emoji:'🍠',cost:15,ingredients:['sweet potato','lemon']},
  {name:'Paneer cubes + cucumber',category:'Snacks',type:'Vegetarian',budget:'Flexible budget',time:'5 min',desc:'Paneer with fresh cucumber slices.',tags:['Protein','Calcium'],emoji:'🧀',cost:35,ingredients:['paneer','cucumber']},
  {name:'Milk + banana',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'3 min',desc:'Milk and banana as a quick snack.',tags:['Calcium','Energy'],emoji:'🥛',cost:20,ingredients:['milk','banana']},
  {name:'Vegetable omelette',category:'Breakfast',type:'Non-vegetarian',budget:'Everyday budget',time:'12 min',desc:'Egg omelette with chopped vegetables.',tags:['Protein','Quick'],emoji:'🍳',cost:25,ingredients:['eggs','onion','tomato']},
  {name:'Ragi dosa + chutney',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Ragi dosa served with a simple chutney.',tags:['Fibre','Variety'],emoji:'🥞',cost:24,ingredients:['ragi flour','curd']},
  {name:'Peanut poha',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'15 min',desc:'Poha with peanuts and seasonal vegetables.',tags:['Energy','Quick'],emoji:'🥜',cost:20,ingredients:['poha','peanuts','vegetables']},
  {name:'Dal + roti + greens',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'Dal and roti with leafy greens.',tags:['Protein','Fibre'],emoji:'🥬',cost:30,ingredients:['dal','atta','greens']},
  {name:'Vegetable oats',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'12 min',desc:'Savoury oats with carrots and peas.',tags:['Fibre','Quick'],emoji:'🥣',cost:24,ingredients:['oats','carrot','peas']},
  {name:'Soya chunks curry + rice',category:'Lunch',type:'Vegetarian',budget:'Everyday budget',time:'30 min',desc:'Soya chunks curry with rice.',tags:['Protein','Budget'],emoji:'🍛',cost:32,ingredients:['soya chunks','rice','tomato']},
  {name:'Vegetable pulao',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'25 min',desc:'One-pot rice with mixed vegetables.',tags:['Vegetables','Simple'],emoji:'🍚',cost:28,ingredients:['rice','mixed vegetables']},
  {name:'Egg fried rice, home style',category:'Dinner',type:'Non-vegetarian',budget:'Everyday budget',time:'20 min',desc:'Rice with egg and leftover vegetables.',tags:['Protein','Leftovers'],emoji:'🍳',cost:32,ingredients:['rice','eggs','vegetables']},
  {name:'Dal dosa',category:'Breakfast',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Lentil-based dosa served with chutney.',tags:['Protein','Fibre'],emoji:'🥞',cost:24,ingredients:['dal','rice']},
  {name:'Vegetable pasta, home style',category:'Dinner',type:'Vegetarian',budget:'Flexible budget',time:'25 min',desc:'Pasta with seasonal vegetables and tomato.',tags:['Vegetables','Quick'],emoji:'🍝',cost:45,ingredients:['pasta','tomato','vegetables']},
  {name:'Chicken egg curry + roti',category:'Dinner',type:'Non-vegetarian',budget:'Flexible budget',time:'35 min',desc:'Home-cooked protein dish with roti.',tags:['Protein','Balanced'],emoji:'🍗',cost:70,ingredients:['chicken','atta','onion']},
  {name:'Fruit + roasted chana',category:'Snacks',type:'Vegetarian',budget:'Everyday budget',time:'3 min',desc:'Seasonal fruit paired with roasted chickpeas.',tags:['Fibre','Protein'],emoji:'🍎',cost:18,ingredients:['seasonal fruit','roasted chana']},
  {name:'Vegetable sambar + idli',category:'Dinner',type:'Vegetarian',budget:'Everyday budget',time:'20 min',desc:'Idli and vegetable-rich sambar.',tags:['Fibre','Protein'],emoji:'🍲',cost:28,ingredients:['idli batter','toor dal','vegetables']}
];

export const allMeals = [
  ...meals.map(m => ({
    ...m,
    cost: m.budget === 'Flexible budget' ? 45 : 25,
    ingredients: m.name.toLowerCase().includes('egg')
      ? ['eggs', 'rice', 'vegetables']
      : m.name.toLowerCase().includes('paneer')
      ? ['paneer', 'atta', 'vegetables']
      : ['rice', 'dal', 'seasonal vegetables']
  })),
  ...extraMeals
];

export const kitchenItems = [
  'rice','dal','atta','eggs','tomato','onion','potato','oats','banana',
  'milk','curd','peanuts','chickpeas','vegetables','paneer','lemon',
  'poha','ragi flour','sprouts','bread'
];

export const priceList = {
  rice:60, dal:120, atta:45, eggs:7, tomato:35, onion:35,
  potato:30, oats:100, banana:8, milk:30, curd:35, peanuts:100,
  chickpeas:100, vegetables:50, paneer:100, lemon:5, poha:55,
  'ragi flour':60, sprouts:60, bread:35, 'seasonal fruit':60,
  'toor dal':140, 'moong dal':130, 'green gram':120, ginger:20,
  carrot:40, peas:60, 'dosa batter':50, 'idli batter':50,
  cucumber:30, 'mixed vegetables':50, rajma:130, millets:80,
  fish:220, chicken:220, besan:90, dalia:60, corn:50,
  'sweet potato':40, 'soya chunks':90, pasta:70, greens:35,
  'roasted chana':100
};

export const nutrients = [
  {
    name:'Carbohydrates',
    emoji:'🌾',
    color:'gold',
    short:'Your body’s main energy source.',
    foods:'Rice, roti, oats, millets, potatoes and fruit.',
    function:'Carbohydrates provide energy for daily activities and brain function. Choose a mix of whole grains and fibre-rich foods.'
  },
  {
    name:'Protein',
    emoji:'🫘',
    color:'coral',
    short:'Helps build and repair tissues.',
    foods:'Dal, beans, chickpeas, eggs, milk, curd, fish and paneer.',
    function:'Protein supports muscle maintenance, growth and repair. Include a protein source across your meals.'
  },
  {
    name:'Healthy fats',
    emoji:'🥑',
    color:'green',
    short:'Support cells and vitamin absorption.',
    foods:'Peanuts, nuts, seeds, sesame and moderate amounts of vegetable oils.',
    function:'Fats help your body absorb vitamins A, D, E and K. Prefer unsaturated fats and keep portions sensible.'
  },
  {
    name:'Vitamins',
    emoji:'🍊',
    color:'orange',
    short:'Help your body work normally.',
    foods:'A variety of vegetables, fruits, pulses, eggs and dairy foods.',
    function:'Different vitamins have different roles, from vision and immunity to energy metabolism. Variety matters more than one “superfood”.'
  },
  {
    name:'Minerals',
    emoji:'🥬',
    color:'blue',
    short:'Support bones, blood and nerves.',
    foods:'Milk, curd, leafy greens, pulses, nuts and seeds.',
    function:'Minerals such as calcium, iron and potassium support bones, oxygen transport, muscles and nerves.'
  }
];
