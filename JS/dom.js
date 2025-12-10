<!DOCTYPE html>
<html>
<body>
  <button onclick="createParagraphs()">Go</button>
  <div id="output"></div>

  <script>
    function createParagraphs() {
      const p1 = document.createElement("p");
      p1.className = "paragraph";
      p1.textContent = "This is first paragraph";

      const p2 = document.createElement("p");
      p2.className = "paragraph";
      p2.textContent = "This is second paragraph";

      const output = document.getElementById("output");
      output.appendChild(p1);
      output.appendChild(p2);
    }
  </script>
</body>
</html>