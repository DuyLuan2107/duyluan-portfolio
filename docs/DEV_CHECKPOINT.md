# VocabLensAI – Developer Checkpoint
*Last updated: 2026-07-05*

---

## 1. Completed Features

| # | Feature | Status |
|---|---------|--------|
| A | Camera AI Vocab Scanner + Flashcards (TFLite) | ✅ Done |
| B | AI Chatbot "Aria" (Gemini API) | ✅ Done |
| C | Arena – ELO PvP matchmaking, Game Review card | ✅ Done |
| D | Arena – **Survival Mode** (Endless vocab blitz) | ✅ Done |
| E | Arena – **Event Mode** (Timed event with rank estimate) | ✅ Done |
| F | Firebase Auth (Email + Google Sign-In) + Firestore sync | ✅ Done |
| G | Leaderboard (online, real-time Firestore) | ✅ Done |
| H | Social tab – Friends, clubs, profile cards, challenge | ✅ Done |
| I | Study Sets – Milestone Roadmap (Duolingo-style path) | ✅ Done |
| J | VIP Premium simulation (3 AI uses/day, demo unlock) | ✅ Done |
| K | Daily check-in + streak + XP gamification | ✅ Done |

---

## 2. Key Files & Modules

| File | Purpose |
|------|---------|
| `app/src/main/java/.../ui/viewmodel/VocabViewModel.kt` | Central state: all game modes, auth, XP, ELO, survival/event logic |
| `app/src/main/java/.../ui/screens/ArenaScreen.kt` | Arena UI: matchmaking, in-game, end screen, leaderboard, event views |
| `app/src/main/java/.../data/VocabDictionary.kt` | Loads vocab from JSON assets, filters by topic/level |
| `app/src/main/assets/core_vocab.json` | ~156 000-line master vocab dictionary |
| `app/src/main/java/.../data/Prefs.kt` | SharedPreferences wrapper (ELO, streak, highscore, VIP flag) |
| `app/src/main/java/.../data/GamificationEngine.kt` | XP award, badge unlock logic |
| `scripts/` | Python helper scripts for IPA fix, CEFR lesson generation, PDF render |
| `docs/` | Developer documentation (this file lives here) |

---

## 3. Build Status

- **Last known build:** `assembleDebug` triggered after the `ArenaScreen.kt` UI fix (see §4).  
- **Result:** Build was still running at checkpoint; no compile errors were reported before truncation.  
- **Min SDK / Target SDK:** Check `app/build.gradle.kts` – Android with Jetpack Compose.

---

## 4. Known Risks & Bugs

| Severity | Issue | File | Notes |
|----------|-------|------|-------|
| 🟡 Medium | "CẦN ÔN TẬP LẠI" missed-word list squishes text into single-character vertical column | `ArenaScreen.kt` ~L1809, ~L1982 | **Fixed in last session**: added `Modifier.weight(1.5f)` + `Spacer(8.dp)` to the Vietnamese text column |
| 🟡 Medium | `startSurvivalMode()` blocked restart from `ENDED` state | `VocabViewModel.kt` ~L3013 | **Fixed in last session**: guard updated to allow `"IDLE"` or `"ENDED"` |
| 🟠 Low-Med | `cleanDefinition()` may produce awkward truncation (`...`) mid-word for long Vietnamese meanings | `VocabViewModel.kt` ~L3763 | Current limit: 45 chars; no crash, but text may look odd |
| 🔵 Info | `@Deprecated` warnings for some Compose scroll components | `ArenaScreen.kt` | Non-breaking; suppress or migrate when upgrading Compose |

---

## 5. Next Recommended Task

> **Verify the missed-word list UI fix visually on device.**  
> Run `assembleDebug` → install → play Survival Mode until game over → inspect "CẦN ÔN TẬP LẠI" card.  
> Confirm Vietnamese text wraps properly across its `weight(1.5f)` column instead of stacking vertically.

After that, the backlog from `PROJECT_STATUS.md` recommends:
1. **Match History Log** – persist ELO match details in Room DB.
2. **National Pride League** – country-averaged ELO on Arena tab.
3. **AdMob / Billing** – when publishing to Play Store.

---

## 6. Bottom Navigation – DO NOT CHANGE

The 6 bottom tabs are **fixed by design**. Their order and labels must not be altered:

```
Trang chủ | Khám phá | Quét ảnh | Đấu trường | Trò chuyện AI | Thêm
```

- **Trang chủ** – Home / study dashboard  
- **Khám phá** – Explore / roadmap  
- **Quét ảnh** – Camera scanner  
- **Đấu trường** – Arena (PvP, Survival, Events)  
- **Trò chuyện AI** – Aria AI chatbot  
- **Thêm** – More / settings / profile  

Any structural refactor of `BottomNavigation` or its route graph must preserve these exactly.

---

## 7. Architecture Summary

- **Stack:** Kotlin + Jetpack Compose, MVVM  
- **Local DB:** Room (flashcards, match history, study sets)  
- **Cloud:** Firebase Auth + Firestore (user profile, ELO, leaderboard)  
- **AI:** Gemini API (chatbot, pronunciation feedback), TFLite (object detection)  
- **Vocab Data:** JSON assets loaded at runtime via `VocabDictionary`  

---
*For full feature history see `PROJECT_STATUS.md`. For architecture details see `README.md`.*
