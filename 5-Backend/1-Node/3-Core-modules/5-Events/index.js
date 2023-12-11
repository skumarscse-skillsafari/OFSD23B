const EventEmitter = require("events");

// EventEmitter => Class => Properties and Methods
// Create instance => const varName = new ClassName()
const userEmitter = new EventEmitter();

// Event
// on("eventType", listenerFunction) => create events
// emit("eventType", callListenerFunction) => execute the events

// Create a event
userEmitter.on("user-event", (name, age) => {
  console.log("I am from userEvent");
  console.log(`User details: Name => ${name} and Age => ${age}`);
});

// Execute the event
// userEmitter.emit("user-event", "John", 23);

// Another event
userEmitter.on("demo-event", () => {
  console.log("I am from demoEvent");
});

userEmitter.emit("demo-event");
