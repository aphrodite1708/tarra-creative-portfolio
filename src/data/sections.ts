export type SectionId =
  | 'campaigns'
  | 'direction'
  | 'social'
  | 'creator'
  | 'copywriting'
  | 'ai'

export interface FolderData {
  id: SectionId
  number: string
  label: string
  shortLabel: string
  tagline: string
  color: string
  textColor: string
  tabBg: string
  image: string
  story: 'brand' | 'creator'
}

export const FOLDERS: FolderData[] = [
  // ── Story 1: Brand side ──────────────────────────────────────
  {
    id: 'campaigns',
    number: '01',
    label: 'Brand Campaigns & Partnerships',
    shortLabel: 'Campaigns',
    tagline: 'Campaign management, creator sourcing, outreach, negotiations, briefs and reporting.',
    color: '#641F36',
    textColor: '#FFFFFF',
    tabBg: '#F7F1E9',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop',
    story: 'brand',
  },
  {
    id: 'direction',
    number: '02',
    label: 'Creative Direction & Styling',
    shortLabel: 'Direction',
    tagline: 'Creative briefs, moodboards, dress codes, wardrobe and visual direction.',
    color: '#B98791',
    textColor: '#FFFFFF',
    tabBg: '#F7F1E9',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
    story: 'brand',
  },
  {
    id: 'social',
    number: '03',
    label: 'Social Media & Audience Growth',
    shortLabel: 'Social',
    tagline: 'Content strategy, competitor research, trends, community and growth.',
    color: '#302323',
    textColor: '#FFFFFF',
    tabBg: '#D7AEB5',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&fit=crop',
    story: 'brand',
  },
  // ── Story 2: Creator side ────────────────────────────────────
  {
    id: 'creator',
    number: '04',
    label: 'Creator Strategy & Development',
    shortLabel: 'Creator',
    tagline: 'Personal branding, content strategy, brand deals and audience growth.',
    color: '#D7AEB5',
    textColor: '#302323',
    tabBg: '#641F36',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&fit=crop',
    story: 'creator',
  },
  {
    id: 'copywriting',
    number: '05',
    label: 'Copywriting & Scripting',
    shortLabel: 'Copy',
    tagline: 'Ad copy, UGC scripts, captions, hooks and storytelling.',
    color: '#EDE1D2',
    textColor: '#302323',
    tabBg: '#302323',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&fit=crop',
    story: 'creator',
  },
  {
    id: 'ai',
    number: '06',
    label: 'AI Creative Production',
    shortLabel: 'AI',
    tagline: 'AI-generated advertising, PDP imagery, video and visual content.',
    color: '#A99A8D',
    textColor: '#302323',
    tabBg: '#641F36',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&fit=crop',
    story: 'creator',
  },
]

