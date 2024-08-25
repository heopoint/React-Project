function Layout(props) {
  console.log(props)
  return (
    <main id={props.title.toLowerCase()}>
      <h2>{props.title}</h2>
      <section>{props.children}</section>
    </main>
  )
}

export default Layout