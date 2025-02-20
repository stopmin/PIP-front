import { Link } from "react-router-dom";
import HomeHeader from "./HomeHeader";

export default function Home() {
  const patientInfo = [
    {
      profileImgSrc: "src/assets/react.svg",
      patientId: "1",
      name: "TaeYoon Kim",
      birth: "2001-06-26",
    },
    {
      profileImgSrc: "src/assets/react.svg",
      patientId: "2",
      name: "DaeHee Han",
      birth: "2003-04-01",
    },
  ];

  return (
    <div className="h-screen w-screen">
      <HomeHeader />
      <div className="h-4/5 w-full border border-black">
        <div className="h-1/6 w-full flex justify-start items-center">
          <div className="h-1/3 w-1/3 ml-5 rounded-md flex justify-center items-center border border-black">
            Patient List
          </div>
        </div>
        <div className="h-5/6 w-full flex flex-col justify-start items-center">
          {patientInfo.map((patient, idx) => {
            return (
              <Link
                to={`/patient/${patient.patientId}`}
                key={idx}
                className="h-1/5 w-11/12 flex justify-start items-center mb-3 rounded-xl border border-black">
                <img
                  src={patient.profileImgSrc}
                  className="h-full w-1/5 mx-3"
                />
                <div className="h-full w-4/5 flex flex-col justify-center items-start">
                  <div>Name: {patient.name}</div>
                  <div>Birth: {patient.birth}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
