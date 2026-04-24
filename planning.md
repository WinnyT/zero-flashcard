# What is my project about
I want to create a web/app to learn Mandarin similar to Anki, meaning it's a flashcard system with space repitition, pinyin toggle and speak out loud words. Maybe it's a lesson rather than just words in a flashcard. A lesson of a real-wrold scenary which start with the vocabulary and speaking lesson, then it's a real-life AI generated video so people can listen to them talking to improve their listening skill and ended the lesson with a quiz. Grammar might or might not be introduce because I want the web to specially target the intermidiaty and advance learner to expand their vocab in the immersive way. 
# UI
Plain, minimalistic and easy to use
# Atonomy of a flash card
The flashcard will include: hsk_level, simplified_character, traditional_character (one or another and this should be change across the system), pinyin(toggle), definiton (maybe word breakdown because chinese word might compose of 2+ basic word, also toggledable), audio_url, example_sentences
# How my SRS work
I won't entirely grade this flashcard like Anki when I let the user choose between 4 options instead I first introduce them to a word and let them pick the difinition, correct or incorrect still move them on to the next phase, which is give them word break down, defenition, text_to_speech. If they answer correctly, the learning bar for that work will increase my 1 (max is 3 = completed learning). If they answer incorectly, the system will reveal all the option meaning in Chinese and point out the correct one, their learning bar won't moving or reset if they are wrong for the next 3 times. The second time ( learning phase) the user see the word, it should let the user guess the meaning and choose be between remembered or not, if yes, learning bar + 1 . If no, reset learning bar and comeback to the word break down page. The 3rd time is letting the user type out the word ( with CN keyboard) and the input is definition. Finally, when they finish 10-20 ( depends on the lesson) words, they will have a chance to choose practice writing it ( this can be skip cuz some people don't care)

Then we goind through a lesson phase, where we first put on a short video ~ 2 minutes for the user to comprehend ( including the new work), then they will have a change to forshadowing the sentences (numeric grading system) even word by word recognition for better pronunciation, repeat all of the step for each sentences. The last is quiz when we check word remember and story comprehension. 

All of my learning material will take references from HSK book and putonghua. For the app, it's an inspiration of Bubeidanci and SuperChinese 

After lesson phase, the work will be added to griding phase, where it just simple present a word, we ask them to active recall and they choose between Remmember, Not sure and no. For each and every choice, it will all direct to the next page, aka word breakdown ( again from learning phase), if they choose not sure, when we should the word breakdown, it will choose between correct and wrong, correct will let them move on like yes card and no will reset like normal no. For no card, at last in the griding phase, we will call the learning function again and it should teach them like 0/3 learning phase. for the griding phase, word will go in batch ( 10-15 or 20) after a batch, they will be able to do an extra phase similar to after learning phase, which is writing practice. 

# My struggle
I don't know where the data live and how much space repetition I should put for each word.
# Tech Stack
I have learned Python, Java, C, Javascript and HTML, but not proficient because I might have forget and still need to search google. 
Frontend (The UI & Logic): React.js (using Vite)
Why: You know HTML and JS. React combines them. Because your app has so many states (toggling pinyin, switching from learning to grinding phase, updating the learning bar), React is built exactly for this. It handles UI updates automatically when your data changes.

Backend & Database (Where data lives): Supabase
Why: Writing a backend server from scratch (in Java or Python) while also building a complex React frontend might burn up all your Hack Club Horizon hours. Supabase is a "Backend-as-a-Service." It gives you a real PostgreSQL database, user authentication (logins), and file storage (for your audio/video) right out of the box, and you just communicate with it using JavaScript.
# Data Base Architecture
users table: Stores user ID and email.

words table: The master dictionary. id, simplified, traditional, pinyin, definition, audio_url.

user_progress table (The Magic Table): This tracks who is learning what. It connects the user to the word.

user_id

word_id

learning_bar (0, 1, 2, or 3)

phase ("learning" or "grinding")

next_review_date (A timestamp of when they should see it next)
# The algorithm
next_review_date(): Interval * Ease Factor 
let's see if itfasdfd fdfdahjhnbk