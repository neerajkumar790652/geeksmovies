import { createContext,useEffect,useState} from "react";
import axios from 'axios'
const MyContext  = createContext();

export const MovieProvider = ({children})=>{
    const [movies,setMovies] =useState([]);
    const [search,setSearch] =useState('harry potter');
    const [button,setButton] =useState(search)
    const api_key = "7e750fbc";
    useEffect(()=>{
        const Data = async() =>{
          const response = await axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${button}`)
        //   console.log(response.data.Search)
          setMovies(response.data.Search)
        }
        Data()
    },[button])
   
    // console.log("button",button);
    // console.log("search",search)
     
    return(
        <MyContext.Provider value={{movies,setSearch,setButton,search,button}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyContext;