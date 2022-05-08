import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputChange = name => e => {
    const { target } = e;
    this.setState(() => ({
      [name]: target.value,
      id: nanoid(),
    }));
  };

  //   handleNameChange = e => {
  //     const { target } = e;
  //     this.setState(() => ({
  //       name: target.value,
  //     }));
  //   };

  //   handleNumberChange = e => {
  //     const { target } = e;
  //     this.setState(() => ({
  //       number: target.value,
  //     }));
  //   };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            onChange={this.handleInputChange('name')}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleInputChange('number')}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
