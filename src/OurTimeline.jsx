import React from "react";
import { motion } from "framer-motion";

// -----------------------------------------
// TIMELINE DATA (your full story here)
// -----------------------------------------
const timeline = [
  {
    title: "✨ Kahani Do Dilon Ki ✨",
    text: `Kahani do dilo ki… Aaj date hai 22 November 2025.

Kuch saal pehle do bilkul ajnabi log mile the…
Pehle baatein bilkul normal thi, phir dheere-dheere dosti hui…

Ek din achanak ladki ko ek message aaya—
"I love you."

Ye ladki ke liye sochne wali baat thi…
Jo ladka apni Instagram ID tak nahi deta tha,
wo aaj itni badi baat kaise bol raha hai?

Isliye ladki ne use mazaak samajh kar ignore kar diya.
Lekin kuch din baad, woh baat phir se aayi…

Dono ne milne ka socha.
Ladki ne decide kiya tha—
‘Jo bhi ho, main haan nahi bolungi.’

Par kehte hain na…
Jo socha jata hai, zaroori nahi woh hi ho.

Irada kuch aur tha, ho kuch aur gaya…
Jab ladki usse mili, usne ‘haan’ bol diya.`,
  },

  {
    title: "🌸 The Beginning – 23 Dec 2022",
    text: `23 Dec 2022 — ek bohot hi khas tareekh.

Uss din se ek khoobsurat rishte ki shuruaat hui.
Dono ke liye yeh ek naya safar tha…

Kisi ko nahi pata tha yeh rishta kab tak chalega,
but dono ne decide kiya tha —
“Jab tak ho sake… saath rahenge.”

Par iss rishte ki ek limit thi — shaadi nahi ho sakti thi.

Fir bhi… rista poore dil se shuru hua.`,
  },

  {
    title: "💔 Dooriyan & Confusion",
    text: `Kuch mahino tak sab bohot accha chalta raha.

Phir ek din… ladke ne baatein kam kar di.
Ladki attach ho chuki thi… use yeh rista chahiye tha.

Ek din usne ladke ko milne bulaya aur bola:

“Relation start kiya hai to nibhana bhi hai.
Aage kya hoga, uske dar se abhi kyun todna?
Jab alag hone ka time aayega,
tab bhi hum haste hue yaadein le kar alag ho jayenge.” 

Ladka samajh gaya.
Rista phir se normal hua.`,
  },

  {
    title: "💔 The Painful Break – Dec 2023",
    text: `Jab relation ko ek saal hone wala tha…
achanak ladke ne messages band kar diye.

Ladki ne WhatsApp, Insta — sab try kiya.
Par har jagah block…

22 Dec 2023 ko ladki ne friend ke phone se call kiya.
Usne bola — "Kal milna."

23 Dec 2023 — poora din ladki wait karti rahi.
Par ladka nahi aaya…

Jo sapne kuch hope se dekhe the… toot gaye.`,
  },

  {
    title: "💌 Message After 2 Months",
    text: `26 Nov se 24 Jan tak — 2 mahine tak baatein bilkul band thi.

24 Jan 2024 ko ladke ka message aaya — “Milna hai.”

Ladki seedha chhat par milne aayi.

Reason pata chala —
Ladke ki life me problems chal rahi thi…
Isliye usne messages band kar diye the.

Dono roye… dono samjhe…
Aur phir rista wapas normal hua.`,
  },

  {
    title: "🌆 Distance But Stronger – 2024",
    text: `Ladki studies ke liye dusre sheher chali gayi.
Dono dur ho gaye,
but dil aur pass aa gaye.

Messages → Calls → Daily baatein  
Dono ek dusre ki aadat ban gaye.

Ek din ladka ladki se milne uske sheher gaya.
3 din saath rahe…
bohot sari yaadein banayi.`,
  },

  {
    title: "❤️ 2 Years Completed – 23 Dec 2024",
    text: `Relation ko 2 saal pure hue…
Par long distance ke wajah se celebrate nahi kar paye.

Fir bhi rista strong hi raha.`,
  },

  {
    title: "💞 Today – 22 Nov 2025",
    text: `Bas kuch din baad — 3 saal pure hone wale hai.

Ye 3 saal…
pyaar, takraar, yaadein, muskurahat,
aur samajhne ka safar tha.

Dono ek dusre ke bohot kareeb aa gaye hai.

Bas ek dar hai —
Iss rishte ki limit ka…

Par ab alag hona mushkil bhi hai,
zaroori bhi nahi lagta.

Ye kahani thi do ajnabi ki…
jo ab ek dusre ki jaan ban chuke hain.`,
  }
];

// -------------------------------------------------------
// MAIN APP
// -------------------------------------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300 text-gray-900 font-sans overflow-x-hidden">

      {/* Floating Hearts Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [-20, -200 - i * 10] }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute text-rose-400 text-3xl"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* HERO */}
   

      {/* TIMELINE */}
      <section id="story" className="py-24 px-6 bg-white text-gray-900 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-center text-rose-700 mb-16"
          >
            Our Timeline
          </motion.h2>

          <div className="relative border-l-4 border-rose-400 ml-6 space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="ml-10 bg-rose-50 p-6 rounded-2xl shadow-xl border border-rose-200 hover:scale-[1.02] transition-transform duration-300"
              >
                <h3 className="text-3xl font-semibold text-rose-700">{item.title}</h3>

                {item.text.split(/\n\s*\n/).map((para, pIdx) => (
                  <p key={pIdx} className="text-lg mt-3 leading-relaxed text-gray-800">
                    {para.trim()}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
