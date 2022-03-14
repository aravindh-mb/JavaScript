let txt = "welcome to webdevfrontend";
let utterance = new SpeechSynthesisUtterance(txt); 
 window.onclick= () => {
 speechSynthesis.speak(utterance);
}
