# Student Portfolio Roadmap

## What counts as evidence?

Employers may ask for languages, frameworks, deployed systems, collaboration, or experience with AI evaluation. A portfolio can **demonstrate** these skills, but it does not replace required experience or guarantee a job.

| Project | Roles it helps explore | Skills shown | Evidence to publish |
| --- | --- | --- | --- |
| Python API with a simple web interface | AI Engineer, FDE | Python, HTTP, testing, Git | README, tests, API examples, screenshots |
| Document Q&A with cited answers | LLM Engineer, Applied AI | Retrieval, LLM APIs, evaluation | Sample dataset, accuracy checks, failure cases |
| Customer-style AI workflow | FDE, Solutions Architect | Requirements, integration, communication | Problem statement, diagrams, demo, tradeoffs |
| Tool-using AI agent | AI Agent Engineer | Tool calls, permissions, state, error handling | Tests, safeguards, human approval flow |
| Deploy and monitor an AI app | MLOps, AI Platform | CI/CD, monitoring, reliability | Deployment guide, logs, incident scenarios |

Use **synthetic or publicly licensed data**; do not upload private customer or patient records to an experimental app.

## A realistic sequence for a student

### Project 1 — Build the fundamentals

Create a small full-stack app with a Python backend, a database, and tests. Show how to run it locally and how errors are handled.

### Project 2 — Add one AI feature

For example, build a question-answering assistant over a few sample documents. Require citations to source passages, measure failures on a fixed test set, and describe the limitations.

### Project 3 — Demonstrate customer delivery

Write a one-page fictional client brief. Translate the requirements into an architecture diagram, implement the workflow, and record a short demo. Include what you would change after user feedback.

### Project 4 — Improve production readiness

Add authentication where appropriate, secrets management, automated tests, basic monitoring, and a rollback or recovery plan.

## What to include in each GitHub case study

- **Problem:** Who needs this and why?
- **Role:** What did you personally design or implement?
- **Architecture:** Which components and APIs are involved?
- **Evaluation:** How did you measure whether it works?
- **Limitations:** What fails and what would you improve?
- **Evidence:** Repository, demo, screenshots, test results, and documentation.

## Connecting research to your next step

Read [real job descriptions](/job-levels) and highlight **explicit employer requirements**. Compare them with the skills in your project. Keep the distinction clear: project recommendations here are educational suggestions, not claims that any specific employer mandates these artifacts.

## Suggested first choice

For someone exploring **Forward Deployed Engineering**, the most informative starting project is a customer-style AI workflow with written requirements, an API integration, tests, and a working demo. It lets you practice both engineering and communication.
