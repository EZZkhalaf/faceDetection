


import React, { useState, useEffect } from 'react';
import './ColorChanger.css'; 

const ColorChanger = ({onRoutChange}) => {



  const [color1, setColor1] = useState('#ff0000');
  const [color2, setColor2] = useState('#0000ff');
  const [elementColor, setElementColor] = useState('#ffffff');
  const [background, setBackground] = useState('linear-gradient(to right, #ff0000, #0000ff)');
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [modal , setModal] = useState(false);//for about us button 



  const toggleModal =() =>{
    setModal(!modal);
  }

  useEffect(() => {
    document.body.style.background = background;
  }, [background]);

  useEffect(() => {
    const newBackground = `linear-gradient(to right, ${color1}, ${color2})`;
    setBackground(newBackground);
  }, [color1, color2]);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleRandomButtonClick = () => {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
    const newBackground = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;
    setBackground(newBackground);
  };

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleKeyPress = (event) => {
    if (inputValue.trim() && event.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleElementColorChange = () => {
    document.querySelectorAll('.color-changer-item').forEach(el => {
      el.style.background = elementColor;
    });
  };

  useEffect(() => {
    handleElementColorChange();
  }, [elementColor]);
 
        return (
            <div className='.bodyy'>
            <nav className="color-changer-navbar">
                <button className="color-changer-btn" id='learnMore'>Learn More</button>
                <button className="color-changer-btn">FatCat</button>
                <button className="color-changer-btn color-changer-btn-left" id='contactUs'>Contact Us</button>
            </nav>

            <h1>Color Picker Project</h1>
            <input
                className="color-changer-color-input"
                type="color"
                name="color1"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
            />
            <input
                className="color-changer-color-input"
                type="color"
                name="color2"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
            />
            <h2>Choose a Color</h2>

            <button className="color-changer-btn" onClick={toggleModal}>about this shit</button>


            {modal &&(
                <div>
                <div  className='overlay'></div>
                    <div className='modal-content'>
                    <button className='closing-tab' onClick={toggleModal}>X</button>
                    <h1>Hello</h1>
                        <div >
                            <p className='yapping'>
                                i made this project to practice using DOM first then i convert it later to React 
                                and below there is a bucket for names and anything u wanna type in it will be enhanced later ...
                                </p>

                        </div>
                </div>
                </div>
            )}


            <div className="color-changer-container">
                <input
                id="color-changer-input"
                type="text"
                name="input"
                placeholder="Enter the input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                />
                <br />
                <button id="color-changer-button" onClick={handleAddItem}>Enter</button>
                <button className="color-changer-btn" id="color-changer-random-button" onClick={handleRandomButtonClick}>Generate Random</button>
                <p>Choose the elements color:</p>
                <input
                className="color-changer-color-input"
                type="color"
                name="color3"
                value={elementColor}
                onChange={(e) => setElementColor(e.target.value)}
                />

                <div className="color-changer-list-container">
                <ul className="color-changer-list">
                    {items.map((item, index) => (
                    <li key={index} className="color-changer-item">
                        {item}
                        <button className="color-changer-btn" onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                    ))}
                </ul>
                <button className="color-changer-btn" onClick={()=>onRoutChange('home')}>go back home</button>

                </div>
            </div>
            </div>
        );

    };

export default ColorChanger;
