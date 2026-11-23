# How to finish Rehan's birthday film

## 1. Add your photos (folder: `photos`)
Rename your photos to exactly these names and drop them in the `photos` folder.
Any photo you skip shows a soft placeholder, so nothing breaks.

| File name | Where it shows up |
|---|---|
| `develop.jpg` | "Develop the photo" activity in Chapter 1. Use an older photo of him. |
| `ch1-a.jpg`, `ch1-b.jpg` | Chapter 1 photos |
| `bday-1.jpg`, `bday-2.jpg`, `bday-3.jpg` | The three birthdays (2023, 2024, 2025) |
| `reel-1.jpg` to `reel-8.jpg` | The sideways highlight reel in Chapter 2 (reel-1 and reel-8 also show up as big photos) |
| `deleted-1.jpg` to `deleted-4.jpg` | Deleted scenes: funny or blooper photos he unlocks |

Tips:
- Photos must be **.jpg or .png**. iPhone photos are often **HEIC**, which browsers can't show. On iPhone go to Settings > Camera > Formats > Most Compatible, or export or screenshot them as JPG.
- Tall (portrait) photos look best.

## 2. Voice notes (optional, folder: `voice`)
Record a voice note on your phone, name it `ch1-a.m4a`, and put it in the `voice` folder.
It plays when he taps "commentary" on the first Chapter 1 photo.
To add commentary to other photos, type the file name in that photo's `voice: ""` spot in `content.js`.

## 3. Edit the words (file: `content.js`)
Open `content.js` in any text editor (Notepad, TextEdit, or on GitHub itself). Things to check:
- **The three chapter pages** (`page:` inside ch1, ch2, ch3). These are drafts. Add real memories, names of places and inside jokes so they sound like you.
- **The letter.** It's a short draft. Rewrite it in your own words. This is the part he'll remember most.
- **Quiz answers.** Fix the answers and fill in Question 3 (first date).
- **Photo captions** (they say "caption here" right now).
- **Coming soon posters** and the **post-credits surprise** line.
- **herWhatsApp:** your number with country code, so his review gets sent to you on WhatsApp.

## 4. Put it online with GitHub Pages
1. Make an account at **github.com**.
2. Click **+** (top right), then **New repository**. Name it something like `for-rehan`, choose **Public**, and click **Create repository**.
3. On the next page, click **uploading an existing file**.
4. Open the unzipped `rehan` folder and drag **everything inside it** onto the page: `index.html`, `content.js`, and the `music`, `photos` and `voice` folders. Then click **Commit changes**.
5. Go to **Settings > Pages**. Under **Branch**, pick `main`, then click **Save**.
6. Wait 1 to 2 minutes and refresh. Your link appears at the top: `https://YOUR-USERNAME.github.io/for-rehan/`

To change something later, open the file on GitHub, click the pencil icon, edit, and click **Commit changes**. The site updates in about a minute.

## 5. Test before sending
- Open the link on your laptop **and** your phone.
- Ticket code: **0801**
- Scroll all the way through and check that the music changes at each chapter.
- The 4 hidden 🎬 are in: the Chapter 1 photo scene, the highlight reel title, the distance map, and the letter.
