  function allowDrop(event) {
        event.preventDefault();
      }
      function drag(event) {
        event.dataTransfer.setData("text", event.target.outerHTML);
      }
      function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var secondFrameContent = document.getElementById("secondFrameContent");
  if (!secondFrameContent.contains(event.target)) {
    secondFrameContent.innerHTML += data;
  }
}
      function dragOver(event) {
        event.preventDefault();
        event.target.classList.add("drag-over");
      }

      function dragLeave(event) {
        event.target.classList.remove("drag-over");
      }