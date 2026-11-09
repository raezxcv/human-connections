import { Story } from '../types/editorial';

export const STORIES: Story[] = [
  {
    id: 'story-01',
    slug: 'the-11-14-upright-at-union-concourse',
    dispatchNumber: 'No. 01',
    title: 'The 11:14 Upright at Union Concourse',
    subtitle:
      'For eleven minutes between the last regional commuter train and the night custodial shift, an out-of-tune Kimball upright turns a transit hall into a living room.',
    category: 'Strangers',
    city: 'Chicago, IL',
    neighborhood: 'West Loop · Union Concourse',
    timeOfDay: '11:14 PM · Late Evening',
    hour24: 23,
    readingTimeMinutes: 6,
    author: 'Mara Vance',
    authorRole: 'Night-Shift Correspondent',
    photographer: 'Tomasz Kowalczyk',
    overheardQuote:
      'You do not have to know the second verse. Just hum the part you remember from when your mother had the radio on.',
    overheardContext:
      'Arthur Bell, 68, retired signal electrician, speaking to two delayed passengers waiting for Track 14.',
    featured: true,
    selectedForHome: true,
    distanceLabel: 'Across the Hall',
    leadPhoto: {
      src: '/images/featured-night-bus-piano.jpg',
      alt: 'Commuters gathered around a public piano inside a railway station concourse at night',
      aspectRatio: '16:9',
      caption:
        'West Concourse waiting hall, 11:18 PM. The Kimball upright was donated by a retired choir teacher in 2019; its middle F-sharp sticks when the humidity rises.',
      cameraNote: '35mm f/2.0 · ISO 800 · 1/60s · Available tungsten concourse globes',
      subject: 'Station pianist and delayed evening commuters listening beside luggage',
      environment: 'Tiled mid-century railway concourse with warm overhead brass lamps',
      lighting: 'Pools of amber tungsten against deep cobalt evening windows',
      credit: 'Documentary Archive · Pori / Union Concourse Series (CC BY)',
    },
    secondaryPhoto: {
      src: '/images/hero-rain-umbrella.jpg',
      alt: 'Two strangers sharing an umbrella outside the station entrance in evening rain',
      aspectRatio: '4:5',
      caption:
        'Outside the Canal Street exit twenty minutes later, two listeners who had never spoken before shared an umbrella to the bus shelter.',
      cameraNote: '50mm f/1.8 · ISO 800 · 1/80s · Wet asphalt reflections',
      subject: 'Two commuters walking beneath one shared umbrella in rain',
      environment: 'Rain-slicked city crosswalk at night',
      lighting: 'Sodium streetlamp and shopfront amber reflection',
      credit: 'Documentary Archive · It’s No Game (CC BY 2.0)',
    },
    excerpt:
      'The departure board had been blinking DELAYED in amber letters for forty minutes when the man in the navy wool coat set his thermos on top of the battered upright piano near Gate B.',
    body: [
      {
        paragraphs: [
          'At 11:14 PM on a wet Tuesday in November, nobody in a train station wants to be looked at. People build small fortresses out of canvas duffels, damp wool coats, and the blue glow of their phones. The 10:55 north to Kenosha was held outside the yard with a switch fault, leaving thirty-four strangers stranded in the vaulted echo of the lower concourse.',
          'Arthur Bell did not announce himself. He unbuttoned his heavy navy coat, placed a dented stainless-steel thermos on the scarred mahogany lid of the station’s public piano, and pressed middle C with his thumb—testing the felt the way a carpenter checks a porch step before putting his weight on it.',
          'The middle F-sharp gave a dullwooden thud instead of a note. Arthur laughed under his breath, shifted his hands an octave higher, and began a slow, unhurried rendition of "Moon River" that sounded less like a performance and more like someone thinking out loud.',
        ],
        pullQuote:
          'First one person took out an earbud. Then a woman in hospital scrubs sat down on her hardshell suitcase instead of pacing.',
        fieldNote:
          'Field Log · 11:19 PM: Acoustic decay in the lower hall is 3.4 seconds. Footsteps slowed noticeably within forty feet of the instrument.',
      },
      {
        heading: 'The Unrehearsed Chorus of Track 14',
        paragraphs: [
          'Within four minutes, the geometry of the waiting area had quietly rearranged itself. A young man carrying a cello case walked over from the pretzel kiosk—not to unpack his instrument, just to lean his shoulder against the marble pilaster where the sound was warmest. Two dental hygiene students returning from a night lab slid onto the oak bench ten feet away, sharing a paper bag of roasted almonds.',
          'When Arthur switched to Bill Withers’ "Lean on Me," he left the chorus open, playing only the bass octaves with his left hand and nodding toward the bench. Nobody sang loudly. It was a low, slightly shy murmur of seven strangers humming in the same key while floor-scrubber machines whirred at the far end of the tunnel.',
          'When the track announcement finally crackled through the PA system at 11:27 PM, the group did not scatter all at once. The woman in scrubs tapped the top of the piano twice with her knuckles—the universal gesture for thank you when your hands are full—and asked the student beside her if she needed help lifting her trunk up the boarding stairs.',
        ],
        fieldNote:
          'Piano Maintenance Note: Tuned every third Thursday by a volunteer from the blind piano technicians guild.',
      },
    ],
    smallThingsNoticed: [
      'A dented thermos lid used as a makeshift metronome rest',
      'Four people removing one earbud at the exact same measure',
      'A stranger holding the heavy brass vestibule door for six people with suitcases',
    ],
    initialResonanceCount: 148,
  },
  {
    id: 'story-02',
    slug: 'the-crosswalk-on-4th-and-mercer',
    dispatchNumber: 'No. 02',
    title: 'The Crosswalk on 4th & Mercer',
    subtitle:
      'A sudden cloudburst, a ninety-second red light, and the unspoken etiquette of tilting a canopy six inches to the left.',
    category: 'Strangers',
    city: 'Seattle, WA',
    neighborhood: 'Belltown · 4th Ave',
    timeOfDay: '05:48 PM · Evening Rush',
    hour24: 18,
    readingTimeMinutes: 4,
    author: 'Elena Rostova',
    authorRole: 'Urban Ethnographer',
    photographer: 'David Kernan',
    overheardQuote:
      'Stay under the ribs—my stop isn’t for three more blocks anyway, and this thing is wide enough for a small boat.',
    overheardContext:
      'Overheard under a golf umbrella at the corner of 4th & Mercer during a November squall.',
    selectedForHome: true,
    heroMosaicOrder: 1,
    distanceLabel: 'Across the Street',
    leadPhoto: {
      src: '/images/hero-rain-umbrella.jpg',
      alt: 'Two pedestrians sharing a dark umbrella on a rainy city street',
      aspectRatio: '4:5',
      caption:
        'Corner of 4th & Mercer, 5:48 PM. Neither commuter asked for the other’s name before parting at the pharmacy awning.',
      cameraNote: '35mm f/2.0 · ISO 800 · 1/125s · Overcast rain & neon reflection',
      subject: 'Two commuters walking side-by-side under one umbrella in heavy rain',
      environment: 'Wet urban sidewalk and crosswalk at dusk',
      lighting: 'Diffused twilight blue with warm traffic and shop reflections',
      credit: 'Documentary Archive · It’s No Game (CC BY 2.0)',
    },
    secondaryPhoto: {
      src: '/images/story-laundromat-folds.jpg',
      alt: 'Warm interior of a neighborhood laundromat where people dry off from the rain',
      aspectRatio: '1:1',
      caption:
        'Half a block east, the 24-hour coin laundry serves as an unofficial warming shelter whenever the drains back up at the curb.',
      cameraNote: '50mm f/2.8 · ISO 400 · Warm interior fluorescent',
      subject: 'Row of warm stainless steel dryers inside neighborhood laundromat',
      environment: 'Corner laundromat on a rainy evening',
      lighting: 'Diffused interior glow against wet glass',
      credit: 'Documentary Archive · Film Series',
    },
    excerpt:
      'There is a particular kind of rain that arrives before anyone has time to unzip a backpack. At 4th and Mercer, the traffic light holds pedestrians for ninety-two seconds.',
    body: [
      {
        paragraphs: [
          'Most civic kindness is measured in inches rather than grand gestures. When the sky opened over 4th Avenue at 5:46 PM, a man in his early thirties was standing at the curb holding two paper bags of groceries whose handles were rapidly softening into pulp.',
          'Beside him, an older woman in a camel wool coat didn’t say a word at first. She simply raised her oversized black umbrella three inches higher so the steel tips cleared his hat, and stepped half a pace to her right until the dry circle on the pavement included his shoulders and his groceries.',
          'He looked up, startled, expecting someone trying to squeeze past him toward the bus lane. When he realized she was standing still for his sake, he offered the only currency he had: "I’ve got dry paper towels in the left bag if your glasses are fogging."',
        ],
        pullQuote:
          'Most civic kindness is measured in inches: lifting the steel ribs three inches higher so a stranger’s paper grocery bag doesn’t tear.',
        fieldNote:
          'Signal Timing Note: The 4th & Mercer pedestrian phase lasts 92 seconds during peak transit hours.',
      },
      {
        heading: 'Three Blocks of Borrowed Roof',
        paragraphs: [
          'When the walk sign finally flashed white, they crossed at the careful, synchronized pace required of two people who do not know each other’s stride length. She matched his shorter steps; he held his elbow tucked in so the celery stalks wouldn’t brush her sleeve.',
          'At the awning of the corner pharmacy, he ducked under the corrugated overhang and insisted she keep walking toward her bus. Neither asked what the other did for a living. Five seconds later they were both just silhouettes in the mist again, except the paper bag had made it home intact.',
        ],
      },
    ],
    smallThingsNoticed: [
      'Adjusting umbrella height automatically for a taller stranger',
      'Matching walking cadence across four lanes of wet asphalt',
      'A nod from the bus driver waiting an extrafour seconds at the curb',
    ],
    initialResonanceCount: 94,
  },
  {
    id: 'story-03',
    slug: 'seven-chairs-for-five-people',
    dispatchNumber: 'No. 03',
    title: 'Seven Chairs for Five People',
    subtitle:
      'Why a third-floor apartment in Astoria keeps two folding chairs wedged behind the refrigerator for whoever happens to be hungry on a Thursday.',
    category: 'Friendship',
    city: 'Queens, NY',
    neighborhood: 'Astoria · 31st Ave',
    timeOfDay: '08:30 PM · Dinner Hour',
    hour24: 20,
    readingTimeMinutes: 5,
    author: 'Devon Alverez',
    authorRole: 'Features Editor',
    photographer: 'Minh Nguyen',
    overheardQuote:
      'If I make enough broth for four, making enough for seven only costs two more carrots and a bigger pot.',
    overheardContext:
      'Soraia Haddad, 31, architect and Thursday night cook, ladling lemon-lentil soup.',
    selectedForHome: true,
    heroMosaicOrder: 2,
    distanceLabel: 'Across the Table',
    leadPhoto: {
      src: '/images/hero-rooftop-dinner.jpg',
      alt: 'Friends sitting together with arms around each other at dusk after sharing a meal',
      aspectRatio: '16:10',
      caption:
        'After the table is cleared, the Thursday group usually migrates outside to watch the evening ferries and bridge lights.',
      cameraNote: '35mm f/2.8 · ISO 400 · 1/100s · Golden dusk light',
      subject: 'Group of close friends seated side by side at dusk',
      environment: 'Open promenade overlooking water at sunset',
      lighting: 'Warm golden-hour sky and soft backlighting',
      credit: 'Documentary Archive · Unsplash / Open Collection',
    },
    secondaryPhoto: {
      src: '/images/community-soup-window.jpg',
      alt: 'Warm bowl of soup served with herbs and bread on a linen cloth',
      aspectRatio: '16:10',
      caption:
        'The Thursday rule: nobody is allowed to bring an expensive bottle of wine, only bread, citrus, or a friend who had a long week.',
      cameraNote: '50mm f/2.2 · ISO 200 · Window daylight',
      subject: 'Bowl of orange lentil soup with herbs on linen',
      environment: 'Apartment dining table',
      lighting: 'Soft natural sidelight',
      credit: 'Documentary Archive · Culinary Series',
    },
    excerpt:
      'In your twenties, friendships happen by proximity. In your thirties, they survive because somebody bought a twelve-quart stockpot and refused to require RSVPs.',
    body: [
      {
        paragraphs: [
          'The rule at 31-18 Broadway, Apartment 3B, is that you do not text to ask if Thursday dinner is still happening. It is always happening, unless Soraia is out of the state, and even then her roommate Mateo has a key and knows where the red lentils are kept.',
          'It started two winters ago when three friends realized they had spent four months sending each other messages that said "We have to catch up soon!" while living less than a mile apart. Calendar invites felt like office meetings; restaurants in Manhattan required forty-dollar entrees and shouting over espresso martinis.',
          'So Soraia instituted the Open Pot. At 7:30 PM, a pot of something forgiving—chickpea stew, pozole, congee with scallions—goes on the back burner. If three people show up, they eat in bowls on the couch. If delapan people show up because someone brought a cousin who just moved to the city, the metal folding chairs come out from behind the fridge.',
        ],
        pullQuote:
          'We stopped saying "let’s get together soon" and started saying "the door is unlocked after seven-thirty."',
        fieldNote:
          'Inventory of Chairs: 3 bentwood thrifted chairs, 1 piano stool, 2 steel folding chairs, 1 radiator cushion.',
      },
      {
        heading: 'The Anti-Hostess Manifesto',
        paragraphs: [
          'What makes the evening work is the complete absence of performance. When you arrive at 8:15 PM straight from a double shift, nobody hands you a cocktail napkin. They hand you a serrated knife and ask you to slice the sourdough, or they point you toward the stack of mismatched ceramic bowls.',
          'Last week, a friend’s coworker came along after a breakup and spent forty-five minutes quietly shelling peas into a colander at the end of the table before saying more than three sentences. By ten o’clock, he was washing the stockpot while arguing passionately about the best bakery in Jackson Heights.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A masking-tape label on the buzzer that reads "3B — Just Push Twice"',
      'Six pairs of mismatched house slippers kept in a crate by the door',
      'Tupperware containers with friends’ initials written in Sharpie on the lids',
    ],
    initialResonanceCount: 215,
  },
  {
    id: 'story-04',
    slug: 'what-we-keep-in-the-biscuit-tin',
    dispatchNumber: 'No. 04',
    title: 'What We Keep in the Biscuit Tin',
    subtitle:
      'Every Sunday morning in an apartment in Montreal, a grandmother and her grandson sort buttons, receipts, and two languages over strong tea.',
    category: 'Family',
    city: 'Montreal, QC',
    neighborhood: 'Mile End · Rue Saint-Urbain',
    timeOfDay: '09:15 AM · Morning Light',
    hour24: 9,
    readingTimeMinutes: 5,
    author: 'Claire Beaumont',
    authorRole: 'Contributing Essayist',
    photographer: 'Lukas Lindqvist',
    overheardQuote:
      'This blue button is from your grandfather’s railway coat. Never throw away a coat button; coats wear out before the horn does.',
    overheardContext:
      'Mme. Hélène Moreau, 82, sorting her royal blue Danish butter-cookie tin with her grandson Julien, 19.',
    selectedForHome: true,
    heroMosaicOrder: 3,
    distanceLabel: 'Across the Table',
    leadPhoto: {
      src: '/images/hero-grandfather-hands.jpg',
      alt: 'Intimate portrait of an older grandmother at her table in warm morning light',
      aspectRatio: '4:5',
      caption:
        'Rue Saint-Urbain, 9:15 AM. The kitchen table faces east so the morning sun hits the oilcloth for exactly forty minutes in November.',
      cameraNote: '50mm f/1.8 · ISO 200 · Natural east window light',
      subject: 'Grandmother seated in warm morning light at a wooden table',
      environment: 'Quiet domestic interior with heirloom textures',
      lighting: 'Raking directional morning light',
      credit: 'Archival Collection · Public Domain / Wikimedia Commons',
    },
    secondaryPhoto: {
      src: '/images/story-bakery-window.jpg',
      alt: 'Seeded rye and country loaves dusted with flour on a wooden board',
      aspectRatio: '4:5',
      caption:
        'Julien stops at the corner boulangerie at 8:45 AM every Sunday for one seededmiche loaf before climbing the exterior iron stairs.',
      cameraNote: '50mm f/2.0 · ISO 400 · Morning bakery light',
      subject: 'Freshly baked country loaves dusted with flour',
      environment: 'Wooden kitchen counter',
      lighting: 'Soft diffused morning light',
      credit: 'Documentary Archive · Boulangerie Series',
    },
    excerpt:
      'No household on earth actually stores butter cookies in the blue tin. In Hélène Moreau’s kitchen, the tin holds eighty years of small repairs.',
    body: [
      {
        paragraphs: [
          'When Julien started his first year studying civil engineering at McGill, his mother worried he would stop visiting his grandmother on Sundays. Nineteen-year-olds have late Saturday nights, problem sets in thermodynamics, and friends with cars.',
          'Instead, Julien showed up at 9:00 AM on the second Sunday of September with a loaf of seeded rye under his arm and a missing cuff button on his thrift-store flannel shirt. Hélène didn’t make a fuss. She brewed a pot of Assam tea dark enough to stain the porcelain, fetched the dented blue tin from the hallway credenza, and tipped its contents onto the linen tablecloth.',
          'There is a specific sound that a thousand mother-of-pearl, wooden, and brass buttons make when they cascade across a wooden table—like rain on a tin roof, followed by the quiet clink of a pair of steel embroidery scissors.',
        ],
        pullQuote:
          'While she threads the needle, he reads her the French idioms he still gets wrong; while he sews the button on, she tells him who wore it first.',
        fieldNote:
          'Archive Note: The tin contains 412 buttons, 3 thimbles, a 1976 Montreal Metro ticket, and two keys to a shed that no longer exists.',
      },
      {
        heading: 'An Education in Mending',
        paragraphs: [
          'Hélène refuses to sew the buttons on for him anymore; her arthritis makes the knot-tying slow, so she acts as foreman while Julien handles the needle. She taught him to slip a wooden matchstick under the button while stitching so the thread forms a neat shank underneath.',
          'Over the past ten weeks, Julien has run out of shirts that actually need mending. Yesterday, before climbing her iron staircase, he deliberately snipped the top button off his winter cardigan with his pocketknife at the bus stop so they would have thirty minutes of work to do while the tea steeped.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A wooden matchstick used as a spacer for sewing coat buttons',
      'Two porcelain mugs warmed with hot tap water before pouring the tea',
      'A handwritten grocery list in French on the back of a pharmacy receipt',
    ],
    initialResonanceCount: 182,
  },
  {
    id: 'story-05',
    slug: 'geometry-of-the-fitted-sheet',
    dispatchNumber: 'No. 05',
    title: 'Geometry of the Fitted Sheet',
    subtitle:
      'Between Cycle 4 and the spin-dry buzzer, a retired hotel housekeeper rescues a college freshman from a losing battle with elastic corners.',
    category: 'Kindness',
    city: 'Philadelphia, PA',
    neighborhood: 'Spruce Hill · 43rd St',
    timeOfDay: '02:15 PM · Rainy Sunday',
    hour24: 14,
    readingTimeMinutes: 4,
    author: 'Marcus Thorne',
    authorRole: 'Staff Writer',
    photographer: 'Hannah Alvarez',
    overheardQuote:
      'Stop fighting the elastic like it owes you money. Put your index fingers inside the two top seams and flip right over left.',
    overheardContext:
      'Mrs. Delores Gable, 71, demonstrating the hospital-corner fold between Dryers 6 and 8.',
    selectedForHome: true,
    distanceLabel: 'Across the Hall',
    leadPhoto: {
      src: '/images/story-laundromat-folds.jpg',
      alt: 'Row of stainless steel washing machines inside a neighborhood coin laundromat',
      aspectRatio: '1:1',
      caption:
        '43rd Street Coin-Op, 2:15 PM. On rainy Sundays, all sixteen front-loaders run continuously from noon until nine.',
      cameraNote: '50mm f/2.0 · Kodak Portra 400 · 1/60s · Interior daylight mix',
      subject: 'Row of classic stainless-steel front-loading washing machines',
      environment: 'Neighborhood coin laundromat',
      lighting: 'Diffused window light reflecting off brushed steel drums',
      credit: 'Documentary Archive · Analog 35mm Series',
    },
    secondaryPhoto: {
      src: '/images/hero-rain-umbrella.jpg',
      alt: 'Rainy street outside the laundromat window',
      aspectRatio: '4:5',
      caption:
        'Nobody leaves while the spin cycle runs when it is pouring outside; the folding table becomes a temporary parliament.',
      cameraNote: '35mm f/2.0 · ISO 800 · Street view',
      subject: 'Pedestrians in rain outside',
      environment: 'Wet neighborhood street',
      lighting: 'Cool overcast afternoon light',
      credit: 'Documentary Archive · Street Series',
    },
    excerpt:
      'Every Sunday afternoon at the 43rd Street Laundromat, you can tell who is doing their own laundry for the third time in their life by the way they roll a fitted sheet into a defeated cotton sphere.',
    body: [
      {
        paragraphs: [
          'Leo had already turned his white undershirt pink by missing a maroon sock in the warm wash. When he pulled his twin-XL fitted sheet out of Dryer 7 and tried for the fourth time to fold it against his chin, the bottom elastic caught on his watch strap and the whole bundle sagged toward the linoleum.',
          'Before the corner could touch the floor, a hand with a silver Claddagh ring caught the hem cleanly in midair. Mrs. Delores Gable, who worked thirty-two years on the fourteenth floor of the Bellevue Hotel and still irons her kitchen dish towels, stood across the folding table.',
          '"Hold your hands out like you’re carrying two puppets," she instructed, her voice carrying the calm authority of a flight instructor. She tucked her own fingers into the opposite corners, walked two steps forward, folded the corners over Leo’s knuckles, and squared the sheet on the laminate table in four crisp moves.',
        ],
        pullQuote:
          'When it was a neat twelve-inch rectangle, the man unloading Dryer 4 clapped twice over his basket of gym shorts.',
        fieldNote:
          'Technique Note: Seam-to-seam tuck, quarter fold on the table, smooth outward from the center.',
      },
      {
        heading: 'The Unofficial Curriculum',
        paragraphs: [
          'Mrs. Gable immediately unfolded the sheet, shook it out with a snap like a sail catching wind, and handed it back to Leo. "Now you do it while your muscle memory is warm."',
          'He got it on the second try—slightly trapezoidal, but flat enough to stack under his pillowcases. Before she wheeled her wire cart out into the drizzle, she left two quarters on the corner of his machine so he could give his damp jeans ten more minutes on high heat.',
        ],
      },
    ],
    smallThingsNoticed: [
      'Two quarters left stacked on top of Dryer 7',
      'A handwritten sign by the change machine offering free dryer sheets from an open box',
      'Three strangers helping a mother carry three laundry baskets out to her hatchback',
    ],
    initialResonanceCount: 164,
  },
  {
    id: 'story-06',
    slug: 'the-stoop-wrench-on-9th-street',
    dispatchNumber: 'No. 06',
    title: 'The Stoop Wrench on 9th Street',
    subtitle:
      'How a wooden toolbox chained to a cast-iron brownstone railing became a self-governing repair station for delivery riders and seven-year-olds.',
    category: 'Community',
    city: 'Brooklyn, NY',
    neighborhood: 'Gowanus · 9th Street',
    timeOfDay: '04:35 PM · Late Afternoon',
    hour24: 16,
    readingTimeMinutes: 5,
    author: 'Samir Patel',
    authorRole: 'Civic Infrastructure Reporter',
    photographer: 'John Englart',
    overheardQuote:
      'People told me the 15-millimeter box wrench would be stolen by Tuesday. That was four years ago, and somebody actually added a spoke key.',
    overheardContext:
      'Hector Morales, 64, retired transit machinist, oiling the floor pump outside his basement gate.',
    selectedForHome: true,
    distanceLabel: 'Across the Street',
    leadPhoto: {
      src: '/images/story-bicycle-repair.jpg',
      alt: 'Two people crouched over an upturned bicycle repairing a wheel together',
      aspectRatio: '4:5',
      caption:
        '9th Street bike corridor, 4:35 PM. On an average weekday, eleven cyclists stop at the railing to top off tire pressure or tighten a loose axle nut.',
      cameraNote: '35mm f/2.8 · ISO 400 · 1/200s · Late afternoon street light',
      subject: 'Mechanic and cyclist repairing a bicycle wheel together',
      environment: 'Urban sidewalk repair spot',
      lighting: 'Natural afternoon daylight',
      credit: 'Documentary Archive · John Englart / Takver (CC BY-SA 2.0)',
    },
    secondaryPhoto: {
      src: '/images/community-garden-harvest.jpg',
      alt: 'Neighbors working together in an urban community lot down the block',
      aspectRatio: '16:9',
      caption:
        'Three doors down from Hector’s stoop, the 9th Street lot shares inner-tube patches and cold water jugs during the summer.',
      cameraNote: '35mm f/4.0 · ISO 200 · Afternoon sun',
      subject: 'Community members working together outdoors',
      environment: 'Neighborhood garden and tool space',
      lighting: 'Bright natural sunlight',
      credit: 'Documentary Archive · Community Series',
    },
    excerpt:
      'A slipped chain at five o’clock in the evening feels like a personal betrayal, until you notice the blue plywood box bolted beneath the magnolia tree at No. 214.',
    body: [
      {
        paragraphs: [
          'Hector Morales spent thirty-seven years maintaining pneumatic brake valves for the subway system. When he retired, he found himself sitting at his parlor window watching the new 9th Street bike lane. Twice a week, he saw food couriers or parents with cargo bikes stranded at the curb with a flat tire or a slipped derailleur.',
          'At first he used to trot down his front steps carrying his own heavy Kennedy machinist chest. After his knee replacement made the stairs slower, he built a weatherproof marine-plywood cabinet, painted it signal cobalt blue, and bolted it to the lower iron railing beside a cast-iron floor pump.',
          'Inside hang four metric Allen keys on aircraft cable, a 15mm pedal wrench, two tire levers, a rag soaked in degreaser inside a peanut-butter jar, and a tin of adhesive tube patches.',
        ],
        pullQuote:
          'When Hector is home, he still opens the ground-floor casement window to offer free commentary and paper towels.',
        fieldNote:
          'Box Log: 0 tools missing since 2022; 4 spare inner tubes donated anonymously by commuters.',
      },
      {
        heading: 'The Honor System of Grease',
        paragraphs: [
          'What surprised the block association wasn’t just that the tools stayed put; it was that strangers began maintaining the box itself. When the rubber gasket on the pump head wore out in August, a courier named Ibrahim replaced it with a brass presta adapter and left a sticky note in Spanish and English explaining how to flip the valve.',
          'On Saturday afternoons, Hector sits on the bottom stone step with a folding stool while neighborhood kids bring their scooters to have the handlebars raised an inch for the new school year.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A peanut-butter jar of orange pumice hand soap bolted beside the garden hose',
      'Size-labeled spare inner tubes hanging from wooden clothespins inside the lid',
      'Chalk marks on the curb showing kids how to check tire pressure',
    ],
    initialResonanceCount: 137,
  },
  {
    id: 'story-07',
    slug: 'first-batch-before-the-route',
    dispatchNumber: 'No. 07',
    title: 'First Batch Before the Route',
    subtitle:
      'At 5:40 AM, twenty minutes before the front door unlocks, the side alley window of St. Jude Bakery belongs to the people who clean the street.',
    category: 'Kindness',
    city: 'Boston, MA',
    neighborhood: 'East Boston · Maverick Sq',
    timeOfDay: '05:40 AM · Pre-Dawn',
    hour24: 5,
    readingTimeMinutes: 4,
    author: 'Mara Vance',
    authorRole: 'Night-Shift Correspondent',
    photographer: 'Mateo Silva',
    overheardQuote:
      'An oven doesn’t care if the sign says Closed. If the rolls are out of the deck at five-thirty, they ought to be eaten while the butter still melts.',
    overheardContext:
      'Tomás Ferreira, 56, head baker, passing three blistered Portuguese rolls through the alley vent window.',
    distanceLabel: 'At the Counter',
    leadPhoto: {
      src: '/images/story-bakery-window.jpg',
      alt: 'Freshly baked crusty loaves dusted with flour on a dark wooden baker table',
      aspectRatio: '4:5',
      caption:
        'First pull from the hearth deck, 5:35 AM. The misshapen "kissed" rolls that stick together on the peel are reserved for the early sanitation crew.',
      cameraNote: '50mm f/1.8 · ISO 640 · Warm oven light',
      subject: 'Artisan seeded and flour-dusted bread loaves fresh from the oven',
      environment: 'Traditional neighborhood bakery workbench',
      lighting: 'Warm directional baker’s lamp glow',
      credit: 'Documentary Archive · Hearth Series',
    },
    secondaryPhoto: {
      src: '/images/community-soup-window.jpg',
      alt: 'Warm meal shared at a neighborhood kitchen table',
      aspectRatio: '16:10',
      caption:
        'In winter, Tomás keeps a two-gallon cambro of hot cinnamon bark tea next to the proofing racks for the snowplow drivers.',
      cameraNote: '35mm f/2.0 · ISO 400 · Interior kitchen light',
      subject: 'Warm bowl and kitchen preparation',
      environment: 'Bakery kitchen counter',
      lighting: 'Soft morning light',
      credit: 'Documentary Archive · Kitchen Series',
    },
    excerpt:
      'There is a whole shift of the city that finishes half its day’s work before the coffee shops unlock their patio chairs.',
    body: [
      {
        paragraphs: [
          'If you walk down Lubec Street at 5:40 in the morning, the streetlights are still humming orange and the harbor air smells like cold salt and yeast. The front brass handle of St. Jude Bakery stays bolted until six, when the commuters start queuing for espresso.',
          'Out back in the brick alley, however, the Dutch half-window above the flour chutes is propped open with a wooden rolling pin. When the municipal street-sweeper truck idles at the corner to refill its water tank, driver Raynard Brooks steps down from the cab in his high-visibility yellow vest and taps twice on the galvanized sill.',
          'Tomás Ferreira doesn’t take money at the back window. He hands out a brown kraft bag containing two papo secos split down the middle and smeared with salted Azorean butter, warm enough to fog Raynard’s safety glasses.',
        ],
        pullQuote:
          'When snowstorms hit in January, Raynard plows the bakery’s loading bay first—three passes clean to the curb before the flour delivery truck arrives.',
        fieldNote:
          'Reciprocity Economy: No cash has crossed the Lubec Street window since November 2017.',
      },
      {
        heading: 'The Unofficial Dawn Exchange',
        paragraphs: [
          'Neither man calls it charity; both would be insulted by the word. It is the old tradesman’s understanding that people working in the dark look after other people working in the dark.',
          'On Fridays, Raynard brings a bundle of the Spanish and Portuguese neighborhood weeklies from the distribution box by the depot and leaves them on the sill so Tomás’s bakers have something to read when the dough rests at seven.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A wooden rolling pin notched specifically to prop the casement window against harbor wind',
      'Two espresso demitasse cups kept on the windowsill away from the flour dust',
      'A clean snow shovel path cleared from the alley to the street every winter storm',
    ],
    initialResonanceCount: 119,
  },
  {
    id: 'story-08',
    slug: 'three-flights-up-no-elevator',
    dispatchNumber: 'No. 08',
    title: 'Three Flights Up, No Elevator',
    subtitle:
      'Two brothers, forty-one unmarked banana boxes, and the truce negotiated on the second-floor landing over lukewarm deli coffee.',
    category: 'Family',
    city: 'Minneapolis, MN',
    neighborhood: 'Powderhorn · Bloomington Ave',
    timeOfDay: '01:20 PM · Midday',
    hour24: 13,
    readingTimeMinutes: 5,
    author: 'Devon Alverez',
    authorRole: 'Features Editor',
    photographer: 'Caleb Vance',
    overheardQuote:
      'Why do you still own a box of rocks from Lake Superior? We carried this exact box up to your last apartment in 2021.',
    overheardContext:
      'Nate Lindstrom, 34, sitting on the stair landing beside his younger brother Gabe, 29.',
    distanceLabel: 'Across the Hall',
    leadPhoto: {
      src: '/images/story-brothers-moving.jpg',
      alt: 'Warm sunlit interior of a new apartment kitchen with wooden stools during move-in day',
      aspectRatio: '16:10',
      caption:
        '1:20 PM, Bloomington Avenue. Before unpacking a single plate, the brothers pulled up two wooden stools to eat cold sesame noodles out of the carton.',
      cameraNote: '35mm f/2.8 · ISO 200 · Midday window light',
      subject: 'Sunlit apartment kitchen counter with wooden stools on moving day',
      environment: 'New apartment interior before furniture arrives',
      lighting: 'Bright natural daylight across wood floors',
      credit: 'Documentary Archive · Interior Series',
    },
    secondaryPhoto: {
      src: '/images/story-bicycle-repair.jpg',
      alt: 'Two men working together outdoors on the sidewalk',
      aspectRatio: '4:5',
      caption:
        'The last item off the truck was a 1984 Schwinn touring bike that belonged to their father, carried up the stairs without scraping the plaster.',
      cameraNote: '35mm f/2.8 · ISO 400 · Overcast afternoon',
      subject: 'Two men collaborating on a bicycle',
      environment: 'Sidewalk curb',
      lighting: 'Natural daylight',
      credit: 'Documentary Archive · Street Series',
    },
    excerpt:
      'Nothing strips away five months of polite family text messages faster than pivoting a sleeper sofa around a nineteenth-century newel post.',
    body: [
      {
        paragraphs: [
          'Nate and Gabe Lindstrom had barely spoken since an argument in July over how to divide the repairs on their late father’s fishing cabin. They were polite at Thanksgiving, sending thumbs-up emojis in the family group chat and leaving five minutes apart.',
          'Then Gabe’s landlord sold his duplex, and Gabe couldn’t afford moving company rates in November. At 8:00 AM Saturday, Nate backed his pickup truck up to the curb on Bloomington Avenue wearing his old leather work gloves and carrying a box of six glazed crullers.',
          'For the first two hours, they spoke exclusively in the terse vocabulary of stairwells: "Watch your knuckles," "Drop your end two inches," "Pivot toward the banister."',
        ],
        pullQuote:
          'You cannot stay formally angry at someone when both of your lower backs are giving out under the same oak dresser.',
        fieldNote:
          'Stairwell Geometry: 46 steps per round trip; 31-inch turn radius at the second-floor landing.',
      },
      {
        heading: 'The Agate Box on Landing Two',
        paragraphs: [
          'On trip fourteen, Nate picked up a taped produce carton labeled MISC — DEN that weighed at least fifty pounds. Halfway up the second flight, the bottom tape gave a warning creak and both brothers sat down simultaneously on the steps, trapping the box between their knees.',
          'When Gabe peeled back the flap, it was full of Lake Superior agates and their father’s cast-iron skillet set. They sat on the carpeted steps for twenty minutes dividing the skillets—one ten-inch for Gabe, the twelve-inch Dutch oven for Nate—and agreed to drive up to the cabin together in May to fix the porch roof.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A roll of blue painter’s tape used to pad the sharp corners of the doorframe',
      'Two paper coffee cups balanced on the radiator valve',
      'A shared bottle of ibuprofen left on the kitchen counter next to the keys',
    ],
    initialResonanceCount: 151,
  },
  {
    id: 'story-09',
    slug: 'forty-years-of-the-queens-gambit',
    dispatchNumber: 'No. 09',
    title: 'Forty Years of the Queen’s Gambit',
    subtitle:
      'Every afternoon at three, two retired machinists keep a running scorecard in a spiral notebook that currently stands at 3,412 to 3,398.',
    category: 'Friendship',
    city: 'New York, NY',
    neighborhood: 'Lower East Side · Sara D. Roosevelt Park',
    timeOfDay: '03:15 PM · Crisp Afternoon',
    hour24: 15,
    readingTimeMinutes: 5,
    author: 'Elena Rostova',
    authorRole: 'Urban Ethnographer',
    photographer: 'NARA Documentary Archive',
    overheardQuote:
      'He has been trying that exact knight fork since the Carter administration, and he still thinks I don’t see his thumb twitch before he moves it.',
    overheardContext:
      'Sol Meyer, 79, gesturing across the concrete table toward his lifelong friend Victor Ortiz, 78.',
    selectedForHome: true,
    distanceLabel: 'Across the Table',
    leadPhoto: {
      src: '/images/story-park-chess.jpg',
      alt: 'Two older friends playing chess intensely on a park bench outdoors',
      aspectRatio: '1:1',
      caption:
        'Park bench table, 3:15 PM. When the wind picks up in November, they weight the score sheet down with two brass washers.',
      cameraNote: '50mm f/4.0 · Medium Format Documentary · Dappled afternoon sun',
      subject: 'Two older men leaning over a chessboard on a park bench',
      environment: 'Public city park bench under trees',
      lighting: 'Natural afternoon sunlight',
      credit: 'National Archives Documentary Collection (Public Domain)',
    },
    secondaryPhoto: {
      src: '/images/story-porch-haircut.jpg',
      alt: 'Close portrait of an older man in warm light',
      aspectRatio: '4:5',
      caption:
        'Before sitting down at the board, Victor stops at the corner barber on Broome Street where the radio is always tuned to AM baseball talk.',
      cameraNote: '50mm f/2.0 · ISO 400 · Warm interior light',
      subject: 'Older man getting a trim in a neighborhood shop',
      environment: 'Classic neighborhood barbershop',
      lighting: 'Warm tungsten and window light',
      credit: 'Documentary Archive · Barber Series',
    },
    excerpt:
      'The longest conversation in the park uses almost no adjectives—just the clack of weighted Staunton plastic on cast concrete and forty years of shared memory.',
    body: [
      {
        paragraphs: [
          'Sol Meyer and Victor Ortiz met in 1984 in the break room of a printing press repair shop on Varick Street. Neither was particularly fond of loud bars, so they began playing ten-minute chess games on an upturned ink crate during lunch.',
          'Now that the shop is a condo lobby and both men are widowers, the game has moved outdoors to the third concrete table north of the Stanton Streetcomfort station. Rain below forty degrees moves them into the back booth of a bodega across the street; anything above forty is playable if you wear fingerless wool gloves.',
          'Inside Sol’s canvas satchel sits a Mead composition notebook taped along the spine with black electrical tape. Every page is ruled in pencil with the date, the weather ("Windy, 44°"), and the tally.',
        ],
        pullQuote:
          'When Victor spent eleven days in Mount Sinai Hospital with pneumonia last winter, Sol brought a magnetic travel board and sat by the window without resetting the clock.',
        fieldNote:
          'Lifetime Ledger (1984–2026): Sol 3,412 · Victor 3,398 · Draws 1,104.',
      },
      {
        heading: 'How Men Say "I Was Worried About You"',
        paragraphs: [
          'If either man is more than twelve minutes late for the 3:00 PM opening move, the other walks to the lobby of his building and buzzes upstairs. They never call it a wellness check.',
          '"If I don’t buzz him, he’ll claim he won by forfeit," Sol says, pouring half a thermos of ginger tea into a paper cup and sliding it across the concrete without looking up from his bishop.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A missing black rook replaced forty years ago by a brass hex nut painted with nail polish',
      'Two folded newspapers brought every day to insulate the cold concrete bench',
      'A thermos of hot ginger tea divided evenly into two four-ounce cups',
    ],
    initialResonanceCount: 243,
  },
  {
    id: 'story-10',
    slug: 'sixteen-blood-oranges-on-broadway',
    dispatchNumber: 'No. 10',
    title: 'Sixteen Blood Oranges on Broadway',
    subtitle:
      'When a wet paper sack splits at the bottom of the subway stairs, four people on four different schedules suddenly have the same job.',
    category: 'Strangers',
    city: 'San Francisco, CA',
    neighborhood: 'North Beach · Columbus & Broadway',
    timeOfDay: '05:10 PM · Afternoon',
    hour24: 17,
    readingTimeMinutes: 4,
    author: 'Samir Patel',
    authorRole: 'Civic Infrastructure Reporter',
    photographer: 'Lukas Lindqvist',
    overheardQuote:
      'Check under the newspaper box—one of them rolled like it was trying to catch the 30 Stockton bus.',
    overheardContext:
      'Teenager on a skateboard handing two bruised blood oranges and a spare nylon tote to an older shopper.',
    distanceLabel: 'Across the Street',
    leadPhoto: {
      src: '/images/story-grocery-orange.jpg',
      alt: 'Colorful crates of fresh produce and citrus at a neighborhood greengrocer',
      aspectRatio: '16:10',
      caption:
        'Columbus Avenue corner market, 5:10 PM. The wooden crates extend six feet onto the sidewalk under the striped canvas awning.',
      cameraNote: '35mm f/2.8 · ISO 400 · 1/125s · Market awning light',
      subject: 'Stacked wooden crates of fresh neighborhood market produce',
      environment: 'Corner greengrocer sidewalk stand',
      lighting: 'Warm market lamp and late afternoon daylight',
      credit: 'Documentary Archive · Market Series',
    },
    secondaryPhoto: {
      src: '/images/hero-rain-umbrella.jpg',
      alt: 'Pedestrians on a wet city sidewalk at dusk',
      aspectRatio: '4:5',
      caption:
        'Within twenty seconds of the bag tearing, foot traffic parted around the curb like water around a boulder.',
      cameraNote: '35mm f/2.0 · ISO 800 · Street documentary',
      subject: 'Pedestrians navigating a wet evening sidewalk',
      environment: 'Urban intersection at dusk',
      lighting: 'Amber shopfront glow',
      credit: 'Documentary Archive · Street Series',
    },
    excerpt:
      'There is an involuntary choreography to a dropped bag of fruit: before anybody thinks about it, four strangers are already on one knee.',
    body: [
      {
        paragraphs: [
          ' sociologists talk about the "bystander effect" as if cities are laboratories of indifference. Anyone who actually walks a city sidewalk knows the opposite reflex: the Spilled Grocery Protocol.',
          'When the bottom of Mrs. Clara Chen’s brown paper sack gave out ten feet from the Stockton tunnel crosswalk, sixteen Sicilian blood oranges scattered across the slight incline of the pavement like bright coral billiard balls.',
          'Nobody waited to see who else would help. A line cook on his smoke break fielded three oranges with the side of his clog before they reached the gutter. A lawyer in a trench coat dropped to one knee to catch two rolling toward the bus shelter. A sixteen-year-old boy flipped his skateboard upside down on his lap and sprinted ten yards to intercept the fastest runaway by the newsstand.',
        ],
        pullQuote:
          'The greengrocer came out of the doorway without being asked, snapping open a double-bagged canvas tote and tossing in two extra oranges for the ones that hit the curb.',
        fieldNote:
          'Recovery Time: 19 seconds from tear to repacked tote; 16 of 16 oranges accounted for.',
      },
      {
        heading: 'The Ten-Second Village',
        paragraphs: [
          'For nineteen seconds, four strangers who would never have made eye contact on the bus were grinning at one another like teammates who had just turned a double play. The boy on the skateboard handed over the final orange with a slight bow, the cook brushed road grit off Mrs. Chen’s sleeve with his apron towel, and then the crosswalk light chirped.',
          'By the time the bus pulled away, the temporary village had dissolved back into the evening rush, leaving everyone walking half a step lighter.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A line cook using the side of his rubber clog like a hockey goalie stick',
      'Two extra oranges added by the shopkeeper without a word',
      'Four strangers smiling down the block for thirty yards afterward',
    ],
    initialResonanceCount: 176,
  },
  {
    id: 'story-11',
    slug: 'sunday-trim-on-cedar-avenue',
    dispatchNumber: 'No. 11',
    title: 'Sunday Trim on Cedar Avenue',
    subtitle:
      'Once a month, a retired barber sets a kitchen chair on the front porch for his neighbor across the lawn who can no longer drive into town.',
    category: 'Family',
    city: 'Portland, OR',
    neighborhood: 'Sellwood · Cedar Ave',
    timeOfDay: '04:05 PM · Golden Hour',
    hour24: 16,
    readingTimeMinutes: 5,
    author: 'Claire Beaumont',
    authorRole: 'Contributing Essayist',
    photographer: 'Arthur Vance',
    overheardQuote:
      'Keep your chin level, Walt. If you nod while I’m around the ears, you’re going to look like a Marine recruit at church.',
    overheardContext:
      'uben Soto, 61, trimming the sideburns of his next-door neighbor Walter Finch, 86.',
    distanceLabel: 'Across the Street',
    leadPhoto: {
      src: '/images/story-porch-haircut.jpg',
      alt: 'Close documentary portrait of a barber carefully trimming an older man’s beard and hair with scissors',
      aspectRatio: '4:5',
      caption:
        '4:05 PM. Ruben still uses the German steel shears he bought in 1991 when he opened his two-chair shop on Hawthorne.',
      cameraNote: '50mm f/1.8 · ISO 400 · 1/160s · Warm raking sidelight',
      subject: 'Hands with barber shears carefully trimming an older man’s silver beard and hair',
      environment: 'Warm wood-paneled space with afternoon light',
      lighting: 'Golden raking light across hands and silver hair',
      credit: 'Documentary Archive · Craft & Care Series',
    },
    secondaryPhoto: {
      src: '/images/hero-grandfather-hands.jpg',
      alt: 'Quiet domestic portrait in morning light',
      aspectRatio: '4:5',
      caption:
        'After the cape comes off and the porch steps are swept for the birds, Walter’s daughter brings out two glasses of iced cider.',
      cameraNote: '50mm f/2.0 · ISO 200 · Natural light',
      subject: 'Quiet domestic moment at table',
      environment: 'Home interior',
      lighting: 'Soft directional light',
      credit: 'Archival Collection · Public Domain',
    },
    excerpt:
      'Chosen family often begins with a shared fence line and the realization that dignity lives in small routines.',
    body: [
      {
        paragraphs: [
          'When Walter Finch gave up his driver’s license at eighty-four, he didn’t complain about missing the hardware store or the Elks lodge. What bothered him was his collar. For sixty years he had sat in the first chair at Miller’s Barbershop every third Saturday at nine in the morning.',
          'His next-door neighbor Ruben Soto noticed that Walter had stopped sitting out on his front porch swing in the afternoons. When Ruben walked over with a basket of plums to ask why, Walter admitted quietly that he felt "scruffy around the ears" and didn’t want the mail carrier seeing him looking unkempt.',
          'The next Sunday at four o’clock, Ruben walked across the driveway carrying a striped barber cape over his forearm, a spray bottle of warm water, a boar-bristle neck brush, and his Solingen shears.',
        ],
        pullQuote:
          'A haircut takes twelve minutes if you’re in a hurry. On Cedar Avenue, Ruben stretches it to forty-five so they can argue about the Trail Blazers.',
        fieldNote:
          'Porch Note: Silver hair clippings are swept into the flowerbed for nesting sparrows in spring.',
      },
      {
        heading: 'The Dignity of the Mirror',
        paragraphs: [
          'Ruben never lets Walter pay him, though Walter tries every single month to slip a folded ten-dollar bill into the breast pocket of Ruben’s work shirt. Ruben always discovers it while putting his shears away and slips it back under the saucer of Walter’s coffee cup.',
          'At the end of every trim, Ruben holds up a round hand mirror so Walter can inspect the back taper himself, then dusts his collar with talcum powder just the way Miller’s used to do on Saturdays.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A folded ten-dollar bill migrating back and forth between a shirt pocket and a saucer',
      'An extension cord run through the screen door for the neck trimmers',
      'A soft talcum brush kept solely for Sunday afternoons',
    ],
    initialResonanceCount: 208,
  },
  {
    id: 'story-12',
    slug: 'marginalia-on-page-104',
    dispatchNumber: 'No. 12',
    title: 'Marginalia on Page 104',
    subtitle:
      'Inside a $4 used paperback at a neighborhood bookshop, a train ticket and three penciled lines in the margin connect two readers eleven years apart.',
    category: 'Kindness',
    city: 'Edinburgh / Seattle',
    neighborhood: 'Capitol Hill · Mercer Street Books',
    timeOfDay: '06:40 PM · Early Evening',
    hour24: 19,
    readingTimeMinutes: 5,
    author: 'Marcus Thorne',
    authorRole: 'Staff Writer',
    photographer: 'Hannah Alvarez',
    overheardQuote:
      'We never shake the paperbacks out before shelving them. Half the reason people buy a used book is to see where it lived before.',
    overheardContext:
      'Nadia K., bookshop clerk, stamping the inside back cover of a 1998 Vintage paperback.',
    distanceLabel: 'At the Counter',
    leadPhoto: {
      src: '/images/story-bookshop-notes.jpg',
      alt: 'Warm hanging tungsten bulbs illuminating floor-to-ceiling wooden bookshelves in an independent bookshop',
      aspectRatio: '4:5',
      caption:
        '6:40 PM, second aisle by the poetry section. A cardboard box on the counter collects the "Forgotten Bookmarks" found by browsers.',
      cameraNote: '50mm f/1.8 · ISO 640 · 1/80s · Warm tungsten Edison bulbs',
      subject: 'Floor-to-ceiling wooden bookshelves lit by warm hanging bulbs',
      environment: 'Independent second-hand bookshop aisle',
      lighting: 'Warm amber tungsten against deep shadowy shelves',
      credit: 'Documentary Archive · Bookshop Series',
    },
    secondaryPhoto: {
      src: '/images/community-garden-harvest.jpg',
      alt: 'Neighbors gathered in a sunlit community garden',
      aspectRatio: '16:9',
      caption:
        'The bookshop hosts a monthly silent reading hour where neighbors swap annotated copies over chamomile tea.',
      cameraNote: '35mm f/2.8 · ISO 200 · Natural light',
      subject: 'Community members gathered outdoors',
      environment: 'Neighborhood garden',
      lighting: 'Morning daylight',
      credit: 'Documentary Archive · Community Series',
    },
    excerpt:
      'A new book is a private room. A used book is a park bench where someone left their coat behind.',
    body: [
      {
        paragraphs: [
          'Last Thursday evening, Maya Lin pulled a worn paperback copy of Seamus Heaney’s *Opened Ground* from the bottom shelf of a used bookshop on Mercer Street. She had just finished her first week at a new hospital rotation in a city where she knew nobody.',
          'When the book fell open to page 104, a faded orange rail ticket from Glasgow Queen Street to Oban fluttered onto her boot. Next to the third stanza, in neat graphite handwriting dated October 14, 2015, a previous owner had written: *Read this on the 17:12 train after the worst day of my twenties. Keep going—the harbor opens up after Crianlarich.*',
          'Maya stood between the narrow cedar shelves for three minutes rereading the pencil note until the shop cat brushed against her ankle.',
        ],
        pullQuote:
          'Before buying the book for four dollars, she borrowed a pencil from the counter and wrote below the 2015 note: "Received in Seattle, Nov 2026. Needed this tonight."',
        fieldNote:
          'Found Ephemera Log: 148 postcards, 63 train stubs, 19 family recipes, and 9 pressed maple leaves cataloged at the counter.',
      },
      {
        heading: 'The Slowest Postal Service in the World',
        paragraphs: [
          'At the front counter, clerk Nadia keeps a cigar box labeled *Left Behind in Chapter Three*. Customers who find a photograph or a personal letter can leave it in the box in case the original owner ever wanders back in, or leave it tucked inside the book for the next reader.',
          'Maya kept the paperback on her nightstand for a week, then brought it back to the shop’s community swap shelf on Sunday morning so the third line on page 104 could find whoever needed it next.',
        ],
      },
    ],
    smallThingsNoticed: [
      'A cedar cigar box at the register holding found train tickets and photo-booth strips',
      'Penciled checkmarks beside favorite recipes in used cookbooks',
      'Two strangers recommending novels to each other in the fiction aisle',
    ],
    initialResonanceCount: 197,
  },
  {
    id: 'story-13',
    slug: 'saturday-morning-on-bagley-street',
    dispatchNumber: 'No. 13',
    title: 'Saturday Morning on Bagley Street',
    subtitle:
      'On a former foundry parking strip in Corktown, teenagers and retirees sort heirloom tomatoes into yellow buckets for neighbors who can no longer climb stairs.',
    category: 'Community',
    city: 'Detroit, MI',
    neighborhood: 'Corktown · Bagley Street Lot',
    timeOfDay: '08:45 AM · Saturday Morning',
    hour24: 8,
    readingTimeMinutes: 5,
    author: 'Samir Patel',
    authorRole: 'Civic Infrastructure Reporter',
    photographer: 'Keya Wakpala Documentary Archive',
    overheardQuote:
      'Put the cracked beefsteaks in the yellow bucket for sauce today—save the firm ones for Mrs. Henderson’s third-floor crate.',
    overheardContext:
      'Marcus Vance-Osei, 41, biology teacher and garden steward, sorting the morning harvest at the mesh table.',
    distanceLabel: 'Across the Table',
    leadPhoto: {
      src: '/images/community-garden-harvest.jpg',
      alt: 'Young volunteer sorting freshly harvested cucumbers, heirloom tomatoes, and bell peppers beside a yellow bucket at a community garden',
      aspectRatio: '16:9',
      caption:
        'Bagley Street sorting table, 8:45 AM. Everything harvested before ten o’clock is washed and packed into porch-delivery crates by noon.',
      cameraNote: '35mm f/2.8 · ISO 200 · 1/250s · Morning overcast daylight',
      subject: 'Volunteer sorting freshly harvested tomatoes, cucumbers, and green peppers on a wire table',
      environment: 'Neighborhood community garden lot',
      lighting: 'Even morning daylight',
      credit: 'Documentary Archive · Keya Wakpala / Commons (CC BY 2.0)',
    },
    secondaryPhoto: {
      src: '/images/community-soup-window.jpg',
      alt: 'Roasted tomato and lentil soup made from the garden harvest',
      aspectRatio: '16:10',
      caption:
        'Any bruised or split tomatoes that cannot travel in the delivery crates are simmered into soup at the parish kitchen two blocks west.',
      cameraNote: '50mm f/2.0 · ISO 400 · Natural sidelight',
      subject: 'Bowl of warm tomato soup with herbs',
      environment: 'Community kitchen table',
      lighting: 'Soft natural window light',
      credit: 'Documentary Archive · Kitchen Series',
    },
    excerpt:
      'For twenty-two years the lot between the old brick pattern shop and the corner laundromat grew nothing but chicory weeds and mufflers.',
    body: [
      {
        paragraphs: [
          'In 2019, high-school biology teacher Marcus Vance-Osei and three neighbors obtained a five-dollar municipal side-lot lease and spent four weekends hauling broken cinderblocks out of the soil on Bagley Street. Today, thirty-two cedar beds produce nearly a ton of cucumbers, bell peppers, collard greens, and heirloom tomatoes every season.',
          'What makes the Bagley lot different from a private allotment garden is that nobody owns an individual bed. Anyone who works thirty minutes on Saturday morning leaves with a canvas bag of produce, and half of the table’s harvest is packed into wooden crates for twelve older residents on the block who no longer drive.',
          'At 8:45 AM, sixteen-year-old volunteer Deja stands at the galvanized mesh table sorting cucumbers by size while eighty-one-year-old Mr. Albrecht sits in a lawn chair in the shade, tying twine bundles of sweet basil.',
        ],
        pullQuote:
          'When you deliver a crate of still-warm tomatoes to someone’s porch every Saturday, you also find out if their screen door hinge is loose or if they need a prescription picked up.',
        fieldNote:
          'Harvest Ledger: 1,840 lbs grown this season · 12 elder households on the weekly porch route.',
      },
      {
        heading: 'The Porch Route Protocol',
        paragraphs: [
          'The teenagers who run the porch route have a strict rule taught by Marcus: you never just drop the crate on the welcome mat and run like a package courier. You knock, you wait forty seconds for slow knees to reach the door, and you ask how the week went.',
          'Half the time, the teenagers come back to the garden gate carrying empty jars from last month refilled with pickled peppers or peach preserves made by the very people they were checking on.',
        ],
      },
    ],
    smallThingsNoticed: [
      'Four sizes of work gloves hanging on labeled pegs inside the shed door',
      'A five-gallon yellow bucket reserved specifically for "sauce tomatoes"',
      'Returned glass jars filled with homemade relish left on the sorting table',
    ],
    initialResonanceCount: 168,
  },
];

export const STORY_CATEGORIES: ('All' | Story['category'])[] = [
  'All',
  'Friendship',
  'Family',
  'Kindness',
  'Community',
  'Strangers',
];
