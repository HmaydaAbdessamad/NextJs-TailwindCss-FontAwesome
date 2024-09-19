import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (


      <div className=" flex flex-row gap-5 justify-center items-center  h-screen bg-sky-200">
        <h1> this a next js project with tailwind css and font awesome integrated</h1>
          <FontAwesomeIcon
              icon={faHome}
              size="5x"
          />
      </div>


  );
}
