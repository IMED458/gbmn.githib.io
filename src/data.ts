/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article, Issue } from './types.ts';

export const ARTICLES: Article[] = [
  {
    id: 'art-001',
    slug: 'exosomes-modulators-atherosclerosis',
    title: 'Exosomes as Modulators of Atherosclerosis: Pathogenetic Insights and Therapeutic Potential',
    imageUrl: 'images/articles/exosomes-heart-tissue.jpg',
    imageAlt: 'Heart Tissue Anatomy',
    authors: [
      { name: 'GAMKRELIDZE N.', affiliation: 'Tbilisi State Medical University' },
      { name: 'PAVLIASHVILI N.', affiliation: 'Tbilisi State Medical University' },
      { name: 'KVATCHADZE L.', affiliation: 'Tbilisi State Medical University' },
      { name: 'SOGULASHVILI T.', affiliation: 'Tbilisi State Medical University' },
      { name: 'TOPURIDZE M.', affiliation: 'Tbilisi State Medical University' }
    ],
    type: 'Review Article',
    abstract: 'Exosomes are small extracellular vesicles (30-150 nm) of endocytic origin that play a crucial role in intercellular communication by transferring bioactive molecules, such as proteins, lipids, and nucleic acids. In the context of atherosclerosis, exosomes derived from various vascular and immune cells participate in all stages of lesion development, including endothelial dysfunction, lipid accumulation, inflammatory response, and plaque rupture. This review summarizes current knowledge on the role of exosomes in the pathogenesis of atherosclerosis and explores their potential as diagnostic biomarkers and novel therapeutic delivery systems.',
    keywords: ['Exosomes', 'Atherosclerosis', 'Biomarkers', 'Intercellular Communication', 'Cardiovascular Diseases'],
    publishedDate: '2024-03-15',
    doi: '10.59232/gbmn.2024.1.1',
    volume: 5,
    issue: 1,
    year: 2024,
    pages: '12-24',
    pdfUrl: '#',
    references: [
      'Valadi H, et al. Exosome-mediated transfer of mRNAs and microRNAs is a novel mechanism of genetic exchange between cells. Nat Cell Biol. 2007;9:654-9.',
      'Sahoo S, Losordo DW. Exosomes and microvesicles: nanovesicles in regenerative medicine. Circ Res. 2014;114:335-48.',
      'Zhu J, et al. Exosomes in cardiovascular diseases: from pathogenesis to therapy. Nano Today. 2021;38:101140.'
    ],
    specialty: 'Cardiology'
  },
  {
    id: 'art-002',
    slug: 'incidence-pertussis-children-post-covid',
    title: 'Incidence and Clinical Severity of Pertussis in Children after the COVID-19 Pandemic: A Comparative Study of Unvaccinated and Partially Vaccinated Patients',
    imageUrl: 'images/articles/pertussis-mother-and-daughter.jpeg',
    imageAlt: 'Mother and Daughter',
    authors: [
      { name: 'KORINTELI I.', affiliation: 'Department of Pediatrics, TSMU' },
      { name: 'JAVAKHADZE M.', affiliation: 'M. Iashvili Children\'s Central Hospital' },
      { name: 'UZARASHVILI N.', affiliation: 'Department of Pediatrics, TSMU' },
      { name: 'GELAZONIA L.', affiliation: 'Department of Pediatrics, TSMU' },
      { name: 'SHANIDZE L.', affiliation: 'M. Iashvili Children\'s Central Hospital' },
      { name: 'PAGAVA K.', affiliation: 'Department of Pediatrics, TSMU' }
    ],
    type: 'Original Research',
    abstract: 'The COVID-19 pandemic significantly impact the epidemiology of various respiratory infections, including pertussis. This study aims to evaluate the incidence and clinical severity of pertussis among children in Georgia during the post-pandemic period (2022-2023). We conducted a comparative retrospective analysis of 84 pediatric patients confirmed with pertussis. Our findings indicate a resurgence of cases, particularly among unvaccinated children under 1 year of age. Comparison between vaccination statuses revealed significantly higher rates of hospitalization and complications in the unvaccinated group.',
    keywords: ['Pertussis', 'COVID-19 Pandemic', 'Vaccination', 'Pediatrics', 'Epidemiology'],
    publishedDate: '2024-04-02',
    doi: '10.59232/gbmn.2024.1.2',
    volume: 5,
    issue: 1,
    year: 2024,
    pages: '25-33',
    pdfUrl: '#',
    references: [
      'Yeung MHT, et al. Re-emergence of pertussis in the post-pandemic era. J Infect Dis. 2023;228:1152-60.',
      'World Health Organization. Pertussis vaccines: WHO position paper. Wkly Epidemiol Rec. 2015;90:433-58.'
    ],
    specialty: 'Pediatrics'
  },
  {
    id: 'art-003',
    slug: 'carotid-artery-pseudoaneurysm-lithium-battery',
    title: 'Left Common Carotid Artery Pseudoaneurysm After Unwitnessed Lithium Button Battery Ingestion in a Toddler: Successful Endovascular Hemostasis Following Life-Threatening Bleeding',
    imageUrl: 'images/articles/carotid-pseudoaneurysm-case.png',
    imageAlt: 'Clinical case image from the old GBMN article page',
    authors: [
      { name: 'Anonymous Case Contributors', affiliation: 'Emergency Medicine Institute' }
    ],
    type: 'Clinical Case',
    abstract: 'Button battery ingestion is a pediatric emergency that can lead to devastating complications through electrochemical burns. We present a rare and life-threatening case of a 2-year-old child with a pseudoaneurysm of the left common carotid artery resulting from an unwitnessed ingestion of a lithium button battery. The diagnosis was established through CT angiography after a sentinel bleeding event. Emergency endovascular stenting was performed to achieve hemostasis. This case highlights the importance of early recognition and the potential for late catastrophic vascular complications in button battery ingestions.',
    keywords: ['Button Battery Ingestion', 'Pseudoaneurysm', 'Carotid Artery', 'Pediatric Emergency', 'Endovascular Stenting'],
    publishedDate: '2024-01-20',
    doi: '10.59232/gbmn.2024.1.3',
    volume: 5,
    issue: 1,
    year: 2024,
    pages: '1-11',
    pdfUrl: '#',
    references: [
      'Jatana KR, et al. Pediatric button battery injuries: 2013 task force update. Gastrointest Endosc. 2013;78:329-34.',
      'Brumbaugh D, et al. Management of button battery-induced esophageal injury. Pediatrics. 2010;126:1353-9.'
    ],
    specialty: 'Emergency Medicine'
  }
];

export const ISSUES: Issue[] = [
  {
    volume: 5,
    issue: 1,
    year: 2024,
    coverImageUrl: 'images/issues/issue-n5.jpg',
    coverImageAlt: 'GBMN fifth edition cover',
    coverCaption: 'NEW PRINT ISSUE',
    isCurrent: true,
    articles: ['art-001', 'art-002', 'art-003']
  },
  {
    volume: 4,
    issue: 2,
    year: 2023,
    coverImageUrl: 'images/issues/issue-n3-4.jpg',
    coverImageAlt: 'Issues 3 and 4 cover',
    coverCaption: 'THIRD ISSUE OF GBMN',
    articles: []
  },
  {
    volume: 4,
    issue: 1,
    year: 2023,
    coverImageUrl: 'images/issues/issue-n4-1.png',
    coverImageAlt: 'GBMN Volume 2 Issue 1 cover',
    coverCaption: 'FOURTH ISSUE',
    articles: []
  }
];
