// js/speech.js - Voice-Guided Hands-Free Mode using Web Speech API

class VoiceCookingAssistant {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.isSupported = !!this.synth && 'SpeechSynthesisUtterance' in window;
    this.steps = [];
    this.currentStepIndex = 0;
    this.isPlaying = false;
    this.isPausedState = false;
    this.currentUtterance = null;
    this.onStepChange = null;
    this.onStateChange = null;
    this.selectedVoice = null;

    if (this.isSupported) {
      this.initVoices();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Prefer friendly natural English voices
    this.selectedVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David'))) ||
      voices.find(v => v.lang.startsWith('en')) ||
      voices[0];
  }

  setSteps(steps, onStepChange, onStateChange) {
    this.stop();
    this.steps = steps || [];
    this.currentStepIndex = 0;
    this.onStepChange = onStepChange;
    this.onStateChange = onStateChange;
  }

  start() {
    if (!this.isSupported || this.steps.length === 0) return;
    this.isPlaying = true;
    this.isPausedState = false;
    this.notifyState();
    this.speakCurrentStep();
  }

  speakCurrentStep() {
    if (!this.synth) return;
    this.synth.cancel();

    if (this.currentStepIndex >= this.steps.length) {
      this.announce("You've completed all cooking steps! Bon appétit!", () => {
        this.stop();
      });
      return;
    }

    const stepNum = this.currentStepIndex + 1;
    const totalSteps = this.steps.length;
    const stepText = `Step ${stepNum} of ${totalSteps}. ${this.steps[this.currentStepIndex]}`;

    if (this.onStepChange) {
      this.onStepChange(this.currentStepIndex, stepNum, totalSteps);
    }

    this.announce(stepText, () => {
      // Step reading ended
      this.notifyState();
    });
  }

  announce(text, onEnd) {
    if (!this.synth) return;
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (this.selectedVoice) {
      utterance.voice = this.selectedVoice;
    }
    utterance.rate = 0.95; // Clear cooking pace
    utterance.pitch = 1.0;

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  next() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.speakCurrentStep();
    } else {
      this.announce("That was the final step of the recipe. Enjoy your meal!", () => {
        this.stop();
      });
    }
  }

  previous() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.speakCurrentStep();
    } else {
      this.speakCurrentStep();
    }
  }

  repeat() {
    this.speakCurrentStep();
  }

  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPausedState = true;
      this.notifyState();
    }
  }

  resume() {
    if (this.synth && this.isPausedState) {
      this.synth.resume();
      this.isPausedState = false;
      this.notifyState();
    } else if (this.isPlaying) {
      this.speakCurrentStep();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPausedState = false;
    this.currentUtterance = null;
    this.notifyState();
  }

  goToStep(index) {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
      if (this.isPlaying) {
        this.speakCurrentStep();
      } else if (this.onStepChange) {
        this.onStepChange(this.currentStepIndex, this.currentStepIndex + 1, this.steps.length);
      }
    }
  }

  notifyState() {
    if (this.onStateChange) {
      this.onStateChange({
        isPlaying: this.isPlaying,
        isPaused: this.isPausedState,
        stepIndex: this.currentStepIndex,
        totalSteps: this.steps.length
      });
    }
  }
}

export const voiceAssistant = new VoiceCookingAssistant();
