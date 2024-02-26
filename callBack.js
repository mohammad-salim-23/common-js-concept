function greeting(greetingHandler,name){
    greetingHandler(name);
}
function greetingMorning(name){
    console.log("Good Morning! ",name);
}
function greetingEvening(name){
    console.log("Good Evening! ",name);
}

greeting(greetingMorning, 'Nayem');
greeting(greetingMorning, 'Ishmam');
greeting(greetingEvening, 'Sabbir');
greeting(greetingEvening, 'Kabir');

