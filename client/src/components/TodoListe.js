import React, { Component, Fragment } from 'react'
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { v4 as uuid } from 'uuid';
import axios from 'axios';
class TodoListe extends Component {
  state = {
    items: [],
    validation: false,
    message: '',
  }
  async componentDidMount() {
    try {
      const item = await axios.get('/api/items')
      const todos = Array.from(item.data).map(el => { return { id: el._id, title: el.name } })
      this.setState({ items: todos, validation: false })
    } catch (error) {
      console.log(error)
    }
  }
  deletItem = async (id) => {
    try {
      await axios.delete(`api/items/${id}`)
      this.setState((state, props) => ({
        items: state.items.filter((item) => item.id !== id),
        validation: true,
        message: <Alert color="success">
          itém Supprimer avec succées
                   </Alert>
      }))
    } catch (err) {
      console.log(err)
    }
  }
  addItem =  () => {
    const title = prompt('Ajouter un itém a la todo list')
    title && (
       axios.post('/api/items', { name: title })
        .then(res => (this.setState({
          items: [{ id: res.data._id, title }, ...this.state.items],
          validation: true,
          message: <Alert color="success">
            itém Ajouter avec succées
                   </Alert>
        })))
        .catch(err => console.log(err))
    )
  }

  render() {
    const { items, validation, message } = this.state;
    return (
      <Container>
        {validation && message}
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.addItem}
        >Add Item</Button>
        <ul>
          {items.map(({ id, title }) => (
            <Fragment key={id} >
              <li>
                <Button
                  classtitle="delete-btn"
                  color="danger"
                  size="sm"
                  onClick={() => { this.deletItem(id) }}>
                  X</Button>
                {title}
              </li>
            </Fragment>
          ))}
        </ul>
        {/* <Button onClick={this.deletAll}> Delete All</Button> */}
      </Container>
    )
  }
}

export default TodoListe
