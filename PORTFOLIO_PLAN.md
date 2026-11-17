# IS117 Review 2 — Portfolio Plan
**Owner:** Mishal Khurshid (@mishkhurshid)  
**Plan date:** November 17, 2026  
**Status:** Planning document; site, review and usability checks not claimed complete  
**Career research source:** [AI Career Research](https://github.com/mishkhurshid/ai-career-research) ([site link listed in its README](https://mishkhurshid.github.io/ai-career-research/); deployment should be checked before citing it as live).

## Purpose, reader and evidence
**Primary reader:** Recruiter or internship hiring manager evaluating an early-career candidate for enterprise AI, data, software, or related technical roles.  
**Reader goal:** Within a short visit, identify relevant skills, inspect credible projects, and find ways to contact Mishal or review her résumé.  
**Owner's goal:** Present a clear, truthful professional story and direct visitors to verifiable work.

**Career research used:** The existing AI Career Research record explores Forward Deployed Engineer, AI Engineer, LLM Engineer, AI Agent Engineer and AI Solutions Architect roles, and documents technical/interpersonal skills and variation among employers. The portfolio should therefore emphasize actual projects, documentation, communication, and problem-solving rather than claim unsupported expertise. Refer to original postings for job-specific requirements; the research is background, not evidence of employment or skills already mastered.

## Compare two short approaches
| Approach | Main structure | Benefits | Tradeoff |
|---|---|---|---|
| A. Project-first (selected) | Brief introduction → featured projects → skills/experience → résumé/contact | Evidence is easy for employers to inspect; concise presentation | Professional story needs a clear short introduction |
| B. Story-first | Long about-me narrative → experience → projects → contact | More personal context | Recruiters may need to scroll before finding project links |

**Decision:** Choose **A, project-first**, because evidence, clear links and readability are the visitor's priority. This is a planned design decision, not a tested user preference.

## Four user stories and observable acceptance checks
1. **As a recruiter**, I want to understand Mishal's focus quickly so I can decide whether to inspect her work. **Check:** On the home page, a reviewer can name her field and identify a featured project without scrolling through long paragraphs.
2. **As a hiring manager**, I want to open each relevant project repository so I can inspect actual work. **Check:** STAR, Tastee Cafe, and the portfolio repository each have a labeled working GitHub destination; any additional AI Career Research or web-server project is identified accurately.
3. **As a potential internship contact**, I want professional profile and résumé links so I can evaluate and contact her. **Check:** GitHub and LinkedIn lead to her *own* profiles, and a readable, up-to-date résumé opens on mobile and desktop. LinkedIn and résumé URLs must be supplied and verified; **do not invent them**.
4. **As a visitor on my phone**, I want an easy-to-scan page so I can find relevant content without zooming. **Check:** At approximately 375 px viewport width, menu, project cards and links remain readable and keyboard focus is visible; test result must be recorded after implementation.

## Essential pages / features and destinations
| Page or component | Must provide | Destination / current status |
|---|---|---|
| Home / About | 1–2 sentence introduction; enterprise AI student at NJIT; concise purpose | Planned |
| Projects | 2–4 cards with role, outcome and links; honest descriptions | Planned |
| GitHub profile | Link to own profile | https://github.com/mishkhurshid |
| LinkedIn profile | Link to own profile, no guessed URL | https://www.linkedin.com/in/mishal-khurshid-2b61a4277/ (user-provided; link functionality not independently checked) |
| Résumé | Downloadable/readable PDF or accessible page, no invented credentials | **Needs supplied, checked artifact** |
| Project repository 1 — STAR (T-shirt) | Repository and, when working, site | https://github.com/mishkhurshid/is-117-brand-studio / https://mishkhurshid.github.io/is-117-brand-studio/ |
| Project repository 2 — Tastee Cafe (group business) | Repository and research documentation site | https://github.com/mishkhurshid/is117-group-business / https://mishkhurshid.github.io/is117-group-business/ |
| Project repository 3 — Portfolio (this project) | Own GitHub repository and future deployed site | **Not yet created; do not substitute another project repo** |
| Optional featured project — AI Career Research | Existing career research repository | https://github.com/mishkhurshid/ai-career-research |
| Contact | Approved professional contact method, no invented address | Pending choice |

**Note:** This PLAN.md is temporarily housed in the existing AI Career Research repository to preserve the evolving career research record. **The assignment also requires a separate individual portfolio repository**, to be created and linked when available. This is not a substitute for its eventual repo URL.

## Brand, visual style and honest persuasion
- Tone: confident, straightforward, welcoming, evidence-led.
- Visuals: warm neutral background, deep ink text, muted accent; large readable headings and restrained card layout. Reuse the preference for clean typography and short copy developed during STAR; adapt for professional hiring audience.
- Navigation: Home, Projects, Experience, Résumé, Contact.
- Persuasion: link directly to work, show concrete contributions and tests; do **not** invent testimonials, skills, metrics, employers' endorsements, or awards.

## Verification plan (not yet performed)
| Planned check | Pass condition | Evidence location |
|---|---|---|
| Link audit | GitHub, LinkedIn, all 3 course project repositories and résumé open correct destinations | Record observed links, date, results in GitHub issue |
| Content truth check | Every claimed experience/award/outcome is supported by résumé, repository or original evidence | Review issue and source link |
| Mobile + keyboard | 375 px width readable, keyboard navigable, focus visible | Reviewer observations/screenshot after building |
| Story acceptance | Reviewer can identify field and locate 3 project repo links within a short visit | Actual reviewer comment with outcome |

## Feedback → decision → revision → verification
**Reviewer request:** Evaluate whether a recruiter can quickly identify the student's focus and reach all required professional destinations; identify missing or confusing links. Use a GitHub issue.  
**Current state:** Review requested/planned; no real external reviewer comments or retests claimed yet.  
For each incoming issue: record **implement / investigate / defer / decline** with reason → reference issue number in documentation/code commit → link change → record actual check → ask reviewer to retry → only close if resolved.

## Immediate open work
- Create **own portfolio repository**, add this plan and link it here.
- Verify LinkedIn link and supply readable résumé.
- Request actual peer feedback and document decision, linked revision, verification and reviewer retry.
- Build/deploy the portfolio in a later milestone, not required for Plan.
- Verify AI-assisted text and project claims against originals.

**AI disclosure:** AI helped organize and draft this plan. Owner must validate accuracy, decisions, links and any claimed check before submission.
