// handleButtonClick.js
export const ButtonClickFetch = ({ input, user,   setImgurl, setUserEntries}) => {
    setImgurl(input); // This sets the imgurl in the parent
    
    fetch('http://localhost:3000/detectFaces', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imgurl: input,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (input && response) {
          // Update the image count on the server
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then(response => response.json())
            .then(cnt => {
              // Update the state with new entries count
              setUserEntries(cnt);
            });
  
          // Display the face box
          displayFaceBox(calculateFaceLocations(response));
        }
      })
      .catch(err => console.log('Error:', err));
  };
  

 const  calculateFaceLocations = (regions) => {
    if (regions && regions.length > 0) {
      const cFace = regions[0].region_info.bounding_box;
      const img = document.getElementById('imgg');
      const width = Number(img.width);
      const height = Number(img.height);
      console.log(width, height);
  
      return {
        leftcol: cFace.left_col * width,
        toprow: cFace.top_row * height,
        rightcol: width - cFace.right_col * width,
        bottomrow: height - cFace.bottom_row * height,
      };
    } else {
      console.log("No face regions detected");
      return {};  // Return an empty object or handle it as needed
    }
  };

  const displayFaceBox = (box) => {
    this.setState({ box: box });
  };

