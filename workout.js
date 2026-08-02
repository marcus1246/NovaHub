// =================================
// NOVAHUB WORKOUT DATABASE
// PART 1
// =================================


// Read workout from URL
const params = new URLSearchParams(window.location.search);
const workout = params.get("workout");



// Workout Database
const workouts = {

    pushups:{

        name:"💪 Push Ups",

        gif:"https://media.giphy.com/media/zcMcG2D8Z4qT6/giphy.gif",

        muscles:"Chest • Triceps • Shoulders",

        reward:"+10 XP",

        sets:"3 Sets × 10 Reps",

        instructions:[

            "Place your hands slightly wider than shoulder width.",

            "Keep your body in a straight line.",

            "Lower until your chest nearly touches the floor.",

            "Push yourself back to the starting position.",

            "Repeat with controlled movement."

        ],

        mistakes:[

            "Letting your hips sag.",

            "Locking your elbows aggressively.",

            "Looking straight forward instead of down.",

            "Moving too fast."

        ]

    },



    squats:{

        name:"🦵 Squats",

        gif:"https://media.giphy.com/media/aclHk1t8aYq3C/giphy.gif",

        muscles:"Quadriceps • Glutes • Hamstrings",

        reward:"+10 XP",

        sets:"3 Sets × 15 Reps",

        instructions:[

            "Stand shoulder-width apart.",

            "Keep your chest up.",

            "Lower your hips until thighs are parallel.",

            "Drive through your heels to stand.",

            "Repeat slowly."

        ],

        mistakes:[

            "Knees collapsing inward.",

            "Lifting your heels.",

            "Rounding your back.",

            "Looking down."

        ]

    },



    lunges:{

        name:"🦵 Lunges",

        gif:"https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",

        muscles:"Glutes • Quads • Hamstrings",

        reward:"+20 XP",

        sets:"3 Sets × 12 Reps Each Leg",

        instructions:[

            "Stand upright.",

            "Step forward with one leg.",

            "Lower until both knees are about 90°.",

            "Push back to standing.",

            "Switch legs."

        ],

        mistakes:[

            "Leaning forward.",

            "Front knee going past toes.",

            "Taking steps that are too short."

        ]

    },



    pullups:{

        name:"💪 Pull Ups",

        gif:"https://media.giphy.com/media/5cZ8Rr6rXcL0c/giphy.gif",

        muscles:"Back • Biceps • Forearms",

        reward:"+30 XP",

        sets:"4 Sets × 8 Reps",

        instructions:[

            "Grip the bar slightly wider than shoulders.",

            "Hang with arms straight.",

            "Pull until your chin clears the bar.",

            "Lower under control.",

            "Repeat."

        ],

        mistakes:[

            "Swinging your body.",

            "Using momentum.",

            "Not lowering fully."

        ]

    },



    burpees:{

        name:"🔥 Burpees",

        gif:"https://media.giphy.com/media/26BRqR8g6J8K9d6rK/giphy.gif",

        muscles:"Full Body",

        reward:"+30 XP",

        sets:"3 Sets × 12 Reps",

        instructions:[

            "Stand upright.",

            "Drop into a squat.",

            "Kick feet back into a plank.",

            "Perform a push-up (optional).",

            "Jump up explosively."

        ],

        mistakes:[

            "Landing stiff-legged.",

            "Skipping full range of motion.",

            "Holding your breath."

        ]

    },



    jumping:{

        name:"🏃 Jumping Jacks",

        gif:"https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif",

        muscles:"Full Body • Cardio",

        reward:"+10 XP",

        sets:"3 Sets × 30 Seconds",

        instructions:[

            "Stand with feet together.",

            "Jump feet apart while raising arms.",

            "Return to the starting position.",

            "Maintain a steady rhythm."

        ],

        mistakes:[

            "Landing heavily.",

            "Poor arm movement.",

            "Going too fast."

        ]

    }

};



// Load Workout Information
const exercise = workouts[workout];

if(exercise){

    document.getElementById("exerciseName").textContent =
    exercise.name;

    document.getElementById("exerciseGif").src =
    exercise.gif;

    document.getElementById("muscles").textContent =
    exercise.muscles;

    document.getElementById("reward").textContent =
    exercise.reward;

    document.getElementById("sets").textContent =
    exercise.sets;



    const instructionList =
    document.getElementById("instructions");

    instructionList.innerHTML = "";



    exercise.instructions.forEach(step=>{

        const li =
        document.createElement("li");

        li.textContent = step;

        instructionList.appendChild(li);

    });



    const mistakeList =
    document.getElementById("mistakes");

    mistakeList.innerHTML = "";



    exercise.mistakes.forEach(item=>{

        const li =
        document.createElement("li");

        li.textContent = item;

        mistakeList.appendChild(li);

    });

}
