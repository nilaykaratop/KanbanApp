import React, { Component } from 'react';
import Navbar from './navbar';
import {Body }from './body';
import './css/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ifClickCard: 0,
      ifClickColumn: 0,
      columnNameInput: '',
      cardTitle: '',
      cardDescription: '',
      cardColumnName: 'deneme',
      columns: [
        {
          columnId:1,
          title: "ÖDEV",
          cards: [
            {
              topicName: "Ödev A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Ödev B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Ödev c",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        },
        {
          columnId:2,
          title: "SINAV",
          cards: [
            {
              topicName: "Sınav A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              topicName: "Sınav B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              topicName: "Sınav C",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }

          ]
        },
        {
          columnId:3,
          title: "PROJE",
          cards: [
            {
              topicName: "Proje A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Proje B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Proje C",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        }

      ]
    }
    this.showForm=this.showForm.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
showForm(e){
  console.log(e.target.name);
    const { name } = e.target; 
    const { ifClickCard, ifClickColumn } = this.state;
    let val;
    if (name === 'ifClickCard') {
      val = ifClickCard;
    } else if (name === 'ifClickColumn') {
      val = ifClickColumn;
    }
    this.setState({ [name]: !val });
}
handleChange(e){
  const {name, value}=e.target;
console.log(e.target.value);
this.setState({[name]:value});
}
handleSubmit(e){
  const{columns}=this.state;
  const{
    cardTitle,
    cardDescription,
    cardColumnName,
  }=this.state;
  let index;
  columns.map((column,i)=>{
    console.log('column',column.title);
    console.log('cardColumnName',cardColumnName);
    if(column.title===cardColumnName){
      console.log(i);
      index=i;
    }
  });
  const oldCard=columns[index].cards;
  console.log('oldCard',columns[index].cards);
  const newCard={
    topicName:cardTitle,
    description:cardDescription,
  };
  oldCard.push(newCard);
  console.log("newCard",oldCard);
  this.setState({
    columns:columns,
    cardTitle:'',
    cardDescription:'',
    cardColumnName:'Okul',
  });
  e.preventDefault();
  console.log("çalıstı");
}
addColumn(e){
  const{columns,columnNameInput}=this.state;
  console.log(columns.length);
  let lastColumn= columns[columns.length-1];
  const newColumnId=lastColumn.columnId+arguments;
  const newColumn={
    columnId: newColumnId,
    title:columnNameInput,
    card:[],
  };
  columns.push(newColumn);
  this.setState({columns:columns,columnNameInput:'',ifClickColumn:0});
  e.preventDefault();
}

  render() {
    const{
      columns,
      ifClickCard,
      ifClickColumn,
      columnNameInput,
      cardTitle,
      cardDescription,
      cardColumnName,
      handleSubmit,
    }=this.state;
    return (
      <div className="App">
        <Navbar
        showForm={this.showForm}
        />
        <Body
        columns={columns}
        ifClickCard={ifClickCard}
        ifClickColumn={ifClickColumn}
        handleChange={this.handleChange}
        cardColumnName={cardColumnName}
        cardTitle={cardTitle}
        cardDescription={cardDescription}
        columnNameInput={columnNameInput}
        handleSubmit={handleSubmit}
        addColumn={this.addColumn}
        />
      </div>

    );
  }
}