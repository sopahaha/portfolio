import styles from './Project.module.scss';

interface projectProps{
  title: string;
  desc: string;
  print:string;
  linkGithub?: string;
  linkPadrao?: string;
}

const ProjectCard = ({title, desc, linkGithub, linkPadrao, print}:projectProps) => {
  return (
    <div className={styles.card}>
        <img src={print} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
        {linkGithub && 
        <a href={linkGithub}>{linkGithub}</a>
        }
        {linkPadrao && 
        <a href={linkPadrao}>{linkPadrao}</a>
        }
    </div>
  );
};

export default ProjectCard;