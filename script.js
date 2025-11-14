document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    console.log('Spacebar pressed!');
    
    let randomWord = words[Math.floor(Math.random() * words.length)];

    let keywordsForWord = wordKeywords[randomWord];

    let userInput = window.prompt(randomWord);
    if (!userInput) return;

    let lower = userInput.trim().toLowerCase();

    let isCorrect = keywordsForWord.some(k => {
      let pattern = new RegExp(`\\b${k.toLowerCase()}\\b`);
      return pattern.test(lower);
    });

    event.preventDefault();

    if (isCorrect) {
      correctAudio();
      alert("correct, you smart nigger");
    } else {
      incorrectAudio();
      alert("wrong you stupid nigger");
    }
  }
});

// plays when user gets word incorrect or correct
function incorrectAudio() {
      const audio = new Audio('https://od.lk/s/NzJfNDc5NzIwNjNf/Fahh%20Sound%20Effect.mp3');
      audio.play();
    }
function incorrectAudio2() {
      const audio = new Audio('https://od.lk/s/NzJfNDc5NzIwNzFf/Vine%20boom%20sound%20effect.mp3');
      audio.play();
    }
function correctAudio() {
      const audio = new Audio('https://od.lk/s/NzJfNDc5NzIwNzBf/Wow%20sound%20effect.mp3');
      audio.play();  
    }

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
  "Lethargic","Postulate"
];

