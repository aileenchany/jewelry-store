import React, { Component } from 'react';
import Hero from '../components/Hero.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', img: '', qty: 0, price: 0 };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // on ocmponent mounting I need to feth trhe data from the database
  // componentDidMount() {
  //   fetch('/api/admin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       item: 'Necklace 1',
  //       description: 'This is a pretty necklace',
  //       img: 'https://i.etsystatic.com/30917963/r/il/c344cb/3494683725/il_1588xN.3494683725_eos0.jpg',
  //       qty: 12,
  //       likes: 0,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState({
    //   ...this.state,
    //   title: 'Necklace2',
    //   description: 'Another pretty necklace',
    //   img: 'https://i.etsystatic.com/30248658/r/il/684901/3127917744/il_1588xN.3127917744_d679.jpg',
    //   qty: 12,
    //   price: 10.0,
    // });
    console.log('Hello from handle submit');
    console.log(this.state.title);
    fetch('/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        description: this.state.description,
        img: this.state.img,
        qty: this.state.qty,
        price: this.state.price,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  // handleChange(event) {
  //   console.log(event.target.value);
  //   event.preventDefault();
  //   this.setState({
  //     ...this.state,
  //     title: event.target.title,
  //     description: event.target.drescription,
  //     img: event.target.img,
  //     qty: event.target.qty,
  //     price: event.target.price,
  //   });
  // }

  render() {
    return (
      <div className='container-fluid'>
        <Hero />
        <hr />
        <div className='add-item-form'>
          <input
            name='title'
            type='text'
            placeholder='title'
            onChange={(e) => {
              this.setState({ ...this.state, title: e.target.value });
            }}
          />
          <input
            name='description'
            type='text'
            placeholder='description'
            onChange={(e) => {
              this.setState({ ...this.state, description: e.target.value });
            }}
          />
          <input
            name='img'
            type='text'
            placeholder='image url'
            onChange={(e) => {
              this.setState({ ...this.state, img: e.target.value });
            }}
          />
          <input
            name='qty'
            type='number'
            placeholder='quantity'
            onChange={(e) => {
              this.setState({ ...this.state, qty: e.target.value });
            }}
          />
          <input
            name='price'
            type='number'
            placeholder='price'
            onChange={(e) => {
              this.setState({ ...this.state, price: e.target.value });
            }}
          />
          <input type='button' value='Add Item' onClick={this.handleSubmit} />
        </div>
        <hr />
      </div>
    );
  }
}

export default MainContainer;
