import type { Drill } from '../types';

export const DRILLS: Drill[] = [
  {
    id: '1',
    name: 'Form Shooting',
    description: 'Master your shooting mechanics with high-repetition form work near the basket.',
    steps: [
      'Stand 1 meter from the hoop, directly in front.',
      'Hold the ball in your shooting hand only (remove guide hand initially).',
      'Focus on "L" shape in your arm and ball resting on fingertips.',
      'Shoot the ball with a high arc, aiming for it to drop cleanly through.',
      'Hold your follow-through until the ball hits the floor.'
    ],
    tips: [
      'Your elbow should finish above your eye.',
      'Snap your wrist like reaching into a cookie jar.',
      'Keep your feet shoulder-width apart and knees slightly bent.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '2',
    name: 'Crossover Figure 8',
    description: 'Advanced ball handling drill to improve coordination and low-dribble control.',
    steps: [
      'Stand with feet wide in a low athletic stance.',
      'Dribble the ball in a figure-8 pattern through and around your legs.',
      'Use quick, low crossovers in the middle.',
      'Switch directions after 2 minutes.'
    ],
    tips: [
      'Keep your eyes up, do not look at the ball.',
      'The lower the dribble, the faster your hands must be.',
      'Use your fingertips, not your palms.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '3',
    name: 'Defensive Slides (Lane Agility)',
    description: 'Build lateral speed and defensive endurance using the painted area.',
    steps: [
      'Start at one corner of the key.',
      'Slide laterally to the other side without crossing your feet.',
      'Sprint forward to the elbow.',
      'Slide across the free throw line.',
      'Backpedal to the starting corner.'
    ],
    tips: [
      'Stay low—butt down, chest up.',
      'Lead with your lead foot and push with your back foot.',
      'Arms should be active and wide.'
    ],
    category: 'defense',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['none'],
  },
  {
    id: '4',
    name: 'Mikan Drill',
    description: 'Classic footwork and finishing drill to develop soft touch around the rim.',
    steps: [
      'Start under the basket facing the baseline.',
      'Step with your left foot and finish a right-handed layup off the backboard.',
      'Catch the ball out of the net without it hitting the floor.',
      'Immediately step with your right foot and finish a left-handed layup.',
      'Repeat in a continuous rhythm.'
    ],
    tips: [
      'Keep the ball above your head at all times.',
      'Focus on high-off-the-glass touch.',
      'Develop a "rhythm-step" to stay balanced.'
    ],
    category: 'shooting',
    duration: 5,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '5',
    name: 'Around the World',
    description: 'Comprehensive shooting drill covering 5-7 spots around the perimeter.',
    steps: [
      'Start at one baseline corner.',
      'Shoot until you make it, then move to the wing.',
      'Move to the elbow, then top of the key, then the other elbow, wing, and corner.',
      'Complete the circle and then go back the other way.'
    ],
    tips: [
      'Maintain the same shooting routine at every spot.',
      'Focus on your footwork as you move between spots.',
      'Challenge yourself by doing it with only swishes.'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '6',
    name: 'Corner Three Burner',
    description: 'High-repetition shooting from the most efficient shot in basketball.',
    steps: [
      'Stand in the deep corner.',
      'Receive a pass or spin the ball to yourself.',
      'Catch and shoot 10 times.',
      'Sprints to the opposite corner and repeat.',
      'Do 5 sets of 10 makes.'
    ],
    tips: [
      'Don\'t step on the sideline—practice spatial awareness.',
      'Get your feet set before the ball arrives.',
      'Hold your follow-through even on long shots.'
    ],
    category: 'shooting',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '7',
    name: 'Baseline Drift Jumper',
    description: 'Practice the difficult shot of moving along the baseline into a jump shot.',
    steps: [
      'Start at the wing.',
      'Dribble towards the baseline.',
      '"Drift" laterally along the baseline away from the hoop.',
      'Stop on a dime and rise up for the jumper.',
      'Alternate sides of the court.'
    ],
    tips: [
      'Keep your shoulders square to the basket even while drifting.',
      'Use a hard pound dribble to stop your momentum.',
      'Focus on vertical lift.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '8',
    name: '100 Makes Challenge',
    description: 'The ultimate endurance shooting test to build muscle memory.',
    steps: [
      'Pick 5 spots (Corners, Wings, Top).',
      'Make 20 shots at each spot.',
      'You must move to the next spot only after reaching 20 makes.',
      'Track your total time to complete the 100 makes.'
    ],
    tips: [
      'Don\'t rush—quality over speed.',
      'If you miss 3 in a row, take a breath and reset your form.',
      'Keep a consistent rhythm throughout the drill.'
    ],
    category: 'shooting',
    duration: 30,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '9',
    name: 'Catch and Shoot (Screen Curl)',
    description: 'Simulate coming off a screen for a quick-release jumper.',
    steps: [
      'Start under the basket.',
      'Sprint towards the elbow, "curling" around an imaginary screen.',
      'Catch the pass and immediately square up.',
      'Rise and shoot in one fluid motion.',
      'Alternate curling left and right.'
    ],
    tips: [
      'Show your hands to the passer early.',
      'Plant your inside foot first to help you turn.',
      'Stay low as you come around the screen.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '10',
    name: 'Pump Fake & One-Dribble Pull-up',
    description: 'Master the art of losing a defender and creating space for a mid-range shot.',
    steps: [
      'Catch the ball at the three-point line.',
      'Sell a hard pump fake (keep feet on ground).',
      'Take one explosive dribble to the side or forward.',
      'Elevate for a balanced mid-range jump shot.',
      'Work on going both left and right.'
    ],
    tips: [
      'The pump fake needs to be eye-level to be believable.',
      'The dribble should be low and powerful.',
      'Don\'t lean—keep your core tight for the pull-up.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '11',
    name: 'Swish Only Challenge',
    description: 'Extreme precision shooting drill popular on TikTok to eliminate "lucky" makes.',
    steps: [
      'Pick 5 spots around the mid-range.',
      'A shot only counts if it "swishes" (no rim contact).',
      'If it hits the rim but goes in, it counts as a miss.',
      'Goal is to make 3 swishes at each spot.'
    ],
    tips: [
      'Focus on a higher arc to provide a better entry angle.',
      'Aim for the back-center of the rim.',
      'Mental toughness is key—don\'t get frustrated by clean makes that hit rim.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '12',
    name: 'Step-back "Luka" Special',
    description: 'Modern footwork to create maximum separation from the defender.',
    steps: [
      'Dribble hard towards the rim.',
      'Plant your lead foot and "push" off it backwards.',
      'Land on two feet simultaneously (or 1-2) behind the line.',
      'Release the shot quickly before the defender can recover.'
    ],
    tips: [
      'Sell the drive with your head and shoulders first.',
      'The "push" must be explosive to create real space.',
      'Keep your eyes on the rim even during the step-back.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '13',
    name: 'Minimalist Crossover (The Ghost)',
    description: 'Modern explosive move focusing on deceptive body weight shifts.',
    steps: [
      'Approach a "ghost" defender at medium speed.',
      'Perform a wide "jab" step with your non-dominant foot.',
      'Shift your entire upper body weight towards the jab.',
      'Immediately cross the ball low and hard to the opposite side.',
      'Explode to the rim with one long stride.'
    ],
    tips: [
      'Sell the move with your eyes—look where you are jabbing.',
      'The crossover must be below knee level for maximum speed.',
      'Don\'t waste time with extra dribbles.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '14',
    name: 'Bank Shot Mastery',
    description: 'Developing the high-percentage bank shot from the wings.',
    steps: [
      'Position yourself at the 45-degree wing (mid-range).',
      'Aim for the top-near corner of the square on the backboard.',
      'Shoot with enough arc to "drop" it off the glass.',
      'Move to the other wing and repeat.',
      'Make 20 from each side.'
    ],
    tips: [
      'The backboard is your friend—it absorbs speed.',
      'Aim slightly higher than you think you need to.',
      'Bank shots are most effective when coming off a move.'
    ],
    category: 'shooting',
    duration: 10,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '15',
    name: 'Elbow to Elbow',
    description: 'Conditioned shooting drill moving between the free throw line corners.',
    steps: [
      'Start at the left elbow. Shoot a jumper.',
      'Immediately sprint to the right elbow.',
      'Receive a pass and shoot another jumper.',
      'Continue sprinting back and forth for 2 minutes.',
      'Goal is to make 10+ shots in the time limit.'
    ],
    tips: [
      'Stay low during the transition to the next spot.',
      'Focus on your footwork—don\'t travel as you catch.',
      'Breathe through the fatigue to keep your shot steady.'
    ],
    category: 'shooting',
    duration: 8,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '16',
    name: 'Two-Ball Dribbling (Same Time)',
    description: 'Force both hands to work independently and improve ball control.',
    steps: [
      'Hold a basketball in each hand.',
      'Dribble both balls simultaneously at waist height.',
      'Try dribbling both at knee height (low).',
      'Try dribbling both at shoulder height (high).',
      'Walk forward and backward while dribbling.'
    ],
    tips: [
      'Keep your eyes up—don\'t look at either ball.',
      'If you lose one ball, keep the other one going.',
      'Use your core to stay balanced.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['2 balls'],
  },
  {
    id: '17',
    name: 'Two-Ball Dribbling (Alternating)',
    description: 'Complex coordination drill to build "piston-like" arm strength.',
    steps: [
      'Hold a basketball in each hand.',
      'Dribble the balls in an alternating "piston" rhythm.',
      'As one ball goes up, the other goes down.',
      'Switch between low, fast dribbles and high, slow dribbles.',
      'Try to do a crossover with both balls at once.'
    ],
    tips: [
      'Maintain a consistent beat.',
      'Focus on the ball that feels "weaker" in your hand.',
      'Sit deep in your stance.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['2 balls'],
  },
  {
    id: '18',
    name: 'Spider Dribble',
    description: 'Classic playground drill for lightning-fast hand speed.',
    steps: [
      'Stand in a wide stance, knees bent.',
      'Dribble the ball: Front-Right, Front-Left, Back-Right, Back-Left.',
      'Use very quick taps with your fingertips.',
      'Try to increase speed until the ball is almost a blur.',
      'Keep the ball centered between your legs.'
    ],
    tips: [
      'Don\'t use your palms—fingertips only.',
      'Keep the ball low to the ground.',
      'Look forward, not down.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '19',
    name: 'Cone Zig-Zag (Behind the Back)',
    description: 'Improve ball security while changing directions at speed.',
    steps: [
      'Set up 6 cones in a zig-zag pattern down the court.',
      'Approach the first cone at 70% speed.',
      'Perform a behind-the-back crossover at the cone.',
      'Explode to the next cone and repeat.',
      'Finish with a layup at the end of the line.'
    ],
    tips: [
      'Wrap the ball all the way around your waist.',
      'Keep your knees bent to stay stable during the move.',
      'The "explosion" after the move is more important than the move itself.'
    ],
    category: 'dribbling',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'cones', 'hoop'],
  },
  {
    id: '20',
    name: 'In-and-Out Dribble Attack',
    description: 'Deceptive move to freeze a defender before driving.',
    steps: [
      'Dribble towards a cone or defender.',
      'Bring the ball towards the middle of your body, then "whip" it back out.',
      'Use your head and shoulders to sell the fake inside.',
      'Immediately accelerate past the defender.',
      'Practice with both dominant and non-dominant hands.'
    ],
    tips: [
      'The ball should never actually leave your hand (don\'t carry).',
      'Your foot should jab inside as the ball moves inside.',
      'Keep the dribble low and tight.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '21',
    name: 'Between-the-Legs Continuous',
    description: 'Building comfort with between-the-legs moves in a stationary position.',
    steps: [
      'Stand with one foot forward (split stance).',
      'Dribble the ball between your legs continuously in a "figure-8" or "scissors" motion.',
      'Switch your feet (jump-switch) every 5-10 dribbles.',
      'Increase speed as you get more comfortable.',
      'Try to keep your chest up and eyes forward.'
    ],
    tips: [
      'Keep the ball low—around knee height.',
      'Use a "hard" dribble so it returns to your hand quickly.',
      'Don\'t bend your back; bend your knees.'
    ],
    category: 'dribbling',
    duration: 8,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '22',
    name: 'Pocket Dribble (Control)',
    description: 'Learn to "hang" the ball in your hand to read the defense.',
    steps: [
      'Dribble the ball in place.',
      'Bring the ball back to your "pocket" (just above the hip).',
      'Hold it there for a split second (legal "hang" time).',
      'Immediately transition into a crossover or drive.',
      'Focus on the timing and ball manipulation.'
    ],
    tips: [
      'Do not put your hand under the ball (avoid carrying).',
      'Use the rotation of the ball to keep it in your hand.',
      'This is an elite skill—be patient with the learning curve.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '23',
    name: 'Retreat Dribble (Escape)',
    description: 'Crucial skill for handling double teams and heavy pressure.',
    steps: [
      'Dribble hard towards a cone.',
      'Stop abruptly and take 2-3 "retreat" dribbles backwards.',
      'Keep your body between the ball and the "defender".',
      'Turn your head to look over your shoulder for teammates.',
      'Finish with a quick crossover and drive to the opposite side.'
    ],
    tips: [
      'Stay in a low "power" stance during the retreat.',
      'The dribble should be high and hard during the retreat for control.',
      'Don\'t turn your back completely on the defense.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'cones'],
  },
  {
    id: '24',
    name: 'Hesitation "Hesi" Pull-up',
    description: 'Freeze the defender with a fake stop before shooting.',
    steps: [
      'Dribble at 80% speed towards the elbow.',
      'Momentarily slow down and stand taller (the "hesi").',
      'Look at the rim as if about to shoot.',
      'If the defender freezes, rise up for the jumper.',
      'If the defender jumps, explode to the rim.'
    ],
    tips: [
      'Your off-hand should move towards the ball to sell the fake.',
      'Keep your feet active during the hesitation.',
      'The "hesi" should be subtle but effective.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '25',
    name: 'Smitty Move',
    description: 'A classic half-spin move to catch defenders off balance.',
    steps: [
      'Dribble with your right hand towards the baseline.',
      'Start a clockwise spin move, but only go 180 degrees.',
      'Keep the ball in your right hand (don\'t switch).',
      'Immediately "come back" the way you came and drive.',
      'Practice with both hands.'
    ],
    tips: [
      'The spin must be convincing to pull the defender.',
      'Keep the ball protected by your body.',
      'Work on the footwork—pivot cleanly.'
    ],
    category: 'dribbling',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball'],
  },
  {
    id: '26',
    name: 'Mirror Drill (Partner)',
    description: 'Improve reaction time and lateral quickness by mimicking a partner.',
    steps: [
      'Stand 2 meters away from a partner, both in a defensive stance.',
      'One person is the leader, the other is the mirror.',
      'The leader moves laterally, forward, and backward.',
      'The mirror must stay exactly in front of them at all times.',
      'Switch roles after 1 minute.'
    ],
    tips: [
      'Maintain an arm\'s length distance.',
      'Keep your eyes on the leader\'s chest, not their feet.',
      'Move your feet, don\'t just reach.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['none'],
  },
  {
    id: '27',
    name: 'Wall Sit (Defensive Stance)',
    description: 'Build leg strength and mental toughness for the defensive end.',
    steps: [
      'Lean your back against a wall.',
      'Slide down until your thighs are parallel to the floor.',
      'Hold your arms out wide as if guarding someone.',
      'Stay in this position for 60 seconds.',
      'Repeat 5 times with 30 seconds rest between.'
    ],
    tips: [
      'Keep your back flat against the wall.',
      'Don\'t rest your hands on your knees.',
      'Focus on your breathing to stay calm.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['wall'],
  },
  {
    id: '28',
    name: '4-Corner Closeouts',
    description: 'Practice closing out on shooters in all areas of the court.',
    steps: [
      'Start in the middle of the paint.',
      'Sprint to a cone at the corner, perform a closeout.',
      'Backpedal to the middle.',
      'Sprint to the wing cone, perform a closeout.',
      'Repeat for all 4 perimeter spots.'
    ],
    tips: [
      'High hands on the closeout.',
      'Short, choppy steps as you approach the "shooter".',
      'Stay balanced so you can react to a drive.'
    ],
    category: 'defense',
    duration: 12,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['cones'],
  },
  {
    id: '29',
    name: 'Charge Taking Practice',
    description: 'Learn the proper technique to safely take a charge and earn a foul.',
    steps: [
      'Stand in the path of a "driving" teammate (moving at 40% speed).',
      'Keep your feet set and square.',
      'As contact is made, fall backwards, landing on your butt and rolling back.',
      'Use your arms to break the fall slightly, but keep them tucked.',
      'Yell to alert the officials.'
    ],
    tips: [
      'Don\'t lean into the contact—stay vertical.',
      'Protect your head by tucking your chin.',
      'Be brave—it\'s a game-changing play.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['mats (optional)'],
  },
  {
    id: '30',
    name: 'Defensive Recovery (Sprint & Slide)',
    description: 'Practice recovering after being beaten or during a fast break.',
    steps: [
      'Start at the baseline. Sprint to half court.',
      'Immediately transition into a defensive slide all the way back.',
      'Switch sides and repeat.',
      'Focus on the transition from a full sprint to a controlled slide.'
    ],
    tips: [
      'Turn your hips quickly to transition into the slide.',
      'Keep your chest up as you transition.',
      'Don\'t stand up tall during the transition.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['none'],
  },
  {
    id: '31',
    name: 'The "Kyrie" Wall Dribbling',
    description: 'High-speed fingertip control drill against a vertical surface.',
    steps: [
      'Stand 30cm from a wall.',
      'Extend your arm and dribble the ball against the wall rapidly.',
      'Vary the height from low to high.',
      'Switch hands every 30 seconds.',
      'Try "writing" your name with the ball on the wall.'
    ],
    tips: [
      'Keep your arm extended but not locked.',
      'Use ONLY your fingertips.',
      'Maintain a rhythm even when your shoulder starts to burn.'
    ],
    category: 'dribbling',
    duration: 5,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'wall'],
  },
  {
    id: '32',
    name: 'Box-Out Battle',
    description: 'Physical rebounding drill to master positioning and strength.',
    steps: [
      'Coach or partner shoots the ball.',
      'Defender must immediately find the offensive player and make contact.',
      '"Hook" your arms over theirs and push back with your hips.',
      'Secure the rebound at the highest possible point.',
      'Pivot away from pressure once secured.'
    ],
    tips: [
      'Contact first, then look for the ball.',
      'Stay low to maintain a strong base.',
      'Don\'t just stand there—actively "feel" where the offensive player is moving.'
    ],
    category: 'rebounding',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '33',
    name: 'The "Lillard" Deep Range Prep',
    description: 'Building leg power and range for deep three-pointers.',
    steps: [
      'Start at the three-point line.',
      'Take 5 shots. If you make 3, take a big step back.',
      'Continue moving back until you reach your "break" point.',
      'Focus on transferring power from your legs to your wrist.'
    ],
    tips: [
      'Deep shots come from the legs, not the arms.',
      'Keep your shooting motion fluid—no hitch.',
      'Ensure your guide hand doesn\'t interfere with the shot.'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '34',
    name: 'Chest-to-Overhead Passing Circle',
    description: 'Improve passing speed and ability to change passing lanes.',
    steps: [
      'Stand 4 meters from a wall or partner.',
      'Alternate between sharp chest passes and overhead skip passes.',
      'Focus on "snapping" the ball so it travels in a straight line.',
      'Add a "fake pass" before every actual pass.'
    ],
    tips: [
      'Step into every pass for more power.',
      'Target your partner\'s "shooting pocket".',
      'Thumbs should point down at the end of a chest pass.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 1,
    equipment: ['ball', 'wall/partner'],
  },
  {
    id: '35',
    name: 'Transition Sprints (The 17s)',
    description: 'Elite conditioning drill to build game-winning stamina.',
    steps: [
      'Start at one baseline.',
      'Sprint across the court to the other baseline and back.',
      'Repeat 17 times (lengths of the court).',
      'Goal is to finish under 1 minute 15 seconds.'
    ],
    tips: [
      'Pace yourself for the first 10, then explode for the last 7.',
      'Touch the baseline with your foot every time.',
      'Keep your head up even when tired.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['court'],
  },
  {
    id: '36',
    name: 'Closeout & Contest',
    description: 'Master the art of stopping a shooter without fouling.',
    steps: [
      'Start in the paint. Sprint to a shooter on the wing.',
      'Use "choppy steps" (short, quick steps) as you get close.',
      'Keep one hand high to contest and one hand low to stop the drive.',
      'Maintain an arm\'s length distance.'
    ],
    tips: [
      'Don\'t jump unless the ball has left their hands.',
      'Yell "SHOT!" to communicate with teammates.',
      'Keep your weight on the balls of your feet.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '37',
    name: 'The "Joker" Post-Up Vision',
    description: 'Improve passing out of the post and court awareness.',
    steps: [
      'Position yourself on the low block with your back to the basket.',
      'Dribble once or twice to "feel" the defender.',
      'Keep your head over your shoulder to see the whole court.',
      'Perform a "no-look" pass to a cutting teammate or target.'
    ],
    tips: [
      'Use your body as a shield for the ball.',
      'Wait for the double-team before passing.',
      'Be creative—pass with one hand, overhead, or bounce.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '38',
    name: 'Rim Runs & Finishing',
    description: 'Sprinting transition and finishing through contact.',
    steps: [
      'Sprint from half-court to the rim.',
      'Receive a pass while at full speed.',
      'Finish with a strong layup or dunk.',
      'Partner should use a "heavy bag" or slight contact to challenge you.'
    ],
    tips: [
      'Don\'t slow down to catch the ball.',
      'Keep the ball "high" (near your chin) to avoid getting stripped.',
      'Use the backboard on every layup.'
    ],
    category: 'shooting',
    duration: 12,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop', 'heavy bag (optional)'],
  },
  {
    id: '39',
    name: 'Reaction Ball Drills',
    description: 'Using a reaction ball or tennis ball to improve hand-eye coordination.',
    steps: [
      'Dribble a basketball with one hand.',
      'Toss a tennis ball against a wall with the other hand.',
      'Catch the tennis ball without stopping your dribble.',
      'Repeat 20 times per hand.'
    ],
    tips: [
      'Stay in a deep stance.',
      'If you drop the tennis ball, keep the basketball dribble going.',
      'Focus on the tennis ball, trust your dribbling "feel".'
    ],
    category: 'dribbling',
    duration: 8,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['basketball', 'tennis ball', 'wall'],
  },
  {
    id: '40',
    name: 'Free Throw Fatigue',
    description: 'Practicing the most important shot under physical stress.',
    steps: [
      'Sprint two full court lengths.',
      'Immediately walk to the line and shoot 2 free throws.',
      'Repeat 10 times.',
      'Goal: Make at least 16/20.'
    ],
    tips: [
      'Control your breathing before you shoot.',
      'Stick to your routine every single time.',
      'Visualize the ball going through the net.'
    ],
    category: 'shooting',
    duration: 15,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '41',
    name: 'Full Court Press Shadowing',
    description: 'Practice staying in front of a ball handler the entire length of the court.',
    steps: [
      'One offensive player dribbles from baseline to baseline.',
      'Defender must stay in front, forcing the dribbler to change direction.',
      'Defender should not try to steal, just "shadow" and contain.',
      'Goal is to keep the dribbler from the middle of the court.'
    ],
    tips: [
      'Use "drop steps" to change direction quickly.',
      'Keep your hands active but avoid reaching.',
      'Force the dribbler towards the sidelines.'
    ],
    category: 'defense',
    duration: 15,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'court'],
  },
  {
    id: '42',
    name: 'Active Hands (Deflecting Passes)',
    description: 'Improve reaction time and hand speed to disrupt the opponent\'s offense.',
    steps: [
      'Two offensive players pass the ball back and forth.',
      'Defender stands in the middle, trying to tip or deflect the pass.',
      'Offensive players can use fakes and different pass types.',
      'Defender must stay low and move with the ball.'
    ],
    tips: [
      'Keep your hands at shoulder height.',
      'Don\'t "gamble" too much—stay balanced.',
      'Communicate with your teammates ("Ball!", "Pass!").'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['ball'],
  },
  {
    id: '43',
    name: 'Deny the Ball (Wing)',
    description: 'Learn to prevent your man from receiving the ball in scoring positions.',
    steps: [
      'Offensive player at the wing, passer at the top of the key.',
      'Defender must use an "up" hand in the passing lane.',
      'Maintain "chest-to-shoulder" contact with the offensive player.',
      'Move as the offensive player tries to get open.'
    ],
    tips: [
      'Thumb down in the passing lane.',
      'See both your man and the ball (the "defensive triangle").',
      'If the passer looks away, you can "relax" slightly but stay alert.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['ball'],
  },
  {
    id: '44',
    name: 'Help Side Rotation',
    description: 'Practice the crucial team defensive skill of rotating to help a beaten teammate.',
    steps: [
      'Start on the "weak side" (opposite of the ball).',
      'As an imaginary or real teammate is "beaten", sprint to the midline.',
      'Intercept the driver before they reach the paint.',
      'Communicate "Help!" and "I got your back!"'
    ],
    tips: [
      'Your position depends on where the ball is.',
      'Don\'t wait for the teammate to be beaten—anticipate.',
      'Be ready to recover to your own man if the ball is passed.'
    ],
    category: 'defense',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '45',
    name: 'Box Drill (Defensive Footwork)',
    description: 'Intense footwork drill covering all defensive movements in a small area.',
    steps: [
      'Set up 4 cones in a 3x3 meter square.',
      'Sprint to cone 1, slide to cone 2, backpedal to cone 3, slide to cone 4.',
      'Repeat in the opposite direction.',
      'Stay as low as possible throughout the entire drill.'
    ],
    tips: [
      'Don\'t let your feet touch during the slides.',
      'Explode out of every corner.',
      'Touch every cone with your hand.'
    ],
    category: 'defense',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['cones'],
  },
  {
    id: '46',
    name: 'One-Handed Push Pass',
    description: 'Master the quick, deceptive pass used in modern high-speed offenses.',
    steps: [
      'Hold the ball in your shooting hand.',
      'In one motion from the dribble, "push" the ball towards a target.',
      'Do not bring the ball to your chest.',
      'Practice with both hands at various distances.'
    ],
    tips: [
      'The pass should be a "snap" of the wrist.',
      'Lead your teammate into space.',
      'Keep your eyes on the defense, not the passer.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['ball'],
  },
  {
    id: '47',
    name: 'Bounce Pass Precision (Through Cones)',
    description: 'Develop the accuracy needed to pass through tight defensive windows.',
    steps: [
      'Set up two cones 1 meter apart (the "window").',
      'Stand 4 meters away.',
      'Bounce the ball so it goes exactly between the cones.',
      'Target should catch it at waist height.',
      'Vary the distance and angle.'
    ],
    tips: [
      'The ball should hit the floor about 2/3 of the way to the receiver.',
      'Use backspin for more control.',
      'Step into the pass for extra power.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['ball', 'cones'],
  },
  {
    id: '48',
    name: 'Full Court Baseball Pass',
    description: 'Improve long-distance accuracy for fast-break opportunities.',
    steps: [
      'Stand at one baseline.',
      'Throw a one-handed "baseball" pass to a teammate at the opposite free-throw line.',
      'The ball should travel in a relatively straight line (not too much arc).',
      'Practice hitting the teammate "in stride".'
    ],
    tips: [
      'Use your whole body, not just your arm.',
      'Follow through towards your target.',
      'Be careful not to "overthrow" and lose accuracy.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['ball', 'court'],
  },
  {
    id: '49',
    name: 'Wrap-Around Pass',
    description: 'Learn to pass around a tall defender or through a screen.',
    steps: [
      'Stand in front of a tall "defender" (or a cone).',
      'Step wide with your lead foot.',
      '"Wrap" the ball around the defender\'s waist using one hand.',
      'Deliver a sharp bounce pass to a teammate.',
      'Work on both left and right sides.'
    ],
    tips: [
      'The wider the step, the better the angle.',
      'Keep the ball low to avoid the defender\'s hands.',
      'Use your body to shield the ball initially.'
    ],
    category: 'passing',
    duration: 8,
    intensity: 'low',
    playersNeeded: 2,
    equipment: ['ball', 'tall cone/defender'],
  },
  {
    id: '50',
    name: 'Pocket Pass (Pick & Roll)',
    description: 'The essential pass for any guard in a pick-and-roll situation.',
    steps: [
      'Dribble around a screen.',
      'As the defender "drops", slip a quick bounce pass to the rolling big man.',
      'The pass should go through the "pocket" between the two defenders.',
      'Timing is everything—pass as soon as the roller is open.'
    ],
    tips: [
      'Don\'t stare at the roller—use your peripheral vision.',
      'The pass must be hard enough to beat the recovery.',
      'Practice the timing with different roll speeds.'
    ],
    category: 'passing',
    duration: 12,
    intensity: 'medium',
    playersNeeded: 3,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '51',
    name: 'Outlet Pass Drill',
    description: 'Practice the transition from rebounding to starting the fast break.',
    steps: [
      'Toss the ball off the backboard, jump, and rebound.',
      'While in the air, turn your body towards the sideline.',
      'As soon as you land, deliver a sharp chest or overhead pass to a teammate.',
      'Teammate should be sprinting down the sideline.'
    ],
    tips: [
      'Pivot on your outside foot as you land.',
      'The pass needs to be immediate and accurate.',
      'Yell "OUTLET!" to signal the start of the break.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '52',
    name: 'Touch Passing (Rapid Fire)',
    description: 'Improve ball movement speed by eliminating the "hold" time.',
    steps: [
      'Stand in a circle with 3-4 teammates.',
      'Pass the ball as quickly as possible around the circle.',
      'Rules: No player can hold the ball for more than 0.5 seconds.',
      'Vary the direction and type of pass (chest, bounce, overhead).'
    ],
    tips: [
      'Be ready before the ball arrives.',
      'Use your fingertips to "redirect" the ball.',
      'Keep your feet active and ready to move.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 4,
    equipment: ['ball'],
  },
  {
    id: '53',
    name: 'Behind the Back Pass',
    description: 'Add a high-level creative pass to your game for tight situations.',
    steps: [
      'Dribble with your right hand.',
      'Wrap the ball behind your back and "flick" it with your wrist.',
      'Target a teammate on your left.',
      'Start stationary, then move to a full-speed drive.',
      'Practice with both hands.'
    ],
    tips: [
      'Don\'t let the ball hit your back.',
      'The power comes from the wrist flick.',
      'This is most effective when the defender is expecting a drive.'
    ],
    category: 'passing',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 2,
    equipment: ['ball'],
  },
  {
    id: '54',
    name: 'Suicide Sprints',
    description: 'The classic basketball conditioning drill for speed and stamina.',
    steps: [
      'Start at the baseline.',
      'Sprint to the near free-throw line and back.',
      'Sprint to half court and back.',
      'Sprint to the far free-throw line and back.',
      'Sprint to the far baseline and back.'
    ],
    tips: [
      'Touch the line with your hand every time.',
      'Explode out of your turns.',
      'Keep your head up and push through the "burn".'
    ],
    category: 'conditioning',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['court'],
  },
  {
    id: '55',
    name: 'Jump Rope (Speed)',
    description: 'Improve footwork, coordination, and calf endurance.',
    steps: [
      'Jump rope for 60 seconds at a high pace.',
      'Focus on staying on the balls of your feet.',
      'Incorporate "double-unders" if possible.',
      'Rest for 30 seconds and repeat 5 times.'
    ],
    tips: [
      'Keep your elbows close to your sides.',
      'Use your wrists to turn the rope, not your arms.',
      'Maintain a steady rhythm.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'medium',
    playersNeeded: 1,
    equipment: ['jump rope'],
  },
  {
    id: '56',
    name: 'Box Jumps (Explosive)',
    description: 'Build the vertical power needed for rebounding and finishing.',
    steps: [
      'Stand in front of a sturdy box (40-60cm high).',
      'Jump onto the box, landing softly on both feet.',
      'Step down one foot at a time.',
      'Perform 3 sets of 10 repetitions.'
    ],
    tips: [
      'Use your arms to generate upward momentum.',
      'Land in a controlled squat position.',
      'Focus on "exploding" from the floor.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['plyo box'],
  },
  {
    id: '57',
    name: 'Burpee Broad Jumps',
    description: 'Full-body explosive drill for maximum power and cardiovascular stress.',
    steps: [
      'Perform a standard burpee.',
      'As you jump up, instead of going vertical, jump forward as far as possible.',
      'Land softly and immediately go into the next burpee.',
      'Complete 2 lengths of the court.'
    ],
    tips: [
      'Keep your core tight during the burpee.',
      'Drive your knees forward during the jump.',
      'Focus on continuous movement.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['court'],
  },
  {
    id: '58',
    name: 'Defensive Slide Sprints',
    description: 'Combine lateral quickness with linear speed.',
    steps: [
      'Defensive slide across the width of the court.',
      'Immediately transition into a full sprint to the baseline.',
      'Repeat for 5 minutes.',
      'Focus on the quickness of the transition.'
    ],
    tips: [
      'Stay low in the slide.',
      'Don\'t "lunge" into the sprint—take quick steps.',
      'Maintain intensity throughout the entire 5 minutes.'
    ],
    category: 'conditioning',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['court'],
  },
  {
    id: '59',
    name: 'Continuous Full Court Layups',
    description: 'Practice finishing while under extreme cardiovascular fatigue.',
    steps: [
      'Start at one baseline. Dribble full speed to the other end and make a layup.',
      'Get your own rebound and sprint back for a layup at the other end.',
      'Continue for 4 minutes without stopping.',
      'Must make 25+ layups to "pass".'
    ],
    tips: [
      'Don\'t slow down as you approach the rim.',
      'Keep your eyes on the square.',
      'Breathe through the fatigue.'
    ],
    category: 'conditioning',
    duration: 12,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'hoop', 'court'],
  },
  {
    id: '60',
    name: '"The Gauntlet" (Full Court Dribble/Finish)',
    description: 'High-intensity ball handling and finishing drill.',
    steps: [
      'Dribble full court through 5 staggered cones.',
      'At each cone, perform a different move (crossover, between legs, etc.).',
      'Finish with a strong layup or dunk.',
      'Sprint back to the start and repeat.'
    ],
    tips: [
      'Keep the ball low while weaving through cones.',
      'Explode out of each move.',
      'Vary your moves to keep the drill challenging.'
    ],
    category: 'dribbling',
    duration: 15,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'cones', 'hoop'],
  },
  {
    id: '61',
    name: 'Superman Rebounding (Tipping)',
    description: 'Build finger strength and verticality for offensive boards.',
    steps: [
      'Stand on one side of the rim.',
      'Toss the ball off the backboard.',
      'Jump and "tip" the ball back against the glass with one hand.',
      'Do 10 tips in a row without the ball hitting the rim or floor.',
      'Finish with a made layup.'
    ],
    tips: [
      'Keep your arm extended.',
      'Use only your fingertips.',
      'Stay on the balls of your feet for quick jumps.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '62',
    name: 'Rebound & Outlet (Reaction)',
    description: 'Practice securing the ball and finding the open man immediately.',
    steps: [
      'Partner shoots the ball from the perimeter.',
      'Rebounder must box out a second partner.',
      'Secure the rebound and immediately pivot to find the "outlet" player on the sideline.',
      'Deliver a sharp overhead pass.'
    ],
    tips: [
      'Chin the ball after securing it.',
      'Pivot away from the defender.',
      'The pass should be out in less than 1 second.'
    ],
    category: 'rebounding',
    duration: 12,
    intensity: 'high',
    playersNeeded: 3,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '63',
    name: 'Multiple Tip Rebounding',
    description: 'Develop the "second and third jump" quickness needed for rebounds.',
    steps: [
      'Toss the ball high off the glass.',
      'Jump and tip it twice while still in the air (if possible) or with quick jumps.',
      'On the third jump, secure the ball with two hands.',
      'Land in a power stance and "rip" the ball to your chest.'
    ],
    tips: [
      'Don\'t wait for the ball to come to you—go get it.',
      'Keep your elbows out to protect the ball.',
      'Focus on a quick "reload" jump.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 1,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '64',
    name: 'Put-back Drill (Offensive Board)',
    description: 'Master the art of scoring immediately after an offensive rebound.',
    steps: [
      'Start outside the paint.',
      'As a shot goes up, sprint to the rim.',
      'Secure the offensive rebound while in the air.',
      'Try to put it back in before your feet hit the floor.',
      'If you land, go up immediately with a strong power move.'
    ],
    tips: [
      'Expect every shot to be a miss.',
      'Keep the ball high—don\'t bring it down to your waist.',
      'Use the glass for a soft touch.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  },
  {
    id: '65',
    name: 'Rebound & Rip (Ball Security)',
    description: 'Learn to protect the ball from "strippers" after a rebound.',
    steps: [
      'Secure a rebound from the glass.',
      'As you land, "rip" the ball across your body to the opposite hip.',
      'Keep your elbows out and wide.',
      'A partner should try to "slap" the ball away as you land.',
      'Pivot and clear out space.'
    ],
    tips: [
      'The "rip" must be violent and fast.',
      'Stay low and balanced.',
      'Don\'t foul with your elbows, just create space.'
    ],
    category: 'rebounding',
    duration: 10,
    intensity: 'high',
    playersNeeded: 2,
    equipment: ['ball', 'hoop'],
  }
];
