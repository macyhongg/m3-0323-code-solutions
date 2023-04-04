export default function RegistrationFormUncontrolled() {

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData.entries())
    console.log(username, password)
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Username: <input name="username" />
      </label>
      <label>
        Password: <input name="password" type="password" />
      </label>
      <button value="submit" type="submit">Submit</button>
    </form>
  )
}
