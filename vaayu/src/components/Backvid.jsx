import bgVid from "./../assets/vids/1.mp4";

export default function Backvid() {

  return (
    <div>
      <div className="hmvid">
        <video autoPlay muted loop>
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
