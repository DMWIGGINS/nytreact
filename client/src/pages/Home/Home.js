import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Panel from "../../components/Panel";
import { Input, FormBtn } from "../../components/Form";
import { ArticleList, ArticleListItem } from "../../components/Articles";
import Button from "../../components/Button";


class Home extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: ""
  };

  componentDidMount() {
    this.loadSavedArticles();
  }
  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(res =>
        this.setState({ article: res.data, title: "", url: "", date: "" })
      )
      .catch(err => console.log(err));
  };
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.topic, this.state.startDate, this.state.endDate);
    API.getArticles(
       this.state.topic,
       this.state.startDate,
       this.state.endDate
      )
        .then(res => this.setState({articles: res.data}))
        .catch(err => console.log(err));
    }
  
  render() {
    return (
        <Container fluid>
       <Header>
            </Header>
            <Panel title="Search">
              <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Start Date (YYYYMMDD)"
              />
               <Input
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="End Date (YYYYMMDD)"
              />
              <FormBtn
                disabled={!(this.state.topic)}
                onClick={this.handleFormSubmit}
              >Submit 
              </FormBtn>
            </form>
              </Panel>
              <Panel>
               <ArticleList>
                {this.state.articles.map(article => {
                 return (
                  <ArticleListItem 
                    title={article.headline}
                    date={article.pub.date}
                    href={article.web_url}
                  />
                 );
                })}
                <Button>
                  </Button>
                  <ArticleListItem/>
                </ArticleList>
              </Panel>
              <Panel title=
              "Saved">              
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