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
        text: "choose your person",
        options: [
            {
                text: "Jolean",
                setState: { jolean: true},
                nextText: 2
            },
            {
                text: "Madman",
                setState: { madman: true},
                nextText: 2
            },
            {
                id: 2,
                text: "choose your character",
                options: [
                    {
                        text: "lucian",
                        requiredState: (currentState) => currentState.jolean,
                        setState: { jolean: true, lucian: true },
                        nextText: 3
                    },
                    {
                        text: "darius",
                        requiredState: (currentState) => currentState.madman,
                        setState: { madman: true, darius: true},
                        nextText: 3
                    }
                ]
            },
            {
                id: 3 
            }


        ]
    }
]

startGame()