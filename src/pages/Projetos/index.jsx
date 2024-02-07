import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'
function Projetos (){

    const [repositories, setRepositories] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [languagesStr, setLanguagesStr] = useState([]);


    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/ruanfox/repos?page=18per_page=50')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    },[])

    useEffect(() => {
        const fetchLanguages = async (url) => {
          const response = await fetch(url);
          const data = await response.json();
          return Object.keys(data);
        };
    
        const fetchData = async () => {
          const languagesPromises = repositories.map((repo) => fetchLanguages(repo.languages_url));
          const languagesData = await Promise.all(languagesPromises);
          setLanguages(languagesData);
        };
    
        fetchData();
      }, [repositories]);

    
      useEffect(() => {
        languages.forEach((languageArray, index) => {
          let finalStr = "";
    
          languageArray.forEach((language, localIndex) => {
            finalStr += language;
    
            if (localIndex < languageArray.length - 1) {
              finalStr += ", ";
            }
          });
    
          setLanguagesStr((prevLanguagesStr) => {
            const newLanguagesStr = [...prevLanguagesStr];
            newLanguagesStr[index] = finalStr;
            return newLanguagesStr;
          });
        });
      }, [languages]);
    

    return(
        <section className={styles.projetos}>
            <h2>Projetos</h2> 
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo, index) => (
                                <Card 
                                    key={repo.id} 
                                    name={repo.name} 
                                    description={repo.description} 
                                    language={languagesStr[index]} 
                                    html_url={repo.html_url}
                                    />
                            ))
                        }
                    </section>
                ):(
                    <p>Carregando repositorios...</p>
                )
            }
        </section>
    )
}

export default Projetos