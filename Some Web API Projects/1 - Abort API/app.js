//select video
const url = "raba.mp4";

//select video wrapper, buttons and report

  const videoWrapper = document.querySelector('.videoWrapper');
  const downloadBtn = document.querySelector('.download');
  const abortBtn = document.querySelector('.abort');
  const report = document.querySelector('.reports');

  let controller;
  let progressAnim;
  let animCount = 0;

  downloadBtn.addEventListener('click', fetchVideo);

  abortBtn.addEventListener('click', () => {
    controller.abort();
    console.log('Download aborted');
    downloadBtn.classList.remove('hidden');
  });

  function fetchVideo() {
    controller = new AbortController();``
    const signal = controller.signal;
    downloadBtn.classList.add('hidden');
    abortBtn.classList.remove('hidden');
    report.textContent = 'Video awaiting download...';
    fetch(url, { signal })
    .then((response) => {
      if (response.status === 200) {
        runAnimation();
        setTimeout(() => console.log('Body used: ', response.bodyUsed), 3000);
        return response.blob();
      } else {
        throw new Error('Failed to fetch');
      }
    })
    .then((myBlob) => {
      const video = document.createElement('video');
      video.setAttribute('controls', '');
      video.src = URL.createObjectURL(myBlob);
      videoWrapper.appendChild(video);

      videoWrapper.classList.remove('hidden');
      abortBtn.classList.add('hidden');
      downloadBtn.classList.add('hidden');

      report.textContent = 'Video ready to play';
    })
    .catch((e) => {
      abortBtn.classList.add('hidden');
      downloadBtn.classList.remove('hidden');
      report.textContent = 'Download error: ' + e.message;
    })
    .finally(() => {
      clearInterval(progressAnim);
      animCount = 0;
    });
  }

  function runAnimation() {
    progressAnim = setInterval(() => {
      switch (animCount++ & 3) {
        case 0: report.textContent = 'Download occuring; waiting for video player to be constructed'; break;
        case 1: report.textContent = 'Download occuring; waiting for video player to be constructed.'; break;
        case 2: report.textContent = 'Download occuring; waiting for video player to be constructed..'; break;
        case 3: report.textContent = 'Download occuring; waiting for video player to be constructed...'; break;
      }
    }, 3000);
  }
