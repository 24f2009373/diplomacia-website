export interface EventSession {
    title: string;
    date?: string;
    description: string;
    poster: string;
    videoUrl?: string;
    problemStatementUrl?: string;
    certificates?: string[];
}

export interface FeaturedEvent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    sessions: EventSession[];
    customCTAs?: {
        label: string;
        href: string;
        primary?: boolean;
    }[];
}

export const featuredEvents: FeaturedEvent[] = [
    {
        slug: "aippm",
        title: "AIPPM 2026",
        subtitle: "Dialogue. Debate. Democracy.",
        description: "The All India Political Parties Meet (AIPPM) simulates India's political landscape, with delegates debating national issues, negotiating policies, and formulating recommendations based on their assigned party ideologies.",
        thumbnail: "/assets/featured_events/aippm/AIPPM 2026.png",
        sessions: [
            {
                title: "AIPPM 2026",
                description: "Discussions on the Constitution (131st Amendment) Bill, 2026 with Special Emphasis on Women's Reservation and Delimitation.",
                poster: "/assets/featured_events/aippm/AIPPM 2026.png"
            }
        ],
        customCTAs: [
            {
                label: "Register Now",
                href: "/events/aippm#register",
                primary: true,
            },
            {
                label: "View Brochure",
                href: "/assets/featured_events/aippm/Diplomacia's Aippm.pdf",
            }
        ]
    },
    {
        slug: "mun",
        title: "Model United Nations",
        subtitle: "Virtual Conference (UN4MUN)",
        description: "The conference follows the UN4MUN framework, offering participants an authentic simulation of United Nations proceedings that emphasizes diplomacy, consensus-building, and collaborative problem-solving.",
        thumbnail: "/assets/featured_events/mun/Online Model United Nations 2026 Diplomacia Summit (1).jpg.jpeg",
        sessions: [
            {
                title: "Model United Nations",
                date: "11th - 12th July 2026",
                description: "An authentic simulation of United Nations proceedings that emphasizes diplomacy, consensus-building, and collaborative problem-solving.",
                poster: "/assets/featured_events/mun/Online Model United Nations 2026 Diplomacia Summit (1).jpg.jpeg"
            }
        ],
        customCTAs: [
            {
                label: "Register Now",
                href: "/events/mun#register",
                primary: true,
            },
            {
                label: "Explore Event",
                href: "/events/mun",
            }
        ]
    },
    {
        slug: "ai-music-gen",
        title: "AI-Generated Music",
        subtitle: "Promoting U.S. Leadership in AI",
        description: "This program examines the impact of artificial intelligence on music creation and the creative economy, with an emphasis on responsible AI use and policy development. Featuring experts from the AI industry, the session will highlight U.S.-developed tools and approaches that support creators, strengthen industry standards, and advance compliance and intellectual property protections, while fostering creativity, entrepreneurship, and international cultural exchange.",
        thumbnail: "/assets/featured_events/ai_music_gen_am_center/poster.jpeg",
        sessions: [
            {
                title: "AI-Generated Music Panel Discussion",
                date: "Wednesday, July 8, 2026",
                description: "A panel discussion examining the impact of AI on music creation, responsible AI policies, IP protections, and U.S. leadership in AI tools.",
                poster: "/assets/featured_events/ai_music_gen_am_center/poster.jpeg"
            }
        ],
        customCTAs: [
            {
                label: "Register Now",
                href: "/events/ai-music-gen#register",
                primary: true,
            },
            {
                label: "Explore Event",
                href: "/events/ai-music-gen",
            }
        ]
    },
    {
        slug: "minds-in-motion",
        title: "Minds in Motion",
        subtitle: "A Perspective Forum",
        description: "Our flagship debate series exploring diverse geopolitical themes, policy challenges, and social narratives through high-impact discourse.",
        thumbnail: "/assets/featured_events/minds_in_motion/session3/MIM.png",
        sessions: [
            // ... (previous sessions)
            {
                title: "Geopolitics & National Security",
                description: "An intensive discussion on India's Kashmir policy and the evolving landscape of national security in the 21st century.",
                poster: "/assets/featured_events/minds_in_motion/session1/iitm_diplomacia-29-01-2026-0001.jpg",
                videoUrl: "https://drive.google.com/file/d/1HjTidJuzZ6knvk0OowdfG1f_yj3LJEm7/view",
            },
            {
                title: "Sunlight on Demand",
                description: "Continuation of our deep dive into policy frameworks, focusing on regional stability and diplomatic strategies.",
                poster: "/assets/featured_events/minds_in_motion/session2/iitm_diplomacia-29-01-2026-0002.webp",
                videoUrl: "https://drive.google.com/file/d/1pZhHyLaeQJ26ZNPp2xSIt76bgSEelC1R/view",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds_in_Motion_Session_2%20Problem%20Statement.pdf",
            },
            {
                title: "Feminism Without Colonialism (Part 1)",
                description: "Questioning historical narratives and exploring the intersection of gender, heritage, and decolonial thought.",
                poster: "/assets/featured_events/minds_in_motion/session3/MIM.png",
                videoUrl: "https://youtu.be/rwjdAGODG64",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Mind%20in%20Motion%20Session%203.pdf",
            },
            {
                title: "Feminism Without Colonialism (Part 2)",
                description: "Concluding our exploration into decolonial feminism with a focus on contemporary leadership and social change.",
                poster: "/assets/featured_events/minds_in_motion/session3_part2/MIM Feminism part 2.png",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Mind%20in%20Motion%20Session%203.pdf",
            },
            {
                title: "UGC Guidelines & Equity in Higher Education",
                description: "Unpacking the UGC Guidelines (2026) and what equity in higher education really means. Is inclusion at odds with merit — or can both coexist?",
                poster: "/assets/featured_events/minds_in_motion/session4/session4_poster.png",
                videoUrl: "https://youtu.be/KxVZwjQW1BY",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds%20in%20Motion%20Session%204%20%20Problem%20Statement.pdf",
                certificates: [
                    "/assets/certs/minds_in_motion_session4/1stposition.png",
                    "/assets/certs/minds_in_motion_session4/2ndposition.png",
                    "/assets/certs/minds_in_motion_session4/1.png",
                    "/assets/certs/minds_in_motion_session4/2.png",
                    "/assets/certs/minds_in_motion_session4/5.png",
                    "/assets/certs/minds_in_motion_session4/6.png",
                ]
            },
            {
                title: "AI-Powered Phone Tracking",
                date: "28th February 2026",
                description: "Security as Protection or Surveillance Overreach? Exploring the ethical and security implications of AI-driven phone tracking in the modern age.",
                poster: "/assets/featured_events/minds_in_motion/session5/poster.jpeg",
                videoUrl: "https://www.youtube.com/watch?v=L2d2GNLVzFY",
                problemStatementUrl: "https://raw.githubusercontent.com/googleboy-byte/diplomacia-assets-public/7bbd33da1e34760b1d5ba9242cccf8a7b58c38a6/MiM%20Problem%20Statements/Minds%20in%20Motion%20session5%20problem%20statement.pdf",
                certificates: [
                    "/assets/certs/minds_in_motion_session5/1stposition.png",
                    "/assets/certs/minds_in_motion_session5/2ndposition.png",
                    "/assets/certs/minds_in_motion_session5/1.png",
                    "/assets/certs/minds_in_motion_session5/2.png",
                    "/assets/certs/minds_in_motion_session5/3.png",
                    "/assets/certs/minds_in_motion_session5/4.png",
                    "/assets/certs/minds_in_motion_session5/5.png",
                    "/assets/certs/minds_in_motion_session5/6.png",
                    "/assets/certs/minds_in_motion_session5/7.png",
                ]
            },
        ],
    },
    {
        slug: "position-paper-archive",
        title: "Position Paper Archive",
        subtitle: "The Vault of Strategic Thought",
        description: "A comprehensive repository of scholarly research, formal policy statements, and strategic insights crafted by our diplomatic community of thinkers at IITM BS.",
        thumbnail: "/assets/featured_events/ppa/thumbnail.png",
        sessions: [],
        customCTAs: [
            {
                label: "View Archive",
                href: "/events/ppa-archive",
            },
            {
                label: "Submit Paper",
                href: "/events/position-paper-submit",
                primary: true,
            },
        ],
    },
    {
        slug: "research-x-debate",
        title: "Research x Debate",
        subtitle: "Exploring the intersections of analytical research and policy formulation",
        description: "A specialized initiative challenging participants to defend their research findings through rigorous parliamentary debate and policy discourse.",
        thumbnail: "/assets/featured_events/research_x_debate/poster.jpeg",
        sessions: [
            {
                title: "Day 1 - Learn & Prepare",
                description: "A short session to guide participants on how to approach topics, build compelling arguments with research backing, and master the art of structuring thoughts for debate presentations.",
                poster: "/assets/featured_events/research_x_debate/poster.jpeg",
                videoUrl: "https://www.youtube.com/watch?v=Rn3ynvZM9NY"
            },
            {
                title: "Day 2 - Create & Present",
                description: "Receive a topic on the spot, choose your stance (For or Against), prepare a PPT-based presentation, and present to judges for evaluation.",
                poster: "/assets/featured_events/research_x_debate/poster.jpeg",
                videoUrl: "https://www.youtube.com/watch?v=PKe0vk34Y0w"
            },
            {
                title: "Day 3 - Compete & Win",
                description: "Selected participants from Round 2 compete in head-to-head debate format with judges evaluating argumentation quality.",
                poster: "/assets/featured_events/research_x_debate/poster.jpeg",
                videoUrl: "https://www.youtube.com/watch?v=5iuUO9e1bG4",
                certificates: [
                    "/assets/certs/research_x_debate_certs/Ananya_Banerjee_1st.png",
                    "/assets/certs/research_x_debate_certs/Sai_Jasmitha_Naidu_2nd.png",
                    "/assets/certs/research_x_debate_certs/Ananya_Sree_Pentakota.jpeg",
                    "/assets/certs/research_x_debate_certs/Jahanvi_Singh.jpeg",
                    "/assets/certs/research_x_debate_certs/Nithikaa.jpeg",
                    "/assets/certs/research_x_debate_certs/Ranjan_Kumar_Singh.jpeg",
                    "/assets/certs/research_x_debate_certs/Vatsal_Gupta.jpeg",
                ]
            }
        ],
        customCTAs: [
            {
                label: "View Brochure",
                href: "/assets/featured_events/research_x_debate/brochure.pdf",
                primary: true,
            }
        ]
    },
    
];
