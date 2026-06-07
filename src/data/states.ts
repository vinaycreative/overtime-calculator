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
    description: "Use our free overtime calculator to find your California overtime pay instantly. Our tool functions as a tax free overtime calculator and factors in California labor laws (1.5x after 8 hours/day or 40 hours/week, 2x after 12 hours/day).",
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
    description: "Use our free overtime calculator to find your Texas overtime pay instantly. Our tool acts as a tax free overtime calculator based on federal FLSA laws, requiring 1.5x regular pay for hours over 40 in a workweek.",
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
    description: "Use our free overtime calculator to find your New York overtime pay instantly. Features a tax free overtime calculator mode and factors in NY's 40-hour weekly threshold and specific rules like Spread of Hours.",
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
