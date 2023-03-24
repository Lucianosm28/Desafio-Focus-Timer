export default function Controls({
    playButton,
    pauseButton,
    body
  }) {
    function play() {
      playButton.classList.add('hide')
      pauseButton.classList.remove('hide')
    }
    function reset() {
      playButton.classList.remove('hide')
      pauseButton.classList.add('hide')
    }
    function changeButtonBG(button) {
      button.classList.toggle('off')
      button.classList.toggle('on')
    }
    return {
      play,
      reset,
      changeButtonBG
    }
  }
