document.addEventListener('DOMContentLoaded', () => {
  try {
    // FUNNY AUDIOS
    const correctSound = new Audio('https://od.lk/s/NzJfNDc5NzIwNzBf/Wow%20sound%20effect.mp3');
    const correctSound2 = new Audio('https://od.lk/s/NzJfNDc5ODE2MzNf/anime-ahh.mp3');
    const incorrectSound = new Audio('https://od.lk/s/NzJfNDc5NzIwNjNf/Fahh%20Sound%20Effect.mp3');
    const incorrectSound2 = new Audio('https://od.lk/s/NzJfNDc5NzIwNzFf/Vine%20boom%20sound%20effect.mp3');

  // 2. Force Preloading
    const allSounds = [correctSound, correctSound2, incorrectSound, incorrectSound2];

    allSounds.forEach(sound => {
      sound.preload = 'auto'; // Tells browser to download immediately
      sound.load();           // Forces the request to start now
});

    // words and keywords
    const words = [
  "Assets","Elicits","Illicit","Assertive","Dichotomy","Prejudice","Deliberate",
  "Deplete","Tapestry","Abstract","Endemic","Sparse","Immaculate","Intricate",
  "Broad","Tangible","Linguistics","Diligent","Desecration","Rampant","Unionize",
  "Untrammeled","Tacitly","Perpetual","Relinquish","Obfuscated","Flouted","Belie",
  "Squander","Ameliorate","Boorish","Intrepid","Insidious","Cascade","Authentic",
  "Amnesty","Synopsis","Integrity","Insure","Derived","Toil","Supplemental",
  "Detrimental","Calamitous","Improvised","Riveting","Enterprise","Taxing",
  "Infiltration","Convoluted","Elucidate","Pivotal","Liquidation","Superfluous",
  "Magnanimous","Volatile","Forage","Anthology","Panacea","Anthropology","Catalog",
  "Visage","Denounce","Lament","Dogmatic","Unpretentious","Ambiguous","Intrinsic",
  "Elated","Venerate","Decadence","Efficacy","Sobriety","Tenacity","Conceivable",
  "Ultimatum","Homogenization","Progenitor","Empirical","Prudent","Evocation",
  "Dirge","Eschew","Heretical","Abdicate","Destitute","Lucrative","Exorbitant",
  "Exacerbate","Anachronistic","Lauded","Morose","Precedence","Profound","Heinous",
  "Proponent","Perennially","Ubiquitously","Incidence","Symbiotic","Nebulous",
  "Arduous","Cacophony","Collude","Expedite","Incisive","Mitigate","Hackneyed",
  "Rancor","Obdurate","Penchant","Relegate","Zenith","Affable","Onerous","Enigma",
  "Belligerent","Reclusive","Piety","Querulous","Vacillate","Vindicate","Altruistic",
  "Ambivalent","Vociferous","Corroborate","Dispel","Percolate","Aggregate","Rudimentary",
  "Vexing","Candor","Apathy","Terse","Dearth","Stagnant","Abridge","Irate","Inundate",
  "Insipid","Frugal","Impetuous","Esoteric","Eclectic","Egregious","Convergence",
  "Turpitude","Elide","Evinced","Innocuous","Labyrinthine","Spurious","Dissonance",
  "Perfunctory","Incessant","Aspire","Vilify","Reticent","Inept","Fortuitous",
  "Lethargic","Postulate","Extol","Hapless","Inoculate","Phlegmatic","Philanthropic","Travesty","Tirade","Zephyr"
];
    const wordKeywords = {
  "Abdicate": ["Resign", "give up", "renounce", "step down", "surrender", "quit"],
  "Abridge": ["Shorten", "condense", "cut", "abbreviate", "reduce", "summary"],
  "Abstract": ["Theoretical", "conceptual", "non-concrete", "summary", "idea", "vague"],
  "Affable": ["Friendly", "pleasant", "easygoing", "approachable", "sociable", "amiable"],
  "Aggregate": ["Total", "combined", "collection", "sum", "whole", "mass"],
  "Altruistic": ["Selfless", "unselfish", "kind", "charitable", "generous", "humane"],
  "Ambiguous": ["Unclear", "vague", "open", "double meaning", "uncertain", "obscure", "mixed feelings"],
  "Ambivalent": ["Uncertain", "mixed feelings", "undecided", "conflicting", "doubtful", "wavering"],
  "Ameliorate": ["Improve", "better", "help", "enhance", "relieve", "alleviate"],
  "Amnesty": ["Pardon", "forgiveness", "immunity", "reprieve", "release", "absolution"],
  "Anachronistic": ["Outdated", "old-fashioned", "misplaced", "wrong time", "obsolete", "antique"],
  "Anthology": ["Collection", "compilation", "selection", "treasury", "digest", "literary"],
  "Anthropology": ["Humans", "culture", "society", "study", "development", "mankind"],
  "Apathy": ["Indifference", "lack of interest", "unconcern", "emotionless", "listlessness", "numbness"],
  "Arduous": ["Difficult", "hard", "strenuous", "tiring", "laborious", "exhausting"],
  "Aspire": ["Aim", "hope", "desire", "seek", "ambition", "goal"],
  "Assertive": ["Confident", "forceful", "decisive", "bold", "positive", "self-assured"],
  "Assets": ["Property", "possessions", "value", "resource", "advantage", "wealth", "benefits"],
  "Authentic": ["Real", "genuine", "true", "original", "valid", "actual"],
  "Belie": ["Contradict", "disguise", "misrepresent", "false", "hide", "negate"],
  "Belligerent": ["Hostile", "aggressive", "warlike", "combative", "fighting", "threatening"],
  "Boorish": ["Rude", "rough", "insensitive", "bad-mannered", "coarse", "uncouth"],
  "Broad": ["Wide", "large", "general", "vast", "extensive", "open", "big"],
  "Cacophony": ["Noise", "discord", "harshness", "racket", "din", "clamor"],
  "Calamitous": ["Disastrous", "catastrophic", "tragic", "devastating", "ruinous", "fatal"],
  "Candor": ["Honesty", "frankness", "openness", "truthfulness", "sincerity", "directness"],
  "Cascade": ["Waterfall", "pour", "flow", "series", "succession", "tumble"],
  "Catalog": ["List", "record", "register", "inventory", "classify", "organize"],
  "Collude": ["Conspire", "plot", "scheme", "cooperate", "secret", "deceit"],
  "Conceivable": ["Possible", "imaginable", "believable", "thinkable", "credible", "plausible"],
  "Convergence": ["Meeting", "joining", "merging", "union", "coming together", "junction"],
  "Convoluted": ["Complicated", "twisted", "complex", "intricate", "involved", "tangled"],
  "Corroborate": ["Confirm", "verify", "support", "prove", "validate", "authenticate"],
  "Dearth": ["Scarcity", "lack", "shortage", "absence", "deficiency", "famine"],
  "Decadence": ["Decline", "decay", "corruption", "self-indulgence", "deterioration", "excess"],
  "Deliberate": ["Intentional", "planned", "careful", "thoughtful", "calculated", "purposeful", "purpose"],
  "Denounce": ["Condemn", "criticize", "accuse", "blame", "censure", "declare"],
  "Deplete": ["Exhaust", "empty", "reduce", "drain", "consume", "use up"],
  "Derived": ["Obtained", "originating", "sourced", "drawn", "extracted", "traced"],
  "Desecration": ["Violation", "disrespect", "profanity", "ruin", "sacrilege", "blasphemy"],
  "Destitute": ["Poor", "impoverished", "lacking", "needy", "penniless", "indigent"],
  "Detrimental": ["Harmful", "damaging", "injurious", "negative", "hurtful", "destructive"],
  "Dichotomy": ["Division", "contrast", "split", "separation", "two parts", "difference"],
  "Diligent": ["Hardworking", "careful", "thorough", "persistent", "assiduous", "industrious"],
  "Dirge": ["Song", "mournful", "funeral", "sad", "lament", "hymn"],
  "Dispel": ["Drive away", "scatter", "eliminate", "banish", "disperse", "resolve", "disappear"],
  "Dissonance": ["Discord", "clash", "conflict", "noise", "lack of harmony", "disagreement"],
  "Dogmatic": ["Opinionated", "rigid", "assertive", "doctrinal", "inflexible", "absolute", "opinion"],
  "Eclectic": ["Diverse", "varied", "broad", "mixed", "wide-ranging", "assorted"],
  "Efficacy": ["Effectiveness", "power", "ability", "success", "capability", "potency"],
  "Egregious": ["Shocking", "bad", "terrible", "flagrant", "outrageous", "glaring"],
  "Elated": ["Happy", "overjoyed", "thrilled", "delighted", "euphoric", "jubilant"],
  "Elide": ["Omit", "cut", "leave out", "merge", "suppress", "ignore"],
  "Elicits": ["Evoke", "draw out", "extract", "obtain", "provoke", "response"],
  "Elucidate": ["Explain", "clarify", "clear up", "illustrate", "illuminate", "define"],
  "Empirical": ["Observed", "factual", "experimental", "practical", "evidence-based", "real"],
  "Endemic": ["Native", "local", "restricted", "characteristic", "indigenous", "regional"],
  "Enigma": ["Puzzle", "mystery", "riddle", "secret", "confusing", "inexplicable", "mysterious"],
  "Enterprise": ["Business", "venture", "project", "initiative", "undertaking", "company"],
  "Eschew": ["Avoid", "shun", "give up", "abstain", "escape", "refrain"],
  "Esoteric": ["Secret", "obscure", "understood by few", "hidden", "mysterious", "private"],
  "Evinced": ["Showed", "revealed", "demonstrated", "displayed", "proved", "evidence"],
  "Evocation": ["Calling forth", "memory", "feeling", "summon", "produce", "elicit"],
  "Exacerbate": ["Worsen", "aggravate", "intensify", "inflame", "irritate", "provoke"],
  "Exorbitant": ["Excessive", "high", "expensive", "unreasonable", "inflated", "steep", "worse"],
  "Extol": ["Praised", "lauded", "celebrated", "admired", "honored", "acclaimed"],
  "Expedite": ["Speed up", "hasten", "accelerate", "rush", "facilitate", "advance"],
  "Flouted": ["Disregarded", "scorned", "defied", "mocked", "violate", "ignore", "disrespect", "against", "defy"],
  "Forage": ["Search", "hunt", "food", "rummage", "seek", "scavenge"],
  "Fortuitous": ["Lucky", "chance", "accidental", "fortunate", "unexpected", "serendipitous"],
  "Frugal": ["Thrifty", "economical", "saving", "careful", "sparing", "cheap"],
  "Hackneyed": ["Overused", "stale", "cliché", "common", "trite", "banal"],
  "Hapless": ["Unfortunate", "unlucky", "miserable", "woeful", "ill-fated", "cursed", "pity", "bad luck"],
  "Heinous": ["Wicked", "evil", "atrocious", "hateful", "abominable", "monstrous"],
  "Heretical": ["Unorthodox", "dissenting", "radical", "contrary", "blasphemous", "nonconformist"],
  "Homogenization": ["Uniform", "same", "blending", "mixing", "standardizing", "similar"],
  "Illicit": ["Illegal", "forbidden", "unlawful", "banned", "unauthorized", "criminal"],
  "Immaculate": ["Spotless", "perfect", "clean", "pure", "flawless", "neat"],
  "Impetuous": ["Impulsive", "rash", "hasty", "sudden", "reckless", "spontaneous"],
  "Improvised": ["Unplanned", "spontaneous", "invented", "makeshift", "extemporaneous", "concocted", "scripted", "rehearsed"],
  "Incessant": ["Constant", "non-stop", "continuous", "unceasing", "endless", "persistent"],
  "Incidence": ["Rate", "occurrence", "frequency", "event", "instance", "amount"],
  "Incisive": ["Sharp", "keen", "cutting", "acute", "penetrating", "analytical"],
  "Inept": ["Clumsy", "unskilled", "incompetent", "awkward", "useless", "unfit"],
  "Infiltration": ["Penetration", "entry", "access", "sneaking", "invasion", "pervade", "passing", "through"],
  "Innocuous": ["Harmless", "safe", "innocent", "inoffensive", "mild", "bland"],
  "Inoculate": ["Vaccinate", "immunize", "protect", "inoculation", "inject", "prevent"],
  "Insidious": ["Treacherous", "subtle", "harmful", "deceitful", "sneaky", "dangerous"],
  "Insipid": ["Tasteless", "dull", "bland", "boring", "uninteresting", "flat"],
  "Insure": ["Protect", "guarantee", "cover", "secure", "compensate", "policy"],
  "Integrity": ["Honesty", "wholeness", "morality", "unity", "completeness", "ethics"],
  "Intrepid": ["Fearless", "brave", "bold", "adventurous", "courageous", "dauntless"],
  "Intricate": ["Complex", "detailed", "complicated", "elaborate", "entangled", "knotty"],
  "Intrinsic": ["Inherent", "essential", "natural", "built-in", "fundamental", "internal", "naturally"],
  "Inundate": ["Flood", "overwhelm", "swamp", "cover", "overflow", "deluge"],
  "Irate": ["Angry", "furious", "enraged", "mad", "incensed", "provoked"],
  "Labyrinthine": ["Complicated", "maze-like", "twisting", "confusing", "complex", "winding", "labyrinth"],
  "Lament": ["Mourn", "grieve", "regret", "sorrow", "weep", "wail", "grief"],
  "Lauded": ["Praised", "acclaimed", "honored", "admired", "extolled", "celebrated"],
  "Lethargic": ["Sluggish", "tired", "lazy", "slow", "inactive", "sleepy"],
  "Linguistics": ["Language", "study", "structure", "grammar", "speech", "phonetics"],
  "Liquidation": ["Sell off", "close", "convert", "cash", "eliminate", "dissolve"],
  "Lucrative": ["Profitable", "gainful", "moneymaking", "rewarding", "fruitful", "paying"],
  "Magnanimous": ["Generous", "noble", "forgiving", "big-hearted", "benevolent", "high-minded"],
  "Mitigate": ["Lessen", "reduce", "relieve", "soften", "alleviate", "moderate"],
  "Morose": ["Gloomy", "sullen", "sad", "ill-tempered", "depressed", "sour"],
  "Nebulous": ["Vague", "cloudy", "unclear", "hazy", "ill-defined", "shapeless"],
  "Obdurate": ["Stubborn", "unyielding", "hard", "obstinate", "inflexible", "adamant"],
  "Obfuscated": ["Confused", "unclear", "bewildered", "hidden", "obscure", "complicate"],
  "Onerous": ["Burdensome", "heavy", "difficult", "oppressive", "trouble", "taxing"],
  "Panacea": ["Cure-all", "remedy", "solution", "fix", "universal", "elixir"],
  "Penchant": ["Liking", "tendency", "fondness", "taste", "preference", "inclination"],
  "Percolate": ["Filter", "drip", "spread", "penetrate", "seep", "brew"],
  "Perennially": ["Constantly", "year after year", "enduringly", "permanently", "always", "regularly"],
  "Perfunctory": ["Routine", "automatic", "careless", "superficial", "indifferent", "mechanical"],
  "Perpetual": ["Eternal", "constant", "never-ending", "continuous", "permanent", "lasting"],
  "Piety": ["Devotion", "religious", "reverence", "holiness", "faith", "dutifulness"],
  "Phlegmatic": ["Calm", "unemotional", "stoic", "apathetic", "sluggish", "composed", "unexcitable", "tranquil", "tranquility"],
  "Philanthropic": ["Charitable", "generous", "benevolent", "altruistic", "humanitarian", "giving", "donate", "helpful", "compassionate", "kind", "unselfish"],
  "Pivotal": ["Critical", "central", "crucial", "turning point", "essential", "vital"],
  "Postulate": ["Assume", "suggest", "claim", "theory", "propose", "posit"],
  "Precedence": ["Priority", "superiority", "rank", "importance", "preference", "first"],
  "Prejudice": ["Bias", "unfairness", "intolerance", "discrimination", "preconceived judgment", "dislike"],
  "Profound": ["Deep", "intense", "great", "insightful", "significant", "extreme"],
  "Progenitor": ["Ancestor", "founder", "parent", "origin", "forefather", "predecessor"],
  "Proponent": ["Supporter", "advocate", "promoter", "backer", "champion", "defender"],
  "Prudent": ["Wise", "careful", "cautious", "sensible", "practical", "discreet"],
  "Querulous": ["Complaining", "whining", "peevish", "irritable", "grumpy", "fretful"],
  "Rampant": ["Unchecked", "widespread", "uncontrolled", "flourishing", "violent", "spreading"],
  "Rancor": ["Bitterness", "hatred", "resentment", "malice", "spite", "hostility"],
  "Reclusive": ["Isolated", "withdrawn", "solitary", "hermit", "secluded", "antisocial"],
  "Relegate": ["Downgrade", "demote", "assign", "banish", "lower", "transfer"],
  "Relinquish": ["Give up", "abandon", "surrender", "release", "yield", "resign"],
  "Reticent": ["Quiet", "reserved", "silent", "shy", "uncommunicative", "secretive"],
  "Riveting": ["Fascinating", "gripping", "absorbing", "compelling", "engrossing", "exciting"],
  "Rudimentary": ["Basic", "elementary", "primitive", "simple", "undeveloped", "fundamental"],
  "Sobriety": ["Serious", "sober", "temperance", "clearness", "solemnity", "abstinence"],
  "Sparse": ["Scanty", "scattered", "meager", "dispersed", "thin", "few"],
  "Spurious": ["Fake", "false", "counterfeit", "bogus", "invalid", "phony"],
  "Squander": ["Waste", "misuse", "spend", "dissipate", "throw away", "lavish"],
  "Stagnant": ["Still", "motionless", "foul", "inactive", "standing", "sluggish"],
  "Superfluous": ["Unnecessary", "extra", "surplus", "excessive", "redundant", "spare"],
  "Supplemental": ["Additional", "extra", "added", "auxiliary", "supporting", "complementary"],
  "Symbiotic": ["Mutually beneficial", "cooperative", "interdependent", "relationship", "shared", "joint"],
  "Synopsis": ["Summary", "outline", "overview", "abstract", "digest", "review"],
  "Tacitly": ["Silently", "implicitly", "understood", "unspoken", "agreed", "hinted"],
  "Tangible": ["Touchable", "real", "concrete", "physical", "palpable", "substantial", "can be touched", "can be felt"],
  "Tapestry": ["Fabric", "complex", "weaving", "design", "pattern", "textile"],
  "Taxing": ["Demanding", "difficult", "exhausting", "burdensome", "tiring", "stressful"],
  "Tenacity": ["Persistence", "determination", "grip", "strength", "stubbornness", "resolve"],
  "Terse": ["Brief", "short", "abrupt", "concise", "curt", "snappy"],
  "Tirade": ["Rant", "diatribe", "outburst", "harangue", "lecture", "ranting", "loud", "angry", "speech"],
  "Toil": ["Work", "labor", "struggle", "effort", "exhaust", "drudgery"],
  "Travesty": ["Mockery", "parody", "distortion", "caricature", "farce", "absurdity", "distortion", "mock", "ridicule", "false"],
  "Turpitude": ["Wickedness", "depravity", "corruption", "evil", "vile", "immorality"],
  "Ubiquitously": ["Everywhere", "universally", "commonly", "omnipresently", "all over", "widespread", "common"],
  "Ultimatum": ["Demand", "final", "threat", "condition", "warning", "last offer"],
  "Unionize": ["Organize", "join", "labor", "association", "workers", "collective"],
  "Unpretentious": ["Modest", "simple", "humble", "plain", "natural", "genuine"],
  "Untrammeled": ["Unrestricted", "free", "unhampered", "loose", "unconfined", "unhindered"],
  "Vacillate": ["Waver", "hesitate", "fluctuate", "oscillate", "indecisive", "sway"],
  "Venerate": ["Respect", "worship", "revere", "honor", "admire", "esteem"],
  "Vexing": ["Annoying", "irritating", "troubling", "worrying", "disturbing", "bothersome", "annoy"],
  "Vilify": ["Attack", "abuse", "slander", "malign", "defame", "criticize"],
  "Vindicate": ["Clear", "justify", "defend", "acquit", "prove right", "absolve"],
  "Visage": ["Face", "appearance", "countenance", "look", "expression", "features"],
  "Vociferous": ["Loud", "noisy", "vocal", "shouting", "clamorous", "outspoken"],
  "Volatile": ["Unstable", "explosive", "changeable", "unpredictable", "evaporative", "erratic"],
  "Zenith": ["Peak", "top", "summit", "height", "pinnacle", "climax"],
  "Zephyr": ["Breeze", "wind", "gentle", "soft", "light", "air", "Cotton", "small", "lightweight", "soft fabric", "clothing"]
};

var NO = document.getElementById('WRONG');
var RIGHT = document.getElementById('GOOD');


// MOBILE SUPPORT
document.addEventListener("click", function (e) {
  // Don't trigger if user clicked the input box
  if (e.target.id === "guess") return;
  getNewWord();
});


function fade(element) {
    element.classList.remove("hide");
    element.classList.add("show");
    setTimeout(() => {
        element.classList.remove("show");
        element.classList.add("hide");
        setTimeout(() => {
            if (!element.classList.contains("show")) {
                element.style.display = "none";
            }
        }, 500); // match CSS fade-out speed

    }, 300); // how long it stays fully visible
}



    const guessInput = document.getElementById("guess");
    const placeholder = document.getElementById("placeholder");

    if (!guessInput || !placeholder) {
      console.error("Missing DOM elements: #guess or #placeholder not found.");
      return; 
    }

    let currentWord = "";

    function incorrectAudio() {
      incorrectSound.currentTime = 0;
      incorrectSound.play().catch(e => console.warn("Audio play suppressed:", e));
    }
    function incorrectAudio2() {
      incorrectSound2.currentTime = 0;
      incorrectSound2.play().catch(e => console.warn("Audio play suppressed:", e));
    }
    function correctAudio2() {
      correctSound2.currentTime = 0;
      correctSound2.play().catch(e => console.warn("Audio play suppressed:", e));
    }
    function correctAudio() {
      correctSound.currentTime = 0;
      correctSound.play().catch(e => console.warn("Audio play suppressed:", e));
    }

    function getNewWord() {
      if (!Array.isArray(words) || words.length === 0) {
        console.error("words array is empty or missing.");
        return;
      }
      currentWord = words[Math.floor(Math.random() * words.length)];
      placeholder.textContent = currentWord;
      console.log('New word:', currentWord);
    }

    window.getNewWord = getNewWord;

    document.addEventListener('keydown', function(event) {
      if (event.code === 'Enter') {
        event.preventDefault();
        const userInput = guessInput.value.trim().toLowerCase();
        if (!userInput) {
          alert("TYPE A LETTER BRO");
          return;
        }
        if (!currentWord) {
          alert("press space to enter a word");
          guessInput.value = "";
          return;
        }

        console.log('Input logged', userInput);

        const keywordsForWord = wordKeywords[currentWord];
        if (!Array.isArray(keywordsForWord)) {
          console.warn("No keywords for", currentWord);
          incorrectAudio();

          guessInput.value = "";
          return;
        }

        // match ignoring case and allowing words/phrases
        const user = userInput.toLowerCase();
        const isCorrect = keywordsForWord.some(k =>
            user.includes(k.toLowerCase())
        );
        if (isCorrect) {
  const chance2 = Math.random();
  
  // 30% chance to play the ANIME AHH sound
  if (chance2 < 0.3) {
    correctAudio2();  
} else {
    correctAudio(); 
}

  RIGHT.style.opacity = 1;
  RIGHT.style.display = 'block';
  fade(RIGHT);
  getNewWord();
} else {
  const chance = Math.random();

  // 30% chance of vine boom, 40% OF FAHHHH!
  if (chance < 0.3) {
    incorrectAudio2();
  } else {
    incorrectAudio();
  }

  NO.style.opacity = 1;
  NO.style.display = 'block';
  fade(NO);
}

        guessInput.value = "";
      }

     if (event.code === 'Space') {
        if (event.target !== guessInput) {
          event.preventDefault();
          console.log('Spacebar pressed (not in input)');
          getNewWord();
        }
      }
    });
  } catch (err) {
    console.error("Script initialization error:", err);
  }
});
