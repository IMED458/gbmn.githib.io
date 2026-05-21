/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, ExternalLink, FileText, Mail, Send, Share2 } from 'lucide-react';

const localDoc = (name: string) => `documents/for-authors/${encodeURIComponent(name)}`;

const anchors = [
  { id: 'editorial-policies', label: 'Editorial Policies' },
  { id: 'article-types', label: 'Article Types' },
  { id: 'authorship-permission', label: 'Authorship and Author Permission' },
  { id: 'manuscript-preparation', label: 'Preparation of New Manuscript for submission' },
  { id: 'peer-review', label: 'Editorial/Peer Review Process' },
  { id: 'submission-procedures', label: 'Submission Procedures' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100089818802243' },
  { label: 'Twitter', href: 'https://twitter.com/NewsGBMN' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/georgian-biomedical-news-973774262/' },
  { label: 'Instagram', href: 'https://www.instagram.com/wix' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCPtqLK39mHra_HC0_23ZpjA' },
];

const resourceLinks = [
  {
    label: 'Manual for Editors of Health Science Journals',
    href: localDoc('manual-for-editors-of-health-science-journals.pdf'),
    suffix: 'by World Health Organization;',
  },
  {
    label: 'Committee on Publication Ethics (COPE).',
    href: 'http://publicationethics.org/',
    suffix:
      'COPE is a forum for publishers and editors of peer-reviewed journals to discuss issues related to the integrity of work submitted to or published in their journals. It supports and encourages editors to report, catalog, and instigate investigations into ethical problems in the publication process. It provides services to members to allow them to resolve ethical publishing issues;',
  },
  {
    label: 'European Association of Science Editors (EASE)',
    href: 'http://www.ease.org.uk/',
    suffix:
      'handbook. EASE is an internationally oriented community of individuals from diverse backgrounds, linguistic traditions, and professional experience who share an interest in science communication and editing. Based in the UK, it has members from 55 countries around the world, holds a regular conference, and provides a quarterly newsletter;',
  },
  {
    label: 'International Committee of Medical Journal Editors (ICMJE)',
    href: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    suffix: 'Uniform requirements for manuscripts submitted to biomedical journals;',
  },
  {
    label: 'World Association of Medical Editors (WAME)',
    href: 'http://www.wame.org/',
    suffix:
      'syllabus for prospective and newly appointed editors. Established in 1995, WAME is a voluntary association of editors from countries worldwide who seek to foster international cooperation among editors of peer-reviewed medical journals.',
  },
];

const roleResourceLinks = [
  {
    label: 'ICMJE',
    href: 'https://www.icmje.org/recommendations/browse/roles-and-responsibilities/defining-the-role-of-authors-and-contributors.html',
  },
  { label: 'COPE', href: 'https://publicationethics.org/' },
  { label: 'GPP', href: 'https://www.ismpp.org/gpp-2022' },
  { label: 'EASE', href: localDoc('ease-guidelines.pdf') },
  { label: 'WAME', href: 'https://www.wame.org/' },
];

const documentLinks = [
  { label: 'ICMJE Disclosure Form', href: localDoc('ICMJE_disclosure.docx') },
  { label: 'ICMJE Recommendations', href: localDoc('ICMJE_recommendations.pdf') },
  { label: 'Permission Request Form', href: localDoc('permission-request-form.pdf') },
  { label: "Reviewer's Checklist", href: localDoc('reviewers-checklist.pdf') },
  { label: 'Submission Procedures GEO', href: localDoc('submission-procedures-geo.pdf') },
  { label: 'Certificate', href: localDoc('certificate.pdf') },
];

const articleTypeDownloads = [
  {
    title: 'ORIGINAL RESEARCH',
    href: localDoc('GBMN Original Article Template.docx'),
    text:
      'Original Article: Reports scientific results of original clinical research. Maximum words: 2700. Maximum of 5 tables and figures. Up to 40 references. Special Article: Reports scientific results of original research in such areas as economic policy, ethics, law, and health care delivery. Maximum words: 2700. Maximum of 5 tables and figures. Up to 40 references. * You can download template of the original article and simply type your text into it.',
  },
  {
    title: 'CLINICAL CASES',
    href: localDoc('GBMN Clinical Case Template.docx'),
    text:
      'Brief Report: Describes one to three (1–3) patients or a single family. Maximum words: 2000. Maximum of 3 tables and figures. Up to 25 references. Clinical Problem Solving: Simulates step-by-step emergence of information/developments in clinical practice and describes how clinicians/clinical teams reason and respond in each iteration. Maximum words: 2500. Up to 15 references. * You can download template of the clincal case and simply type your text into it.',
  },
  {
    title: 'REVIEW ARTICLES',
    href: localDoc('GBMN Review Article Template.docx'),
    text:
      'Clinical Practice Review: Offers evidence-based review of topics relevant to practicing primary care and specialist physicians (but written for general audience, so may include material considered too introductory for specialists). Maximum words: 2500. Small number tables and figures. Up to 50 references. Other Review: Offers evidence-based review covering a wide variety of potential clinical and mechanistic subjects. Maximum words: 3000. Maximum of 5 tables and figures. Up to 55 references. * You can download template of the review article and simply type your text into it.',
  },
  {
    title: 'COMMENTARY',
    text:
      'Editorial: Offers commentary and analysis on a current-issue GBMN article. Maximum words: 750. Maximum of one table or figure. Up to 10 references. Perspective: Covers timely, relevant topics in health care and medicine in a brief, accessible style. Maximum words: 1200. Maximum of 5 references. Clinical Implications of Basic Research: Discusses a single preclinical journal paper, explaining findings and commenting on possible clinical applications. Authors may not write commentary on their own work. Maximum words: 750. May include 1 figure. Maximum of 5 references. Letter to the Editor: Comment on recently published GBMN articles, novel cases, or other topics of current interest to the medical science and health care communities. Maximum words: 400. * You can download template of the commentary and simply type your text into it.',
  },
  {
    title: 'OTHER',
    text:
      'Special Report: Addresses miscellaneous topics of special interest to the medical community. Maximum words: 2700. Up to 5 display items. Maximum of 40 references. Health Law, Ethics, and Human Rights or Health Policy Report: Descriptions of major court cases, policy statements, or areas of health policy. Maximum words: 2500. Medicine and Society: Covers social aspects of medicine and health care, including medical sociology, anthropology, history, and ethics. Maximum words: 2000. Sounding Board: Offers opinion or commentary often focusing on health-policy issues; like an editorial, but not tied to current issue articles. Maximum words: 2000.',
  },
];

const authorshipCriteria = [
  'Substantial contributions to the conception or design of the work; or the acquisition, analysis, or interpretation of data for the work; AND',
  'Drafting the work or revising it critically for important intellectual content; AND',
  'Final approval of the version to be published; AND',
  'Agreement to be accountable for all aspects of the work in ensuring that questions related to the accuracy or integrity of any part of the work are appropriately investigated and resolved.',
];

const correctionStandards = [
  'A correction notice will be published as soon as possible detailing changes from and citing the original publication; the correction will be on an electronic page that is included in an electronic Table of Contents to ensure proper indexing.',
  'GBMN will post a new article version with details of the changes from the original version and the date(s) on which the changes were made.',
  'GBMN will archive all prior versions of the article. This archive can be either directly accessible to readers or can be made available to the reader on request.',
  'Previous electronic versions will prominently note that there are more recent versions of the article.',
  'The citation should be to the most recent version.',
];

const abstractComponents = [
  'BACKGROUND: the point of the research – why should we care about the study? This is usually a statement of the BIG problem that the research helps to solve and the strategy for helping to solve it. It prepares the reader to understand the specific research question.',
  'OBJECTIVES: the specific research question – the basis of credible science. To be clear, complete and concise, research questions are stated in terms of relationships between the variables that were investigated. Such specific research questions tie the story together – they focus on credible science.',
  'METHODS: a precise description of the methods used to collect data and determine the relationships between the variables.',
  'RESULTS: the major findings – not only data, but the RELATIONSHIPS found that lead to the answer. Results should generally be reported in the past tense but the authors’ interpretation of the factual findings is in the present tense – it reports the authors’ belief of how the world IS. Of course, in a pilot study such as the following example, the authors cannot yet present definitive answers, which they indicate by using the words “suggest” and “may”.',
  'CONCLUSIONS: the consequences of the answers – the value of the work. This element relates directly back to the big problem: how the study helps to solve the problem, and it also points to the next step in research.',
  'KEYWORDS - key words or phrases in alphabetical order; separated by semicolon.',
];

const referenceRules = [
  'AMA book citation format: Author last name Initials. Book Title: Subtitle. Publisher; Year.',
  'AMA book citation example: Conrad P, Gallagher EB. Health and Health Care in Developing Countries: Sociological Perspectives. Temple University Press; 1993.',
  'AMA journal citation format: Author last name Initials. Article title. Journal Name. Year;Volume(Issue):Page range. DOI or URL.',
  'AMA journal citation example: Shim P, Choi D, Park Y. Association of blood fatty acid composition and dietary pattern with the risk of non-alcoholic fatty liver disease in patients who underwent cholecystectomy. Ann Nutr Metab. 2017;70(4):303–311. doi:10.1159/000475605.',
  'AMA website citation format: Author last name Initials. Page title. Website Name. Published Month Day, Year. Accessed Month Day, Year. URL.',
  'AMA website citation example: Murphy B. 5 tips to survive first-year anatomy lessons in medical school. American Medical Association. Published August 24, 2022. Accessed September 2, 2022. https://www.ama-assn.org/medical-students/medical-school-life/5-tips-survive-first-year-anatomy-lessons-medical-school.',
];

const otherRecommendations = [
  'SI units are strongly encouraged;',
  'Use one space after periods and colons;',
  'Use a zero before decimal points: “0.25,” not “.25.”;',
  'Use “cm3,” not “cc.”;',
  'Indicate sample dimensions as “0.1 cm x 0.2 cm,” not “0.1 x 0.2 cm2.”',
  'Do not mix complete spellings and abbreviations of units: use “kg/m2” or “kilograms per square meter,” not “kilograms/m2.”',
  'When expressing a range of values, write “2 to 7” or “2-7,” not “2~7.”',
  'A periods and commas must be within quotation marks, like “this period.” Other punctuation must be “outside”!',
  'Avoid contractions; for example, write “do not” instead of “don’t.”',
  'The serial comma is preferred: “A, B, and C” instead of “A, B and C.”',
];

const peerReviewTypes = [
  'Single-blind: the reviewers know the names of the authors, but the authors do not know who reviewed their manuscript unless the reviewer chooses to sign their report.',
  'Double-blind: the reviewers do not know the names of the authors, and the authors do not know who reviewed their manuscript.',
  'Open peer: authors know who the reviewers are, and the reviewers know who the authors are. If the manuscript is accepted, the named reviewer reports are published alongside the article and the authors’ response to the reviewer.',
  'Transparent peer: the reviewers know the names of the authors, but the authors do not know who reviewed their manuscript unless the reviewer chooses to sign their report. If the manuscript is accepted, the anonymous reviewer reports are published alongside the article and the authors’ response to the reviewer.',
];

const gbmnReviewSteps = [
  'Corresponding author submits the manuscript to the GBMN;',
  'After assessment by the editor the manuscript will be: (a) rejected/transfered or (b) sent to reviewer for double-blind peer review ;',
  "After assessment of reviewerpeer's comment the manuscript will be: (a) sent to the author for revision; (b) rejected or (c) accepted.",
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-36 border-b border-gray-100 pb-14 last:border-0 last:pb-0">
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-8 border-b-2 border-slate-900 pb-2 inline-block">
        {title}
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed font-light">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest pt-4">
      {children}
    </h3>
  );
}

function StyledLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') || href.startsWith('documents/') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') || href.startsWith('documents/') ? undefined : 'noreferrer'}
      className="font-semibold text-blue-700 underline underline-offset-4 decoration-blue-200 hover:text-blue-900"
    >
      {children}
    </a>
  );
}

