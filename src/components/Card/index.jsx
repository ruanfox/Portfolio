import styles from './Card.module.css'
import { FaHtml5, FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { SiPhp } from "react-icons/si";



// eslint-disable-next-line react/prop-types
function Card({name, description, html_url,language}){
    let icons;

    let map = {
        'Java': <FaJava/> ,
        'HTML': <FaHtml5/>,
        'CSS': <FaCss3Alt/>,
        'JavaScript': <RiJavascriptFill/>,
        'PHP': <FaPhp/>
    }

    switch (language) {
        case "Java":
            icons = <FaJava />;
            break;
        case "HTML, CSS, JavaScript":
            icons = (
                <>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <RiJavascriptFill />
                </>
            );
            break;
            case "JavaScript, HTML, CSS":
                icons = (
                    <>
                        <FaHtml5 />
                        <FaCss3Alt />
                        <RiJavascriptFill />
                    </>
                );
                break;  
                case "JavaScript, CSS, HTML":
                    icons = (
                        <>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <RiJavascriptFill />
                        </>
                    );
                    break;  
        case "HTML, CSS":
            icons = (
                <>
                    <FaHtml5 />
                    <FaCss3Alt />
                </>
            );
            break;
            case "CSS, HTML":
                icons = (
                    <>
                        <FaHtml5 />
                        <FaCss3Alt />
                    </>
                );
                break;
        case "PHP":
            icons = <SiPhp />;
            break;
        default:
            icons = null;
    }


    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {icons}
                </div>
                <a href={html_url} target="_blank" rel="noopenner norefferer noreferrer" className={styles.botao}>
                    <FaArrowAltCircleRight />
                </a>
            </div>
        </section>
    )
}

export default Card