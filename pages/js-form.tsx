import Link from 'next/link'
import { FormEvent } from 'react'
import styles from '../styles/Home.module.css'


export default function PageWithJSbasedForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      phone: form.phone.value as string,
      email: form.email.value as string,
      treatment: localStorage.getItem('treatment') as string,
    }

    // Send the form data to our API and get a response.
    const response = await fetch('https://lfhbuatj55.execute-api.us-east-2.amazonaws.com/default/save_contact_details', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
      mode: 'no-cors',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    alert(`Obrigado! Entraremos em contato em breve`)
  }

  return (
    <div className="container">
      <h1 className={styles.title}>
        Seu tratamento de forma profissional.
      </h1>

      <p className={styles.description}>
        Envie seus dados e {' '}
        <code className={styles.code}>entraremos em contato</code>
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Nome</label>
        <input type="text" id="first" name="first" required />
        <label htmlFor="phone">Telefone</label>
        <input type="text" id="phone" name="phone" required />
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
