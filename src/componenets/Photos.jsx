import React, { useState, useEffect } from 'react'
import Collection from './photos/Collection'
export default function Photos() {
    const data = {
        "categories": [
            { "name": "Все" },
            { "name": "Море" },
            { "name": "Горы" },
            { "name": "Архитектура" },
            { "name": "Города" }
          ],
          "collections": [
            {
              "category": 2,
              "name": "Поход в горы",
              "photos": [
                "https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 1,
              "name": "Море (июнь)",
              "photos": [
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Поездка в Европу",
              "photos": [
                "https://images.unsplash.com/photo-1610010252747-afeb906e2d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1630335856915-3987afdfdc9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1609471374271-0d9b03da0998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Идеальная архитектура",
              "photos": [
                "https://images.unsplash.com/photo-1616578738046-8d6bbb4ee28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1538378918848-29dbc0910082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1614159869126-0f06a742eecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1618840739221-e3adb12c9bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Красивые здания",
              "photos": [
                "https://images.unsplash.com/photo-1616578738046-8d6bbb4ee28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1629774631753-88f827bf6447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1609618486540-8b210e32fe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1608507777998-7b4f2c269120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 4,
              "name": "Путешествие по миру",
              "photos": [
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 2,
              "name": "Путешествие куда-то",
              "photos": [
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 2,
              "name": "Поход в горы",
              "photos": [
                "https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1621682372775-533449e550ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 1,
              "name": "Море (июнь)",
              "photos": [
                "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1621335223658-0ebd89004d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlYSUyMGFlc3RoZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Поездка в Европу",
              "photos": [
                "https://images.unsplash.com/photo-1610010252747-afeb906e2d55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1630335856915-3987afdfdc9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1609471374271-0d9b03da0998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1613390792897-aa0c06a52332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Идеальная архитектура",
              "photos": [
                "https://images.unsplash.com/photo-1616578738046-8d6bbb4ee28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1538378918848-29dbc0910082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1614159869126-0f06a742eecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1618840739221-e3adb12c9bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 3,
              "name": "Красивые здания",
              "photos": [
                "https://images.unsplash.com/photo-1616578738046-8d6bbb4ee28e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1629774631753-88f827bf6447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1609618486540-8b210e32fe79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1608507777998-7b4f2c269120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGFyY2hpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 4,
              "name": "Путешествие по миру",
              "photos": [
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              ]
            },
            {
              "category": 2,
              "name": "Путешествие куда-то",
              "photos": [
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              ]
            }

          ]
        
    }
    
    const [categories, setCategories] = useState(data.categories) // для меню
    const [pickCategory, setPickCategory] = useState(2) // выбранная категория
    const textCategories = { // для меню
      0: "Все",
      1: "Море",
      2: "Горы",
      3: "Архитектура",
      4: "Города",
    }
    const [value, setValue] = useState("")
    const onClickPickCategory = (value) => {
      setPickCategory(value)
    }
    const onChangeValue = (event) => {
      setValue(event.target.value)
    }

    const [dataPickCategory, setDataPickCategory] = useState([])
    useEffect(() => {
      setDataPickCategory(data.collections.filter((item) => {if(pickCategory == 0){return item}else{return item.category == pickCategory}}))
      setCurrentPage(1)
    }, [pickCategory ])
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage,] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredElements = dataPickCategory.filter((item) => {return item.name.toLowerCase().includes(value.toLowerCase())})
    const currentItems = dataPickCategory.filter((item) => {return item.name.toLowerCase().includes(value.toLowerCase())}).slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredElements.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
        <div className='section section_5'>
            <div className="photos">
                <h1>Моя коллекция фотографий</h1>
                <div className="top">
                    <ul className="tags">
                    {categories.map((item, index)  => 
                      <li className={`${item.name == textCategories[pickCategory] ? "active" : ""}`} key={item.name} onClick={() => onClickPickCategory(index)}>{item.name}</li> 
                    )}
                    </ul>
                    <input value={value} onChange={onChangeValue}  className="search-input" placeholder="Поиск по названию" />
                </div>
                <div className="content">
                  {currentItems
                  .map((item, index) =>
                  value.toLowerCase() == item.name.toLowerCase() && (<Collection addClass={"searted"} key={index} name={item.name} images={item.photos}/>) ||
                  pickCategory == 0 && (<Collection key={index} name={item.name} images={item.photos}/> ) ||
                  item.category == pickCategory && (<Collection key={index} name={item.name} images={item.photos}/> )
                  )}
                </div>
                  {filteredElements.length > 3 ?
                  <ul className="pagination">
                    {pageNumbers.map(number => (
                      <li key={number} onClick={() => setCurrentPage(number)} className={`${number == currentPage ? "active" : ""}`}>
                        {number}
                      </li>
                    ))}
                  </ul>
                  : <div></div>
                  }
            </div>
        </div>
  )
}
