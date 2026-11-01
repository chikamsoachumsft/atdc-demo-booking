# ATDC Demo Booking (fictional demo project)

A deliberately **unfinished** site where startups book a 30-minute slot to demo at the
Atlanta Technical Development Center (ATDC) Demo Day. Used to demo **AgentReturn**: shared project
memory and AI-spend attribution across everyone's coding agents.

> Fictional organization, people and data — for demonstration only.

## Join the project (2 minutes, macOS or Windows)
You need **Node.js 18+** ([nodejs.org](https://nodejs.org), LTS) and **git**.

```
git clone https://github.com/chikamsoachumsft/atdc-demo-booking
cd atdc-demo-booking
npm install
npm run join
```
`npm run join` asks for your name, email and the **invite code** shown in the session. That's it.

Then open the folder in **Claude Code**, **Cursor** or **GitHub Copilot**:
- Your first session shows a **welcome to the project** (what it is, where it stands, decisions, people).
- Tag your first prompt with a ticket and work type, e.g. `#1a finish the booking form`
  (`#1`–`#3` = your suggested tickets, `a` = Dev/Feature, `b` Ad-hoc, `c` Learn, `d` R&D, `e` Bug).
- Picking a ticket shows its story so far; your agent gets the full context.
- When your agent finishes a piece of work it logs it to the shared memory (see `AGENTS.md`), so the
  next person is caught up.

Useful commands: **`npm run page`** (open the project memory as a readable page in your browser),
`npm run brief` (your catch-up), `npm run project` (Start here, features, decisions, people),
`npm run feed` (recent entries).

Nothing is installed outside this folder except your personal access file `~/.agentreturn/config.json`.
Delete the folder (and that file) to remove everything.

## Run the site
```
npm start   # http://localhost:5050
```
