// ---------------------- CONFIG + DATA ----------------------
const PER_Q_TIME = 20; // seconds

// Each item: question, options[4], answerIndex, tip, explain
const QUESTIONS = [
  {q:"Choose the correct meaning of the idiom \"to cry wolf\"", o:["To listen eagerly","To give false alarm","To turn pale","To keep off starvation"], a:1, tip:"Think of a boy who kept calling for a danger that wasn’t real.", explain:"To cry wolf = to raise a false alarm."},
  {"q":"\"In a fit of anger\" means","o":["In a huff","Sour","Outburst","Out of anger"],"a":0,"tip":"Short, sulky burst of annoyance.","explain":"In a huff = in a short-lived state of irritation (a fit)."},
  {"q":"Which option best captures the meaning of \"Nightmarish\"?","o":["Feeling of helplessness and extreme anxiety","Feeling of delirium and extreme hallucination","Feeling of ecstasy and extreme gratification","Feeling of nonchalance and extreme insouciance"],"a":0,"tip":"Opposite of calm; closer to panic.","explain":"Nightmarish relates to terror/anxiety, not joy or indifference."},
  {"q":"This passage is beyond my ability to understand. It is","o":["impenetrable","incomprehensible","incredible","imprudent"],"a":1,"tip":"Not able to be understood.","explain":"Incomprehensible = not understandable (best contextual fit)."},
  {"q":"I am fed up with his behavior at school...","o":["Noticeable","Underestimate","Neglectful","Bored with"],"a":3,"tip":"\"Fed up with\" ~ tired/bored of something continuing.","explain":"Fed up with = bored/annoyed by."},
  {"q":"A lacto-vegetarian is one who...","o":["Avoids all meat/fish/eggs but eats milk products","Eats only vegetables","Eats vegetables and meat products","Avoids milk products but eats vegetables"],"a":0,"tip":"\"Lacto\" points to milk.","explain":"Lacto-vegetarian consumes dairy but no meat/fish/eggs."},
  {"q":"He works hard to keep the pot boiling...","o":["To survive","To boil the pot","To lead an easy life","To light the fire"],"a":0,"tip":"Keeping things going = sustaining livelihood.","explain":"Keep the pot boiling = earn enough to live."},
  {"q":"The expression 'to smell a rat' means","o":["A bad smell","To suspect","To misunderstand","To hide"],"a":1,"tip":"Detecting hidden trouble.","explain":"Smell a rat = suspect something wrong."},
  {"q":"'To burn the candle at both ends' means","o":["To waste money","To waste a candle","To labour","To act foolishly"],"a":2,"tip":"Working early and late.","explain":"Burn the candle at both ends = work extremely hard."},
  {"q":"He is close-fisted.","o":["Generous","Stingy","Gifted","Kind"],"a":1,"tip":"Tight with money.","explain":"Close-fisted = miserly/stingy."},
  {"q":"To fish in troubled waters means...","o":["To indulge in evil conspiracies","To aggravate the situation","To catch fish in water","To benefit from other people's troubles"],"a":3,"tip":"Profit from chaos.","explain":"Fish in troubled waters = take advantage of disorder."},
  {"q":"Bad blood means","o":["rivalry","blue blood","negative blood","noble associate"],"a":0,"tip":"Hostility between people.","explain":"Bad blood = animosity/ill-feeling."},
  {"q":"To make clean breast of","o":["To gain prominence","To praise oneself","To confess without reserve","To destroy before it blooms"],"a":2,"tip":"Admit everything.","explain":"Make a clean breast of = confess fully."},
  {"q":"To catch a tartar","o":["To trap wanted criminal with great difficulty","To catch a dangerous person","To meet with disaster","To deal with a person who is more than one's match"],"a":3,"tip":"Biting off more than you expected.","explain":"Catch a tartar = encounter an opponent who’s formidable."},
  {"q":"To drive home","o":["To find one's roots","To return to place of rest","Back to original position","To emphasise"],"a":3,"tip":"Hammer the point.","explain":"Drive home = make something clearly understood."},
  {"q":"To have an axe to grind","o":["A private end to serve","To fail to arouse interest","To have no result","To work for both sides"],"a":0,"tip":"Personal motive.","explain":"Have an axe to grind = have selfish reasons."},
  {"q":"A snake in the grass","o":["a treacherous or hidden enemy","not a reliable person","recognizable danger","unexpected happening"],"a":0,"tip":"Danger that hides.","explain":"Snake in the grass = secret enemy."},
  {"q":"To wash one's dirty linen in public","o":["to quarrel in the open","to do some ugly work in public","to discuss private matters before strangers","to wash one's clothes in the open"],"a":2,"tip":"Private issues, public place.","explain":"Discussing embarrassing private matters openly."},
  {"q":"To pick holes","o":["To find some reason to quarrel","To destroy something","To criticise someone","To cut some part of an item"],"a":2,"tip":"Nitpicking.","explain":"Pick holes = find faults/criticise."},
  {"q":"The student is a hard nut to crack.","o":["Obstinate","Annoyed","Easy going","Fruit like walnut"],"a":0,"tip":"Difficult to deal with.","explain":"Hard nut to crack = tough person/problem."},
  {"q":"He put his heart and soul into his work.","o":["Dishonestly","Lazily","Casually","Sincerely"],"a":3,"tip":"Full dedication.","explain":"Heart and soul = with total effort and sincerity."},
  {"q":"I was taken for a ride at the exhibition yesterday.","o":["Cheated","Drive","Roamed","Discussion"],"a":0,"tip":"Deceived.","explain":"Taken for a ride = cheated."},
  {"q":"To end in smoke","o":["To make completely understand","To ruin oneself (or to come to nothing)","To excite great applause","To overcome someone"],"a":1,"tip":"No solid result.","explain":"End in smoke = come to nothing/fail."},
  {"q":"To be above board","o":["To have a good height","To be honest in any business deal","They have no debts","To try to be beautiful"],"a":1,"tip":"Open and fair.","explain":"Above board = honest and transparent."},
  {"q":"To put one's hand to plough","o":["To take up agricultural farming","To take a difficult task","To get entangled into unnecessary things","Take interest in technical work"],"a":1,"tip":"Begin serious work.","explain":"Put hand to the plough = commit to a task."},
  {"q":"To look a gift-horse in the mouth","o":["to appreciate a gift or favour","to accept something ungratefully","to be indifferent","to acknowledge something greatly"],"a":1,"tip":"Criticising a gift.","explain":"Don’t look a gift horse in the mouth = don’t be ungrateful/critical about a gift."},
  {"q":"To let the grass grow under one's feet","o":["to miss the opportunity","to let things go on in their natural way","to waste no time in doing something","to idle away the time; to delay and linger"],"a":3,"tip":"Delaying action.","explain":"Let the grass grow... = be inactive/lose time."},
  {"q":"To hit the ground running","o":["to start something with enthusiasm and energy","to take a slow and cautious approach","to abandon a project midway","to avoid hard work altogether"],"a":0,"tip":"Immediate momentum.","explain":"Hit the ground running = start fast and effectively."},
  {"q":"To bite the bullet","o":["to delay doing something","to refuse to do something","to endure something painful or difficult bravely","to change one's mind"],"a":2,"tip":"Face it head-on.","explain":"Bite the bullet = accept hardship with courage."},
  {"q":"Once in a blue moon","o":["often","occasionally","rarely","always"],"a":2,"tip":"Very infrequent.","explain":"Once in a blue moon = rarely."},
  {"q":"To pull a fast one on someone","o":["to drive very fast","to cheat someone","to win against someone","to enchant someone"],"a":1,"tip":"A trick.","explain":"Pull a fast one = cheat/trick someone."},
  {"q":"The lion's share","o":["the smallest part","an unfairly large share","a modest amount","a balanced part"],"a":1,"tip":"Biggest chunk.","explain":"Lion’s share = largest portion."},
  {"q":"To count one's chickens before they hatch","o":["to wait until the outcome","to rely on something not yet assured","to expect nothing","to prepare after success"],"a":1,"tip":"Don’t bank on uncertainties.","explain":"Counting chickens early = assuming success prematurely."},
  {"q":"To beat around the bush","o":["to speak directly and clearly","to avoid saying what one means, usually because it is uncomfortable","to end a discussion abruptly","to amplify a simple matter"],"a":1,"tip":"Indirect talk.","explain":"Beat around the bush = avoid the main point."},
  {"q":"To be all ears","o":["to be very attentive","to be fully hearing","to be completely silent","to be very angry"],"a":0,"tip":"Listening keenly.","explain":"All ears = very attentive."},
  {"q":"To weather the storm","o":["to collapse under pressure","to come out of a crisis successfully","to ignore a crisis","to start a crisis"],"a":1,"tip":"Survive and succeed.","explain":"Weather the storm = endure difficulties successfully."},
];

