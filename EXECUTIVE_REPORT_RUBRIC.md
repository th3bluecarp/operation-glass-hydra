# operation glass hydra: Executive Report Rubric

## Scenario-specific required conclusions

The phishing/domain infrastructure and endpoint artifacts form the primary chain: lookalike Microsoft domains -> MFA-proxy/helpdesk activity -> Windows persistence and credential access -> cloud/application impact. AnyDesk/red-team maintenance tickets may be authorized noise; verify timing and ticket ownership. Secret listings and registry keys prove exposure/persistence only when paired with execution and identity/network evidence.

## Scoring

- 30% accurate, normalized timeline with artifact citations
- 25% complete entry, pivot, persistence, privilege, and impact analysis
- 20% correct clustering of related, unrelated, benign, and false-signal activity
- 15% disciplined confidence labels and treatment of telemetry gaps
- 10% executive-quality remediation, ownership, and sequencing

## Automatic deductions

- Unsupported attribution or invented observables
- Collapsing every suspicious event into a single incident
- Treating attempted access as successful access
- Treating access as exfiltration without transfer or receipt evidence
- Treating missing logs as proof that activity did not occur
- Omitting material contradictory or benign evidence

Every high-impact conclusion should cite two independent artifacts where available and preserve exact identities, hosts, IP addresses, object names, and timestamps.
