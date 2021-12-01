const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame() {
 state = {}
 showTextNode(1)
}


function showTextNode(textNodeIndex) {
 const textNode = textNodes.find(textNode => textNode.id ===
     textNodeIndex)
     textElement.innerText = textNode.text
     while (optionButtonsElement.firstChild) {
         optionButtonsElement.removeChild(optionButtonsElement.firstChild)
     }
     textNode.options.forEach(option => {
        if (showOption(option)) {
          const button = document.createElement('button')
          button.innerText = option.text
          button.classList.add('btn')
          button.addEventListener('click', () => selectOption(option))
          optionButtonsElement.appendChild(button)
        }
      })
    }



function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: "choose where to start",
        options: [
            {
                text: "North America",
                setState: { northAmerica: true},
                nextText: 2
            },
            {
                text: "South America",
                setState: { SouthAmerica: true},
                nextText: 2
            },
            {
                text: "Europe",
                setState: { Europe: true},
                nextText: 2
            },
            {
                text: "Africa",
                setState: { africa: true},
                nextText: 2
            },
            {
                text: "Asia",
                setState: { asia: true},
                nextText: 2
            },
            {
                text: "Australia",
                setState: { australia: true},
                nextText: 2
            },
            {
                id: 2,
                text: "where would you like to travel to?",
                options: [
                    {
                        text: "NorthAmerica",
                        requiredState: (currentState) => currentState.northAmerica,
                        setState: { northAmerica: true },
                        nextText: 3
                    },
                    {
                        text: "SouthAmerica",
                        requiredState: (currentState) => currentState.SouthAmerica,
                        setState: { SouthAmerica: true },
                        nextText: 4
                    },
                    {
                        text: "Europe",
                        requiredState: (currentState) => currentState.Europe,
                        setState: { europe: true },
                        nextText: 5
                    },
                    {
                        text: "Africa",
                        requiredState: (currentState) => currentState.africa,
                        setState: { africa: true },
                        nextText: 6
                    },
                    {
                        text: "Asia",
                        requiredState: (currentState) => currentState.asia,
                        setState: { asia: true },
                        nextText: 7
                    },
                    {
                        text: "Australia",
                        requiredState: (currentState) => currentState.australia,
                        setState: { australia: true },
                        nextText: 8
                    },
                ]
            },
            {
                id: 3,

            }


        ]
    }
]

startGame()