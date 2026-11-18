(() => {
  const formatHour = (hour) => `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;

  // Opening status, based on Beirut time. Both salons are closed on Sunday.
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Beirut" }));
  const today = now.getDay();
  const hour = now.getHours() + now.getMinutes() / 60;

  document.querySelectorAll(".hours").forEach((el) => {
    const opens = Number(el.dataset.open);
    const closes = Number(el.dataset.close);
    const isOpen = today !== 0 && hour >= opens && hour < closes;

    let detail;
    if (isOpen) {
      detail = `until ${formatHour(closes)}`;
    } else {
      const opensLaterToday = today !== 0 && hour < opens;
      const nextDay = opensLaterToday ? "today" : today === 6 ? "Monday" : "tomorrow";
      detail = `opens ${formatHour(opens)} ${nextDay}`;
    }

    const status = document.createElement("b");
    status.textContent = isOpen ? "Open Now" : "Closed";

    const text = document.createElement("span");
    text.append(status, ` · ${detail}`);

    el.replaceChildren(text);
    el.classList.toggle("is-closed", !isOpen);
    el.title = `Mon – Sat, ${formatHour(opens)} – ${formatHour(closes)}. Closed on Sunday.`;
  });

  // Background video. Phones get a lighter portrait cut; skipped entirely
  // for reduced motion or data saver, in which case the still frame stays.
  const video = document.querySelector(".backdrop-video");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData;

  if (video && !reduceMotion && !saveData) {
    const isPhone = matchMedia("(max-width: 760px)").matches;
    video.src = isPhone ? video.dataset.srcMobile : video.dataset.srcDesktop;

    video.addEventListener(
      "canplay",
      () => {
        video.classList.add("is-ready");
        video.play().catch(() => {});
      },
      { once: true },
    );

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    });
  }

  if (matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".branch").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--y", `${event.clientY - rect.top}px`);
      });
    });
  }
})();
