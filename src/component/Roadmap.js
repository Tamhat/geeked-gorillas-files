import React from "react";
import "../styles/roadmap.css";
import crossmap from "../assets/crossmap.png";
import cartmin from "../assets/Cart-min.png";

const Roadmap = () => {
  return (
    <div className="roadmap ">
      <div className="row">
        <div className="col-md-6">
          <img src={crossmap} alt="crossmap" className="img-fluid mt-5 cross" />
        </div>
        <div className="col-md-6 desc">
          <h3 className="mt-4 mb-4">ROADMAP</h3>
          <h1>Geeked Gorillas </h1>
          <p>
            Geeked gorillas is an innovative way that connects entrepreneurs
            with like minded individuals, with an online community and in person
            events. 10% of the revenue will be reimbursed into the community. In
            the future we will work with software developers and make these
            NFT’s come to life in the meta verse!! This exclusive NFT project
            allows you to access our V.I.P in person events hosted on mansions,
            yachts, and private dinners etc… we are emphasizing the importance
            of in person congregations so all of our NFT owners can network not
            only in the NFT space, but other spaces as well. Every month we will
            be hosting different in person events. Owners will be randomly
            selected to attend these V.I.P in person events. 25 of our holders
            will be randomly selected to receive an exclusive chain of their
            NFT. For decades various species of gorillas have been subject to
            uncontrolled human hunting, habitat loss, and the ravages of human
            conflict. We will be donating 5% to various gorilla wildlife
            preservation funds. Subsequently, all gorilla species are classified
            as endangered by the international union for conservation of nature.
            We will be making a meta verse purchase (likely in Decentraland).
            This is an opportunity you won’t want to miss, stay tuned geeked
            Gorillas
          </p>
          <button class="mint-m">
            <img alt="catmin" src={cartmin} className="mint-p" />
            <span>MINT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
