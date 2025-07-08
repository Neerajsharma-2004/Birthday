import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HTMLFlipBook from 'react-pageflip';
import './poems.css';
import { image, text, title } from 'framer-motion/client';

const poems = [
  {
    title: 'To Chiku, With Love',
    image:'/assets/cover.png'
  },
  { image: '/assets/1.png' },
  {
    title: 'The reason I glow',
    text: `The moon once asked 
what made me shine
i said it’s ur soul entangled in mine
u are the light my shadows knew
the reason night feels softer too
my glow is just a trace of u`,
  },
  { image: '/assets/2.png' },
  {
    title: 'Fated to Breathe You',
    text: `I wasn't made 
to chase the sky
but just to breathe u passing by
a hush u leave in fading light
where golden hours feel just right
and saying ur name 
keeps me alive`,
  },
  { image: '/assets/3.png' },
  {
    title: 'In the Quiet Where Your Name Blooms',
    text: `In silence ur name begins to bloom
like starlight filling up my room
a golden hush that wraps me tight
the reason even dark feels right
my heart still moves
in ur moonlight`,
  },
  { image: '/assets/4.png' },
  {
    title: 'Moonlight Learns Your Name',
    text: `Moonlight drapes itself in ur glow
golden hour follows 
wherever u go
roses blush just thinking of u
stars rehearse their shine anew
my heart finds home in all u show`,
  },
  { image: '/assets/5.png' },
  {
    title: 'The Softness Spring Forgot',
    text: `U walk like petals 
the wind once knew
a hush of lavender trailing through
the cold forgets it ever stayed
wherever ur warmth
has gently swayed
even spring feels late without u`,
  },
  { image: '/assets/6.png' },
  {
    title: 'Fireflies’ Light',
    text: `Even fireflies pause mid-flight
mistaking ur grace
for borrowed light
u move like dusk 
the woods adore
a hush that every 
breeze longs for
and i, just still, needing u more

`,
  },
  { image: '/assets/7.png' },
  {
    title: 'Even Rain Falls Like You',
    text: `The rain once stumbled till it saw u
how softly u move 
how gently u do
now every drop mimics ur grace
tracing the calm 
that lives in ur face
even storms seem tender in ur view`,
  },
  { image: '/assets/8.png' },
  {
    title: 'Petals Which Touched You',
    text: `The wind feels sweeter 
wherever u've been
carrying petals soft as ur skin
each bloom bends 
just to brush ur trace
as if the world still craves ur grace
and i breathe slow 
in that sacred place`,
  },
  { image: '/assets/9.png' },
  {
    title: 'The Moon’s Yearning',
    text: `The moon still waits 
where u once stood
its light unsure if it ever could
outshine the hush u left behind
a quiet no stars ever find
just echoes shaped in ur design`,
  },
  { image: '/assets/10.png' },
  {
    title: 'The Sunflowers ',
    text: `Sunflowers once watched
only the sun
but turned to u when 
ur walk begun
ur laughter stitched 
in fields of gold
a warmth too rare 
for hands to hold`,
  },
  { image: '/assets/11.png' },
  {
    title: 'Restless Dreams',
    text: `I close my eyes 
but could never sleep
ur voice runs quiet soft and deep
each dream becomes 
a place u stay
where time forgets 
to drift away
and even sleep feels wide awake`,
  },
  { image: '/assets/12.png' },
  {
    title: 'Setting the Table ',
    text: `My heart keeps laying 
    places for two
folds napkins in the shape of u
pours tea into cups that never cool
as if love obeys no rule
just waits like a fool 
dressed in truth`,
  },
  { image: '/assets/13.png' },
  {
    title: 'Mirror’s Futile Attempts ',
    text: `Every mirror bends its light
trying to hold 
ur face just right
but none can echo what i see
the quiet fire u are to me
a beauty too soft 
for glass to keep`,
  },
  { image: '/assets/14.png' },
  {
    title: 'The Pause Btwn Breaths',
    text: `U live in the hush 
    my lungs forget
a pause where love 
and ache have met
not the breath but all between
the softest space where i have been
forever caught in what u mean`,
  },
  { image: '/assets/15.png' },
  {
    title: 'Flowers Blooming Late',
    text: `The garden waited past its time
held back its bloom 
to match ur rhyme
tulips sighed and roses knew
they'd never bloom as bright as u
so they opened slow 
just passing through`,
  },
  { image: '/assets/16.png' },
  {
    title: 'You Walk Like Time Forgot to Count',
    text: `U move like seconds cease to be
a rhythm lost in poetry
even clocks slow down their pace
just to memorize ur grace
as if u rewrote time with ease`,
  },
  { image: '/assets/17.png' },
  {
    title: 'Making Even Sky Blush',
    text: `The sky turned pink 
when u walked by
a soft surprise across the sky
clouds stilled just to take u in
as if the day knew where to begin
with u the color beneath its skin`,
  },
  { image: '/assets/18.png' },
  {
    title: 'You soften the Earth’s breath',
    text: `The earth holds breath 
beneath ur feet
each step u take 
makes silence sweet
even stones feel something bloom
as if ur presence shifts the room
and roots rise up just for ur heat`,
  },
  { image: '/assets/19.png' },
  {
    title: 'Shadows You Attract',
    text: `Even my shadows turn ur way
drawn to where ur soft lights stay
they stretch like hands
that long to feel
a warmth too distant yet too real
chasing the glow 
they know won't stay`,
  },
  { image: '/assets/20.png' },
  {
    title: 'Every poem aches for your line',
    text: `Every poem i write stops mid-air
as if it knows u should be there
the ink holds back like it's afraid
to touch the shape 
ur soul has made
u are the light behind every shade`,
  },
  { image: '/assets/21.png' },
  {
    title: 'The Storm My Heart Chose',
    text: `U came like rain
that knew its place
wild and soft upon my face
and though u left 
with skies turned grey
i'd still choose u every day
even if the sun won’t stay`,
  },
  { image: '/assets/22.png' },
  {
    title: 'The Silence Even Music Fears',
    text: `U walk in hush 
no song can chase
a quiet wrapped in endless grace
even violins forget their tune
when u breathe beneath the moon
like silence carved its sacred place`,
  },
  { image: '/assets/23.png' },
  {
    title: 'Let Me Die Drenched in Your Colors',
    text: `Let me fade where ur colors start
bleed ur hues into my heart
paint me in the way u feel
soft then wild then nothing real
till not a trace of me is apart`,
  },
  { image: '/assets/24.png' },
  {
    title: 'The Ache I Named After You',
    text: `U were the ache 
my bones grew around
a quiet that screamed
without any sound
i held u like a half-formed prayer
afraid to speak and lose u there
yet aching more 
when u weren’t found

I gave u the parts i never knew
the ones stitched tight and black and blue
not to fix but just to feel
what hurt like hell but still was real
and god i bled just to love u true`,
  },
  {
    title:'THE END',
    text:'Hey Chiku So these were some of the poems I made on the occasion of your birthday. I hope you loved them, and sorry for not being able to send you one daily for so long, anyways love ya, dear husband!        ‎                                                  ‎                          ‎                            ‎                                        ‎                ‎       ‎                                                       ‎                              ‎         ‎ ‎                                                      ‎                                       ...Malewife <3',
    isBackCover: true,
  }
];

