 // Acceptability questions
const acceptability = [
    {
        type: jsPsychInstructions,
        css_classes: ['instructions'],
        pages: [
            `<p>Please answer the following short questions.</p>`
        ],
        show_clickable_nav: true,
        data: {trialphase: "pre_debrief_instructions"},
        simulation_options:{
            simulate: false
        }
    },
    {
        type: jsPsychSurveyLikert,
        preamble: `<p>Please answer these questions regarding the card choosing game:<p>`,
        questions: [
            {
                prompt: "How difficult was the card choosing game?",
                labels: ["1<br>Not at all", "2", "3", "4", "5<br>Very difficult"],
                required: true,
                name: "pilt_difficulty"
            },
            {
                prompt: "How enjoyable was the card choosing game?",
                labels: ["1<br>Not at all", "2", "3", "4", "5<br>Very enjoyable"],
                required: true,
                name: "pilt_enjoy"
            },
            {
                prompt: "Was it clear to you what you needed to do in the card choosing game?",
                labels: ["1<br>Not clear at all", "2", "3", "4", "5<br>Extremely clear"],
                required: true,
                name: "pilt_clear"
            }
        ],
        data: {
            trialphase: "acceptability_pilt"
        },
        simulation_options: {
            simulate: false
        }
    },
    {
        type: jsPsychSurveyText,
        questions: [
            {
                prompt: "Was there anything you did that helped you complete the card choosing game more easily?",
                columns: 35,
                rows: 2,
                value: '',
                name: "vigour_strategy",
                required: true
            },
        ],
        data: {
            trialphase: 'debrief_pilt'
        },
        simulation_options: {
            simulate: false
        }
    },
    {
        type: jsPsychSurveyText,
        questions: [
        {
            prompt: "Was there anything unclear in the instructions?",
            columns: 35,
            rows: 2,
            value: '',
            name: "instructions",
            required: true
        }
        ],
        data: {
            trialphase: 'debrief_instructions'
        },
        simulation_options: {
            simulate: false
        }
    }
]