// ---------------------- STATE ----------------------
const state = {
  i: 0,
  t: PER_Q_TIME, // seconds left
  answers: {},   // key -> {chosen, revealed, skipped, timedOut, timeSpent}
  running: null,
};

const total = QUESTIONS.length;
const screen = document.getElementById('screen');
const qpos = document.getElementById('qpos');
const qtotal = document.getElementById('qtotal');
const tleft = document.getElementById('tleft');
const pbar = document.getElementById('pbar');
qtotal.textContent = `/ ${total}`;

const key = (id) => `Q${id}`;
function initAnswer(idx){
  const k = key(idx);
  if(!state.answers[k]) state.answers[k] = { chosen:null, revealed:false, skipped:false, timedOut:false, timeSpent:0 };
}
function percent(){ return Math.round(((state.i+1)/total)*100) }

function setTimerVisual(){
  const frac = state.t / PER_Q_TIME;
  const deg = Math.max(0, Math.min(360, 360*frac));
  document.querySelector('.timer').style.background =
    `conic-gradient(var(--accent) ${deg}deg, rgba(255,255,255,.12) 0deg)`;
  tleft.textContent = state.t;
}

function startTimer(){
  stopTimer(); state.t = PER_Q_TIME; setTimerVisual();
  state.running = setInterval(()=>{
    state.t--;
    state.answers[key(state.i)].timeSpent++;
    setTimerVisual();
    if(state.t <= 0){
      state.answers[key(state.i)].timedOut = true;
      goNext(true);
    }
  }, 1000);
}
function stopTimer(){ if(state.running){ clearInterval(state.running); state.running = null } }

