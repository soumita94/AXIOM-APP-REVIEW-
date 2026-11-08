# AXIOM public website — HTML, CSS and vanilla JavaScript

## Pages
- `/` — AXIOM landing page
- `/privacy-policy/` — expanded DPDP-oriented Privacy Policy draft
- `/terms/` — expanded AXIOM Terms & Conditions draft
- `/data-deletion/` — User Data Deletion instructions

## Run locally
From this directory run:

```bash
python -m http.server 8080
```

Open `http://localhost:8080/`. You can also use VS Code Live Server.

## Deployment
Deploy these files to the web root for `axxiom.in`, or configure the hosting/reverse proxy to serve the four routes. If the existing application redirects every path to sign-in, configure public routes/static-file handling before the authentication catch-all while preserving the existing sign-in route.

## Legal review required before publication
The Privacy Policy and Terms follow a detailed section structure inspired by the sample documents supplied for reference, but are rewritten for AXIOM and NeoNexus Innovations. They are not a word-for-word copy and do not assume that Wolke Systems' business practices apply to AXIOM.

These are working drafts, not legal advice and not proof of DPDP compliance. Replace every bracketed placeholder and obtain review by the responsible company representative/legal adviser. Confirm:
1. Registered legal name and registered/business address of the entity operating AXIOM.
2. Monitored business contact and privacy/grievance email; designated Grievance Officer details.
3. Actual hosting, analytics, AI, Meta/WhatsApp, telephony and other providers.
4. Actual data categories, purposes, access controls, retention periods, safeguards and cross-border processing.
5. Actual cookie/analytics configuration on the public site and authenticated platform.
6. Approved pricing, GST, renewal, cancellation, refunds, liability, indemnity and dispute-resolution clauses.
7. An operational process to receive, verify, track and complete deletion requests.

The Privacy Policy reflects the supplied product fact that AXIOM currently does not record sales-call audio, store call recordings or generate call transcripts. Update it if product behaviour changes.

The data-deletion page is informational; it does not submit requests to a backend. Do not publish until its contact is monitored and requests can actually be processed.

Suggested Meta URLs:
- `https://axxiom.in/privacy-policy/`
- `https://axxiom.in/terms/`
- `https://axxiom.in/data-deletion/`
