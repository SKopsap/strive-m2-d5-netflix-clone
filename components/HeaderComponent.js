export function HeaderComponent() {
  return /*html*/ `
  <header>
    <div class="overlay"></div>
    <div id="video-wrapper" class="position-relative">
      <div style="max-height: 100; width: 100% !important"
        class="position-absolute embed-responsive embed-responsive-16by9">
        <video autoplay="autoplay" loop="loop" muted="muted"
          src="./assets/The Angel Official Trailer [HD] Netflix.mp4"></video>
        <section class="position-absolute" style="
            z-index: 1;
            top: 50%;
            left: 25px;
            width: 100%;
            transform: translateY(-50%);
          ">
          <div class="container-fluid">
            <div class="d-flex-column">
              <div class="container-fluid mb-3">
                <img style="max-width: 30%" src="./assets/angel-h1.png" alt="" />
              </div>
              <div class="mb-3">
                <h5 style="color: white" class="w-50">
                  As the threat of war grows, one spy setsin motion a plan
                  that will change the course of history
                </h5>
              </div>
              <div class="mb-3">
                <button>Play</button>
                <button>More Info</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </header> 
  `
}