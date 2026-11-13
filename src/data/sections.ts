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
  campaigns: {
    folderLabel: 'Creative Portfolio — 01',
    headline: 'Brand Campaigns & Partnerships',
    intro: "I bring brand campaigns to life by connecting the right creators, creative direction, and campaign objectives. From developing campaign briefs and sourcing talent to managing partnerships and analysing content insights, I help ensure every collaboration has a clear purpose and direction.",
    areas: [
      { title: 'Campaign Strategy & Briefs', body: 'Detailed creative briefs and campaign strategy documents that align stakeholders, give creators clear direction, and set measurable objectives.' },
      { title: 'Creator Sourcing & Partnerships', body: 'Identifying the right creators for a campaign and building outreach that gets responses — personalised, strategic, and on-brand.' },
      { title: 'Creator Selection & Brand Fit', body: 'Frameworks for evaluating creators beyond follower count — engagement quality, audience fit, content style and brand alignment.' },
      { title: 'Negotiations & Deliverables', body: 'Managing rates, deliverables, exclusivity, and usage rights in a way that works for both brand and creator.' },
      { title: 'Campaign Management', body: 'Monitoring content schedules, approval workflows and deliverables across multiple creators simultaneously.' },
      { title: 'Campaign Insights & Reporting', body: "Post-campaign analysis covering what performed, what didn't, and what that means for the next brief." },
    ],
  },
  direction: {
    folderLabel: 'Creative Portfolio — 02',
    headline: 'Creative Direction & Styling',
    intro: "I turn creative concepts into clear visual direction. From developing moodboards and production briefs to directing wardrobe, styling, and shot sequences, I make sure every visual element supports the campaign's message and overall aesthetic.",
    areas: [
      { title: 'Creative Briefs', body: 'Detailed production documents that communicate vision, references, shot requirements and execution intent to any creative team.' },
      { title: 'Moodboards & Visual References', body: 'Visual references that establish aesthetic, mood, colour palette and styling direction before a single frame is captured.' },
      { title: 'Dress Codes & Wardrobe', body: 'Styling direction that keeps creator and brand content visually consistent without overriding personal style.' },
      { title: 'Visual Direction & Shot Lists', body: 'Shot lists, angles, sequences and transitions — planned with the edit and final placement in mind.' },
      { title: 'Campaign Storyboards', body: 'Visual sequences that map out how a campaign comes to life across assets, formats and moments.' },
      { title: 'Creative Concept Development', body: "The idea behind the visuals — defining the campaign's central concept, the feeling the audience should experience, and how the visual storytelling approach carries the message across formats." },
    ],
  },
  social: {
    folderLabel: 'Creative Portfolio — 03',
    headline: 'Social Media & Audience Growth',
    intro: 'Effective content starts with understanding the audience. I combine audience research, competitor analysis, and trend intelligence to identify content opportunities, strengthen positioning, and develop strategies that encourage meaningful audience growth.',
    areas: [
      { title: 'Audience & Consumer Insights', body: 'Deep-diving into who the audience actually is — their language, desires, contradictions and unmet expectations.' },
      { title: 'Competitor & Market Analysis', body: 'Identifying gaps in the market, clichés to avoid and white space where a creator or brand can own something meaningful.' },
      { title: 'Trend & Cultural Intelligence', body: 'Tracking cultural shifts, platform behaviours and emerging content patterns before they become noise.' },
      { title: 'Community & Engagement Strategy', body: 'Building genuine audience relationships through content that invites participation rather than passive consumption.' },
      { title: 'Content Performance & Learnings', body: "Examples of content that outperformed — with analysis of why it worked: the hook, the storytelling angle, the audience pain point it addressed, and what that means for future content." },
    ],
  },
  creator: {
    folderLabel: 'Creative Portfolio — 04',
    headline: 'Creator Strategy & Development',
    intro: 'I help creators turn their personalities, ideas, and audience insights into intentional content strategies. From positioning and content planning to brand collaborations and storytelling, I develop creative approaches that support both audience growth and long-term creator development.',
    areas: [
      { title: 'Content Strategy Documents', body: 'Documented frameworks covering content pillars, posting cadence, platform priorities and growth objectives.' },
      { title: 'Content Calendars', body: 'Planned content schedules that balance brand deals, organic content and audience expectations.' },
      { title: 'UGC & Influencer Scripts', body: 'Scripts built for creators — structured to hook, hold attention and convert without sounding scripted.' },
      { title: 'Published Content Examples', body: "Real content I've contributed to: strategy, scripting, direction or a combination of all three." },
      { title: 'Audience Growth Results', body: 'Before-and-after examples showing the impact of strategic content decisions on reach and engagement.' },
      { title: 'Creator Positioning & Content Pillars', body: "The strategic foundation for a creator's content — positioning, content pillars, audience demographics, personal brand identity, recurring formats, and brand partnership alignment." },
    ],
  },
  copywriting: {
    folderLabel: 'Creative Portfolio — 05',
    headline: 'Copywriting & Scripting',
    intro: "Words are strategy made visible. I develop hooks, UGC scripts, advertising copy, captions, and brand messaging that connect creative ideas with audience motivations. Every word has a purpose — whether it's to capture attention, build interest, or inspire action.",
    areas: [
      { title: 'Ad Copy', body: 'Headline-driven copy built on a single compelling idea — no filler, no hedging, no wasted words.' },
      { title: 'UGC Scripts', body: 'Natural, conversational scripts that give creators structure while leaving room for authentic delivery.' },
      { title: 'Hooks & Headlines', body: 'The first three seconds. The sentence that decides whether anyone keeps watching or reading.' },
      { title: 'Social Media Captions', body: 'Short-form writing that earns engagement rather than demanding it.' },
      { title: 'Brand Storytelling', body: 'Longer-form copy that builds a point of view — for brand pages, bios, campaign narratives and About sections.' },
    ],
  },
  ai: {
    folderLabel: 'Creative Portfolio — 06',
    headline: 'AI Creative Production',
    intro: 'I use AI as a creative collaborator, not a shortcut. Prompt engineering, image generation, video production and post-processing — always in service of a specific creative objective.',
    areas: [
      { title: 'AI-Generated Ads', body: 'Advertising concepts produced using generative tools — combining creative strategy, visual storytelling, and brand consistency to create compelling campaign assets.' },
      { title: 'PDP & Product Imagery', body: 'AI-generated and edited product photography for e-commerce, lifestyle and editorial applications.' },
      { title: 'AI Video Content', body: 'Short-form video ads and content pieces built with generative video tools and refined in post.' },
      { title: 'Visual Content Creation', body: 'Moodboards, campaign visuals and creative concepts developed using AI tools as part of a broader workflow.' },
      { title: 'Creative Variations', body: 'Using AI to rapidly generate and test multiple creative directions — different tones, aesthetics, messages — against the same brief.' },
      { title: 'AI Creative Concepts & Art Direction', body: 'The thinking behind the AI output — brief, concept, visual references, prompting approach, and final execution. AI as a tool for creative problem-solving, not just image generation.' },
    ],
  },
}
