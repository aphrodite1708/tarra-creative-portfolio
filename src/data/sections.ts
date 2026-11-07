export type SectionId =
  | 'strategy'
  | 'copywriting'
  | 'concepts'
  | 'ugc'
  | 'artdirection'
  | 'ai'

export interface FolderData {
  id: SectionId
  number: string
  label: string
  shortLabel: string
  tagline: string
  color: string        // folder body color
  textColor: string    // text on folder
  tabBg: string        // the white/light tab strip
  image: string        // Unsplash image URL
}

export const FOLDERS: FolderData[] = [
  {
    id: 'strategy',
    number: '01',
    label: 'Creative Strategy',
    shortLabel: 'Strategy',
    tagline: 'Understanding audiences. Finding what resonates.',
    color: '#641F36',
    textColor: '#FFFFFF',
    tabBg: '#F7F1E9',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&fit=crop',
  },
  {
    id: 'copywriting',
    number: '02',
    label: 'Copywriting & Scripting',
    shortLabel: 'The Words',
    tagline: 'Hooks, scripts, and language that earns attention.',
    color: '#D7AEB5',
    textColor: '#302323',
    tabBg: '#302323',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&fit=crop',
  },
  {
    id: 'concepts',
    number: '03',
    label: 'Creative Concepts',
    shortLabel: 'The Ideas',
    tagline: 'Campaign angles built from insight, not intuition.',
    color: '#B98791',
    textColor: '#FFFFFF',
    tabBg: '#F7F1E9',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80&fit=crop',
  },
  {
    id: 'ugc',
    number: '04',
    label: 'UGC & Campaigns',
    shortLabel: 'Campaigns',
    tagline: 'From brief to execution. Creator to brand.',
    color: '#EDE1D2',
    textColor: '#302323',
    tabBg: '#641F36',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&fit=crop',
  },
  {
    id: 'artdirection',
    number: '05',
    label: 'Art Direction',
    shortLabel: 'Direction',
    tagline: 'Visual storytelling that earns a second look.',
    color: '#302323',
    textColor: '#FFFFFF',
    tabBg: '#D7AEB5',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&fit=crop',
  },
  {
    id: 'ai',
    number: '06',
    label: 'AI Creative',
    shortLabel: 'Experiments',
    tagline: 'AI as a creative tool, not a shortcut.',
    color: '#A99A8D',
    textColor: '#302323',
    tabBg: '#641F36',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&fit=crop',
  },
]

