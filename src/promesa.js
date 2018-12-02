import React from 'react'

const ClientId = "c937dbc598f55a81e5b7f3d5db098732c49e3c273cea1fe8ca3ba4e91976245b";
const endpoint = "https://api.unsplash.com/search/photos";

class Promesa extends React.Component{

    constructor(props){
        super(props);
        this.query = '';
        this.trackQueryValue = this.trackQueryValue.bind(this);
        this.search = this.search.bind(this);

        this.state = {
            images: []
        }
    }

    search(){
        fetch(`https://deebookapi.herokuapp.com/Usuarios`)
        .then(response=>{
            return response.json()
        })
        .then(jsonResponse=>{
            console.log(jsonResponse);
            /* this.setState({
                images: jsonResponse.results
            }) */
        })
    }

   /*  images(){
        return this.state.images.map(image=>{
            return <img src={image.urls.thumb} key={image.id}></img>
        })
    }
 */
    trackQueryValue(ev){
        this.query = ev.target.value;
    }

    render(){
    return(<div>
        <input type="text" onChange={this.trackQueryValue}/>
        <button onClick={this.search}>Buscar</button>
        {/* <div>{this.images()}</div> */}
    </div>);
    }
}

export default Promesa;