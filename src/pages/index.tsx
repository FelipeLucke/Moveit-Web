import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import {
  ChallengeBox,
  CompletedChallenges,
  Countdown,
  ExperienceBar,
  Profile,
  HeadTitle,
} from '../components';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <ExperienceBar />

        <CountdownProvider>
          <HeadTitle />
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

//Funcao criada de acordo com o padrao que o next defini.
//Ela ira pegar os dados e fornecer para o componente antes dele ser renderizado.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  };
};
