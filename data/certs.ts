export interface CertCategory {
  categoryId: string;
  title: string;
  description?: string;
  certificates: {
    path: string;
    type: 'image' | 'pdf';
    label?: string;
  }[];
}

export const certCategories: CertCategory[] = [
  {
    categoryId: 'aippm',
    title: 'AIPPM 2026',
    description: 'Certificates of participation and merit for the All India Political Parties Meet simulation.',
    certificates: [
      { path: '/assets/certs/aippm_certs/Ananya_Banerjee.pdf', type: 'pdf', label: 'Ananya Banerjee' },
      { path: '/assets/certs/aippm_certs/ANSH.pdf', type: 'pdf', label: 'Ansh' },
      { path: '/assets/certs/aippm_certs/Ashwin_Devi_Srinivasan.pdf', type: 'pdf', label: 'Ashwin Devi Srinivasan' },
      { path: '/assets/certs/aippm_certs/Atharva_Adsul.pdf', type: 'pdf', label: 'Atharva Adsul' },
      { path: '/assets/certs/aippm_certs/AYANA_BAIDYA.pdf', type: 'pdf', label: 'Ayana Baidya' },
      { path: '/assets/certs/aippm_certs/Jahanvi_Singh.pdf', type: 'pdf', label: 'Jahanvi Singh' },
      { path: '/assets/certs/aippm_certs/Ritesh_Kumar.pdf', type: 'pdf', label: 'Ritesh Kumar' },
      { path: '/assets/certs/aippm_certs/Sai_Nikhil_Vukka.pdf', type: 'pdf', label: 'Sai Nikhil Vukka' },
      { path: '/assets/certs/aippm_certs/Shreya_Suman.pdf', type: 'pdf', label: 'Shreya Suman' },
      { path: '/assets/certs/aippm_certs/Sukh_Mandeep_Singh.pdf', type: 'pdf', label: 'Sukh Mandeep Singh' },
      { path: '/assets/certs/aippm_certs/Suryana_Choudhary.pdf', type: 'pdf', label: 'Suryana Choudhary' },
      { path: '/assets/certs/aippm_certs/Vighnesh_Mishra.pdf', type: 'pdf', label: 'Vighnesh Mishra' },
    ]
  },
  {
    categoryId: 'mun-batch-1',
    title: 'Model United Nations — Batch 1',
    description: 'Certificates of participation and diplomacy for delegates of the UN4MUN Conference.',
    certificates: [
      { path: '/assets/certs/mun_session6_certs/Aarya.pdf', type: 'pdf', label: 'Aarya' },
      { path: '/assets/certs/mun_session6_certs/A_S_DHANYA_SHRI.pdf', type: 'pdf', label: 'A S Dhanya Shri' },
      { path: '/assets/certs/mun_session6_certs/Adrika_Ghosh.pdf', type: 'pdf', label: 'Adrika Ghosh' },
      { path: '/assets/certs/mun_session6_certs/Arpit_Juneja.pdf', type: 'pdf', label: 'Arpit Juneja' },
      { path: '/assets/certs/mun_session6_certs/Aryan_Acharya.pdf', type: 'pdf', label: 'Aryan Acharya' },
      { path: '/assets/certs/mun_session6_certs/Aryan_Chowdhary.pdf', type: 'pdf', label: 'Aryan Chowdhary' },
      { path: '/assets/certs/mun_session6_certs/ARYAN_GUPTA.pdf', type: 'pdf', label: 'Aryan Gupta' },
      { path: '/assets/certs/mun_session6_certs/Avni_Thakur.pdf', type: 'pdf', label: 'Avni Thakur' },
      { path: '/assets/certs/mun_session6_certs/Bakshinderpreet_Singh.pdf', type: 'pdf', label: 'Bakshinderpreet Singh' },
      { path: '/assets/certs/mun_session6_certs/Bharat_Bhushan_Trivedi.pdf', type: 'pdf', label: 'Bharat Bhushan Trivedi' },
      { path: '/assets/certs/mun_session6_certs/Brahmi_Paliwal.pdf', type: 'pdf', label: 'Brahmi Paliwal' },
      { path: '/assets/certs/mun_session6_certs/Kavish.pdf', type: 'pdf', label: 'Kavish' },
      { path: '/assets/certs/mun_session6_certs/Manish_Jha.pdf', type: 'pdf', label: 'Manish Jha' },
      { path: '/assets/certs/mun_session6_certs/Mohammed_Ali_Shajahan.pdf', type: 'pdf', label: 'Mohammed Ali Shajahan' },
      { path: '/assets/certs/mun_session6_certs/Nawaz_Ansari.pdf', type: 'pdf', label: 'Nawaz Ansari' },
      { path: '/assets/certs/mun_session6_certs/Ponmagal_E.pdf', type: 'pdf', label: 'Ponmagal E' },
      { path: '/assets/certs/mun_session6_certs/Ponni_Sivasubramanian.pdf', type: 'pdf', label: 'Ponni Sivasubramanian' },
      { path: '/assets/certs/mun_session6_certs/Prashant_Kumar.pdf', type: 'pdf', label: 'Prashant Kumar' },
      { path: '/assets/certs/mun_session6_certs/Priyanshu_Shukla.pdf', type: 'pdf', label: 'Priyanshu Shukla' },
      { path: '/assets/certs/mun_session6_certs/Rubak.pdf', type: 'pdf', label: 'Rubak' },
      { path: '/assets/certs/mun_session6_certs/S_Ponranjana.pdf', type: 'pdf', label: 'S Ponranjana' },
      { path: '/assets/certs/mun_session6_certs/Sabal_Sneh.pdf', type: 'pdf', label: 'Sabal Sneh' },
      { path: '/assets/certs/mun_session6_certs/Sarthak_Ganbote.pdf', type: 'pdf', label: 'Sarthak Ganbote' },
      { path: '/assets/certs/mun_session6_certs/Shakthy.pdf', type: 'pdf', label: 'Shakthy' },
      { path: '/assets/certs/mun_session6_certs/Sneha_Ramanathan.pdf', type: 'pdf', label: 'Sneha Ramanathan' },
      { path: '/assets/certs/mun_session6_certs/Soumyajit_Roy.pdf', type: 'pdf', label: 'Soumyajit Roy' },
      { path: '/assets/certs/mun_session6_certs/Sumit_Pandey.pdf', type: 'pdf', label: 'Sumit Pandey' },
      { path: '/assets/certs/mun_session6_certs/Thatsshiin_PV.pdf', type: 'pdf', label: 'Thatsshiin PV' },
      { path: '/assets/certs/mun_session6_certs/Tvesha.pdf', type: 'pdf', label: 'Tvesha' },
      { path: '/assets/certs/mun_session6_certs/Ujwala_Umamaheshwari_K_K.pdf', type: 'pdf', label: 'Ujwala Umamaheshwari K K' },
    ]
  },
  {
    categoryId: 'mun-batch-2',
    title: 'Model United Nations — Batch 2',
    description: 'Certificates of participation and diplomacy for delegates of the UN4MUN Conference.',
    certificates: [
      { path: '/assets/certs/mun_session7_certs/A_S_DHANYA_SHRI.pdf', type: 'pdf', label: 'A S Dhanya Shri' },
      { path: '/assets/certs/mun_session7_certs/Adrika_Ghosh.pdf', type: 'pdf', label: 'Adrika Ghosh' },
      { path: '/assets/certs/mun_session7_certs/Ananya_Singh.pdf', type: 'pdf', label: 'Ananya Singh' },
      { path: '/assets/certs/mun_session7_certs/Arpit_Juneja.pdf', type: 'pdf', label: 'Arpit Juneja' },
      { path: '/assets/certs/mun_session7_certs/Aryan_Chowdhary.pdf', type: 'pdf', label: 'Aryan Chowdhary' },
      { path: '/assets/certs/mun_session7_certs/Brahmi_Paliwal.pdf', type: 'pdf', label: 'Brahmi Paliwal' },
      { path: '/assets/certs/mun_session7_certs/Hari_Om.pdf', type: 'pdf', label: 'Hari Om' },
      { path: '/assets/certs/mun_session7_certs/Kavish.pdf', type: 'pdf', label: 'Kavish' },
      { path: '/assets/certs/mun_session7_certs/Manish_Jha.pdf', type: 'pdf', label: 'Manish Jha' },
      { path: '/assets/certs/mun_session7_certs/Ritesh_Kumar.pdf', type: 'pdf', label: 'Ritesh Kumar' },
      { path: '/assets/certs/mun_session7_certs/S_Ponranjana.pdf', type: 'pdf', label: 'S Ponranjana' },
      { path: '/assets/certs/mun_session7_certs/Shreya_Suman.pdf', type: 'pdf', label: 'Shreya Suman' },
      { path: '/assets/certs/mun_session7_certs/Sneha_Ramanathan.pdf', type: 'pdf', label: 'Sneha Ramanathan' },
      { path: '/assets/certs/mun_session7_certs/Sumit_Pandey.pdf', type: 'pdf', label: 'Sumit Pandey' },
      { path: '/assets/certs/mun_session7_certs/Tvesha.pdf', type: 'pdf', label: 'Tvesha' },
    ]
  },
  {
    categoryId: 'diplomacia-general',
    title: 'Diplomacia Certificates',
    description: 'General certificates of recognition, contribution, and commitment awarded to Diplomacia members.',
    certificates: [
      { path: '/assets/certs/diplomacia_certs/Aditi_chandra_Diplomacia_Certificate.png', type: 'image', label: 'Aditi Chandra' },
      { path: '/assets/certs/diplomacia_certs/Afreen_Khan_Diplomacia_Certificate.png', type: 'image', label: 'Afreen Khan' },
      { path: '/assets/certs/diplomacia_certs/Akshay_Tomer_Diplomacia_Certificate.png', type: 'image', label: 'Akshay Tomer' },
      { path: '/assets/certs/diplomacia_certs/Ansh_Diplomacia_Certificate.png', type: 'image', label: 'Ansh' },
      { path: '/assets/certs/diplomacia_certs/Ansh_2_Diplomacia_Certificate.png', type: 'image', label: 'Ansh (2)' },
      { path: '/assets/certs/diplomacia_certs/Anushree_Prasannan_Diplomacia_Certificate.png', type: 'image', label: 'Anushree Prasannan' },
      { path: '/assets/certs/diplomacia_certs/Aravindhaa_V_Diplomacia_Certificate.png', type: 'image', label: 'Aravindhaa V' },
      { path: '/assets/certs/diplomacia_certs/Arnav_Vibhu_Diplomacia_Certificate.png', type: 'image', label: 'Arnav Vibhu' },
      { path: '/assets/certs/diplomacia_certs/Arnav_Vibhu_2_Diplomacia_Certificate.png', type: 'image', label: 'Arnav Vibhu (2)' },
      { path: '/assets/certs/diplomacia_certs/Arnav_Vibhu_3_Diplomacia_Certificate.png', type: 'image', label: 'Arnav Vibhu (3)' },
      { path: '/assets/certs/diplomacia_certs/Arnav_Vibhu_4_Diplomacia_Certificate.png', type: 'image', label: 'Arnav Vibhu (4)' },
      { path: '/assets/certs/diplomacia_certs/Diplomacia_2.0.png', type: 'image', label: 'Diplomacia 2.0' },
      { path: '/assets/certs/diplomacia_certs/Foram_Mandali_Diplomacia_Certificate.png', type: 'image', label: 'Foram Mandali' },
      { path: '/assets/certs/diplomacia_certs/Foram_Mandali_2_Diplomacia_Certificate.png', type: 'image', label: 'Foram Mandali (2)' },
      { path: '/assets/certs/diplomacia_certs/Foram_Mandali_3_Diplomacia_Certificate.png', type: 'image', label: 'Foram Mandali (3)' },
      { path: '/assets/certs/diplomacia_certs/Foram_Mandali_4_Diplomacia_Certificate.png', type: 'image', label: 'Foram Mandali (4)' },
      { path: '/assets/certs/diplomacia_certs/Govind_Agarwal_Diplomacia_Certificate.png', type: 'image', label: 'Govind Agarwal' },
      { path: '/assets/certs/diplomacia_certs/R_Netrananda_Diplomacia_Certificate.png', type: 'image', label: 'R Netrananda' },
      { path: '/assets/certs/diplomacia_certs/S_V_Preethi_Diplomacia_Certificate.png', type: 'image', label: 'S V Preethi' },
      { path: '/assets/certs/diplomacia_certs/Ujjwal_Anand_Diplomacia_Certificate.png', type: 'image', label: 'Ujjwal Anand' },
      { path: '/assets/certs/diplomacia_certs/Yash_Pandey_Diplomacia_Certificate.png', type: 'image', label: 'Yash Pandey' },
    ]
  },
  {
    categoryId: 'neeti-sabha',
    title: 'Neeti Sabha',
    description: 'Certificates from the Neeti Sabha — a legislative simulation of Indian parliamentary proceedings.',
    certificates: [
      { path: '/assets/certs/neeti_sabha_certs/Neeti_Sabha.png', type: 'image', label: 'Neeti Sabha' },
      { path: '/assets/certs/neeti_sabha_certs/Neeti_Sabha_2.png', type: 'image', label: 'Neeti Sabha (2)' },
      { path: '/assets/certs/neeti_sabha_certs/Neeti_sabha.png', type: 'image', label: 'Neeti Sabha (3)' },
    ]
  },
  {
    categoryId: 'core-members',
    title: 'Core Members',
    description: 'Certificates of Accreditation and core diplomatic standing for our foundational leadership and council.',
    certificates: [
      { path: '/assets/certs/core_member_certs/core certificates-1.pdf', type: 'pdf', label: 'Member 1' },
      { path: '/assets/certs/core_member_certs/core certificates-2.pdf', type: 'pdf', label: 'Member 2' },
      { path: '/assets/certs/core_member_certs/core certificates-3.pdf', type: 'pdf', label: 'Member 3' },
      { path: '/assets/certs/core_member_certs/core certificates-4.pdf', type: 'pdf', label: 'Member 4' },
      { path: '/assets/certs/core_member_certs/core certificates-5.pdf', type: 'pdf', label: 'Member 5' },
      { path: '/assets/certs/core_member_certs/core certificates-6.pdf', type: 'pdf', label: 'Member 6' },
      { path: '/assets/certs/core_member_certs/Cores.png', type: 'image', label: 'Cores' },
      { path: '/assets/certs/core_member_certs/Cores_2.png', type: 'image', label: 'Cores (2)' },
    ]
  },
  {
    categoryId: 'research-x-debate',
    title: 'Research x Debate',
    description: 'Certificates of Merit and Excellence across various disciplines and policy research discussions.',
    certificates: [
      { path: "/assets/certs/research_x_debate_certs/Ananya_Banerjee_1st.png", type: 'image', label: '1st Position' },
      { path: "/assets/certs/research_x_debate_certs/Sai_Jasmitha_Naidu_2nd.png", type: 'image', label: '2nd Position' },
      { path: "/assets/certs/research_x_debate_certs/Ananya_Sree_Pentakota.jpeg", type: 'image' },
      { path: "/assets/certs/research_x_debate_certs/Jahanvi_Singh.jpeg", type: 'image' },
      { path: "/assets/certs/research_x_debate_certs/Nithikaa.jpeg", type: 'image' },
      { path: "/assets/certs/research_x_debate_certs/Ranjan_Kumar_Singh.jpeg", type: 'image' },
      { path: "/assets/certs/research_x_debate_certs/Vatsal_Gupta.jpeg", type: 'image' },
    ]
  },
  {
    categoryId: 'minds-in-motion-session5',
    title: 'Minds in Motion: Session 5',
    description: 'Awards and certificates of merit bridging diplomacy and technology on AI Tracking Systems.',
    certificates: [
      { path: "/assets/certs/minds_in_motion_session5/1stposition.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/2ndposition.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/1.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/2.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/3.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/4.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/5.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/6.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session5/7.png", type: 'image' },
    ]
  },
  {
    categoryId: 'minds-in-motion-session4',
    title: 'Minds in Motion: Session 4',
    description: 'Recognizing discourse surrounding the UGC Guidelines and Equity in Higher Education.',
    certificates: [
      { path: "/assets/certs/minds_in_motion_session4/1stposition.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session4/2ndposition.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session4/1.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session4/2.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session4/5.png", type: 'image' },
      { path: "/assets/certs/minds_in_motion_session4/6.png", type: 'image' },
    ]
  },
  {
    categoryId: 'misc',
    title: 'Additional Certificates',
    description: 'Miscellaneous certificates of recognition and participation across Diplomacia events.',
    certificates: [
      { path: '/assets/certs/misc_certs/7.png', type: 'image', label: 'Certificate 7' },
      { path: '/assets/certs/misc_certs/8.png', type: 'image', label: 'Certificate 8' },
      { path: '/assets/certs/misc_certs/9.png', type: 'image', label: 'Certificate 9' },
      { path: '/assets/certs/misc_certs/10.png', type: 'image', label: 'Certificate 10' },
    ]
  },
];
