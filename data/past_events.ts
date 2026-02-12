import {
    directions,
    directionsEp2,
    directionsEp3,
    ecosoc,
    positionPaper,
    theIndianParliament1,
    theIndianParliament2,
    NetworkingNexus,
    FrameFusion,
    ROPCOC,
    DiplomaciaTalks,
    MUNRefugeechallenge,
    GeneralAssembly,
    JAM,
    Masterclass,
    Bootcamp,
    Presentation,
    ClimateCadets,
    FilmForum,
    BoneOfContention,
    JAM2,
} from '@/public/assets/past_events/';

export type PastEvent = {
    name: string;
    image: any; // Using any for StaticImageData
    content: string;
    live: boolean;
    link?: string;
    youtubeLink?: string;
    instaLink?: string;
    linkdinLink?: string;
    summary?: string;
};

export const pastEvents: PastEvent[] = [
    {
        name: 'ROP&COC',
        image: ROPCOC,
        content:
            "Empower your voice with Diplomacia's guidance. Uncover MUN's core through Rules, Procedures, Paperwork, and Conduct. Join the mastery journey now! ",
        live: false,
        instaLink: 'https://www.instagram.com/p/CvFeMH5Srl2/',
    },
    {
        name: 'Frame Fusion',
        image: FrameFusion,
        content:
            "Unleash creativity in IITM Diplomacia's Reel Making Competition. Craft captivating reels from pre-given images. Showcase, stand out, and win recognition!",
        live: false,
        instaLink: 'https://www.instagram.com/p/Cub-XXwSKfI/',
    },
    {
        name: 'Networking Nexus',
        image: NetworkingNexus,
        content:
            "Engage with Diplomacia's past winners, gain wisdom, connect for meaningful discussions, explore the art of diplomacy in an interactive session.",
        live: false,
        instaLink: 'https://www.instagram.com/p/CuFHopRSSJY/',
        youtubeLink: 'https://youtu.be/w7QMMjg68lg',
        linkdinLink: 'https://www.linkedin.com/posts/iitm-diplomacia_networkingnexus-diplomacia-diplomacy-activity-7088151447665598464-gedA?utm_source=share',
        summary: 'https://docs.google.com/document/d/1jqGFmKtdutvyc4TZhrqsYL6lJKa2nwrHU0lzf5RNyfQ/edit?usp=sharing',
    },
    {
        name: 'Diplomacia Talks',
        image: DiplomaciaTalks,
        content:
            "Unmissable Diplomacia Talks: Meet German diplomats Ms. Gabriele Manig and Dr. Wolfgang Manig for insightful discourse on Bilateral Relations, Public Speaking, and Soft Skills. Join us at Paradox'23!",
        live: false,
        instaLink: 'https://www.instagram.com/p/CsphsKAytQK/',
    },
    {
        name: 'MUN Refugee challenge',
        image: MUNRefugeechallenge,
        content:
            "Engage Diplomacia MUN'23 UNGA in UNHCR Refugee Challenge. Debate forced displacement issues. Contribute to solutions. Join the impactful event now!",
        live: false,
        instaLink: 'https://www.instagram.com/p/CsgHmF3SItl/',
    },
    {
        name: 'General Assembly',
        image: GeneralAssembly,
        content:
            "Explore AI's labor market impact. Analyze job displacement, skill gaps, and reskilling needs. Join us in insightful deliberations.",
        live: false,
        instaLink: 'https://www.instagram.com/p/Csd8yBfSSov/',
    },
    {
        name: 'Directions Episode - 3',
        image: directionsEp3,
        content:
            'Honorable Excellency Ms. Ritva Koukku-Ronde, The Ambassador of Finland to India on Multilateralism, Sustainable Development, India and Finland - Then and Now',
        live: false,
        instaLink: 'https://www.instagram.com/p/CraH2l9LPls/?igshid=YmMyMTA2M2Y=',
        youtubeLink: 'https://www.youtube.com/live/McYmR-gL6dg?feature=share',
    },
    {
        name: 'Directions Episode - 2',
        image: directionsEp2,
        content:
            'Honorable Excellency Mr. Vikram Doraiswami, The High Commissioner of India in United Kingdom will discuss "India\'s Role in Global Politics and International Relations"',
        live: false,
        instaLink: 'https://www.instagram.com/p/Cq26-LOp2eC/',
        youtubeLink: 'https://youtu.be/q4ZhuBqBsY4',
    },
    {
        name: 'Model United Nations (ECOSOC)',
        image: ecosoc,
        content:
            'The United Nations Economic and Social Council. We will be discussing the exciting topic of the Digital Payment Revolution and Security in the Financial Sector.',
        live: false,
        instaLink: 'https://www.instagram.com/p/CqAV7c_L8ZF/',
    },
    {
        name: 'Directions Episode - 1',
        image: directions,
        content:
            'Honorable Excellency Mr. Naor Gilon, the Ambassador of Israel to India will be discussing with us on the IT revolution, Indo-Israel relationship on Diplomacy.',
        live: false,
        instaLink: 'https://www.instagram.com/p/CqAV7c_L8ZF/',
        youtubeLink: 'https://www.youtube.com/live/nZX6bxYXLqk?feature=share',
    },
    {
        name: 'Position Paper',
        image: positionPaper,
        content:
            "Sahityika and Diplomacia jointly bring Nation's Notion, a Position Paper Writing Competition that will be the opportunity for you to address complex policy problems!",
        live: false,
        instaLink: 'https://www.instagram.com/p/CpnJmxro9F4/',
    },
    {
        name: 'Diplomacia - Directions 1.0',
        image: theIndianParliament1,
        content:
            'Our guest speaker Mr. Sayan Banerjee, advocate of the Calcutta High Court. Mr. Banerjee will provide valuable insights and perspectives on "Parliament and Constitution.',
        live: false,
        youtubeLink: 'https://www.youtube.com/live/RC5n5wNBSa4?feature=share',
    },
    {
        name: 'The Indian Parliament',
        image: theIndianParliament2,
        content:
            'Namdapha House & Diplomacia Society brings The Indian Parliament, Series-1, an opportunity to showcase the diplomat inside you.',
        live: false,
        instaLink: 'https://www.instagram.com/p/Cog3IPxr10J',
    },
    {
        name: 'JAM: Just A Minute',
        image: JAM,
        content:
            'Pichavaram House & Diplomacia Society presents another JAM: Just a Minute. From surprise topic to one-minute brilliance, it\'s all about fluency, coherence, and engagement.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C7Vp_V7SxVH/',
        summary: 'https://www.linkedin.com/posts/iitm-diplomacia_publicspeaking-debate-leadership-activity-7204851237710618624-WY7u/?utm_source=share',
    },
    {
        name: 'Masterclass on Effective Presentations',
        image: Masterclass,
        content:
            'A masterclass on effective presentation and communication by the remarkable Varun R , a 3X Founder and Marketer.',
        live: false,
        youtubeLink: 'https://youtu.be/e-bn65typfk?si=ZyfbYXzYBccxHK6T',
        instaLink: 'https://www.instagram.com/p/C8Bz_pYSbSl/',
        summary: 'https://www.linkedin.com/posts/iitm-diplomacia_presentationmastery-contest-challenge-activity-7206532093093289986-h3TQ?utm_source=share',
    },
    {
        name: 'APD and MUN Bootcamp',
        image: Bootcamp,
        content:
            'Tarkshastra and Diplomacia presents online bootcamp for debate and Model United Nations skills. Learn from experts to boost your public speaking and communication abilities.',
        live: false,
        instaLink: 'https://www.instagram.com/p/DAQnjbJziZU/',
    },
    {
        name: 'Presentation Competition',
        image: Presentation,
        content:
            'Learn data visualization, audience engagement, and prepare for the upcoming Presentation Mastery Competition judged by Innovative Graphics.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C9SeKSuzKeB/',
        youtubeLink: 'https://youtube.com/playlist?list=PLdtNgVTTXn5Nq1RMOUGF6bC5DPIxz1krZ&si=rM9i7LZ6GCD1vGJb',
    },
    {
        name: 'Climate Cadets Series',
        image: ClimateCadets,
        content:
            'Explore climate resilience and sustainable development with expert speakers. Gain insights on economic strategies, policy-making, and youth engagement in environmental initiatives.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C_vzMNyy6v1/',
    },
    {
        name: 'Film Forum',
        image: FilmForum,
        content:
            'Dive into cinema analysis with Diplomacia\'s Film Forum. Stream selected films, share your insights, and receive feedback from the Psych Club. Connect with fellow cinephiles and hone your analytical skills.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C_3SzMHz004/',
    },
    {
        name: 'Bone of Contention',
        image: BoneOfContention,
        content:
            'Engage in roundtable debates on national, geopolitical, and political topics. Improve your communication skills and understanding of complex issues in this interactive forum.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C-F-FwaTPWG/',
    },
    {
        name: 'Jamming Session',
        image: JAM2,
        content:
            'Experience the thrill of Just a Minute (JAM) competitions. Tackle pressing issues, boost confidence, and enhance public speaking skills in this dynamic forum for diverse perspectives.',
        live: false,
        instaLink: 'https://www.instagram.com/p/C9pal44TdXV/',
    },
];
