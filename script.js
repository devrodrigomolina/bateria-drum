class Bateria {
    constructor() {
        this.sounds = [
            {'key': 'keya', 'url': './sounds/keya.wav'},
            {'key': 'keyc', 'url': './sounds/keyc.wav'},
            {'key': 'keyd', 'url': './sounds/keyd.wav'},
            {'key': 'keye', 'url': './sounds/keye.wav'},
            {'key': 'keyq', 'url': './sounds/keyq.wav'},
            {'key': 'keys', 'url': './sounds/keys.wav'},
            {'key': 'keyw', 'url': './sounds/keyw.wav'},
            {'key': 'keyx', 'url': './sounds/keyx.wav'},
            {'key': 'keyz', 'url': './sounds/keyz.wav'},
        ];
    }
    
    checkTecla() {
        document.addEventListener('keyup', (event) => {
            this.playSound(event.code.toLowerCase());
        });

        document.querySelector('.composer button').addEventListener('click', () => this.inputCheck())
    }
    
    playSound(sound) {
        let soundElement = document.querySelector('#audio');
        let keyElement = document.querySelector(`div[data-key="${sound}"]`)

        this.sounds.forEach(element => {
            if(element.key === sound) {
                soundElement.src = element.url
                soundElement.play()
                
                keyElement.classList.add('active');
                
                setTimeout(() => {
                    keyElement.classList.remove('active');                     
                }, 300);

            }
        });
    }

    inputCheck() {
        let inputValue = document.querySelector('#input').value;

        if(inputValue !== '') {
            let songArray = inputValue.split('')
            
            this.playComposition(songArray)            
        }
    }

    playComposition(songArray) {
        let wait = 0;
        for(let songItem of songArray) {
            setTimeout(() => {
                this.playSound(`key${songItem}`)
                
            }, wait)

            wait += 250

        }
    }
}


const battery = new Bateria()
battery.checkTecla()