const wordKeywords = {
  "Assets": ["Property", "possessions", "value", "resource", "advantage", "wealth", "benefits"],
  "Elicits": ["Evoke", "draw out", "extract", "obtain", "provoke", "response"],
  "Illicit": ["Illegal", "forbidden", "unlawful", "banned", "unauthorized", "criminal"],
  "Assertive": ["Confident", "forceful", "decisive", "bold", "positive", "self-assured"],
  "Dichotomy": ["Division", "contrast", "split", "separation", "two parts", "difference"],
  "Prejudice": ["Bias", "unfairness", "intolerance", "discrimination", "preconceived judgment", "dislike"],
  "Deliberate": ["Intentional", "planned", "careful", "thoughtful", "calculated", "purposeful"],
  "Deplete": ["Exhaust", "empty", "reduce", "drain", "consume", "use up"],
  "Tapestry": ["Fabric", "complex", "weaving", "design", "pattern", "textile"],
  "Abstract": ["Theoretical", "conceptual", "non-concrete", "summary", "idea", "vague"],
  "Endemic": ["Native", "local", "restricted", "characteristic", "indigenous", "regional"],
  "Sparse": ["Scanty", "scattered", "meager", "dispersed", "thin", "few"],
  "Immaculate": ["Spotless", "perfect", "clean", "pure", "flawless", "neat"],
  "Intricate": ["Complex", "detailed", "complicated", "elaborate", "entangled", "knotty"],
  "Broad": ["Wide", "large", "general", "vast", "extensive", "open"],
  "Tangible": ["Touchable", "real", "concrete", "physical", "palpable", "substantial"],
  "Linguistics": ["Language", "study", "structure", "grammar", "speech", "phonetics"],
  "Diligent": ["Hardworking", "careful", "thorough", "persistent", "assiduous", "industrious"],
  "Desecration": ["Violation", "disrespect", "profanity", "ruin", "sacrilege", "blasphemy"],
  "Rampant": ["Unchecked", "widespread", "uncontrolled", "flourishing", "violent", "spreading"],
  "Unionize": ["Organize", "join", "labor", "association", "workers", "collective"],
  "Untrammeled": ["Unrestricted", "free", "unhampered", "loose", "unconfined", "unhindered"],
  "Tacitly": ["Silently", "implicitly", "understood", "unspoken", "agreed", "hinted"],
  "Perpetual": ["Eternal", "constant", "never-ending", "continuous", "permanent", "lasting"],
  "Relinquish": ["Give up", "abandon", "surrender", "release", "yield", "resign"],
  "Obfuscated": ["Confused", "unclear", "bewildered", "hidden", "obscure", "complicate"],
  "Flouted": ["Disregarded", "scorned", "defied", "mocked", "violated", "ignored"],
  "Belie": ["Contradict", "disguise", "misrepresent", "false", "hide", "negate"],
  "Squander": ["Waste", "misuse", "spend", "dissipate", "throw away", "lavish"],
  "Ameliorate": ["Improve", "better", "help", "enhance", "relieve", "alleviate"],
  "Boorish": ["Rude", "rough", "insensitive", "bad-mannered", "coarse", "uncouth"],
  "Intrepid": ["Fearless", "brave", "bold", "adventurous", "courageous", "dauntless"],
  "Insidious": ["Treacherous", "subtle", "harmful", "deceitful", "sneaky", "dangerous"],
  "Cascade": ["Waterfall", "pour", "flow", "series", "succession", "tumble"],
  "Authentic": ["Real", "genuine", "true", "original", "valid", "actual"],
  "Amnesty": ["Pardon", "forgiveness", "immunity", "reprieve", "release", "absolution"],
  "Synopsis": ["Summary", "outline", "overview", "abstract", "digest", "review"],
  "Integrity": ["Honesty", "wholeness", "morality", "unity", "completeness", "ethics"],
  "Insure": ["Protect", "guarantee", "cover", "secure", "compensate", "policy"],
  "Derived": ["Obtained", "originating", "sourced", "drawn", "extracted", "traced"],
  "Toil": ["Work", "labor", "struggle", "effort", "exhaust", "drudgery"],
  "Supplemental": ["Additional", "extra", "added", "auxiliary", "supporting", "complementary"],
  "Detrimental": ["Harmful", "damaging", "injurious", "negative", "hurtful", "destructive"],
  "Calamitous": ["Disastrous", "catastrophic", "tragic", "devastating", "ruinous", "fatal"],
  "Improvised": ["Unplanned", "spontaneous", "invented", "makeshift", "extemporaneous", "concocted"],
  "Riveting": ["Fascinating", "gripping", "absorbing", "compelling", "engrossing", "exciting"],
  "Enterprise": ["Business", "venture", "project", "initiative", "undertaking", "company"],
  "Taxing": ["Demanding", "difficult", "exhausting", "burdensome", "tiring", "stressful"],
  "Infiltration": ["Penetration", "entry", "access", "sneaking", "invasion", "pervade"],
  "Convoluted": ["Complicated", "twisted", "complex", "intricate", "involved", "tangled"],
  "Elucidate": ["Explain", "clarify", "clear up", "illustrate", "illuminate", "define"],
  "Pivotal": ["Critical", "central", "crucial", "turning point", "essential", "vital"],
  "Liquidation": ["Sell off", "close", "convert", "cash", "eliminate", "dissolve"],
  "Superfluous": ["Unnecessary", "extra", "surplus", "excessive", "redundant", "spare"],
  "Magnanimous": ["Generous", "noble", "forgiving", "big-hearted", "benevolent", "high-minded"],
  "Volatile": ["Unstable", "explosive", "changeable", "unpredictable", "evaporative", "erratic"],
  "Forage": ["Search", "hunt", "food", "rummage", "seek", "scavenge"],
  "Anthology": ["Collection", "compilation", "selection", "treasury", "digest", "literary"],
  "Panacea": ["Cure-all", "remedy", "solution", "fix", "universal", "elixir"],
  "Anthropology": ["Humans", "culture", "society", "study", "development", "mankind"],
  "Catalog": ["List", "record", "register", "inventory", "classify", "organize"],
  "Visage": ["Face", "appearance", "countenance", "look", "expression", "features"],
  "Denounce": ["Condemn", "criticize", "accuse", "blame", "censure", "declare"],
  "Lament": ["Mourn", "grieve", "regret", "sorrow", "weep", "wail"],
  "Dogmatic": ["Opinionated", "rigid", "assertive", "doctrinal", "inflexible", "absolute", "opinion"],
  "Unpretentious": ["Modest", "simple", "humble", "plain", "natural", "genuine"],
  "Ambiguous": ["Unclear", "vague", "open", "double meaning", "uncertain", "obscure", "mixed feelings"],
  "Intrinsic": ["Inherent", "essential", "natural", "built-in", "fundamental", "internal"],
  "Elated": ["Happy", "overjoyed", "thrilled", "delighted", "euphoric", "jubilant"],
  "Venerate": ["Respect", "worship", "revere", "honor", "admire", "esteem"],
  "Decadence": ["Decline", "decay", "corruption", "self-indulgence", "deterioration", "excess"],
  "Efficacy": ["Effectiveness", "power", "ability", "success", "capability", "potency"],
  "Sobriety": ["Serious", "sober", "temperance", "clearness", "solemnity", "abstinence"],
  "Tenacity": ["Persistence", "determination", "grip", "strength", "stubbornness", "resolve"],
  "Conceivable": ["Possible", "imaginable", "believable", "thinkable", "credible", "plausible"],
  "Ultimatum": ["Demand", "final", "threat", "condition", "warning", "last offer"],
  "Homogenization": ["Uniform", "same", "blending", "mixing", "standardizing", "similar"],
  "Progenitor": ["Ancestor", "founder", "parent", "origin", "forefather", "predecessor"],
  "Empirical": ["Observed", "factual", "experimental", "practical", "evidence-based", "real"],
  "Prudent": ["Wise", "careful", "cautious", "sensible", "practical", "discreet"],
  "Evocation": ["Calling forth", "memory", "feeling", "summon", "produce", "elicit"],
  "Dirge": ["Song", "mournful", "funeral", "sad", "lament", "hymn"],
  "Eschew": ["Avoid", "shun", "give up", "abstain", "escape", "refrain"],
  "Heretical": ["Unorthodox", "dissenting", "radical", "contrary", "blasphemous", "nonconformist"],
  "Abdicate": ["Resign", "give up", "renounce", "step down", "surrender", "quit"],
  "Destitute": ["Poor", "impoverished", "lacking", "needy", "penniless", "indigent"],
  "Lucrative": ["Profitable", "gainful", "moneymaking", "rewarding", "fruitful", "paying"],
  "Exorbitant": ["Excessive", "high", "expensive", "unreasonable", "inflated", "steep"],
  "Exacerbate": ["Worsen", "aggravate", "intensify", "inflame", "irritate", "provoke"],
  "Anachronistic": ["Outdated", "old-fashioned", "misplaced", "wrong time", "obsolete", "antique"],
  "Lauded": ["Praised", "acclaimed", "honored", "admired", "extolled", "celebrated"],
  "Morose": ["Gloomy", "sullen", "sad", "ill-tempered", "depressed", "sour"],
  "Precedence": ["Priority", "superiority", "rank", "importance", "preference", "first"],
  "Profound": ["Deep", "intense", "great", "insightful", "significant", "extreme"],
  "Heinous": ["Wicked", "evil", "atrocious", "hateful", "abominable", "monstrous"],
  "Proponent": ["Supporter", "advocate", "promoter", "backer", "champion", "defender"],
  "Perennially": ["Constantly", "year after year", "enduringly", "permanently", "always", "regularly"],
  "Ubiquitously": ["Everywhere", "universally", "commonly", "omnipresently", "all over", "widespread"],
  "Incidence": ["Rate", "occurrence", "frequency", "event", "instance", "amount"],
  "Symbiotic": ["Mutually beneficial", "cooperative", "interdependent", "relationship", "shared", "joint"],
  "Nebulous": ["Vague", "cloudy", "unclear", "hazy", "ill-defined", "shapeless"],
  "Arduous": ["Difficult", "hard", "strenuous", "tiring", "laborious", "exhausting"],
  "Cacophony": ["Noise", "discord", "harshness", "racket", "din", "clamor"],
  "Collude": ["Conspire", "plot", "scheme", "cooperate", "secret", "deceit"],
  "Expedite": ["Speed up", "hasten", "accelerate", "rush", "facilitate", "advance"],
  "Incisive": ["Sharp", "keen", "cutting", "acute", "penetrating", "analytical"],
  "Mitigate": ["Lessen", "reduce", "relieve", "soften", "alleviate", "moderate"],
  "Hackneyed": ["Overused", "stale", "cliché", "common", "trite", "banal"],
  "Rancor": ["Bitterness", "hatred", "resentment", "malice", "spite", "hostility"],
  "Obdurate": ["Stubborn", "unyielding", "hard", "obstinate", "inflexible", "adamant"],
  "Penchant": ["Liking", "tendency", "fondness", "taste", "preference", "inclination"],
  "Relegate": ["Downgrade", "demote", "assign", "banish", "lower", "transfer"],
  "Zenith": ["Peak", "top", "summit", "height", "pinnacle", "climax"],
  "Affable": ["Friendly", "pleasant", "easygoing", "approachable", "sociable", "amiable"],
  "Onerous": ["Burdensome", "heavy", "difficult", "oppressive", "trouble", "taxing"],
  "Enigma": ["Puzzle", "mystery", "riddle", "secret", "confusing", "inexplicable"],
  "Belligerent": ["Hostile", "aggressive", "warlike", "combative", "fighting", "threatening"],
  "Reclusive": ["Isolated", "withdrawn", "solitary", "hermit", "secluded", "antisocial"],
  "Piety": ["Devotion", "religious", "reverence", "holiness", "faith", "dutifulness"],
  "Querulous": ["Complaining", "whining", "peevish", "irritable", "grumpy", "fretful"],
  "Vacillate": ["Waver", "hesitate", "fluctuate", "oscillate", "indecisive", "sway"],
  "Vindicate": ["Clear", "justify", "defend", "acquit", "prove right", "absolve"],
  "Altruistic": ["Selfless", "unselfish", "kind", "charitable", "generous", "humane"],
  "Ambivalent": ["Uncertain", "mixed feelings", "undecided", "conflicting", "doubtful", "wavering"],
  "Vociferous": ["Loud", "noisy", "vocal", "shouting", "clamorous", "outspoken"],
  "Corroborate": ["Confirm", "verify", "support", "prove", "validate", "authenticate"],
  "Dispel": ["Drive away", "scatter", "eliminate", "banish", "disperse", "resolve"],
  "Percolate": ["Filter", "drip", "spread", "penetrate", "seep", "brew"],
  "Aggregate": ["Total", "combined", "collection", "sum", "whole", "mass"],
  "Rudimentary": ["Basic", "elementary", "primitive", "simple", "undeveloped", "fundamental"],
  "Vexing": ["Annoying", "irritating", "troubling", "worrying", "disturbing", "bothersome"],
  "Candor": ["Honesty", "frankness", "openness", "truthfulness", "sincerity", "directness"],
  "Apathy": ["Indifference", "lack of interest", "unconcern", "emotionless", "listlessness", "numbness"],
  "Terse": ["Brief", "short", "abrupt", "concise", "curt", "snappy"],
  "Dearth": ["Scarcity", "lack", "shortage", "absence", "deficiency", "famine"],
  "Stagnant": ["Still", "motionless", "foul", "inactive", "standing", "sluggish"],
  "Abridge": ["Shorten", "condense", "cut", "abbreviate", "reduce", "summary"],
  "Irate": ["Angry", "furious", "enraged", "mad", "incensed", "provoked"],
  "Inundate": ["Flood", "overwhelm", "swamp", "cover", "overflow", "deluge"],
  "Insipid": ["Tasteless", "dull", "bland", "boring", "uninteresting", "flat"],
  "Frugal": ["Thrifty", "economical", "saving", "careful", "sparing", "cheap"],
  "Impetuous": ["Impulsive", "rash", "hasty", "sudden", "reckless", "spontaneous"],
  "Esoteric": ["Secret", "obscure", "understood by few", "hidden", "mysterious", "private"],
  "Eclectic": ["Diverse", "varied", "broad", "mixed", "wide-ranging", "assorted"],
  "Egregious": ["Shocking", "bad", "terrible", "flagrant", "outrageous", "glaring"],
  "Convergence": ["Meeting", "joining", "merging", "union", "coming together", "junction"],
  "Turpitude": ["Wickedness", "depravity", "corruption", "evil", "vile", "immorality"],
  "Elide": ["Omit", "cut", "leave out", "merge", "suppress", "ignore"],
  "Evinced": ["Showed", "revealed", "demonstrated", "displayed", "proved", "evidence"],
  "Innocuous": ["Harmless", "safe", "innocent", "inoffensive", "mild", "bland"],
  "Labyrinthine": ["Complicated", "maze-like", "twisting", "confusing", "complex", "winding", "labyrinth"],
  "Spurious": ["Fake", "false", "counterfeit", "bogus", "invalid", "phony"],
  "Dissonance": ["Discord", "clash", "conflict", "noise", "lack of harmony", "disagreement"],
  "Perfunctory": ["Routine", "automatic", "careless", "superficial", "indifferent", "mechanical"],
  "Incessant": ["Constant", "non-stop", "continuous", "unceasing", "endless", "persistent"],
  "Aspire": ["Aim", "hope", "desire", "seek", "ambition", "goal"],
  "Vilify": ["Attack", "abuse", "slander", "malign", "defame", "criticize"],
  "Reticent": ["Quiet", "reserved", "silent", "shy", "uncommunicative", "secretive"],
  "Inept": ["Clumsy", "unskilled", "incompetent", "awkward", "useless", "unfit"],
  "Fortuitous": ["Lucky", "chance", "accidental", "fortunate", "unexpected", "serendipitous"],
  "Lethargic": ["Sluggish", "tired", "lazy", "slow", "inactive", "sleepy"],
  "Postulate": ["Assume", "suggest", "claim", "theory", "propose", "posit"]
};