// ---------------------- RENDER ----------------------
function render(){
  initAnswer(state.i);
  qpos.textContent = `Question ${state.i+1}`;
  pbar.style.width = percent() + "%";

  const item = QUESTIONS[state.i];
  const ans = state.answers[key(state.i)];

  const opts = item.o.map((text, idx)=>{
    const isChosen = ans.chosen === idx;
    const showCorrect = ans.revealed;
    const classes = ["opt"];
    if(isChosen) classes.push('selected');
    if(showCorrect && idx === item.a) classes.push('correct'); // green when showing answer
    if(isChosen && showCorrect && idx !== item.a) classes.push('wrong');
    return `<button class="${classes.join(' ')}" data-idx="${idx}">
              <span class="bullet">${String.fromCharCode(65+idx)}.</span> ${text}
            </button>`;
  }).join('');

  const tip = `<div class="tip" id="tip">💡 <strong>Tip:</strong> ${item.tip}</div>`;

  screen.innerHTML = `
    <div class="qwrap fade-in">
      <div class="qtext">${item.q}</div>
      ${tip}
      <div class="options" id="opts">${opts}</div>
      <div class="controls">
        <button class="btn secondary" id="prev" ${state.i===0? 'disabled' : ''}>◀ Prev</button>
        <button class="btn" id="skip">Skip</button>
        <button class="btn success" id="show">Show Answer</button>
        <button class="btn accent" id="next" ${ (ans.chosen!==null) ? '' : 'disabled' }>Next ▶</button>
        <button class="btn" id="submit">Submit</button>
        <button class="btn" id="toggleTip">Tip</button>
      </div>
      <div class="footer">
        <div>Chosen: ${ans.chosen===null? '<em>none</em>' : String.fromCharCode(65+ans.chosen)}</div>
        <div>Spent: <span id="spent">${ans.timeSpent}</span>s</div>
      </div>
    </div>
  `;

  // Option click
  document.getElementById('opts').addEventListener('click', (e)=>{
    const btn = e.target.closest('button.opt');
    if(!btn) return;
    ans.chosen = Number(btn.dataset.idx);
    render(); // re-render to set highlight + enable Next
  });

  // Controls
  document.getElementById('prev').onclick = ()=> goPrev();
  document.getElementById('next').onclick = ()=>{
    const a = state.answers[key(state.i)];
    if(a.chosen!==null){ goNext() }
  };
  document.getElementById('skip').onclick = ()=>{ ans.skipped = true; render(); };
  document.getElementById('show').onclick = ()=>{ ans.revealed = true; render(); };
  document.getElementById('submit').onclick = ()=> showSummary();
  document.getElementById('toggleTip').onclick = ()=>{
    const tip = document.getElementById('tip');
    tip.classList.toggle('show');
  };

  // Keyboard shortcuts
  window.onkeydown = (ev)=>{
    if(ev.key>='1' && ev.key<='4'){ const pick = Number(ev.key)-1; ans.chosen = pick; render(); }
    if(ev.key==='ArrowLeft'){ goPrev() }
    if(ev.key==='ArrowRight'){ const a = state.answers[key(state.i)]; if(a.chosen!==null){ goNext() } }
    if(ev.key.toLowerCase()==='s'){ ans.skipped = true; render() }
    if(ev.key.toLowerCase()==='a'){ ans.revealed = true; render() }
    if(ev.key.toLowerCase()==='t'){ const tip = document.getElementById('tip'); tip.classList.toggle('show'); }
  };

  startTimer(); // reset per-question timer
}