function DownloadButton({
  href,
  label,
  variant = 'light',
}: {
  href: string;
  label: string;
  variant?: 'light' | 'dark';
}) {
  const dark = variant === 'dark';
  return (
    <a
      href={href}
      download={href.startsWith('documents/') ? true : undefined}
      target={href.startsWith('documents/') ? undefined : '_blank'}
      rel={href.startsWith('documents/') ? undefined : 'noreferrer'}
      className={
        dark
          ? 'inline-flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10'
          : 'inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all hover:border-blue-200 hover:text-blue-700 hover:shadow-sm'
      }
    >
      <span>{label}</span>
      <Download className="h-4 w-4 shrink-0" />
    </a>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-5 text-sm md:text-base list-disc marker:text-blue-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ForAuthors() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-blue-700 py-16 md:py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
          <FileText className="w-[600px] h-[600px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-100 mb-5">
              For Authors
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">DEAR AUTHORS,</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed mb-10">
              Thank you for considering the GEORGIAN BIOMEDICAL NEWS (GBMN) for your manuscript. In this section you will get all the necessary information and instructions about:
            </p>
            <div className="flex flex-wrap gap-3">
              {anchors.map((anchor) => (
                <a
                  key={anchor.id}
                  href={`#${anchor.id}`}
                  className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-sm font-bold hover:bg-white hover:text-blue-700 transition-all uppercase tracking-widest text-[10px]"
                >
                  {anchor.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-slate-900">
            <Share2 className="h-5 w-5 text-blue-700" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Follow GBMN</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-blue-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-50 border-y border-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-slate-900 p-8 rounded-sm text-white shadow-xl">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
                  Page Sections
                </h2>
                <nav aria-label="For Authors sections" className="space-y-3">
                  {anchors.map((anchor) => (
                    <a
                      key={anchor.id}
                      href={`#${anchor.id}`}
                      className="block border-l border-white/10 pl-4 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-400 hover:text-white"
                    >
                      {anchor.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-white p-8 rounded-sm border border-slate-200">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-6">
                  Documents
                </h2>
                <div className="space-y-3">
                  {documentLinks.map((doc) => (
                    <DownloadButton key={doc.label} href={doc.href} label={doc.label} />
                  ))}
                </div>
              </div>

              <div className="p-8 border border-slate-200 rounded-sm bg-white">
                <Mail className="w-8 h-8 text-blue-600 mb-4" />
                <h2 className="font-bold text-slate-900 mb-2">Contact</h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  We are always looking for new and exciting opportunities. Let's connect.
                </p>
                <p className="text-sm font-semibold text-slate-700 mb-2">+995 555 760 640</p>
                <StyledLink href="mailto:gbmn@tsmu.edu">gbmn@tsmu.edu</StyledLink>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8 bg-white border border-gray-100 rounded-sm p-6 md:p-10 lg:p-12 space-y-16">
            <Section id="editorial-policies" title="EDITORIAL POLICIES">
              <p>
                Our Editorial Policies draw on the following sources that have become available to editors and the various initiatives that have been developed at a global level in recent years:
              </p>
              <ul className="space-y-4 pl-5 list-disc marker:text-blue-700">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <StyledLink href={item.href}>{item.label}</StyledLink>{' '}
                    {item.suffix}
                  </li>
                ))}
              </ul>

              <Subheading>THE ROLE OF AUTHORS AND CONTRIBUTORS</Subheading>
              <div className="flex flex-wrap gap-3">
                {roleResourceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('documents/') ? undefined : '_blank'}
                    rel={link.href.startsWith('documents/') ? undefined : 'noreferrer'}
                    className="inline-flex items-center gap-2 rounded-sm border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-700 transition-colors hover:border-blue-200 hover:text-blue-700"
                  >
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <p>
                International Committee of Medical Journal Editors (ICMJE) recommends that authorship be based on the following 4 criteria:
              </p>
              <BulletList items={authorshipCriteria} />
              <p>
                In addition to being accountable for the parts of the work he or she has done, an author should be able to identify which co-authors are responsible for specific other parts of the work. In addition, authors should have confidence in the integrity of the contributions of their co-authors.
              </p>
              <p>
                All those designated as authors should meet all four criteria for authorship, and all who meet the four criteria should be identified as authors. The corresponding author is the one individual who takes primary responsibility for communication with the journal during the manuscript submission, peer-review, and publication process. The corresponding author typically ensures that all the journal’s administrative requirements, such as providing details of authorship, ethics committee approval, clinical trial registration documentation, and disclosures of relationships and activities are properly completed and reported, although these duties may be delegated to one or more co-authors.
              </p>
              <p>
                The corresponding author should be available throughout the submission and peer-review process to respond to editorial queries in a timely way, and should be available after publication to respond to critiques of the work and cooperate with any requests from the journal for data or additional information should questions about the paper arise after publication. Although the corresponding author has primary responsibility for correspondence with the journal, the ICMJE recommends that editors send copies of all correspondence to all listed authors
              </p>
              <p>
                When a large multi-author group has conducted the work, the group ideally should decide who will be an author before the work is started and confirm who is an author before submitting the manuscript for publication. All members of the group named as authors should meet all four criteria for authorship, including approval of the final manuscript, and they should be able to take public responsibility for the work and should have full confidence in the accuracy and integrity of the work of other group authors. They will also be expected as individuals to complete disclosure forms.
              </p>
              <p>
                Contributors who meet fewer than all 4 of the above criteria for authorship should not be listed as authors, but they should be acknowledged. Examples of activities that alone (without other contributions) do not qualify a contributor for authorship are acquisition of funding; general supervision of a research group or general administrative support; and writing assistance, technical editing, language editing, and proofreading.
              </p>
              <div className="flex flex-wrap gap-3">
                <DownloadButton href={localDoc('ICMJE_disclosure.docx')} label="Download" />
                <DownloadButton href={localDoc('ICMJE_recommendations.pdf')} label="ICMJE Recommendations" />
              </div>

              <Subheading>CONFLICTS OF INTEREST AND DISCLOSURE</Subheading>
              <p>
                All participants in the peer-review and publication process—not only authors but also peer reviewers, editors, and editorial board members of journals—must consider and disclose their relationships and activities when fulfilling their roles in the process of article review and publication.
              </p>
              <p>
                When authors submit a manuscript of any type or format they are responsible for disclosing all relationships and activities that might bias or be seen to bias their work. The ICMJE has developed a Disclosure Form to facilitate and standardize authors’ disclosures. ICMJE member journals require that authors use this form, and ICMJE encourages other journals to adopt it.
              </p>
              <p>
                Reviewers should be asked at the time they are asked to critique a manuscript if they have relationships or activities that could complicate their review. Reviewers must disclose to editors any relationships or activities that could bias their opinions of the manuscript, and should recuse themselves from reviewing specific manuscripts if the potential for bias exists. Reviewers must not use knowledge of the work they’re reviewing before its publication to further their own interests.
              </p>
              <p>
                Editors who make final decisions about manuscripts should recuse themselves from editorial decisions if they have relationships or activities that pose potential conflicts related to articles under consideration. Other editorial staff members who participate in editorial decisions must provide editors with a current description of their relationships or activities (as they might relate to editorial judgments) and recuse themselves from any decisions in which an interest that poses a potential conflict exists. Editorial staff must not use information gained through working with manuscripts for private gain. Editors should regularly publish their own disclosure statements and those of their journal staff. Guest editors should follow these same procedures.
              </p>
              <div className="flex flex-wrap gap-3">
                <DownloadButton href={localDoc('ICMJE_disclosure.docx')} label="Download" />
                <DownloadButton href={localDoc('ICMJE_disclosure.docx')} label="ICMJE Disclosure Form" />
              </div>

              <Subheading>CORRECTIONS, RETRACTIONS, REPUBLICATIONS AND VERSION CONTROL</Subheading>
              <p>
                Honest errors are a part of science and publishing and require publication of a correction when they are detected. Corrections are needed for errors of fact. Matters of debate are best handled as letters to the editor, as print or electronic correspondence, or as posts in a journal-sponsored online forum. Updates of previous publications (e.g., an updated systematic review or clinical guideline) are considered a new publication rather than a version of a previously published article.
              </p>
              <p>If a correction is needed, GBMN will follow these minimum standards:</p>
              <BulletList items={correctionStandards} />
              <p>
                Pervasive errors can result from a coding problem or a miscalculation and may result in extensive inaccuracies throughout an article. If such errors do not change the direction or significance of the results, interpretations, and conclusions of the article, a correction should be published that follows the minimum standards noted above.
              </p>
              <p>
                Errors serious enough to invalidate a paper's results and conclusions may require retraction. However, retraction with republication (also referred to as “replacement”) can be considered in cases where honest error (e.g., a misclassification or miscalculation) leads to a major change in the direction or significance of the results, interpretations, and conclusions. If the error is judged to be unintentional, the underlying science appears valid, and the changed version of the paper survives further review and editorial scrutiny, then retraction with republication of the changed paper, with an explanation, allows full correction of the scientific literature. In such cases, it is helpful to show the extent of the changes in supplementary material or in an appendix, for complete transparency.
              </p>

              <Subheading>COPYRIGHT</Subheading>
              <p>
                GBMN will ask authors to transfer copyright to the journal. The copyright status of articles in GBMN can vary: Some content cannot be copyrighted (for example, articles written by employees of some governments in the course of their work). Editors may waive copyright on other content, and some content may be protected under other agreements.
              </p>

              <Subheading>OVERLAPPING PUBLICATIONS</Subheading>
              <p>
                <strong>Duplicate Submission:</strong> Authors should not submit the same manuscript, in the same or different languages, simultaneously to more than one journal. The rationale for this standard is the potential for disagreement when two (or more) journals claim the right to publish a manuscript that has been submitted simultaneously to more than one journal, and the possibility that two or more journals will unknowingly and unnecessarily undertake the work of peer review, edit the same manuscript, and publish the same article.
              </p>
              <p>
                <strong>Duplicate and Prior Publication:</strong> Duplicate publication is publication of a paper that overlaps substantially with one already published, without clear, visible reference to the previous publication. Prior publication may include release of information in the public domain. Duplicate publication of original research is particularly problematic because it can result in inadvertent double-counting of data or inappropriate weighting of the results of a single study, which distorts the available evidence.
              </p>
              <p>
                When authors submit a manuscript reporting work that has already been reported in large part in a published article or is contained in or closely related to another paper that has been submitted or accepted for publication elsewhere, the letter of submission should clearly say so and the authors should provide copies of the related material to help the editor decide how to handle the submission.
              </p>
              <p>
                In the event of a public health emergency (as defined by public health officials), information with immediate implications for public health should be disseminated without concern that this will preclude subsequent consideration for publication in a journal. We encourage editors to give priority to authors who have made crucial data publicly available without delay.
              </p>
              <p>
                Authors who attempt duplicate publication without such notification should expect at least prompt rejection of the submitted manuscript. If the editor was not aware of the violations and the article has already been published, then the article might warrant retraction with or without the author’s explanation or approval.
              </p>
              <p>
                <strong>Acceptable Secondary Publication:</strong> Secondary publication of material published in other journals or online may be justifiable and beneficial, especially when intended to disseminate important information to the widest possible audience (e.g., guidelines produced by government agencies and professional organizations in the same or a different language).
              </p>
              <p>
                <strong>Manuscripts Based on the Same Database:</strong> If GBMN receive manuscripts from separate research groups or from the same group analyzing the same data set (for example, from a public database, or systematic reviews or meta-analyses of the same evidence), the manuscripts will be considered independently because they may differ in their analytic methods, conclusions, or both. If the data interpretation and conclusions are similar, GBMN will give preference to the manuscript submitted first. Sometimes for large trials it is planned from the beginning to produce numerous separate publications regarding separate research questions but using the same original participant sample. In this case authors may use the original single trial registration number, if all the outcome parameters were defined in the original registration. If the authors registered several substudies as separate entries in, for example, ClinicalTrials.gov, then the unique trial identifier should be given for the study in question. The main issue is transparency, so no matter what model is used it should be obvious for the reader.
              </p>

              <Subheading>ADVERTISING</Subheading>
              <p>
                GBMN carry advertising according existing regulatory and industry standards for advertisements specific to Georgia, but our policies won't be dominated by advertisements, and advertising won't be allowed to influence GBMN editorial decisions. GBMN not carry advertisements for products proven to be seriously harmful.
              </p>

              <Subheading>UNAUTHORIZED USE OF TRADEMARK</Subheading>
              <p>
                The Georgian Biomedical News, the Georgian Biomedical News logo design, and GBMN are trademarks. Any use of these trademarks in connection with the sale, offering for sale, distribution, or advertising of any goods or services, which is likely to cause confusion, to cause mistake, or to deceive, is strictly prohibited.
              </p>
            </Section>

            <Section id="article-types" title="ARTICLE TYPES">
              <div className="grid grid-cols-1 gap-6">
                {articleTypeDownloads.map((type) => (
                  <article key={type.title} className="border border-gray-100 bg-slate-50 p-6 rounded-sm">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-bold text-slate-900">{type.title}</h3>
                      {type.href ? <DownloadButton href={type.href} label={type.title} /> : null}
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed font-light">{type.text}</p>
                  </article>
                ))}
              </div>
            </Section>

            <Section id="authorship-permission" title="AUTHORSHIP & AUTHOR PERMISSION">
              <Subheading>AUTHORSHIP</Subheading>
              <p>
                International Committee of Medical Journal Editors (ICMJE) recommends that authorship be based on the following 4 criteria:
              </p>
              <BulletList items={authorshipCriteria} />
              <p>
                In addition to being accountable for the parts of the work he or she has done, an author should be able to identify which co-authors are responsible for specific other parts of the work. In addition, authors should have confidence in the integrity of the contributions of their co-authors.
              </p>
              <p>
                All those designated as authors should meet all four criteria for authorship, and all who meet the four criteria should be identified as authors. The corresponding author is the one individual who takes primary responsibility for communication with the journal during the manuscript submission, peer-review, and publication process. The corresponding author typically ensures that all the journal’s administrative requirements, such as providing details of authorship, ethics committee approval, clinical trial registration documentation, and disclosures of relationships and activities are properly completed and reported, although these duties may be delegated to one or more co-authors.
              </p>
              <p>
                The corresponding author should be available throughout the submission and peer-review process to respond to editorial queries in a timely way, and should be available after publication to respond to critiques of the work and cooperate with any requests from the journal for data or additional information should questions about the paper arise after publication. Although the corresponding author has primary responsibility for correspondence with the journal, the ICMJE recommends that editors send copies of all correspondence to all listed authors
              </p>
              <p>
                When a large multi-author group has conducted the work, the group ideally should decide who will be an author before the work is started and confirm who is an author before submitting the manuscript for publication. All members of the group named as authors should meet all four criteria for authorship, including approval of the final manuscript, and they should be able to take public responsibility for the work and should have full confidence in the accuracy and integrity of the work of other group authors. They will also be expected as individuals to complete disclosure forms.
              </p>
              <p>
                Contributors who meet fewer than all 4 of the above criteria for authorship should not be listed as authors, but they should be acknowledged. Examples of activities that alone (without other contributions) do not qualify a contributor for authorship are acquisition of funding; general supervision of a research group or general administrative support; and writing assistance, technical editing, language editing, and proofreading.
              </p>

              <Subheading>PERMISSION</Subheading>
              <div className="flex flex-wrap gap-3">
                <DownloadButton href={localDoc('ICMJE_disclosure.docx')} label="Download" />
                <DownloadButton href={localDoc('ICMJE_recommendations.pdf')} label="ICMJE Recommendations" />
                <DownloadButton href={localDoc('permission-request-form.pdf')} label="Permission Request Form" />
              </div>
              <p>
                The permission should be sought from the rights holder to reproduce any substantial part of a copyrighted work. This includes any text, illustrations, charts, tables, photographs, or other material from previously published sources. Obtaining permission to re-use content published by GBMN is simple. Permission is required for any material that is not original. Re-use of any borrowed material must be properly acknowledged, even if it is determined that written permission is not necessary. Permission must be obtained from the GBMN as a rightsholder of the material. The GBMN has the exclusive right to grant the permission. Authors can include their articles in full or in part in a thesis or dissertation for non-commercial purposes.
              </p>
            </Section>

            <Section id="manuscript-preparation" title="PREPARATION OF NEW MANUSCRIPT FOR SUBMISSION">
              <Subheading>PAGE LAYOUT</Subheading>
              <p>
                Page size – A4: 8.27&quot; x 11.69&quot; (21 cm x 29.7 cm); The margins set:
              </p>
              <BulletList
                items={[
                  'Top = 0.75" (1.905 cm)',
                  'Bottom = 1.18" (2.9972 cm)',
                  'Left = Right = 0.51" (1.2954 cm)',
                ]}
              />
              <p>
                The body content of the manuscript must be in two column formats with column size 3.5” (8.89 cm) and 0.25” (0.635 cm) spacing.
              </p>

              <Subheading>THE TITLE AND AUTHORS</Subheading>
              <p>
                The title should be unambiguous, understandable to specialists in other fields, and reflect the content of the article. Be specific, not general or vague. If relevant, mention in the title the study period and location, the international scientific name of the studied organism or the experimental design (e.g., case study or randomized controlled trial). If your study included human subjects of one sex, it should be stated in the title. Information given in the title does not need to be repeated in the abstract (as they are always published jointly), although overlap is unavoidable.
              </p>
              <BulletList
                items={[
                  'All title and author details must be in single-column format and must be centered;',
                  'Every word in a title must be capitalized except for short minor words such as “a”, “an”, “and”, “as”, “at”, “by”, “for”, “from”, “if”, “in”, “into”, “on”, “or”, “of”, “the”, “to”, “with”;',
                  'Title must be in 24 pt Regular font;',
                  'Author name must be in 14 pt Regular font. Author affiliation must be in 10 pt Regular font and must not show any professional title (e.g., Head of Department), any academic title (e.g., Dr. or M.D., Ph.D.) or any membership of any professional organization (e.g., Secretary General of GEOCIM). Email address is compulsory for all authors. Email address must be in 10 pt Regular font.',
                ]}
              />

              <Subheading>ABSTRACT</Subheading>
              <p>
                The abstract briefly explain why you conducted the study (BACKGROUND), what question(s) you aimed to answer (OBJECTIVES), how you performed the study (METHODS), what you found (RESULTS: major data, relationships), and your interpretation and main consequences of your findings (CONCLUSIONS). The abstract must reflect the content of the article, as for most readers it will be the major source of information about your study. You must use keywords within the abstract, to facilitate on-line searching for your article by those who may be interested in your results (many databases include only titles and abstracts). In a research report, the abstract should be informative, including actual results. (See Appendix: Abstracts about structured abstracts.) Only in reviews and other wide scope articles, should the abstract be indicative, i.e., listing the major topics discussed but not giving outcomes. Do not refer in the abstract to tables or figures, as abstracts are also published separately. References to the literature are also not allowed unless they are absolutely necessary (but then you need to provide detailed information in brackets: author, title, year, etc.). Make sure that all the information given in the abstract also appears in the main body of the article.
              </p>
              <p>Abstract must be in single-column format and in 9 pt Regular font, with following components:</p>
              <BulletList items={abstractComponents} />

              <Subheading>BODY CONTENT</Subheading>
              <p>
                The body content of the manuscript must be in two column formats with column size 3.5” (8.89 cm) and 0.25” (0.635 cm) spacing, and in 10 pt Regular font. The components of the body content depend on the type of the manuscript (see above section ARTICLE TYPES).
              </p>

              <Subheading>FIGURES AND TABLES</Subheading>
              <p>
                Place figure captions above the figures in 8pt regular font. If figure has two parts, include the labels “(A)” and “(B)” as part of the artwork. Use the abbreviation “Fig.” even at the beginning of a sentence. Place table titles above the tables in 8pt regular font; Please verify that the figures and tables you mention in the text actually exist; If the size of Figure or Table is more than the column size, the same may be adjusted in single column format without disturbing rest of the content.
              </p>

              <Subheading>REFERENCES</Subheading>
              <p>
                Use 8 pt Times New roman font; Do not use “et al.” In references; Typical citation styles in Medicine are: The American Medical Association (AMA), The National Library of Medicine (NLM) and Vancouver; AMA style is strongly encouraged;
              </p>
              <BulletList items={referenceRules} />

              <Subheading>OTHER RECOMMENDATIONS</Subheading>
              <BulletList items={otherRecommendations} />
            </Section>

            <Section id="peer-review" title="EDITORIAL/PEER REVIEW PROCESS">
              <Subheading>WHAT IS PEER REVIEW AND HOW IT WORKS?</Subheading>
              <p>
                Peer review is the system used to assess the quality of a manuscript before it is published. Independent researchers in the relevant research area assess submitted manuscripts for originality, validity, and significance to help editors determine whether a manuscript should be published in their journal. Peer review is an integral part of scientific publishing that confirms the validity of the manuscript.
              </p>
              <p>
                Peer reviewers are experts who volunteer their time to help improve the manuscripts they review. When a manuscript is submitted to a journal, it is assessed to see if it meets the criteria for submission. If it does, the editorial team will select potential peer reviewers within the field of research to peer-review the manuscript and make recommendations.
              </p>
              <p>There are four main types of peer review:</p>
              <BulletList items={peerReviewTypes} />
              <p>The GBMN use double-blind peer review process with following steps:</p>
              <ol className="space-y-3 pl-5 text-sm md:text-base list-decimal marker:text-blue-700">
                {gbmnReviewSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-3">
                <DownloadButton href={localDoc('reviewers-checklist.pdf')} label="Download" />
                <DownloadButton href={localDoc('reviewers-checklist.pdf')} label="Reviewer's Checklist" />
              </div>
            </Section>

            <Section id="submission-procedures" title="SUBMISSION PROCEDURES">
              <div className="bg-slate-50 border border-gray-100 rounded-sm p-6">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-6">
                  STEP 1. <span className="font-sans text-base">Subscribe to Site</span>
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Subscribe to Site">
                  {[
                    'First Name *',
                    'Last Name *',
                    'Email *',
                    'Phone *',
                    'Street Address',
                    'City',
                    'Region/State/Province',
                    'Street Address Line 2',
                    'Postal / Zip code',
                  ].map((label) => (
                    <label key={label} className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      {label}
                      <input
                        type={label === 'Email *' ? 'email' : 'text'}
                        placeholder={label.replace(' *', '')}
                        className="mt-2 w-full rounded-sm border border-gray-200 px-3 py-3 text-sm font-normal normal-case tracking-normal text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </label>
                  ))}
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Code *
                    <select className="mt-2 w-full rounded-sm border border-gray-200 px-3 py-3 text-sm font-normal normal-case tracking-normal text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100">
                      <option>Code</option>
                    </select>
                  </label>
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Country
                    <select className="mt-2 w-full rounded-sm border border-gray-200 px-3 py-3 text-sm font-normal normal-case tracking-normal text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100">
                      <option>Country</option>
                    </select>
                  </label>
                  <label className="md:col-span-2 flex items-center gap-3 text-sm text-slate-600">
                    <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-blue-700" />
                    I want to subscribe to your mailing list.
                  </label>
                  <button
                    type="button"
                    className="md:col-span-2 inline-flex w-fit items-center gap-2 rounded-sm bg-blue-700 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-blue-800"
                  >
                    Submit
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap gap-3">
                <DownloadButton href={localDoc('submission-procedures-geo.pdf')} label="Download" />
                <DownloadButton href={localDoc('submission-procedures-geo.pdf')} label="Submission Procedures GEO" />
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  STEP 2. Download GBMN Key Style recommendations and other documents (
                  <StyledLink href="https://www.gbmn.org/upload">GBMN Cover Letter and Copyright Form</StyledLink>
                  ) from the corresponding page and adjust your manuscript to the requirements.
                </h3>
                <p>
                  An easy way to comply with the paper formatting requirements is to use <a href="#article-types" className="font-semibold text-blue-700 underline underline-offset-4 decoration-blue-200 hover:text-blue-900">an appropriate template (see ARTICLE TYPES)</a> and type your text into it.
                </p>

                <h3 className="text-lg font-serif font-bold text-slate-900">STEP 3.</h3>
                <p>
                  Send an adjusted manuscript with the COVER LETTER to <StyledLink href="mailto:gbmn@tsmu.edu">gbmn@tsmu.edu</StyledLink>. Your manuscript will be sent for peer review, and you will receive a RECEIVED MANUSCRIPT NOTIFICATION with a unique PAPER ID from the GBMN.
                </p>

                <h3 className="text-lg font-serif font-bold text-slate-900">STEP 4.</h3>
                <p>
                  In case of a positive peer review conclusion, you will receive an ACCEPTANCE NOTIFICATION with an invoice for publication charges from the GBMN. You will send the scanned copy of the filled and signed copyright form along with the bank receipt of publication charges to <StyledLink href="mailto:gbmn@tsmu.edu">gbmn@tsmu.edu</StyledLink>. After receiving the payment receipt and copyright form, the GBMN will initiate the publication process.
                </p>
                <p>
                  After publication, you will receive a PUBLICATION NOTIFICATION and <StyledLink href={localDoc('certificate.pdf')}>CERTIFICATE.</StyledLink>
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Contact</h3>
                <p>We are always looking for new and exciting opportunities. Let's connect.</p>
                <p className="font-semibold text-slate-900">+995 555 760 640</p>
                <StyledLink href="mailto:gbmn@tsmu.edu">gbmn@tsmu.edu</StyledLink>
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
}
