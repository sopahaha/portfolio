import styles from './Cube.module.scss';
import eu2 from "/imgs/eu2.jpg"
import eu3 from "/imgs/eu3.jpg"
import eu4 from "/imgs/eu4.jpg"
import eu5 from "/imgs/eu5.jpg"
import eu6 from "/imgs/eu6.jpg"
import eu7 from "/imgs/eu7.jpg"



const Cube = () => {
  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.front}`}>
            <img src={eu2} alt="" />
        </div>
        <div className={`${styles.face} ${styles.back}`}>
            <img src={eu3} alt="" />
        </div>
        <div className={`${styles.face} ${styles.right}`}>
            <img src={eu4} alt="" />
        </div>
        <div className={`${styles.face} ${styles.left}`}>
            <img src={eu5} alt="" />
        </div>
        <div className={`${styles.face} ${styles.top}`}>
            <img src={eu6} alt="" />
        </div>
        <div className={`${styles.face} ${styles.bottom}`}>
            <img src={eu7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cube;