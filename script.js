/* .js files add interaction to your website */
var factList = [
  "A strong opening paragraph that captures the readers’ interest is important. You want to make the admissions officer reading your essay curious about what you say next.",
  "Colleges want to see that you have a command of the basics of good writing, which is a key component of success in college.",
  "Admissions officers also want to see that the student can give a direct answer to the essay question.",
  "When writing the essay, you should have a comprehensive argument or narrative. In other words—make your point and stick to it. ",
  "Your style should be comfortable for you to write in, so avoid overusing the thesaurus to sound impressive. A writing style that is natural and appropriate for the subject matter is key.",
  "Don’t stress trying to write what you think colleges are looking for—just focus on showcasing who you are.",
  "Correct grammar, punctuation, and spelling are essential, so proofread several times after you’ve finished. Then ask a teacher, parent, or college student to give it a quick read, too.",
  "Admissions officers value succinctness. Remember to pay attention to the recommended essay length or word count."
];


var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}