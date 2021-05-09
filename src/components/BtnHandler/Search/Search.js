import React from 'react'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Drawer from '@material-ui/core/Drawer'
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from 'react';
import {womens, mens, shoes} from '../../../data'
import ProductItem from '../../ProductItem/ProductItem'
import CloseIcon from '@material-ui/icons/Close';
import './Search.css'

function SearchBtn(props) {
    const [top, setTop] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState([...womens, ...mens, ...shoes])
    const [found, setFound] = useState([])
    useEffect(() => {
        watchValue(searchValue)
    }, [searchValue])

    const watchValue = (searchValue) => {
        //console.log('Search ', searchValue);
        //console.log('Data ', data);

        let found = data.filter((item) => {
            if(  
                (searchValue !== '') &&  
                ((item.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) ||
                (item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) ||
                (item.tags.includes(searchValue))) 
            )
            {
                return true
            }

            return false
        })

        setFound(found)
        console.log('Search Found ', found)
    }
    
    const toggleDrawer = (anchor, open) => (event) => {


        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setTop(open)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleCloseSearch = (e) => {
        e.preventDefault()

        setTop(false)
    }
    return (
        <React.Fragment>
            <div className="search-icon">
                <button className="btn-dropdown-toggle" onClick={toggleDrawer("top", true)}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>

                <Drawer  anchor="top" open={top} onClose={toggleDrawer("top", false)} >
                    <form className="search-area" noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div>
                            <div className='header___search' style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <h5>What are you looking for ?</h5>
                                <span onClick={handleCloseSearch}>
                                    <CloseIcon style={{ fontSize: 20 }}/>
                                </span>
                                
                            </div>
                            <TextField
                                fullWidth
                                id="standard-search"
                                label="Search field"
                                type="search"
                                onChange={e => setSearchValue(e.target.value)}
                                value={searchValue}
                            />
                        </div>
                    </form>
                    <div id='style-7' className='found-items' style={{overflowX: 'hidden', paddingBottom: 50}}>
                        <span style={{color: '#303030', fontSize: 1 + 'rem', marginLeft: 80}}>
                            {
                                found.length ? '(Found ' + found?.length + ' items)' : 'No result'
                            }
                        </span>
                        <div className='row'>
                            
                            {
                            found?.map(item => {
                                return(
                                    <div className='col-6 col-md-4 col-lg-3' style={{marginTop: 2 + 'rem'}}>
                                        <ProductItem
                                            data={item}
                                        />
                                    </div>  
                                )
                            })
                        }
                        </div>
                    </div>
                </Drawer>
            </div>
        </React.Fragment>
    )

}

export default SearchBtn