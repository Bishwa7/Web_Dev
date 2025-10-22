
type eventType = "click" | "scroll" | "mouseMove";

type excludeEventType = Exclude<eventType, "scroll">    // "click" | "mouseMove"

function handleEvent (event : excludeEventType){
    console.log(`Handling event ${event}`)
}

handleEvent("click")
// handleEvent("scroll")    // won't work because it is excluded