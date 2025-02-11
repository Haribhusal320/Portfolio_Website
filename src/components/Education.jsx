import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

function Education() {
  return (
    <div id="education">
      <div>
        <h1 className="flex items-center justify-center text-center mt-10 mb-5 font-medium font-bold text-4xl gap-3">
        <FontAwesomeIcon icon={faGraduationCap} />
          Education
        </h1>
        <Card />
      </div> 
    </div>
  )
}

export default Education