// ---------------------- NAV + SUMMARY ----------------------
function goPrev(){ if(state.i===0) return; stopTimer(); state.i--; render(); }
function goNext(fromTimeout=false){
  stopTimer();
  if(state.i < total-1){ state.i++; render(); }
  else { showSummary(); }
}

function showSummary(){
  stopTimer();
  let correct=0, attempted=0, revealed=0, skipped=0, timedOut=0, totalTime=0;
  QUESTIONS.forEach((it, idx)=>{
    const a = state.answers[key(idx)]||{};
    totalTime += a.timeSpent||0;
    if(a.skipped) skipped++;
    if(a.timedOut) timedOut++;
    if(a.revealed) revealed++;
    if(a.chosen!==null) attempted++;
    if(a.chosen===it.a) correct++;
  });

  const score = `${correct} / ${total}`;

  screen.innerHTML = `
    <div class="summary fade-in">
      <h2 style="margin:0">Summary</h2>
      <div class="stats">
        <div class="stat"><h3>Score</h3><p>${score}</p></div>
        <div class="stat"><h3>Attempted</h3><p>${attempted}</p></div>
        <div class="stat"><h3>Revealed (Show Answer)</h3><p>${revealed}</p></div>
        <div class="stat"><h3>Skipped</h3><p>${skipped}</p></div>
        <div class="stat"><h3>Timed Out</h3><p>${timedOut}</p></div>
        <div class="stat"><h3>Total Time</h3><p>${totalTime}s</p></div>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap">
        <button class="btn" id="review">Review Questions</button>
        <button class="btn accent" id="restart">Restart</button>
      </div>
    </div>
  `;

  document.getElementById('restart').onclick = ()=>{
    Object.assign(state,{i:0,t:PER_Q_TIME,answers:{},running:null});
    render();
  };
  document.getElementById('review').onclick = ()=> showReviewList();
}

function showReviewList(){
  stopTimer();
  const rows = QUESTIONS.map((it, idx)=>{
    const a = state.answers[key(idx)]||{};
    const choice = a.chosen==null? '-' : String.fromCharCode(65+a.chosen);
    const correct = String.fromCharCode(65+it.a);
    const status = a.chosen===it.a? '✅' : (a.chosen==null? '—' : '❌');
    return `<tr>
      <td style="opacity:.75">${idx+1}</td>
      <td>${it.q}</td>
      <td>${choice}</td>
      <td>${correct}</td>
      <td>${status}</td>
      <td>${a.timeSpent||0}s</td>
      <td><button class="btn" data-jump="${idx}">Open</button></td>
    </tr>`;
  }).join('');

  screen.innerHTML = `
    <div class="fade-in" style="overflow:auto">
      <h2 style="margin:6px 0 10px 0">Review</h2>
      <div style="max-height:52vh; overflow:auto; border:1px solid rgba(255,255,255,.08); border-radius:12px">
        <table style="width:100%; border-collapse:collapse; font-size:14px">
          <thead>
            <tr style="background:#0f1327">
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">#</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">Question</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">Your</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">Correct</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">Status</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)">Time</th>
              <th style="text-align:left; padding:10px; border-bottom:1px solid rgba(255,255,255,.08)"></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div style="display:flex; gap:10px; margin-top:10px">
        <button class="btn" id="back">Back</button>
      </div>
    </div>
  `;

  screen.querySelectorAll('button[data-jump]').forEach(btn=>{
    btn.onclick = ()=>{ state.i = Number(btn.dataset.jump); render(); }
  });
  document.getElementById('back').onclick = ()=> showSummary();
}

// boot
render();
