import React, { useEffect } from "react";
import './search.css'

const Search = () =>{
    const [searchQuerry, setSearchQuerry] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(fasle);
    const 
    const fetchCurrencies = () =>{
        fetch(API_URL).then((res) =>{
            return res.json()
        }).then((result)=>{
            console.log(result);
            setCurrencies(result)
        })
    }

    useEffect(()=>{
        fetchCurrencies()
    },[])

    const handleChangeInput = (e) =>{
        const query = e.target.value;
        setSearchQuerry(e.target.value);
        if(!query){
            setSearchResult([]);
            return null
        }
        setIsLoading(true)
        const queryChars = query.split('')
        setTimeout(() => {
            const result = currencies.filter(el =>{
                return queryChars.every(char => el.id.includes(char))
            })
        }, 500);
        setSearchResult(result)
    }

    const renderSearchResult = () =>{
        if(!searchQuery){
            return null
        }
        if(searchResult.length){
            return <div className="Search-result-container">
                {searchResult.map(result =>
                    <div key ={result.id} className="Search-result">
                        {result.name} ({result.symbol})
                    </div>
                        
            )}
            </div>
        }
        if(!isLoading){

        }
    }
    
    return(
        <div className="Search">
            <div>
                <span className="Search-icon"/>
                <input
                    type="text"
                    className="Search-input"
                    placeholder="Currency name"
                    value={searchQuerry}
                    onChange={handleChangeInput}
                />
                {
                    isLoading &&
                    <div className="Saerch-loading">
                        <Loadinng
                        width = "12px"
                        heigth="12px"
                        />
                }
            </div>
        </div>
    )
}



export default Search


