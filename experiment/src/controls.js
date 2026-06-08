function createOverlay(id, contentHtml) {
  const overlay = document.createElement("div");
  overlay.id = id;
  overlay.className = "study-overlay";
  overlay.innerHTML = contentHtml;
  document.body.appendChild(overlay);
  return overlay;
}

export function createPauseButton(jsPsych, container = document.body) {
  const btn = document.createElement("button");
  btn.id = "pause-btn";
  btn.className = "study-control-btn";
  btn.textContent = "Pause";
  container.appendChild(btn);

  btn.addEventListener("click", () => {
    jsPsych.pauseExperiment();
    const overlay = createOverlay(
      "pause-overlay",
      "<h2>Paused</h2>" +
        "<p>Take a break! Press Resume when you're ready.</p>" +
        "<button id='resume-btn' class='study-control-btn'>Resume</button>"
    );
    overlay.querySelector("#resume-btn").addEventListener("click", () => {
      overlay.remove();
      jsPsych.resumeExperiment();
    });
  });

  return {
    hide: () => { btn.style.display = "none"; },
    show: () => { btn.style.display = ""; },
  };
}

export function createStopButton(jsPsych, container = document.body) {
  const btn = document.createElement("button");
  btn.id = "stop-btn";
  btn.className = "study-control-btn";
  btn.textContent = "Stop study";
  container.appendChild(btn);

  btn.addEventListener("click", () => {
    const overlay = createOverlay(
      "stop-overlay",
      "<h2>Stop study?</h2>" +
        "<p>Are you sure you want to stop? Your progress will be saved.</p>" +
        "<button id='stop-keep-going' class='study-control-btn'>Keep going</button>" +
        "<button id='stop-confirm' class='study-control-btn study-control-btn--stop'>Yes, stop</button>"
    );
    overlay.querySelector("#stop-keep-going").addEventListener("click", () => {
      overlay.remove();
    });
    overlay.querySelector("#stop-confirm").addEventListener("click", () => {
      overlay.remove();
      jsPsych.endExperiment();
    });
  });

  return {
    hide: () => { btn.style.display = "none"; },
    show: () => { btn.style.display = ""; },
  };
}
