import React, { Component } from "react";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Jumbotron from "../../components/Jumbotron";
import Container from "../../components/Container";
import Panel from "../../components/Panel";
import Form from "../../components/Form";
import ArticleList from "../../components/ArticleList";
import Button from "../../components/Button";




// import { List, ListItem } from "../../components/ArticleList";
// import { Input, TextArea, FormBtn } from "../../components/Form";
class Home extends Component {
//   state = {
//     articles: [],
//     title: "",
//     date: "",
//     url: ""
//   };
//   componentDidMount() {
//     this.loadArticles();
//   }
//   loadArticles = () => {
//     API.getArticles()
//       .then(res =>
//         this.setState({ articles: res.data, title: "", date: "", url: "" })
//       )
//       .catch(err => console.log(err));
//   };
//   deleteArticle = id => {
//     API.deleteArticle(id)
//       .then(res => this.loadArticle())
//       .catch(err => console.log(err));
//   };
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.saveArticle({
//         title: this.state.title,
//         date: this.state.date,
//         url: this.state.url
//       })
//         .then(res => this.loadArticles())
//         .catch(err => console.log(err));
//     }
//   };
  render() {
    return (
      
        <Container fluid>
        <Header>
            </Header>
            <Panel>
              <Form>
                </Form>
              </Panel>
              <Panel>
              <ArticleList>
                <Button>
                  </Button>
                </ArticleList>
              </Panel>
              <Panel>
              <ArticleList>
                <Button>
                  </Button>
                </ArticleList>
              </Panel>
              </Container>
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 value={this.state.title}
//                 onChange={this.handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 value={this.state.author}
//                 onChange={this.handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 value={this.state.synopsis}
//                 onChange={this.handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(this.state.author && this.state.title)}
//                 onClick={this.handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
    );
  }
}
    
  
export default Home;