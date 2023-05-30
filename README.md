# Restaurant
## Event Target :

<p>Understanding the concept of Event Target is essential for handling events in JavaScript. By attaching event listeners to specific elements and leveraging the Event Target, developers can create interactive web pages that respond to user actions. Whether it's capturing events, removing listeners, or dispatching events, the Event Target provides a powerful mechanism for building dynamic and engaging web applications.</p>

<p> <hr>
What is an Event Target? 
<br> <br>
In JavaScript, an Event Target refers to an object that can receive events and handle them. Typically, an Event Target is an HTML element, such as a button, input field, or the document itself. It serves as a destination for event dispatching and allows event listeners to be attached to it.
 <hr> 
Event Propagation:
<br> <br>
Events in JavaScript propagate through the DOM tree, starting from the target element and traversing up through its ancestors (capturing phase) before descending back down to the target element (bubbling phase). The Event Target plays a vital role in this propagation process.

During event propagation, the event object's target property always refers to the element where the event originated. This property allows event handlers to access the specific element that triggered the event, even if the event propagated through multiple elements.
</p>
