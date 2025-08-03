import "./footer.css"
export default function footer() {
  const today = new Date();
  const year = today.getFullYear();
  const footer_links_array= [
    {"name": "About","route": "#"},
    {"name": "Articles","route": "#"},
    {"name": "Project","route": "#"},
    {"name": "Speaking","route": "#"},
    {"name": "Contact","route": "#"},
  ];
  return (
      <footer>
        <ul>
          {footer_links_array.map((e, index) => {
            return (<li key={index}><a href={e.route}>{e.name}</a></li>)
          })}
        </ul>
        <p>@{year} spencer sharp. All rights reserved</p>
      </footer>
  )
}
