import React from "react";
import "./Main.css";
import mac from "../images/image-computer.png";
import devices from "../images/image-devices.png";
import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";
import g from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import m from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vector from "../images/logo-vector-graphics.png";
const Main = () => {
  return (
    <div className="mainContainer">
      <div className="macImgInfo">
        <img className="macImg" src={mac} alt="asdasd" />
        <div className="macImgInner">
          <div className="macImgInfoInner">
            <h2 className="macImgInfoHeader">Quick Search</h2>
            <p className="macImgInfoParag">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="macImgInfoInner">
            <h2 className="macImgInfoHeader">iCloud Sync</h2>
            <p className="macImgInfoParag">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="macImgInfoInner">
            <h2 className="macImgInfoHeader">iCloud Sync</h2>
            <p className="macImgInfoParag">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className="iosInfo">
        <h1 className="macImgInfoHeader">Access Clipboard anywhere</h1>
        <p className="macImgInfoParag">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img className="devices" src={devices} alt="sadasd" />
        <h1 className="macImgInfoHeader">Supercharge your workflow</h1>
        <p className="macImgInfoParag">
          We’ve got the tools to boost your productivity.
        </p>
      </div>
      <div className="componentsRow">
        <div className="component">
          <img className="" src={blacklist} alt="asdasd" />
          <h5 className="newHeader">Create blacklists</h5>
          <p className="newParag">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="component">
          <img className="" src={text} alt="asdad" />
          <h5 className="newHeader">Plain text snippets</h5>
          <p className="newParag">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="component">
          <img className="" src={preview} alt="asdas" />
          <h5 className="newHeader">Sneak preview</h5>
          <p className="newParag">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
      <div className="imagesRow">
        <img className="icons" src={g} alt="asdsad" />
        <img className="icons" src={ibm} alt="sdasd" />
        <img className="icons" src={m} alt="sadsad" />
        <img className="icons" src={hp} alt="asdasd" />
        <img className="icons" src={vector} alt="asdsadd" />
      </div>
      <div className="download">
        <h1>Clipboard for iOS and Mac OS</h1>
        <p className="newParag">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="downloadButtons">
          <button className="downloadIos">Download for iOs</button>
          <button className="downloadMac">Download for Mac OS</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
