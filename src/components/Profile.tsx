import styles from "../styles/components/Profile.module.css";

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img  src={"https://avatars.githubusercontent.com/u/53802601?s=460&u=22fbb678bf0d0a563a7763475215b2b351bcf0a0&v=4"} alt="Perfil logado"/>
      <div>
        <strong>Felipe Lückemeyer</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}