export default function Poems() {
  const bookRef = useRef();
  const [scale, setScale] = useState(1);
  const navigate = useNavigate();

  // Resize listener to scale book for smaller screens
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const maxBookWidth = 700; // base width for 2-page spread
      const padding = 40; // total left+right
      const availableWidth = screenWidth - padding;

      const newScale = availableWidth < maxBookWidth
        ? availableWidth / maxBookWidth
        : 1;

      setScale(newScale);
    };

    handleResize(); // initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="starry-bg">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          className="firefly"
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <div className="book-scale-wrapper" style={{ transform: `scale(${scale})` }}>
        <HTMLFlipBook
          width={350}
          height={500}
          minWidth={300}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1200}
          size="fixed"
          drawShadow={true}
          showCover={true}
          usePortrait={false}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          className="poetry-book"
          ref={bookRef}
        >
          {poems.map((poem, idx) => (
            <div className="page" key={idx}>
              {idx === 0 && <div className="tap-hint">👆 Tap to open</div>}
              {poem.title && <h2>{poem.title}</h2>}
              {poem.text && <pre>{poem.text}</pre>}
              {poem.image && <img src={poem.image} alt="poem art" className="poem-img" />}
              {idx > 1 && idx % 2 === 0 && (
                <div className="page-num">
                  {Math.ceil(idx / 2)} / {Math.floor((poems.length - 1) / 2)}
                </div>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      <div className="to-herphone-icon" onClick={() => navigate("/her-phone")}>
  <img src="/assets/icons/phone.png" alt="HerPhone" />
</div>

    </div>
    
  );
}
