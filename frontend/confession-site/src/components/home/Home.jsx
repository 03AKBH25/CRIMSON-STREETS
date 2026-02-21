import styles from './Home.module.css'

import HeroSection from './sections/HeroSection'
import WhySection from './sections/WhySection'
import HowItWorks from './sections/HowItWorks'
import NotSocialMedia from './sections/NotSocialMedia'

import EmotionalPulse from './rightPanel/EmotionalPusle'
import WhisperedConfessions from './rightPanel/WhisperedConfessions'
import EmotionalMeter from './rightPanel/EmotionalMeter'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
        
        <div className={styles.centerSection}>
            <HeroSection/>
            <WhySection/>
            <HowItWorks/>
            <NotSocialMedia/>
        </div>

        <div className={styles.rightSection}>
            <EmotionalPulse/>
            <WhisperedConfessions/>
            <EmotionalMeter/>
        </div>

    </div>
  )
}

export default Home
