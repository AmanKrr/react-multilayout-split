function Home({ setDiveIn }: { setDiveIn: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="homeMain">
      <section className="leftInfoContainer">
        <div className="focusPhrase">
          <h1>
            <span>
              Unleash Dynamic <br />
              Layouts with
            </span>
            <span>"a-multilayout-splitter"</span>
          </h1>
        </div>
        <div className="subFocusContent">
          <p>
            Unlock the power of dynamic layouts, effortlessly adapting to your needs with resizable panes and interactive controls. Customize with
            ease for a tailored user experience.
          </p>
        </div>
        <div className="getStartedBtn">
          <button className="cssbuttons-io-button" onClick={() => setDiveIn(true)}>
            Dive In
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </div>
      </section>
      <section className="rightSplitDesign">
        <div className="mainSection">
          <div className="firstPane">
            <div className="leftSection"></div>
          </div>
          <div className="secondPane">
            <div className="rightTopSection"></div>
            <div className="rightBottomSection"></div>
          </div>
          <div className="thirdPane"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
