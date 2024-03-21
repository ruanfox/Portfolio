import styles from './Card.module.css'
import PropTypes from 'prop-types';
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";

const iconMap = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    PHP: <FaPhp />,
    JavaScript: <RiJavascriptFill />,
    Java: <FaJava />,
    TypeScript: <BiLogoTypescript />,
    SCSS: <BsFiletypeScss />
};


function Card({name, description, language, html_url}){
    Card.propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
        language: PropTypes.arrayOf(PropTypes.string).isRequired 
    };    
    
    /*
    if (language.length >= 0) {
        icons = language.map(lang => (
           <span key={lang}>
               {iconMap[lang]}
           </span>
        ));
    }
    */
    console.log(language)
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {
                        language?.map((item, index) => (
                            <span key={index}>
                            {iconMap[item]}{console.log(item)}

                            </span>
                            
                        ))
                    }
                </div>
                <a href={html_url} target="_blank" rel="noopenner norefferer noreferrer" className={styles.botao}>
                    <FaArrowAltCircleRight />
                </a>
            </div>
        </section>
    )
}

export default Card