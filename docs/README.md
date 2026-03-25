# Glass Hydra — Expert DFIR / Incident Investigation Lab

This lab is intentionally nasty.

It mixes:
- identity compromise after MFA
- endpoint intrusion
- cloud persistence
- partial anti-forensics
- ransomware-style noise
- false-flag indicators
- legacy admin activity that looks malicious
- unrelated security scanner traffic
- believable but wrong paths

## Goal
Produce a defensible investigation report from the artifacts alone.

## Recommended workflow
1. Start with docs/OBJECTIVES.md
2. Build your own timeline
3. Separate confirmed activity from decoys
4. Do not trust single-source indicators

## Notes
- Timestamps are UTC unless a file says otherwise.
- Some artifacts are extracts, not raw originals.
- A complete solution set is included under solutions/.
