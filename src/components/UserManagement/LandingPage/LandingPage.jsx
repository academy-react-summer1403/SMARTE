import NewsArticles from '../../LandingComponents/NewsArticles/NewsArticles'
import Podcast from '../../LandingComponents/Podcast/Podcast'
import Services from '../../LandingComponents/Services/Services'
import BestProfessors from '../../LandingComponents/BestProfessors/BestProfessors'
import PopularCategories from '../../LandingComponents/PopularCategories/PopularCategories'
import TrainingCourse from '../../LandingComponents/TrainingCourse/TrainingCourse'
import SchoolsTitle from '../../LandingComponents/SchoolsTitle/SchoolsTitle'
const LandingPage= () => {
  return (
    <>
      <SchoolsTitle />
      <PopularCategories />
      <TrainingCourse />
      <BestProfessors />
      <Services />
      <NewsArticles />
      <Podcast />
    </>
  )
}

export default LandingPage