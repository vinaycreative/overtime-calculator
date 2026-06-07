export interface FAQ {
  question: string;
  answer: string;
}

export interface StateData {
  slug: string;
  name: string;
  type: string;
  weekly: string;
  daily: string;
  rate: string;
  notes: string;
  description: string;
  stats: string[];
  faqs: FAQ[];
}

export const statesData: StateData[] = [
  { 
    slug: 'california',
    name: 'California', 
    type: 'Special', 
    weekly: '40 hrs/week', 
    daily: '8 hrs/day', 
    rate: '1.5×; 2× after 12 hrs', 
    notes: 'Strictest in the US. Double time after 12 hrs/day or 8 hrs on 7th day',
    description: "Calculate your California overtime pay instantly. Under California labor laws, employees are entitled to 1.5x their regular rate for hours worked over 8 in a single day or 40 in a week, and double time (2x) for hours over 12 in a single day.",
    stats: [
      "California requires 1.5x pay after 8 hours in a single day.",
      "Double time (2x) pay is required after 12 hours in a single workday.",
      "Working 7 consecutive days triggers 1.5x pay for the first 8 hours on the 7th day."
    ],
    faqs: [
      {
        question: "How is overtime calculated in California?",
        answer: "In California, overtime is calculated as 1.5 times the regular hourly rate for any hours worked beyond 8 hours in a single workday, or beyond 40 hours in a workweek. Additionally, any hours worked beyond 12 hours in a single workday must be paid at double (2x) the regular rate."
      },
      {
        question: "Does California have double time pay?",
        answer: "Yes, California requires employers to pay double time (2 times the regular rate of pay) for all hours worked over 12 hours in any workday, and for all hours worked in excess of eight on the seventh consecutive day of work in a workweek."
      }
    ]
  },
  { 
    slug: 'texas',
    name: 'Texas', 
    type: '', 
    weekly: '40 hrs/week', 
    daily: '—', 
    rate: '1.5×', 
    notes: 'Follows federal FLSA exactly',
    description: "Calculate your Texas overtime pay instantly. Texas follows the federal Fair Labor Standards Act (FLSA), requiring 1.5x regular pay for any hours worked over 40 in a single workweek.",
    stats: [
      "Texas follows the federal FLSA threshold of 40 hours per week.",
      "There is no state income tax in Texas, maximizing your net overtime take-home pay.",
      "Texas does not have daily overtime thresholds; overtime only triggers after 40 weekly hours."
    ],
    faqs: [
      {
        question: "What are the overtime rules in Texas?",
        answer: "Texas follows federal FLSA rules, which means non-exempt employees must be paid 1.5 times their regular rate of pay for any hours worked over 40 in a single workweek. Texas does not have any daily overtime requirements."
      },
      {
        question: "Is overtime taxed differently in Texas?",
        answer: "Like all states, overtime in Texas is subject to federal income tax, Social Security, and Medicare. However, because Texas has no state income tax, your take-home pay on overtime hours will be higher compared to most other states."
      }
    ]
  },
  { 
    slug: 'new-york',
    name: 'New York', 
    type: '', 
    weekly: '40 hrs/week', 
    daily: '—', 
    rate: '1.5×', 
    notes: 'Follows federal; higher state minimum wage',
    description: "Calculate your New York overtime pay instantly. New York follows a 40-hour weekly overtime threshold at 1.5x pay, but features higher state minimum wages and specific rules for certain industries like hospitality and healthcare.",
    stats: [
      "New York requires 1.5x pay for all hours worked over 40 in a workweek.",
      "New York has specific 'Spread of Hours' rules where working more than 10 hours in a day (including breaks) entitles workers to an extra hour of minimum wage pay.",
      "The minimum wage in NYC is higher than the rest of the state, affecting the minimum overtime rate."
    ],
    faqs: [
      {
        question: "How does overtime work in New York?",
        answer: "In New York, non-exempt employees earn 1.5 times their regular rate of pay for any hours worked beyond 40 in a workweek. New York does not have a general daily overtime law, but does have a 'spread of hours' rule requiring an extra hour of pay if the workday spans more than 10 hours."
      },
      {
        question: "What is the New York spread of hours pay?",
        answer: "If your workday spans more than 10 hours from start to finish (including all breaks and split shifts), New York law requires your employer to pay you one additional hour at the basic minimum hourly rate, in addition to any overtime you've earned."
      }
    ]
  }
];

export function getStateBySlug(slug: string): StateData | undefined {
  return statesData.find(s => s.slug === slug);
}
