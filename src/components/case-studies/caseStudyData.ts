import caseStudyCheckoutFlow from "@/assets/case-study-checkout-flow.png";
import caseStudyShorterCheckout from "@/assets/case-study-shorter-checkout.png";
import caseStudyReport from "@/assets/case-study-user-report-map.png";
import userReportToc1 from "@/assets/user-report-toc-1.png";
import userReportToc2 from "@/assets/user-report-toc-2.png";
import caseStudyConversion from "@/assets/case-study-conversion.jpg";
import checkoutOld1 from "@/assets/checkout-old-1.png";
import checkoutOld2 from "@/assets/checkout-old-2.png";
import checkoutOld3 from "@/assets/checkout-old-3.png";
import checkoutNew1 from "@/assets/checkout-new-1.png";
import checkoutNew2 from "@/assets/checkout-new-2.png";
import checkoutNew3 from "@/assets/checkout-new-3.png";
import testGroupsTable from "@/assets/test-groups-table.png";
import hypothesisMetrics from "@/assets/hypothesis-metrics.png";
import sellerOld from "@/assets/seller-old.jpg";
import sellerNew from "@/assets/seller-new.png";

export interface CaseStudy {
  id: number;
  tags: string[];
  title: string;
  subtitle: string;
  impact: string;
  scopeOfOwnership: string;
  problem: {
    businessGoal: string;
    userPain: string;
    trigger: string;
  };
  collaboration: string[];
  researchGoals: string[];
  researchMethod: string;
  keyInsight: string;
  projectDecision: string;
  numbers: string;
  whatWorked: string;
  whatCouldBeDifferently: string;
  keyLearnings: string;
  image: string;
  imageAspect?: "landscape" | "portrait" | "square";
  detailImages?: {
    label: string;
    images: { src: string; alt: string }[];
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    tags: ["Conversion Optimization", "A/B Testing", "Team Leadership", "Design Thinking Workshops", "Hypothesis Prioritization"],
    title: "Leading Conversion Optimisation Team",
    subtitle: "Established and led a structured conversion optimization practice as UX Lead Researcher, transforming stakeholder ideas into a pipeline of 92 research-driven experiments over 2 years.",
    impact: "Delivered measurable KPI lifts (e.g., +2% baskets, +0.5% checkout conversion) across key journeys.",
    scopeOfOwnership: "As UX Lead Researcher, I designed and managed the end-to-end practice: defined processes for idea generation, hypothesis framing, and prioritization; facilitated Design Thinking workshops; maintained the research backlog; oversaw study design and KPI alignment; synthesized insights into reusable recommendations and decisions.",
    problem: {
      businessGoal: "Develop a repeatable, centralized process for hypothesis generation, prioritization, and testing to ensure conversion initiatives relied on user research and data rather than intuition.",
      userPain: "Teams lacked a shared space and process to turn ideas into testable hypotheses, which led to scattered experiments, duplicated efforts, and missed opportunities to systematically improve key user journeys.",
      trigger: "Leadership recognised that despite many ad-hoc A/B tests, the organisation neither had a clear workflow nor a dedicated research-driven conversion team, which limited the impact of experimentation and long-term learning.",
    },
    collaboration: ["UX Researchers", "Designers", "Product Managers", "Business", "Marketing", "Senior Leadership"],
    researchGoals: [
      "Create a sustainable, cross-functional practice linking stakeholder input to user-centered research.",
      "Convert qualitative and quantitative data into prioritized, testable hypotheses.",
    ],
    researchMethod: "Implemented a Design Thinking framework: ideation workshops (empathize, define, ideate); hypothesis mapping; KPI and test plan alignment; A/B and multivariate tests (single/multi-round); supplemented by qualitative methods (e.g., interviews, usability checks).",
    keyInsight: "A structured, research-driven practice boosted experiment volume and quality, yielding improvements in user journeys and business KPIs.",
    projectDecision: "Oversaw 92 projects in 2 years, including: AI product page recommendations (+2% basket increase); Markov Chains tool for on-site behavior mapping; Checkout upsell removal (+0.5 percentage point conversion lift); other tests (e.g., copy variants, FOMO displays, ratings removal) validated status quo or refined strategies.",
    numbers: "92 projects; multiple wins (e.g., +2% baskets, +0.5% conversion) prevented misguided changes.",
    whatWorked: "Fostered a continuous feedback loop across research, product, and business, enabling iterative workflow improvements and data-informed decisions.",
    whatCouldBeDifferently: "Clarify ownership in select projects to avoid inefficiencies or cancellations; prioritize fewer, higher-impact initiatives over volume.",
    keyLearnings: "Mastered Design Thinking workshop facilitation to align diverse stakeholders and generate high-quality hypotheses. Gained expertise in cross-functional project coordination, managing backlogs and timelines for 92 experiments. Learned to synthesize insights from multiple projects into strategic decisions, with a focus on effective prioritization.",
    image: caseStudyConversion,
    imageAspect: "landscape",
  },
  {
    id: 2,
    tags: ["Multivariate Testing", "A/B Testing", "Data Analysis", "Research Project Management", "Financial Reporting", "Cross-Functional Leadership", "Checkout Optimization"],
    title: "Order Fee Optimization",
    subtitle: "Led end-to-end multivariate tests to refine the checkout financial model, optimizing order fee amounts, visuals, and flow.",
    impact: "Increased conversion rate by 1 percentage point, supporting revenue growth while preserving margins.",
    scopeOfOwnership: "As research project manager, I defined hypotheses, selected methodology and KPIs (e.g., conversion rate, revenue per order), conducted analysis, prepared financial reports, and delivered recommendations. Developed an A/B testing system integrated with the database for real-time metric tracking.",
    problem: {
      businessGoal: "Sustain revenue while eliminating the upsell and enhancing pricing transparency at checkout.",
      userPain: "Users experienced confusion and distrust, often noting issues like unexpected total changes at checkout. This was driven by feedback highlighting unclear pricing.",
      trigger: "Analysis of user complaints identified the upsell as a key barrier to conversion.",
    },
    collaboration: ["General Manager", "Legal", "Marketing", "PM", "BI", "IT"],
    researchGoals: [
      "Determine optimal order fee amounts by price bracket and product type to maintain revenue levels.",
    ],
    researchMethod: "Ran 3 rounds of multivariate tests (~2 months each) on a global desktop segment, testing order fee amounts per price bracket, visual placement on checkout, price inclusion/exclusion, and Proprietary Payment Method profitability.",
    keyInsight: "Transparent pricing (upsell removed, fees integrated into totals) maintained KPIs and improved conversion by 1 p.p. across segments.",
    projectDecision: "Eliminated upsell, established tiered fees (e.g., 5% for orders under €50), and displayed fees clearly within totals.",
    numbers: "Increased conversion rate by 1 percentage point, directly translating into significantly higher revenue.",
    whatWorked: "The custom A/B system provided real-time insights, identifying effective variants that supported substantial financial outcomes. Strong cross-team alignment facilitated implementation.",
    whatCouldBeDifferently: "Initiate earlier stakeholder alignment and clearer task delegation (e.g., IT monitoring) to reduce timeline.",
    keyLearnings: "Excelled in a combined PM-UX researcher role, navigating technical and legal considerations in a high-stakes project. This experience underscores the value of researcher-led project management for data-driven results, aligning with my goals in international project leadership.",
    image: caseStudyCheckoutFlow,
    imageAspect: "square",
    detailImages: [
      {
        label: "Old Checkout Layout Flow",
        images: [
          { src: checkoutOld1, alt: "Old checkout – payment methods" },
          { src: checkoutOld2, alt: "Old checkout – order details expanded" },
          { src: checkoutOld3, alt: "Old checkout – payment confirmation with upsell" },
        ],
      },
      {
        label: "New Checkout Layout Flow",
        images: [
          { src: checkoutNew1, alt: "New checkout – fees included in price" },
          { src: checkoutNew2, alt: "New checkout – order details expanded" },
          { src: checkoutNew3, alt: "New checkout – streamlined payment" },
        ],
      },
      {
        label: "Test Groups",
        images: [
          { src: testGroupsTable, alt: "Test groups table showing 7 groups with different order fee scenarios" },
        ],
      },
      {
        label: "Hypothesis & Metrics",
        images: [
          { src: hypothesisMetrics, alt: "9 null hypotheses covering revenue, conversion rate, and average order value" },
        ],
      },
      {
        label: "Seller Perspective Old Layout",
        images: [
          { src: sellerOld, alt: "Seller perspective old layout" },
        ],
      },
      {
        label: "Seller Perspective New Layout",
        images: [
          { src: sellerNew, alt: "Seller perspective new layout" },
        ],
      },
    ],
  },
  {
    id: 3,
    tags: ["User Surveys", "Data Analysis", "Strategic Reporting", "Segment Profiling", "Trend Analysis"],
    title: "Yearly User Report",
    subtitle: "Created and led an annual user research report, synthesizing global survey data with internal analytics to inform business strategy.",
    impact: "Identified 3–4 key segments and behavioral shifts, guiding management, marketing, and product decisions.",
    scopeOfOwnership: "As creator and lead, I managed the end-to-end process: defined research goals and questions; designed survey structure for sociodemographics, gaming behaviors, and purchase patterns; planned global rollout, sampling, and timing; analyzed data for correlations; integrated with internal analytics and prior-year benchmarks; produced visual reports and actionable presentations.",
    problem: {
      businessGoal: "Provide management, marketing, and product with up-to-date, structured user insights so that strategic decisions were grounded in current customer profiles, not assumptions or outdated research.",
      userPain: "The organization lacked a unified, regularly updated view of user sociodemographics, gaming habits, and purchase behaviors, leading to fragmented decision-making.",
      trigger: "Leadership recognised that in a fast-changing e-commerce environment, not systematically tracking how users change over time meant missing opportunities to adapt offers, messaging, and product strategy.",
    },
    collaboration: ["Management", "Business", "Marketing", "Data Analysts"],
    researchGoals: [
      "Profile core users (sociodemographics, motivations, gaming habits).",
      "Track behavioral and preference changes across segments over time.",
      "Validate survey findings against internal analytics for enriched insights.",
    ],
    researchMethod: "Conducted recurring global surveys throughout the year for declarative data; performed quantitative analysis of responses combined with behavioral metrics (e.g., purchase frequency, category preferences, device usage); conducted trend comparisons with previous years.",
    keyInsight: "The yearly user report revealed clear shifts in user profiles, gaming preferences, and purchase behaviour over time, exposing previously unnoticed segments and contradictions between assumed and actual user behaviour.",
    projectDecision: "Management adopted for campaign targeting; marketing refined segment-specific offers; product adjusted messaging and feature priorities based on trends.",
    numbers: "Globally representative sample; defined 3–4 segments; surfaced significant shifts.",
    whatWorked: "Created a repeatable, yearly rhythm for user research that closed the gap between one-off analytics and long-term strategic understanding, enabling continuous learning about the user base.",
    whatCouldBeDifferently: "Integrate report earlier into planning cycles (e.g., quarterly reviews) and incorporate workshops for broader team adoption and business application.",
    keyLearnings: "Developed skills in combining scalable surveys with internal analytics to produce comprehensive insights beyond individual methods. Gained expertise in creating living strategic documents that build organizational memory and reinforce user-centered decision-making over time.",
    image: caseStudyReport,
    imageAspect: "landscape",
  },
  {
    id: 4,
    tags: ["A/B Test", "Checkout Optimization"],
    title: "Shorter Checkout",
    subtitle: "Directed end-to-end A/B test as sole UX Researcher to eliminate a redundant checkout step, reducing drop-off.",
    impact: "Increased cart conversion rate by 5 percentage points, enhancing purchase completion and revenue.",
    scopeOfOwnership: "As sole UX Researcher, I defined research goals and KPIs (e.g., cart conversion rate, drop-off at step), configured and monitored the A/B test, analyzed behavioral and conversion data, and provided actionable recommendations to product and business stakeholders.",
    problem: {
      businessGoal: "Minimize losses in late checkout stages by removing an unnecessary step, while sustaining or improving conversion and revenue.",
      userPain: "Users encountered a redundant step that repeated information, fostering confusion and abandonment risks near purchase completion.",
      trigger: "Analytics revealed that extra steps in the journey—duplicating data from the marketplace-embedded step into the new payment gateway—increased exit rates significantly.",
    },
    collaboration: ["IT", "Business Intelligence"],
    researchGoals: [
      "Assess the effect of removing the redundant step on cart conversion rate and purchase completion.",
    ],
    researchMethod: "Executed a controlled A/B test (n=250k+ users), comparing the full flow (two steps) against a streamlined single-step version in the payment gateway. Tracked KPIs via integrated analytics dashboard.",
    keyInsight: "The additional step, despite visual consistency, elevated drop-off rates and failed to retain users at journey end.",
    projectDecision: "Removed the redundant step, consolidating into a single, streamlined checkout within the payment gateway.",
    numbers: "Increased cart conversion rate by 5 percentage points, directly improving purchase completion and revenue.",
    whatWorked: "Enabled rapid, data-driven decisions through close KPI monitoring and clear stakeholder alignment.",
    whatCouldBeDifferently: "Address technical debt earlier to accelerate implementation beyond the checkout modifications.",
    keyLearnings: "Established a practice of thorough preparation, recognizing that research success depends on upstream alignment with development, business expectations, and shared goals.",
    image: caseStudyShorterCheckout,
    imageAspect: "portrait",
  },
];
