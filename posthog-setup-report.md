<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the OvertimeCal Astro (static/SSG) project. PostHog is initialized via an inline snippet in a reusable `posthog.astro` component, which is imported into the shared `Layout.astro` so every page on the site loads it automatically. Ten custom events are instrumented across three components, covering the full user journey from landing on the site, choosing a jurisdiction, running a calculation, and sharing results.

Environment variables are stored in `.env` (gitignored) and referenced via Astro's `PUBLIC_` prefix convention — no tokens are hardcoded in source files.

| Event | Description | File |
|---|---|---|
| `overtime_calculated` | User clicks "Calculate Overtime Pay" and results are shown | `src/components/Calculator.astro` |
| `jurisdiction_changed` | User selects a different state/jurisdiction in the dropdown | `src/components/Calculator.astro` |
| `multiplier_selected` | User picks a different OT multiplier (1.5×, 2×, 2.5×) | `src/components/Calculator.astro` |
| `results_copied` | User copies the calculation results to clipboard | `src/components/Calculator.astro` |
| `results_printed` | User clicks Print to print the calculation report | `src/components/Calculator.astro` |
| `detailed_calculator_clicked` | User clicks the "Use Detailed Calculator" link | `src/components/Calculator.astro` |
| `detailed_overtime_calculated` | User submits the detailed calculator and results are shown | `src/components/DetailedCalculator.astro` |
| `pay_frequency_changed` | User changes pay frequency (hourly, daily, weekly, etc.) | `src/components/DetailedCalculator.astro` |
| `currency_changed` | User changes currency (USD, EUR, GBP, etc.) | `src/components/DetailedCalculator.astro` |
| `cta_calculate_clicked` | User clicks the homepage CTA "Calculate yours now" button | `src/components/CTA.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/471004/dashboard/1713500)
- [Total Overtime Calculations](https://us.posthog.com/project/471004/insights/bL2qAbmO) — Single-number total of calculations over the last 30 days
- [Calculations Over Time](https://us.posthog.com/project/471004/insights/TF3t56n2) — Daily trend comparing simple vs detailed calculator usage
- [Jurisdictions Used](https://us.posthog.com/project/471004/insights/4nhTpGse) — Bar chart of which states/jurisdictions users select most
- [Multiplier Distribution](https://us.posthog.com/project/471004/insights/VHjU9eoZ) — Pie chart showing how often users pick 1.5×, 2×, or 2.5×
- [Results Copied & Printed](https://us.posthog.com/project/471004/insights/9vhsBKvn) — Daily trend of high-engagement copy/print actions

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-static/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
