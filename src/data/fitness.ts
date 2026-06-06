import type { Drill } from '../types';

export const FITNESS_EXERCISES: Drill[] = [
  // LEGS (12)
  { id: 'f1', name: 'Goblet Squats', description: 'Leg strength.', steps: ['Hold DB at chest.', 'Squat deep.', 'Drive up.'], tips: ['Keep chest up.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12-15' },
  { id: 'f2', name: 'Bulgarian Split Squats', description: 'Single-leg strength.', steps: ['Foot on bench.', 'Lower knee.', 'Drive up.'], tips: ['Balance.'], category: 'legs', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '8-10 per leg' },
  { id: 'f3', name: 'Trap Bar Deadlift', description: 'Power.', steps: ['Grip bar.', 'Hips low.', 'Stand up.'], tips: ['Flat back.'], category: 'legs', duration: 12, intensity: 'high', playersNeeded: 1, equipment: ['trap bar'], sets: 4, reps: '6-8' },
  { id: 'f4', name: 'Lateral Bounds', description: 'Explosiveness.', steps: ['Jump sideways.', 'Land soft.'], tips: ['Bent knee.'], category: 'legs', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 per side' },
  { id: 'f16', name: 'Box Jumps', description: 'Vertical power.', steps: ['Jump on box.', 'Land squat.'], tips: ['Full extension.'], category: 'legs', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '8' },
  { id: 'f21', name: 'Split Squat Jumps', description: 'Leg power.', steps: ['Lunge.', 'Jump/switch.', 'Land.'], tips: ['Use arms.'], category: 'legs', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 per side' },
  { id: 'f25', name: 'Speed Skaters', description: 'Lateral agility.', steps: ['Jump side to side.'], tips: ['Wide jumps.'], category: 'legs', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12 per side' },
  { id: 'f30', name: 'Lunges', description: 'Stability.', steps: ['Step forward.', 'Lower.'], tips: ['Keep torso upright.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 per leg' },
  { id: 'f31', name: 'Burpees', description: 'Cardio.', steps: ['Squat.', 'Plank.', 'Jump.'], tips: ['Explosive.'], category: 'legs', duration: 6, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10' },
  { id: 'f40', name: 'Wall Sit', description: 'Endurance.', steps: ['Squat against wall.'], tips: ['90 degrees.'], category: 'legs', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '60s' },
  { id: 'f41', name: 'Step-Ups', description: 'Power.', steps: ['Step box.', 'Drive up.'], tips: ['Full extension.'], category: 'legs', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['box'], sets: 3, reps: '10 per leg' },
  { id: 'f42', name: 'Glute Bridges', description: 'Glutes.', steps: ['Lie back.', 'Lift hips.'], tips: ['Squeeze glutes.'], category: 'legs', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' },
  
  // ARMS (12)
  { id: 'f5', name: 'Push Press', description: 'Vertical power.', steps: ['Dip.', 'Explode up.'], tips: ['Leg drive.'], category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10-12' },
  { id: 'f7', name: 'Med Ball Slams', description: 'Explosive.', steps: ['Slam ball.'], tips: ['Exhale.'], category: 'arms', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '15' },
  { id: 'f26', name: 'Push-Ups', description: 'Chest/Triceps.', steps: ['Plank.', 'Lower.', 'Push.'], tips: ['Core tight.'], category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15-20' },
  { id: 'f27', name: 'DB Bench Press', description: 'Chest power.', steps: ['Press DB up.'], tips: ['Scapula retracted.'], category: 'arms', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells', 'bench'], sets: 3, reps: '10' },
  { id: 'f29', name: 'DB Shoulder Press', description: 'Shoulders.', steps: ['Press overhead.'], tips: ['Brace core.'], category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10-12' },
  { id: 'f32', name: 'Bicep Curls', description: 'Biceps.', steps: ['Curl DB.'], tips: ['Don\'t swing.'], category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' },
  { id: 'f33', name: 'Tricep Dips', description: 'Triceps.', steps: ['Dip on bench.'], tips: ['Elbows tucked.'], category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '12' },
  { id: 'f35', name: 'Incline Push-Ups', description: 'Upper chest.', steps: ['Hands on bench.'], tips: ['Tight core.'], category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '15' },
  { id: 'f36', name: 'Decline Push-Ups', description: 'Lower chest.', steps: ['Feet on bench.'], tips: ['Hips stable.'], category: 'arms', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 3, reps: '12' },
  { id: 'f37', name: 'Dumbbell Flyes', description: 'Chest.', steps: ['Open arms.'], tips: ['Elbow bend.'], category: 'arms', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' },
  { id: 'f43', name: 'Hammer Curls', description: 'Bicep.', steps: ['Hammer grip curl.'], tips: ['Elbows still.'], category: 'arms', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '12' },
  { id: 'f44', name: 'Skull Crushers', description: 'Triceps.', steps: ['Lower to head.'], tips: ['Elbows in.'], category: 'arms', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10' },

  // BACK (10)
  { id: 'f6', name: 'Dumbbell Rows', description: 'Back strength.', steps: ['Row DB.'], tips: ['Squeeze blade.'], category: 'back', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['dumbbell'], sets: 3, reps: '12 per arm' },
  { id: 'f8', name: 'Pull-Ups', description: 'Upper body.', steps: ['Pull chest.'], tips: ['Avoid swing.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: 'AMRAP' },
  { id: 'f38', name: 'Superman', description: 'Lower back.', steps: ['Lift limbs.'], tips: ['Look down.'], category: 'back', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' },
  { id: 'f54', name: 'Cable Row', description: 'Strength.', steps: ['Pull band.'], tips: ['Retract blades.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' },
  { id: 'f60', name: 'Renegade Row', description: 'Back/Core.', steps: ['Plank, row DB.'], tips: ['Hips still.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['dumbbells'], sets: 3, reps: '10 per arm' },
  { id: 'f61', name: 'Deadlifts', description: 'Back/Total.', steps: ['Lift bar.'], tips: ['Engage back.'], category: 'back', duration: 12, intensity: 'high', playersNeeded: 1, equipment: ['barbell'], sets: 3, reps: '8' },
  { id: 'f62', name: 'Chin-Ups', description: 'Lats.', steps: ['Pull chin.'], tips: ['Full range.'], category: 'back', duration: 10, intensity: 'high', playersNeeded: 1, equipment: ['pull-up bar'], sets: 3, reps: 'AMRAP' },
  { id: 'f63', name: 'Face Pulls', description: 'Rear delts.', steps: ['Pull to face.'], tips: ['Squeeze back.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' },
  { id: 'f64', name: 'Good Mornings', description: 'Hips/Back.', steps: ['Hinge torso.'], tips: ['Flat spine.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' },
  { id: 'f65', name: 'Band Pulldowns', description: 'Lats.', steps: ['Pull band down.'], tips: ['Control.'], category: 'back', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '15' },

  // CORE (12)
  { id: 'f9', name: 'Med Ball Rotations', description: 'Power.', steps: ['Rotate side.'], tips: ['Brace core.'], category: 'core', duration: 8, intensity: 'high', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '10 per side' },
  { id: 'f10', name: 'Shoulder Taps', description: 'Stability.', steps: ['High plank.'], tips: ['Widen feet.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '45s' },
  { id: 'f11', name: 'Pallof Press', description: 'Anti-rotation.', steps: ['Resist band.'], tips: ['Square.'], category: 'core', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['resistance band'], sets: 3, reps: '12 per side' },
  { id: 'f17', name: 'Dead Bug', description: 'Stability.', steps: ['Lower arms/legs.'], tips: ['Back pressed.'], category: 'core', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12 per side' },
  { id: 'f23', name: 'Mountain Climbers', description: 'Cardio.', steps: ['Drive knees.'], tips: ['Fast pace.'], category: 'core', duration: 4, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '45s' },
  { id: 'f24', name: 'Russian Twists', description: 'Obliques.', steps: ['Rotate side.'], tips: ['Look hands.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20 per side' },
  { id: 'f28', name: 'Plank', description: 'Endurance.', steps: ['Hold plank.'], tips: ['Don\'t arch.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '60s' },
  { id: 'f34', name: 'Side Plank', description: 'Obliques.', steps: ['Lift hips.'], tips: ['Straight line.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '30s side' },
  { id: 'f49', name: 'Plank Jacks', description: 'Cardio.', steps: ['Jump legs.'], tips: ['Stable hips.'], category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' },
  { id: 'f50', name: 'V-Ups', description: 'Core.', steps: ['Touch toes.'], tips: ['Controlled.'], category: 'core', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' },
  { id: 'f70', name: 'Leg Raises', description: 'Abs.', steps: ['Lift legs.'], tips: ['Back down.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '15' },
  { id: 'f71', name: 'Bicycle Crunches', description: 'Abs.', steps: ['Pedal legs.'], tips: ['Elbow to knee.'], category: 'core', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20' },

  // MOBILITY (10)
  { id: 'f12', name: 'Hip 90/90', description: 'Mobility.', steps: ['Rotate legs.'], tips: ['Spine tall.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '2 min' },
  { id: 'f13', name: 'World Stretch', description: 'Total.', steps: ['Deep lunge.'], tips: ['Open spine.'], category: 'mobility', duration: 8, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '6 side' },
  { id: 'f14', name: 'Ankle Tilts', description: 'Ankle.', steps: ['Drive knee.'], tips: ['Heel down.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['wall'], sets: 2, reps: '15 leg' },
  { id: 'f22', name: 'Inchworms', description: 'Flexibility.', steps: ['Walk out.'], tips: ['Legs straight.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '8' },
  { id: 'f80', name: 'Cat Cow', description: 'Spine.', steps: ['Arch/Round back.'], tips: ['Breathe.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10' },
  { id: 'f81', name: 'Thoracic Rotation', description: 'Spine.', steps: ['Rotate open.'], tips: ['Look hand.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10 side' },
  { id: 'f82', name: 'Childs Pose', description: 'Back.', steps: ['Stretch forward.'], tips: ['Relax.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1 min' },
  { id: 'f83', name: 'Pigeon Stretch', description: 'Hips.', steps: ['Stretch hip.'], tips: ['Breath.'], category: 'mobility', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '1 min' },
  { id: 'f84', name: 'Neck Tilts', description: 'Neck.', steps: ['Tilt side.'], tips: ['Gentle.'], category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '10 side' },
  { id: 'f85', name: 'Arm Circles', description: 'Shoulders.', steps: ['Circle arms.'], tips: ['Slow.'], category: 'mobility', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 2, reps: '20' },

  // STABILITY (10)
  { id: 'f15', name: 'Single-Leg RDL', description: 'Hamstring.', steps: ['Hinge leg.'], tips: ['Square hips.'], category: 'stability', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 leg' },
  { id: 'f18', name: 'Bird Dog', description: 'Stability.', steps: ['Extend limbs.'], tips: ['Flat back.'], category: 'stability', duration: 5, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 side' },
  { id: 'f19', name: 'Copenhagen Plank', description: 'Groin.', steps: ['Leg on bench.'], tips: ['Hips high.'], category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['bench'], sets: 2, reps: '30s side' },
  { id: 'f20', name: 'Turkish Get-Up', description: 'Shoulder.', steps: ['Stand up.'], tips: ['Watch weight.'], category: 'stability', duration: 10, intensity: 'medium', playersNeeded: 1, equipment: ['kettlebell'], sets: 2, reps: '5 side' },
  { id: 'f90', name: 'Single-Leg Balance', description: 'Balance.', steps: ['Stand 1 leg.'], tips: ['Focus.'], category: 'stability', duration: 3, intensity: 'low', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '1 min' },
  { id: 'f91', name: 'Y-Raise', description: 'Posture.', steps: ['Raise Y.'], tips: ['Engage back.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '12' },
  { id: 'f92', name: 'Dead Bug Ball', description: 'Stability.', steps: ['Press ball.'], tips: ['Back flat.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['medicine ball'], sets: 3, reps: '12 side' },
  { id: 'f93', name: 'Single-Leg Sit', description: 'Stability.', steps: ['Sit 1 leg.'], tips: ['Slow.'], category: 'stability', duration: 5, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '8 side' },
  { id: 'f94', name: 'Side Lunge', description: 'Leg stability.', steps: ['Side lunge.'], tips: ['Balance.'], category: 'stability', duration: 8, intensity: 'medium', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '10 side' },
  { id: 'f95', name: 'Bear Crawl', description: 'Total.', steps: ['Crawl.'], tips: ['Control.'], category: 'stability', duration: 5, intensity: 'high', playersNeeded: 1, equipment: ['none'], sets: 3, reps: '20m' }
];