export const SECTION_CONTENT: Record<SectionId, {
  folderLabel: string
  headline: string
  intro: string
  areas: { title: string; body: string }[]
}> = {
  strategy: {
    folderLabel: 'The Thinking',
    headline: 'Creative Strategy & Research',
    intro: 'Strategy is what happens before the work. I research audiences, map their motivations, study competitors, and find the angle that makes communication feel inevitable rather than forced.',
    areas: [
      { title: 'Audience Research', body: 'Deep-diving into who the audience actually is — their language, desires, contradictions, and unmet expectations.' },
      { title: 'Consumer Psychology', body: 'Understanding what drives decisions, shapes perception, and builds brand relationships at a human level.' },
      { title: 'Competitor Analysis', body: 'Identifying gaps, clichés to avoid, and white space where a brand can own something meaningful.' },
      { title: 'Trend Intelligence', body: 'Tracking cultural shifts, platform behaviours, and emerging creative patterns before they become noise.' },
      { title: 'Creative Hypotheses', body: 'Turning research into testable directions: specific angles, messages, and creative positions worth exploring.' },
    ],
  },
  copywriting: {
    folderLabel: 'The Words',
    headline: 'Copywriting & Scriptwriting',
    intro: "Words are strategy made visible. I write UGC scripts, advertising copy, hooks, captions, and brand messaging — always from the audience's side of the conversation.",
    areas: [
      { title: 'UGC Scripts', body: 'Natural, conversational scripts built for creators — structured to hook, hold attention, and convert.' },
      { title: 'Advertising Copy', body: 'Headline-driven copy built on a single compelling idea, with no filler and no hedging.' },
      { title: 'Hooks & Openers', body: 'The first three seconds. The sentence that decides whether anyone keeps watching.' },
      { title: 'Brand Voice', body: 'Developing and maintaining a consistent tone that feels human, specific, and impossible to confuse with a competitor.' },
      { title: 'Social Captions', body: 'Short-form writing that earns engagement rather than demanding it.' },
    ],
  },
  concepts: {
    folderLabel: 'The Ideas',
    headline: 'Creative Concepts & Advertising',
    intro: 'A concept is an argument. It has a point of view, a target audience, an insight behind it, and a reason it should work. I develop concepts across formats — video, social, campaigns, and activations.',
    areas: [
      { title: 'Campaign Concepts', body: 'Multi-touchpoint ideas with a clear through-line, built to work across formats and placements.' },
      { title: 'Angle Development', body: 'Finding the unexpected entry point into a product, brand, or audience conversation.' },
      { title: 'Product Positioning', body: 'Defining how a product should feel, what it replaces in someone\'s life, and why it matters now.' },
      { title: 'Creative Testing Ideas', body: 'Concept variants designed with testing in mind — different emotional registers, different hooks, same objective.' },
      { title: 'Message Hierarchies', body: 'Structuring what gets said, in what order, and why each piece earns the next.' },
    ],
  },
  ugc: {
    folderLabel: 'The Campaigns',
    headline: 'UGC, Influencer & Brand Campaigns',
    intro: 'I\'ve worked with brands including L\'Oréal, Maybelline, Garnier, and Disney — writing briefs, managing creators, and building campaigns from strategy through to delivery.',
    areas: [
      { title: 'Creator Briefing', body: 'Clear, detailed creative briefs that give creators direction while leaving room for authentic performance.' },
      { title: 'Campaign Coordination', body: 'Managing timelines, assets, approvals, and feedback loops across multiple creators and stakeholders.' },
      { title: 'Influencer Strategy', body: 'Identifying the right creators, building relationships, and aligning content to campaign objectives.' },
      { title: 'Brand Collaboration', body: 'Working inside a brand\'s creative framework while pushing for content that actually performs.' },
      { title: 'Published Work', body: 'Content I\'ve contributed to that reached audiences, grew communities, and supported brand objectives — shared with appropriate context.' },
    ],
  },
  artdirection: {
    folderLabel: 'The Direction',
    headline: 'Creative Briefs & Art Direction',
    intro: 'Creative direction is about making every visual decision intentional. I write production briefs, develop moodboards, direct styling and shoot logistics, and ensure the final visual output matches the original concept.',
    areas: [
      { title: 'Production Briefs', body: 'Detailed creative documents that communicate vision, references, shot requirements, and execution intent.' },
      { title: 'Moodboard Development', body: 'Visual references that establish aesthetic, mood, colour, and styling direction before a single frame is captured.' },
      { title: 'Styling Direction', body: 'Product and wardrobe choices aligned to the brand aesthetic and campaign narrative.' },
      { title: 'Shot Planning', body: 'Shot lists, angles, sequences, and transitions planned with the edit in mind.' },
      { title: 'Campaign Aesthetics', body: 'Ensuring visual consistency across all assets — that everything looks like it belongs together.' },
    ],
  },
  ai: {
    folderLabel: 'The Experiments',
    headline: 'AI Creative Production',
    intro: 'I use AI as a creative collaborator, not a replacement for creative thinking. Prompt engineering, image generation, video production, and post-processing — always in service of a specific creative objective.',
    areas: [
      { title: 'AI Product Photography', body: 'Generating and editing product imagery using AI tools — lifestyle, PDP, and editorial applications.' },
      { title: 'AI Video Ads', body: 'Using generative video tools to produce advertising content that would otherwise require significant production budgets.' },
      { title: 'Prompt Development', body: 'Building systematic prompt structures that produce consistent, controllable, and high-quality creative outputs.' },
      { title: 'Creative Workflows', body: 'Combining multiple AI tools — generation, upscaling, editing, consistency — into repeatable production workflows.' },
      { title: 'Before & After', body: 'Showing the gap between starting prompt and final output: the editing, the iteration, the creative decision-making.' },
    ],
  },
}