export const SECTION_CONTENT: Record<SectionId, {
  folderLabel: string
  headline: string
  intro: string
  areas: { title: string; body: string }[]
}> = {
  // ── Story 1: Brand side ──────────────────────────────────────
  campaigns: {
    folderLabel: 'Brand Work — 01',
    headline: 'Brand Campaigns & Partnerships',
    intro: "End-to-end campaign management — from sourcing and briefing creators to negotiations, reporting and everything in between. I've worked with brands including L'Oréal, Maybelline, Garnier and Disney.",
    areas: [
      { title: 'Campaign Briefs', body: 'Detailed creative and campaign briefs that align stakeholders, give creators clear direction, and set measurable objectives.' },
      { title: 'Creator Sourcing & Outreach', body: 'Identifying the right creators for a campaign and building outreach that gets responses — personalised, strategic, and on-brand.' },
      { title: 'Creator Selection Criteria', body: 'Frameworks for evaluating creators beyond follower count — engagement quality, audience fit, content style and brand alignment.' },
      { title: 'Negotiations', body: 'Managing rates, deliverables, exclusivity, and usage rights in a way that works for both brand and creator.' },
      { title: 'Campaign Tracking', body: 'Monitoring content schedules, approval workflows and deliverables across multiple creators simultaneously.' },
      { title: 'Content Insight Reports', body: "Post-campaign analysis covering what performed, what didn't, and what that means for the next brief." },
    ],
  },
  direction: {
    folderLabel: 'Brand Work — 02',
    headline: 'Creative Direction & Styling',
    intro: 'Creative direction is about making every visual decision intentional. I write production briefs, develop moodboards, direct wardrobe and styling, and ensure the final output matches the original concept.',
    areas: [
      { title: 'Creative Briefs', body: 'Detailed production documents that communicate vision, references, shot requirements and execution intent to any creative team.' },
      { title: 'Moodboards', body: 'Visual references that establish aesthetic, mood, colour palette and styling direction before a single frame is captured.' },
      { title: 'Dress Codes & Wardrobe', body: 'Styling direction that keeps creator and brand content visually consistent without overriding personal style.' },
      { title: 'Visual Direction', body: 'Shot lists, angles, sequences and transitions — planned with the edit and final placement in mind.' },
      { title: 'Campaign Storyboards', body: 'Visual sequences that map out how a campaign comes to life across assets, formats and moments.' },
    ],
  },
  social: {
    folderLabel: 'Brand Work — 03',
    headline: 'Social Media & Audience Growth',
    intro: 'Growth that lasts comes from understanding your audience, your platform and your competition better than everyone else. I build content strategies grounded in research, not guesswork.',
    areas: [
      { title: 'Audience Research', body: 'Deep-diving into who the audience actually is — their language, desires, contradictions and unmet expectations.' },
      { title: 'Competitor Research', body: 'Identifying gaps in the market, clichés to avoid and white space where a creator or brand can own something meaningful.' },
      { title: 'Trend Intelligence', body: 'Tracking cultural shifts, platform behaviours and emerging content patterns before they become noise.' },
      { title: 'Community Strategy', body: 'Building genuine audience relationships through content that invites participation rather than passive consumption.' },
      { title: 'High-Performing Content', body: 'Examples of content that outperformed — with context on why it worked and what can be replicated.' },
    ],
  },
  // ── Story 2: Creator side ────────────────────────────────────
  creator: {
    folderLabel: 'Creator Work — 04',
    headline: 'Creator Strategy & Development',
    intro: 'Helping creators build sustainable content businesses — through sharper positioning, smarter content, stronger brand relationships and consistent audience growth.',
    areas: [
      { title: 'Content Strategy Documents', body: 'Documented frameworks covering content pillars, posting cadence, platform priorities and growth objectives.' },
      { title: 'Content Calendars', body: 'Planned content schedules that balance brand deals, organic content and audience expectations.' },
      { title: 'UGC & Influencer Scripts', body: 'Scripts built for creators — structured to hook, hold attention and convert without sounding scripted.' },
      { title: 'Published Content Examples', body: 'Real content I\'ve contributed to: strategy, scripting, direction or a combination of all three.' },
      { title: 'Audience Growth Results', body: 'Before-and-after examples showing the impact of strategic content decisions on reach and engagement.' },
    ],
  },
  copywriting: {
    folderLabel: 'Creator Work — 05',
    headline: 'Copywriting & Scripting',
    intro: "Words are strategy made visible. I write UGC scripts, advertising copy, hooks, captions and brand messaging — always from the audience's side of the conversation.",
    areas: [
      { title: 'Ad Copy', body: 'Headline-driven copy built on a single compelling idea — no filler, no hedging, no wasted words.' },
      { title: 'UGC Scripts', body: 'Natural, conversational scripts that give creators structure while leaving room for authentic delivery.' },
      { title: 'Hooks & Headlines', body: 'The first three seconds. The sentence that decides whether anyone keeps watching or reading.' },
      { title: 'Social Media Captions', body: 'Short-form writing that earns engagement rather than demanding it.' },
      { title: 'Brand Storytelling', body: 'Longer-form copy that builds a point of view — for brand pages, bios, campaign narratives and About sections.' },
    ],
  },
  ai: {
    folderLabel: 'Creator Work — 06',
    headline: 'AI Creative Production',
    intro: 'I use AI as a creative collaborator, not a shortcut. Prompt engineering, image generation, video production and post-processing — always in service of a specific creative objective.',
    areas: [
      { title: 'AI-Generated Ads', body: 'Advertising content produced using generative tools — built to perform, not just to demonstrate what\'s possible.' },
      { title: 'PDP & Product Imagery', body: 'AI-generated and edited product photography for e-commerce, lifestyle and editorial applications.' },
      { title: 'AI Video Content', body: 'Short-form video ads and content pieces built with generative video tools and refined in post.' },
      { title: 'Visual Content Creation', body: 'Moodboards, campaign visuals and creative concepts developed using AI tools as part of a broader workflow.' },
      { title: 'Creative Variations', body: 'Using AI to rapidly generate and test multiple creative directions — different tones, aesthetics, messages — against the same brief.' },
    ],
  },
}
